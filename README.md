# Kapi - Your Japanese Learning Journey Starts Here!

<p align="center">
  <img src="https://github.com/user-attachments/assets/af95d374-a426-4537-817a-17a7585cd649" alt="Kapi Logo" style="border-radius: 15px; max-width: 200px;"/>
</p>

<p align="center">
  <strong>Kapi - Japanese Learning App</strong>
  <br>
  <em>Master Japanese vocabulary and grammar with ease!</em>
</p>

## Overview

**Kapi** is a cutting-edge mobile application tailored for learners eager to master Japanese in a fun, interactive, and efficient way. By integrating powerful tools like flashcards, grammar explanations, and engaging exercises, Kapi ensures that learning is always productive and enjoyable. Whether you’re a beginner or an advanced learner, Kapi offers a personalized experience that adapts to your pace and keeps you motivated.

---

### 🔑 **Key Features**

1. **Vocabulary Flashcards with Smart Reviews**
   - Build your vocabulary with custom flashcards.
   - Set automatic review reminders (after 1, 3, 5 days) to boost long-term memory retention.

2. **In-Depth Grammar Explanations**
   - Access a detailed library of grammar points with real-world examples.
   - Get grammar guidance in-app with intuitive pop-up explanations.

3. **Engaging Learning Exercises**
   - Answer quick yes/no questions under time pressure, improving your response time and memory recall.

4. **Personalized Learning Profiles**
   - Track your lessons, flashcards, grammar progress, and review history all in one place.

5. **Leaderboard & Checkpoints**
   - Compete with friends and other learners through a global leaderboard system.
   - Progress through checkpoints to unlock new challenges and keep motivation high.

6. **Smooth Video Learning**
   - Watch short, impactful educational videos hosted on Cloudinary for a seamless viewing experience.

7. **Smart Reminders & Notifications**
   - Receive tailored, timely reminders for vocabulary and grammar reviews to keep you on track.

---

### 🛠 **Technologies Used**

- **Frontend**: 
  - Built with **React Native** and **Expo** for a fast, native-like mobile experience.
  - **TailwindCSS** ensures a clean, consistent, and responsive design.
  - **Expo Router** for an intuitive and fluid navigation experience.

- **Backend**:
  - **NestJS** powers the backend with scalable, maintainable server logic.
  - **OAuth with Google** simplifies user login, combined with **JWT** for secure authentication.

- **Database**:
  - **PostgreSQL** manages structured data like user profiles, lessons, and flashcards.
  - **Firebase** powers real-time sync for enhanced user experience.

- **Cloud Storage**:
  - **Cloudinary** stores and delivers high-quality videos for efficient learning on the go.

---

### 🚀 **Planned Features**

1. **Mini-Games for Learning**:
   - Engage in interactive games to reinforce vocabulary and grammar in a fun and challenging way.

2. **Push Notifications**:
   - Get reminders for reviews directly via Zalo or phone notifications, similar to Duolingo’s system.

3. **AI-Powered Learning Recommendations**:
   - Leverage AI to provide personalized learning paths based on user progress, suggesting specific flashcards, lessons, or grammar points that need more attention.

4. **Admin Dashboard**:
   - A powerful admin panel for content management, course creation, and tracking user progress.
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
