# Kapi - Japanese Learning App

<p align="center">
  <img src="https://github.com/user-attachments/assets/af95d374-a426-4537-817a-17a7585cd649" alt="Kapi Logo" />
</p>

<p align="center">
  <strong>Kapi - Japanese Learning App</strong>
</p>

## Overview

Kapi is a mobile application designed to help users learn Japanese efficiently through engaging and interactive methods. The app incorporates a variety of features that support vocabulary building, grammar comprehension, and continuous practice through exercises and flashcards.

---

### Key Features:

1. **Vocabulary Flashcards**
   - Users can review key vocabulary with customizable flashcards.
   - Automatic reminders for periodic reviews (1, 3, 5 days after learning) to enhance retention.

2. **Grammar Structures**
   - The app offers a comprehensive list of grammar points with detailed explanations.
   - Modal pop-ups provide easy access to grammar structure content.

3. **Learning Exercises**
   - Practice through yes/no questions with a time limit, encouraging quick thinking and learning.

4. **User Profiles**
   - Users can manage their learning progress, including lessons, vocabulary, and grammar review history.

5. **Ranking and Checkpoints**
   - Leaderboards and checkpoint systems foster a competitive and fun learning environment.

6. **Video Storage**
   - Short educational videos are stored on Cloudinary, ensuring smooth playback and easy access to learning material.

7. **Reminders & Notifications**
   - Time-based notifications for vocabulary and grammar reviews help learners stay on track.

---

### Technologies Used:

- **Frontend:**
  - **Mobile:** Built using **React Native** with **Expo** for seamless mobile development.
  - **UI Frameworks:** TailwindCSS for styling, with reusable UI components for a consistent look and feel.
  - **Navigation:** **Expo Router** for intuitive app navigation.

- **Backend:**
  - **NestJS** for building scalable and maintainable server-side logic.
  - **OAuth**: Integrated with Google OAuth for easy login and authentication.
  - **JWT**: Token-based authentication ensures user data security.

- **Database:**
  - **PostgreSQL** for structured data storage.
  - **Firebase** for real-time updates and additional storage.

- **Cloud Storage:**
  - **Cloudinary** for video content storage, enabling fast and reliable access to learning videos.

---

### Future Features:

1. **Interactive Games:**
   - Adding mini-games to help users practice vocabulary and grammar in a more engaging way.

2. **Push Notifications:**
   - Zalo and phone toolbar notifications for learning reminders, similar to Duolingo.

3. **Admin Dashboard:**
   - Comprehensive management system for content updates, course creation, and user analytics.

---

### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `nest`: a [Nest.js](https://nestjs.com/)
- `@repo/ui`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [Expo](https://docs.expo.dev/) for native development
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting


## Requirements

- [Expo](https://expo.dev/)
- [Turbo](https://turbo.build/repo/docs/getting-started/installation)
- [NestJS & NestCLI](https://docs.nestjs.com/first-steps)
- [NextJS](https://nextjs.org/)

---

## Running the Project

### Create Google OAuth App

Follow this guide: [Creating an OAuth App](https://support.google.com/cloud/answer/6158849?hl=en)

- **Authorized JavaScript origins**: `http://localhost:3001`
- **Authorized redirect URIs**: `http://localhost:3001/auth/google/callback`

Save the **Client ID** and **Client Secret** for the next step.

---

### Run the Project

```sh
$ yarn install
$ yarn run dev

```

#### Create a `.env` file in the `server` directory

```shell
$ cd server
$ cp .env.example .env
```

## Server

### Create migration

```shell
$ cd server
$ npx prisma migrate dev --name <name-migrate>
```
