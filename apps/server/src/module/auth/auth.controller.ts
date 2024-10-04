import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Response, Request as ExpressRequest } from 'express';
import {
  Controller,
  Get,
  UseGuards,
  Request,
  Res,
  UnauthorizedException,
  Body,
  Post,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';
import { AuthGuard as JWTAuthGuard } from './google.guard';
import { SignInDto, SignUpDto } from '../../dto/authDto';

interface AuthenticatedRequest extends ExpressRequest {
  user: {
    accessToken: string;
    email: string;
    id: string;
  };
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @ApiOperation({ summary: 'Google login' })
  @UseGuards(AuthGuard('google'))
  googleLogin(): void {}

  @Get('google/callback')
  @ApiOperation({ summary: 'Google login callback' })
  @UseGuards(AuthGuard('google'))
  async googleLoginCallback(
    @Request() req: AuthenticatedRequest,
    @Res() res: Response,
  ): Promise<void> {
    const googleToken = req.user.accessToken;
    const authRes = await this.authService.authenticate(googleToken);
    console.log(authRes.access_token, authRes.refresh_token);
    res.redirect(
      `${process.env.MOBILE_URL}?token=${authRes.access_token}&refresh_token=${authRes.refresh_token}`,
    );
  }

  @UseGuards(JWTAuthGuard)
  @Get('profile')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getProfile(@Request() req: AuthenticatedRequest): Promise<any> {
    const accessToken = req.cookies['access_token'];
    if (!accessToken) {
      throw new UnauthorizedException('No access token');
    }
    return this.authService.getUser(req.user.email);
  }

  @UseGuards(JWTAuthGuard)
  @Get('check-token')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Check if token is valid' })
  async checkToken(@Request() req: AuthenticatedRequest): Promise<any> {
    try {
      const refreshToken = req.cookies['refresh_token'];
      const { access_token } =
        await this.authService.getAccessTokenUser(refreshToken);
      return { message: 'Token is valid', access_token };
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException('Token validation failed');
    }
  }

  @Post('sign-in')
  @ApiOperation({ summary: 'User sign-in' })
  @ApiBody({ type: SignInDto })
  async signIn(@Body() signInDto: SignInDto) {
    try {
      const { access_token, refresh_token } =
        await this.authService.signIn(signInDto);
      return { access_token, refresh_token };
    } catch (error) {
      console.error(error);
      throw new HttpException('Login failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('sign-up')
  @ApiOperation({ summary: 'User sign-up' })
  @ApiBody({ type: SignUpDto })
  async signUp(@Body() signUpDto: SignUpDto): Promise<any> {
    await this.authService.signUp(signUpDto);
    return { message: 'Sign Up successful' };
  }
}
