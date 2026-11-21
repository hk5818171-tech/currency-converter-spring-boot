# 💱 Full-Stack Currency Convertor

A full-stack Currency Convertor Web Application that allows users to convert an amount from one currency to another using real-time exchange rate data from the Frankfurter API.

## 🚀 Features

- Convert between 20 supported currencies
- Swap source and target currencies
- Fetch exchange rates using Frankfurter API
- Input validation for positive amounts
- Loading and error handling states
- Responsive user interface
- Press Enter to perform conversion
- Display converted amount and exchange rate

## 🛠️ Tech Stack

**Frontend**
- HTML5
- CSS3
- JavaScript

**Backend**
- Java
- Spring Boot
- Spring REST API
- RestClient

**External API**
- [Frankfurter API](https://frankfurter.dev/)

## ⚙️ How It Works

1. User enters an amount and selects source and target currencies.
2. Frontend sends a request to the Spring Boot backend.
3. Backend Controller receives the request.
4. Currency Service fetches exchange rate data from Frankfurter API.
5. Backend calculates the converted amount.
6. The result is returned to the frontend and displayed to the user.

## 🔗 API Endpoint

**GET**
```text
/api/currency/convert?amount=100&from=USD&to=INR
```

**Sample Response**
```json
{
  "amount": 100,
  "from": "USD",
  "to": "INR",
  "rate": 85.5,
  "convertedAmount": 8550
}
```

*Sample values are illustrative.*

## 💻 Run Locally

**1. Clone the repository**
```bash
git clone https://github.com/hk5818171-tech/currency-convertor-spring-boot.git
```

**2. Open the project** in your IDE.

**3. Run the Spring Boot application.**

Backend runs on:
```text
http://localhost:8081
```

**4. Open the frontend** using your local development environment and connect it to the backend.

## 📚 What I Learned

- Building REST APIs using Spring Boot
- Connecting frontend with backend
- Consuming external APIs using RestClient
- Handling JSON responses
- Implementing input validation and error handling
- Understanding full-stack application architecture

## 👨‍💻 Author

**Happy Tiwari**

B.Tech CSE Student | Aspiring Software Developer

[GitHub Profile](https://github.com/hk5818171-tech)

---

⭐ If you find this project useful, consider giving it a star!
