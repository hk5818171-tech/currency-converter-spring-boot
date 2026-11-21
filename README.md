# 💱 Currency Converter

A modern and interactive **Currency Converter Web Application** built using Java and Spring Boot. It allows users to convert one currency into another using exchange-rate data from the [Frankfurter API](https://www.frankfurter.app/).

🚀 **Live Demo:** https://currency-converter-s960.onrender.com/

## ✨ Features

- 💱 Convert one currency into another
- 🌍 Support for multiple international currencies
- 🔄 Swap source and target currencies
- 🌙 Dark Mode and Light Mode
- 🇮🇳 English and Hindi language options
- 🎨 Interactive UI with animated golden border
- 📱 Responsive user interface
- ⚡ REST API integration with Frankfurter
- ☁️ Deployed online using Render

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Java 25 | Backend programming |
| Spring Boot | Backend framework |
| Maven | Dependency management and build |
| HTML5 | Web page structure |
| CSS3 | Styling and animations |
| JavaScript | Frontend functionality |
| Frankfurter API | Exchange-rate data |
| Docker | Application containerization |
| Render | Cloud deployment |
| Git & GitHub | Version control |

## 🖥️ Project Preview

Try the live application:

👉 https://currency-converter-s960.onrender.com/

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- Java JDK 25
- Maven 3.9+
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/hk5818171-tech/currency-converter-spring-boot.git
```

### 2. Open the Project

```bash
cd currency-converter-spring-boot
```

### 3. Run the Application

```bash
mvn spring-boot:run
```

### 4. Open in Browser

Visit:

```text
http://localhost:8081/
```

## 🔗 API Integration

This project uses the Frankfurter API to retrieve currency exchange-rate data.

**Backend Conversion Endpoint:**

```http
GET /api/currency/convert?amount=100&from=USD&to=INR
```

### Query Parameters

| Parameter | Description | Example |
|---|---|---|
| amount | Amount to convert | 100 |
| from | Source currency code | USD |
| to | Target currency code | INR |

Example:

```text
/api/currency/convert?amount=100&from=USD&to=INR
```

## 📁 Project Structure

```text
currency-converter-spring-boot/
│
├── src/
│   └── main/
│       ├── java/
│       │   └── ... 
│       │
│       └── resources/
│           ├── static/
│           │   ├── index.html
│           │   ├── style.css
│           │   └── script.js
│           │
│           └── application.properties
│
├── Dockerfile
├── pom.xml
└── README.md
```

## 🚀 Deployment

The application is deployed on **Render** using Docker.

- Source Code: GitHub
- Containerization: Docker
- Hosting Platform: Render

## 📚 Learning Outcomes

Through this project, I explored:

- Building REST APIs using Spring Boot
- Connecting frontend with backend using JavaScript Fetch API
- Consuming third-party REST APIs
- Working with Maven dependencies
- Creating Docker images using a multi-stage Dockerfile
- Deploying a Spring Boot application on Render
- Managing source code using Git and GitHub

## 👨‍💻 Author

**Happy Tiwari**

B.Tech Computer Science Student

GitHub: [hk5818171-tech](https://github.com/hk5818171-tech)

---

⭐ If you find this project useful, consider giving it a star!

**Built with Java, Spring Boot and curiosity.** ❤️
