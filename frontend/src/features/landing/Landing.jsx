import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.scss";
import useLanding from "./hooks/landing.hook.js";

export default function LandingPage() {
  const navigate = useNavigate();

  useLanding();

  return (
    <div className="landing">
      {/* Background Blur */}
      <div className="gradient gradient-1"></div>
      <div className="gradient gradient-2"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Music That <span>Understands</span> Your Mood
          </h1>

          <p>
            Moodify uses AI-powered facial emotion detection to understand how
            you're feeling and instantly recommends the perfect song for your
            current mood.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" 
              onClick={() => navigate("/login")}
            >
              🎵 Login Now
            </button>

            <button className="secondary-btn"
              onClick={() => navigate("/register")}
            >
              Signup
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="music-card">
            <div className="mood">😀 Happy</div>

            <h3>Recommended For You</h3>

            <div className="song">
              <div className="cover"></div>

              <div>
                <h4>To The Moon</h4>
                <p>Fateh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>

        <div className="cards">
          <div className="card">
            <span>📷</span>
            <h3>Detect</h3>
            <p>
              Allow camera access and let AI analyze your facial expression.
            </p>
          </div>

          <div className="card">
            <span>🧠</span>
            <h3>Understand</h3>
            <p>
              Google MediaPipe detects your current emotion in real time.
            </p>
          </div>

          <div className="card">
            <span>🎶</span>
            <h3>Recommend</h3>
            <p>
              Moodify suggests songs that perfectly match your mood.
            </p>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="demo">
        <h2>Live Mood Detection</h2>

        <div className="demo-card">
          <h3>Current Mood</h3>

          <div className="emoji">😢</div>

          <h4>Sad</h4>

          <div className="recommended-song">
            <p>Recommended Song</p>
            <strong>🎵 Mehram - Jersey</strong>
          </div>

          <p className="confidence">
            Confidence: 92%
          </p>

          <button className="primary-btn"
          onClick={() => navigate("/login")}
          >
            Try It Yourself
          </button>
        </div>
      </section>

      {/* Emotion Cards */}
      <section className="emotions">
        <h2>Supported Emotions</h2>

        <div className="emotion-grid">
          <div className="emotion-card">
            😀
            <h4>Happy</h4>
            <p>Feel-good and uplifting songs.</p>
          </div>

          <div className="emotion-card">
            😢
            <h4>Sad</h4>
            <p>Emotional and soulful tracks.</p>
          </div>

          <div className="emotion-card">
            😠
            <h4>Angry</h4>
            <p>Powerful and energetic music.</p>
          </div>

          <div className="emotion-card">
            😲
            <h4>Surprised</h4>
            <p>Wonder, adventure and awe.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <h3>Moodify 🎵</h3>
        <p>
          Discover music through emotion. Powered by AI, inspired by Sheryians Coding School.
        </p>
      </footer>
    </div>
  );
}