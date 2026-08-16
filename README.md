# 🚀 DevOps CI/CD Demo

A beginner-friendly DevOps project demonstrating **Git, GitHub, CI/CD, automated testing, GitHub Actions, and GitHub Pages deployment**.

The goal of this project is to understand how code moves from a developer's local machine to a live production environment through an automated pipeline.

---

## 🌐 Live Demo

**Live Website:** https://kavyadharshini-s-m.github.io/devops-project1/

---

## 📌 Project Overview

This project contains a simple HTML website and an automated CI/CD pipeline.

Whenever changes are pushed to the `main` branch:

1. GitHub receives the code.
2. GitHub Actions starts the CI/CD workflow.
3. The project is tested automatically.
4. If the tests pass, the website is packaged.
5. The website is automatically deployed to GitHub Pages.
6. If the tests fail, deployment is stopped.

### Pipeline

```text
Developer
    │
    │ git push
    ▼
 GitHub
    │
    ▼
GitHub Actions
    │
    ├── Checkout Code
    │
    ├── Setup Node.js
    │
    ├── Run Automated Tests
    │
    ├── Upload Website Artifact
    │
    └── Deploy
          │
          ▼
   GitHub Pages
          │
          ▼
    🌐 Live Website
```

---

## 🛠️ Technologies Used

| Technology     | Purpose                  |
| -------------- | ------------------------ |
| HTML           | Frontend website         |
| Node.js        | Running automated tests  |
| npm            | Managing project scripts |
| JavaScript     | Test automation          |
| Git            | Version control          |
| GitHub         | Source code hosting      |
| GitHub Actions | CI/CD automation         |
| GitHub Pages   | Website deployment       |

---

## 📁 Project Structure

```text
devops-project1/
│
├── index.html
├── package.json
├── test.js
├── README.md
│
└── .github/
    └── workflows/
        └── deploy.yml
```

### File Description

**`index.html`**

The website that is deployed.

**`package.json`**

Contains the project information and npm test script.

**`test.js`**

Contains automated tests that verify important project files and HTML content.

**`.github/workflows/deploy.yml`**

Defines the GitHub Actions CI/CD pipeline.

**`README.md`**

Project documentation and learning record.

---

# ✅ Level 1 — Basic CI/CD Deployment

### Objective

Create an automated deployment pipeline that deploys the website to GitHub Pages whenever code is pushed to the `main` branch.

### Implemented

* Created a Git repository.
* Published the project to GitHub.
* Created a GitHub Actions workflow.
* Configured GitHub Pages.
* Connected GitHub Actions to GitHub Pages.
* Successfully deployed the website.

### Result

A push to `main` automatically triggers the deployment workflow.

```text
git push
    ↓
GitHub Actions
    ↓
Build / Package
    ↓
GitHub Pages
    ↓
Live Website
```

**Status: ✅ Completed**

---

# 🧪 Level 2 — Automated CI Testing

## Objective

Prevent broken code from being deployed by running automated tests before deployment.

The project uses:

```bash
npm test
```

which executes:

```bash
node test.js
```

### Tests Implemented

The test script currently verifies:

* `index.html` exists.
* `package.json` exists.
* The HTML contains an `<h1>` element.

If a test fails, the process exits with an error code.

### Successful Test

```text
Running website tests...

✅ index.html exists
✅ <h1> tag exists
✅ package.json exists

🎉 All tests passed!
```

### CI Pipeline

```text
git push
    ↓
GitHub Actions
    ↓
Checkout Code
    ↓
Setup Node.js
    ↓
npm test
    │
    ├── ❌ Test Failed → Deployment Stops
    │
    └── ✅ Tests Passed
             ↓
          Deploy
```

---

## 🧪 CI Failure Demonstration

To verify that the CI pipeline actually prevents broken code from being deployed, an intentional test failure was introduced.

The `<h1>` element in `index.html` was temporarily changed to `<h2>`.

The automated test detected the missing `<h1>` element:

```text
❌ <h1> tag is missing
```

The GitHub Actions workflow then failed before the deployment stage.

After restoring the correct `<h1>` element, the tests passed and deployment completed successfully.

### What this demonstrated

> CI can detect problems automatically and prevent failing code from reaching deployment.

**Status: ✅ Completed**

---

# 📚 DevOps Concepts Learned

Through this project, I have practiced:

* Git repositories
* Git commits
* Git branches
* GitHub
* GitHub Actions
* YAML workflow configuration
* Continuous Integration (CI)
* Continuous Deployment (CD)
* Automated testing
* Build artifacts
* GitHub Pages
* Deployment permissions
* Debugging failed CI/CD pipelines

---

# 🔧 Troubleshooting Experience

During the project, I encountered and resolved real deployment issues.

### Issue 1 — Git initialized in the wrong directory

Git was initially initialized at a higher-level directory, causing unrelated files from the Windows user directory to appear as untracked files.

**Solution:**

Removed the incorrect `.git` directory and initialized Git inside the project directory.

---

### Issue 2 — GitHub Actions deployment permissions

GitHub Actions initially failed because the workflow did not have the required deployment permissions.

The workflow was updated with:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

---

### Issue 3 — GitHub Pages was not enabled

The deployment workflow initially failed because GitHub Pages had not been configured for the repository.

**Solution:**

GitHub Pages was configured to use:

```text
GitHub Actions
```

as the deployment source.

---

## 📈 Learning Roadmap

This project will be expanded gradually to explore additional DevOps concepts.

| Level | Concept                  | Status      |
| ----- | ------------------------ | ----------- |
| 1     | Basic CI/CD Deployment   | ✅ Completed |
| 2     | Automated CI Testing     | ✅ Completed |
| 3     | Branches & Pull Requests | 🔜 Next     |
| 4     | Docker                   | ⏳ Planned   |
| 5     | Docker + CI/CD           | ⏳ Planned   |
| 6     | Container Registry       | ⏳ Planned   |
| 7     | Cloud Deployment         | ⏳ Planned   |
| 8     | Infrastructure as Code   | ⏳ Planned   |
| 9     | Monitoring & Logging     | ⏳ Planned   |
| 10    | Advanced CI/CD           | ⏳ Planned   |

---

## 🎯 Project Goal

The long-term goal of this project is to evolve a simple website into a practical DevOps demonstration covering:

```text
Git
 ↓
GitHub
 ↓
CI/CD
 ↓
Automated Testing
 ↓
Docker
 ↓
Container Registry
 ↓
Cloud
 ↓
Infrastructure as Code
 ↓
Monitoring
```

This repository serves as both a **hands-on DevOps learning project** and a record of the concepts and tools implemented along the way.

---

## 👩‍💻 Author

**Kavyadharshini S M**

Integrated M.Tech — Computer Science and Engineering

This project is being developed as part of my hands-on learning journey into DevOps and cloud technologies.
