# 🎵 Moodify

Moodify is an AI-powered music recommendation web application that detects a user's facial emotion in real-time and suggests songs that match their mood.

Using Google MediaPipe Face Detection and a curated song dataset, Moodify analyzes emotions such as Happy, Sad, Angry, and Surprised, then recommends songs that fit the detected mood.

Visit  : https://moodify-project.vercel.app/
---

## ✨ Features

* 🎭 Real-time facial emotion detection
* 🧠 AI-powered mood analysis using MediaPipe
* 🎶 Mood-based song recommendations
* 🎵 Curated song library
* 📱 Responsive and modern UI
* ⚡ Fast React frontend
* 🔒 Privacy-friendly emotion detection

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* SCSS / CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### AI & Computer Vision

* Google MediaPipe

### Deployment

* Vercel (Frontend) -> https://moodify-project.vercel.app
* Render (Backend) -> https://moodify-project-b0ns.onrender.com

---

## 📂 Project Structure

```text
moodify/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── config/
    ├── package.json
    └── server.js
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/Shreyas-coding-master001/Moodify-Project.git
cd Moodify-Project
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

### Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on:

```text
http://localhost:3000
```

---

## ⚙️ Environment Variables

### Frontend (.env)

```env
VITE_API_URL=http://localhost:3000
```

### Backend (.env)

```env
NODE_ENV=development

PORT=3000

MONGO_URI=your_mongodb_connection_string

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

---

## 🎭 Supported Emotions

| Emotion      | Description                   |
| ------------ | ----------------------------- |
| 😀 Happy     | Feel-good and uplifting songs |
| 😢 Sad       | Emotional and soulful tracks  |
| 😠 Angry     | Powerful and energetic songs  |
| 😲 Surprised | Wonder, adventure, and awe    |

---

## 🎵 How It Works

1. User opens Moodify.
2. Camera permission is requested.
3. MediaPipe analyzes facial expressions.
4. Moodify predicts the dominant emotion.
5. Songs matching the detected mood are selected.
6. Recommended songs are displayed instantly.

---

## 🌐 Deployment

### Frontend (Vercel)

Root Directory:

```text
frontend
```

Build Command:

```bash
npm run build
```

Output Directory:

```text
dist
```

---

### Backend (Render)

Root Directory:

```text
backend
```

Build Command:

```bash
npm install
```

Start Command:

```bash
npm start
```

---

## 📸 Future Improvements

* Spotify integration
* YouTube music previews
* Playlist generation
* User accounts
* Mood history tracking
* Advanced emotion classification
* Personalized recommendations

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Shreyas Patil**

Aspiring Software Engineer passionate about AI, Web Development, and creating innovative user experiences.

GitHub:
https://github.com/Shreyas-coding-master001
