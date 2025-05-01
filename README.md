# TEAM-FANTASTIC – Student Team Members Management Application

This is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to add, view, and manage team member profiles with detailed information and images.

---
## Submitted by:
Pratham P- RA2211027010165
Harshit V- RA2211027010137
Dev P- RA2211027010178
## Under the guidance of:
Dr. Jagadish Kumar N

---
## 📌 Features

- 🔷 **Home Page**: Welcoming landing page with navigation links.
- 🧑‍💼 **Add Member**: Fill a form to add new members with image upload.
- 📋 **View Members**: List of all added members with brief details.
- 🔍 **Member Details**: Full profile view of each member.
- 💾 **MongoDB Integration**: All member data is stored in MongoDB.
- 🔁 **RESTful API**: CRUD operations handled via Express backend.

---

## 🛠️ Tech Stack

| Frontend     | Backend           | Database     | Tools                |
|--------------|-------------------|--------------|-----------------------|
| React.js     | Node.js + Express | MongoDB      | VS Code, MongoDB Compass, Git, GitHub |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/TEAM-FANTASTIC.git
cd TEAM-FANTASTIC
```

### 2. Install dependencies

```bash
# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install
```

### 3. Start the development servers

```bash
# Backend
cd backend
node index.js

# Frontend (in a separate terminal)
cd ../frontend
npm start
```

---

## 🧪 API Endpoints

| Method | Endpoint             | Description                     |
|--------|----------------------|---------------------------------|
| GET    | `/api/members`       | Fetch all members               |
| GET    | `/api/members/:id`   | Fetch details of a single member |
| POST   | `/api/members`       | Add a new member                |

Images are stored in the `/uploads` folder and served statically.

---

## 📂 Folder Structure

```
TEAM-BLUE/
│
├── frontend/              # React app (client)
│   ├── src/
│   └── public/
│
├── backend/               # Node + Express server
│   ├── routes/
│   ├── models/
│   ├── uploads/           # Uploaded images
│   └── index.js
│
├── .gitignore
├── README.md
└── package.json
```


---

## 👥 Team

TEAM-FANTASTIC
_III Year / VI Sem 

---
