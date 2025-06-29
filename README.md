# 🌤️ Weather App - Node.js

A simple and elegant weather application built with Node.js and Express.js that allows users to get real-time weather information for any city worldwide.

## 📋 Project Overview

This weather application provides a clean, responsive web interface where users can enter a city name and instantly receive current weather information including temperature, weather conditions, and humidity. The app uses the wttr.in API to fetch weather data and is containerized with Docker for easy deployment.

**Key Features:**
- Real-time weather data for any city
- Responsive web interface
- RESTful API endpoint
- Docker containerization
- Automated CI/CD deployment to AWS

## 🛠️ Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- **Docker** (for containerization)
- **AWS CLI** (for deployment)
- **Git** (for version control)

## 🚀 Local Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd weather-app-nodejs
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Application
```bash
npm start
```

The application will be available at `http://localhost:4000`

### 4. Development Mode (Optional)
For development with auto-restart on file changes:
```bash
npm run dev
```

## 🐳 Dockerization Steps

### Build Docker Image
```bash
docker build -t weather-app .
```

### Run Docker Container
```bash
docker run -d --name weather-app -p 4000:4000 weather-app
```

The containerized app will be accessible at `http://localhost:4000`

### Stop and Remove Container
```bash
docker stop weather-app
docker rm weather-app
```

## ☁️ AWS Deployment Workflow

This project includes automated deployment to AWS using GitHub Actions. The deployment process:

### Architecture
- **Amazon ECR**: Container registry for Docker images
- **Amazon EC2**: Hosting the containerized application
- **GitHub Actions**: CI/CD pipeline automation

### Deployment Process
1. **Trigger**: Push to `main` branch
2. **Build**: GitHub Actions builds Docker image
3. **Push**: Image pushed to Amazon ECR
4. **Deploy**: SSH into EC2 instance and deploy new container

### Required GitHub Secrets
Set up these secrets in your GitHub repository:
- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
- `AWS_REGION`: AWS region (e.g., us-east-1)
- `ECR_REPOSITORY`: Your ECR repository name
- `EC2_HOST`: Your EC2 instance public IP
- `EC2_USER`: EC2 username (usually ec2-user or ubuntu)
- `EC2_SSH_KEY`: Private SSH key for EC2 access

### Manual Deployment Commands
If you prefer manual deployment:
```bash
# Login to ECR
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account-id>.dkr.ecr.<region>.amazonaws.com

# Build and tag image
docker build -t weather-app .
docker tag weather-app:latest <account-id>.dkr.ecr.<region>.amazonaws.com/<repository>:latest

# Push to ECR
docker push <account-id>.dkr.ecr.<region>.amazonaws.com/<repository>:latest
```

## 📁 Project Structure

```
weather-app-nodejs/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── Public/
│   └── iindex.html            # Frontend HTML interface
├── Dockerfile                 # Docker configuration
├── LICENSE                    # MIT License
├── README.md                  # Project documentation
├── package.json              # Node.js dependencies and scripts
├── package-lock.json         # Locked dependency versions
└── server.js                 # Express.js backend server
```

## 🔧 API Endpoints

### Get Weather Data
- **Endpoint**: `GET /weather/:city`
- **Description**: Fetch weather information for a specific city
- **Parameters**: 
  - `city` (string): Name of the city
- **Response**: JSON object with temperature, description, and humidity

**Example:**
```bash
curl http://localhost:4000/weather/London
```

**Response:**
```json
{
  "city": "London",
  "temperature": 15,
  "description": "Partly cloudy",
  "humidity": "65"
}
```

## 🖼️ Screenshots

> **Note**: Add a screenshot of your application interface here to showcase the UI.

You can add screenshots by:
1. Taking a screenshot of the running application
2. Saving it in a `screenshots/` folder
3. Adding it here with: `![Weather App Screenshot](screenshots/app-c:\Users\tenif\OneDrive\Documents\MyCloud\Weather_Applicayion\New folder\Screenshot (7).png c:\Users\tenif\OneDrive\Documents\MyCloud\Weather_Applicayion\New folder\Screenshot (1).png c:\Users\tenif\OneDrive\Documents\MyCloud\Weather_Applicayion\New folder\Screenshot (2).png c:\Users\tenif\OneDrive\Documents\MyCloud\Weather_Applicayion\New folder\Screenshot (3).png c:\Users\tenif\OneDrive\Documents\MyCloud\Weather_Applicayion\New folder\Screenshot (4).png c:\Users\tenif\OneDrive\Documents\MyCloud\Weather_Applicayion\New folder\Screenshot (5).png c:\Users\tenif\OneDrive\Documents\MyCloud\Weather_Applicayion\New folder\Screenshot (6).png c:\Users\tenif\OneDrive\Documents\MyCloud\Weather_Applicayion\New folder\Screenshot (8).png)`

## 🧪 Testing

To test the application:

1. **Local Testing**: Visit `http://localhost:4000` and try searching for different cities
2. **API Testing**: Use curl or Postman to test the `/weather/:city` endpoint
3. **Docker Testing**: Ensure the containerized version works correctly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Teniola** - Weather App Developer

## 🙏 Acknowledgments

- [wttr.in](https://wttr.in) - Weather data API
- [Express.js](https://expressjs.com/) - Web framework
- [Docker](https://www.docker.com/) - Containerization platform
- [AWS](https://aws.amazon.com/) - Cloud infrastructure

---

**Happy Weather Checking! 🌈**