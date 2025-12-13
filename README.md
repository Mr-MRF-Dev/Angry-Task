# 💢 AngryTask

[![GitHub Release](https://img.shields.io/github/v/release/mr-mrf-dev/angry-task)](https://github.com/Mr-MRF-Dev/Angry-Task/releases)
![GitHub repo size](https://img.shields.io/github/repo-size/mr-mrf-dev/angry-task)
[![Release & Deploy on GitHub Pages 🚀](https://github.com/Mr-MRF-Dev/Angry-Task/actions/workflows/deploy.yml/badge.svg)](https://github.com/Mr-MRF-Dev/Angry-Task/actions/workflows/deploy.yml)
[![Build & Deploy Latest Image 🚀](https://github.com/Mr-MRF-Dev/Angry-Task/actions/workflows/latest-build.yml/badge.svg)](https://github.com/Mr-MRF-Dev/Angry-Task/actions/workflows/latest-build.yml)
[![codecov](https://codecov.io/github/Mr-MRF-Dev/Angry-Task/graph/badge.svg?token=CIUDK6BFNY)](https://codecov.io/github/Mr-MRF-Dev/Angry-Task)
[![GitHub deployments](https://img.shields.io/github/deployments/mr-mrf-dev/angry-task/github-pages?label=Deployments)](https://github.com/Mr-MRF-Dev/Angry-Task/deployments)
[![Docker Pulls](https://img.shields.io/docker/pulls/mrmrfdev/angry-task?label=Docker%20Pulls)](https://hub.docker.com/r/mrmrfdev/angry-task)
[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/mrmrfdev/angry-task?label=Docker%20Image%20Size)](https://hub.docker.com/r/mrmrfdev/angry-task)
[![GitHub package.json angular version](https://img.shields.io/github/package-json/dependency-version/mr-mrf-dev/angry-task/@angular/core)](https://angular.io/)
[![GitHub package.json angular cli version](https://img.shields.io/github/package-json/dependency-version/mr-mrf-dev/angry-task/dev/%40angular%2Fcli?label=Angular%20CLI)](https://github.com/angular/angular-cli)
[![GitHub package.json primeNG version](https://img.shields.io/github/package-json/dependency-version/mr-mrf-dev/angry-task/primeng)](https://primeng.org/)
[![GitHub License](https://img.shields.io/github/license/mr-mrf-dev/angry-task)](/LICENSE)

![screenshot](/images/screenshot.png)

AngryTask is a simple task manager that allows you to create, edit, and delete tasks. It is built using Angular and PrimeNG. This project was created to help me learn Angular and PrimeNG. The project is hosted on GitHub Pages and can be accessed at the [live demo](https://mr-mrf-dev.github.io/Angry-Task/).

## 🚀 Demo

Check out the [live demo](https://mr-mrf-dev.github.io/Angry-Task/)!

## 📦 Angry Task Image

You can find the Angry Task Docker image on [Docker Hub](https://hub.docker.com/r/mrmrfdev/angry-task) and [GitHub Container Registry (GHCR)](https://github.com/Mr-MRF-Dev/Angry-Task/pkgs/container/angry-task)

**From Docker Hub:**

```bash
docker pull mrmrfdev/angry-task:latest
docker run -p 4200:80 mrmrfdev/angry-task:latest
```

**From GitHub Container Registry (GHCR):**

```bash
docker pull ghcr.io/mr-mrf-dev/angry-task:latest
docker run -p 4200:80 ghcr.io/mr-mrf-dev/angry-task:latest
```

## 🐳 Using Docker

You can also run AngryTask using Docker, which provides a consistent environment across different systems.

### Prerequisites

Make sure you have [Docker](https://www.docker.com/) installed on your system.

Then open your browser and navigate to [http://localhost:4200](http://localhost:4200)

### Building from Source

1. Clone the repository (if you haven't already):

   ```bash
   git clone https://github.com/Mr-MRF-Dev/Angry-Task.git
   cd Angry-Task
   ```

2. Build the Docker image:

   ```bash
   docker build -t angry-task .
   ```

3. Run the container:

   ```bash
   docker run -p 4200:80 angry-task
   ```

4. Open your browser and navigate to [http://localhost:4200](http://localhost:4200)

## 📥 Getting Started

1. Clone the repository

   If you have [Git](https://git-scm.com/) installed:

   ```bash
   git clone https://github.com/Mr-MRF-Dev/Angry-Task.git
   ```

   If you have [GitHub CLI](https://cli.github.com/) installed:

   ```bash
   gh repo clone Mr-MRF-Dev/Angry-Task
   ```

   Navigate to the Project Directory

   ```bash
   cd Angry-Task
   ```

2. Install the dependencies

   ```bash
   npm install
   ```

### ⚙ Using NPM Scripts

You can use npm scripts to **build**, **test**, and **serve** the application. For more information, refer to the `scripts` section in the `package.json` file.

for example:

```bash
npm run start # Serve the application
```

```bash
npm run build # Build the application
```

```bash
npm run test # Run the unit tests
```

and so on...

### 🌠 Using Angular CLI

[Angular CLI](https://angular.dev/tools/cli) is a powerful tool that can be used to serve, test, and build your application. To use the Angular CLI, you need to have it installed globally. If it's not already installed, you can install it with the following command:

```bash
npm install -g @angular/cli
```

and then you can use the `ng` command to serve the application. Here are some examples:

#### 🍽 Serve the Application

To start a development server, run:

```bash
ng serve
```

Then, navigate to [http://localhost:4200/](http://localhost:4200/). The application will automatically reload if you change any of the source files.

Alternatively, you can run:

```bash
ng serve --open
```

This will open the application in your default browser.

#### 🧪 Running Unit Tests

To run the unit tests using [Karma](https://karma-runner.github.io), execute the following command:

```bash
ng test
```

#### 📦 Building the Application

To build the application, use the following command:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory. This directory will contain all the files necessary for deployment.

#### 📄 Linting the Application

To lint the application, run:

```bash
ng lint
```

This will lint the application using [ESLint](https://eslint.org/) and [Codelyzer](https://codelyzer.com/).

## 🤝 Contributing

We welcome any contributions you may have. If you're interested in helping out, please fork the repository and create an [Issue](https://github.com/Mr-MRF-Dev/Angry-Task/issues) or [Pull Request](https://github.com/Mr-MRF-Dev/Angry-Task/pulls). We'll be happy to review your contributions.

## 📝 License

This project is licensed under the MIT License. For more information, please refer to the [LICENSE](/LICENSE) file.
