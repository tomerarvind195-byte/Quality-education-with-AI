# 🎓 Quality Education with AI

> An AI-powered education platform that recommends personalized courses and learning resources based on your goals, interests, and skill level.

![JavaScript](https://img.shields.io/badge/JavaScript-85.3%25-F7DF1E?style=flat&logo=javascript)
![CSS](https://img.shields.io/badge/CSS-14.5%25-1572B6?style=flat&logo=css3)
![HTML](https://img.shields.io/badge/HTML-0.2%25-E34F26?style=flat&logo=html5)
![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat&logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=flat&logo=nodedotjs)
![Express](https://img.shields.io/badge/API-Express.js-000000?style=flat&logo=express)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat&logo=vercel)
![Commits](https://img.shields.io/badge/Commits-28-blue?style=flat)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat)

---

## 🌐 Live Demo

> **[https://qualityeducationwithai.vercel.app](https://qualityeducationwithai.vercel.app)** ← Click to explore!

---

## 📸 Screenshots



| Home Page | Course Recommendations | Resource Detail |
|-----------|----------------------|----------------|
| ![Home](screenshots/home.png) | ![Recommendations](screenshots/recommendations.png) | ![Detail](screenshots/detail.png) |

---

## 📋 About The Project

**Quality Education with AI** is a full-stack, AI-powered education platform designed to bridge the gap between learners and quality learning resources. The platform intelligently recommends the most relevant courses and resources based on a user's learning goals, interests, and current skill level — making quality education accessible to everyone without fee.

**Inspired by:** The UN Sustainable Development Goal 4 — *Quality Education for All* — and platforms like Khan Academy, Coursera, and edX.

**Key Highlights:**
- AI-driven course and resource recommendation engine
- Full-stack architecture — React frontend + Node.js/Express backend
- Already live and deployed on Vercel
- Clean, modern UI with responsive design
- REST API backend serving personalized recommendations
- 28 commits — actively developed and maintained

---

## ✨ Features

- ✅ **AI Course Recommendations** — Personalized course suggestions based on user goals and interests
- ✅ **Resource Discovery** — Find the best learning resources across multiple domains
- ✅ **Multi-Domain Coverage** — Web Dev, AI/ML, Data Science, Cybersecurity, Programming & more
- ✅ **REST API Backend** — Node.js + Express.js API serving recommendations
- ✅ **Fast & Responsive** — React-powered frontend with smooth UX
- ✅ **Mobile-First Design** — Works perfectly on all screen sizes
- ✅ **Live Deployment** — Deployed and accessible at qualityeducationwithai.vercel.app

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js |
| Backend | Node.js + Express.js |
| Styling | CSS3 (Custom + Responsive) |
| Language | JavaScript (ES6+) |
| API | REST API (Express routes) |
| Deployment | Vercel (Frontend) |
| Version Control | Git & GitHub |

---

## 📁 Project Structure

```
Quality-education-with-AI/
│
├── frontend/                    # React frontend
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Navigation bar
│   │   │   ├── Hero.jsx             # Landing hero section
│   │   │   ├── CourseCard.jsx       # Individual course card
│   │   │   ├── Recommendations.jsx  # Recommendations display
│   │   │   └── Footer.jsx           # Footer section
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx             # Home page
│   │   │   ├── Courses.jsx          # Course listing page
│   │   │   └── Resources.jsx        # Resources page
│   │   │
│   │   ├── App.jsx                  # Root component
│   │   ├── main.jsx                 # Entry point
│   │   └── index.css                # Global styles
│   │
│   └── package.json
│
└── backend/                     # Node.js + Express API
    ├── routes/
    │   ├── courses.js               # Course recommendation routes
    │   └── resources.js             # Resource routes
    │
    ├── data/
    │   ├── courses.json             # Course dataset
    │   └── resources.json           # Resources dataset
    │
    ├── controllers/
    │   └── recommendationController.js  # Recommendation logic
    │
    ├── server.js                    # Express server entry point
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm
- Git

### Run Frontend

```bash
# 1. Clone the repository
git clone https://github.com/tomerarvind195-byte/Quality-education-with-AI.git
cd Quality-education-with-AI/frontend

# 2. Install dependencies
npm install

# 3. Start React development server
npm start
# Open http://localhost:3000
```

### Run Backend

```bash
# In a new terminal
cd Quality-education-with-AI/backend

# Install dependencies
npm install

# Start Express server
node server.js
# API running at http://localhost:5000
```

### Run Both Together

```bash
# Install concurrently
npm install -g concurrently

# From root folder
concurrently "npm start --prefix frontend" "node backend/server.js"
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/courses` | Get all available courses |
| `GET` | `/api/courses/:domain` | Get courses by domain |
| `GET` | `/api/resources` | Get all learning resources |
| `POST` | `/api/recommend` | Get personalized recommendations |

### Example API Response

```json
{
  "status": "success",
  "domain": "Web Development",
  "recommendations": [
    {
      "id": 1,
      "title": "Full-Stack Web Development with Django",
      "level": "Intermediate",
      "duration": "8 weeks",
      "rating": 4.8,
      "link": "https://..."
    }
  ]
}
```

---

## 🧠 How the AI Recommendation Works

```
User selects learning goal & domain
              │
              ▼
      Interest profiling
   (what do you want to learn?)
              │
              ▼
   Skill level assessment
  (beginner / intermediate / advanced)
              │
              ▼
     Matching Algorithm
  (score courses against user profile)
              │
              ▼
   REST API returns ranked results
   (sorted by relevance + rating)
              │
              ▼
  React frontend displays
  personalized course cards
```

---

## 🌍 Domains Covered

| Domain | Resources Available |
|--------|-------------------|
| 🌐 Web Development | HTML, CSS, JS, Django, React, Full Stack |
| 🤖 Artificial Intelligence | Python, ML, Deep Learning, NLP |
| 📊 Data Science | Excel, SQL, Python, Data Visualization |
| 🔐 Cybersecurity | IAM, Networking, Ethical Hacking |
| ☕ Programming | C, C++, Java, Python, DSA |
| ☁️ Cloud Computing | AWS, DevOps, Docker basics |

---

## 🔮 Future Improvements

- [ ] **User Authentication** — Login/Signup to save preferences
- [ ] **MySQL Database** — Persistent data storage replacing JSON files
- [ ] **Progress Tracking** — Mark courses complete, track learning journey
- [ ] **AI Chatbot** — Ask questions and get learning guidance instantly
- [ ] **Admin Dashboard** — Add/edit/remove courses from a dashboard
- [ ] **Rating System** — Users can rate and review courses

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/add-domain`)
3. Commit your changes (`git commit -m 'Add Cloud Computing domain'`)
4. Push to the branch (`git push origin feature/add-domain`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Arvind Kumar**
3rd Year B.Tech IT Student | Aspiring Software Engineer

- 🌐 [LinkedIn](https://www.linkedin.com/in/arvind-kumar-399a60338)
- 💻 [GitHub](https://github.com/tomerarvind195-byte)
- 🌍 [Live Project](https://qualityeducationwithai.vercel.app)
- 📧 tomerarvind195@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> ⭐ Agar Quality Education with AI helpful laga toh **star** zaroor karo!
> *Quality education should be accessible to everyone — that's the mission.* 🎓
