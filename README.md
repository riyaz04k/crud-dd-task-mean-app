# CRUD MEAN App with Docker & CI/CD 

This project is a **containerized MEAN stack CRUD application** deployed with **Docker Compose** and automated using **GitHub Actions CI/CD**.  
It demonstrates containerization, continuous integration/deployment, and hosting on an AWS EC2 instance with Nginx.  

---

## Project Structure
crud-dd-task-mean-app/
│── backend/ # Express + MongoDB backend
│── frontend/ # Angular frontend
│── docker-compose.yml
│── .github/workflows/ # CI/CD workflow files
│── screenshots/ # Project screenshots

yaml
Copy
Edit

---

## Setup & Deployment

### 1️⃣ Clone Repository
```bash
git clone https://github.com/riyaz04k/crud-dd-task-mean-app.git
cd crud-dd-task-mean-app
2️⃣ Run with Docker Compose
bash
Copy
Edit
docker compose up -d --build
3️⃣ Access the Application
Backend API → http://<EC2-IP>:3000

Frontend Angular App → http://<EC2-IP>

🔄 CI/CD Workflow
CI/CD is managed using GitHub Actions.

On every push:

Backend & frontend Docker images are built

Images are pushed to Docker Hub

EC2 server pulls updated images and redeploys with Docker Compose

📄 Workflow file: .github/workflows/docker-deploy.yml

🖼️ Screenshots
✅ Docker & Services


✅ CI/CD Pipeline


✅ Frontend Application


✅ Nginx Setup

🌐 Infrastructure Details
Hosted on AWS EC2 (Ubuntu 20.04)

Containers managed via Docker Compose

Nginx serves Angular frontend and can proxy backend requests

