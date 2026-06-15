import React, { useState } from 'react'
import authUser from '../../auth/hooks/authHooks';
import Expression from "../../Expression/Expression.jsx";
import useExpression from "../hooks/Expressionhooks.js"
import "./Home.scss";

const Home = () => {
  const { data, logoutUser } = authUser();
  // const [song, setSong] = useState({
  //   "url": "https://ik.imagekit.io/fczc2w1de/Moodify_Songs/songs/Pushpa_Pushpa__From__Pushpa_2_The_Rule____-_Hindi__DownloadMing.WS__-ZA7dAWIl",
  //   "poster": "https://ik.imagekit.io/fczc2w1de/tr:n-ik_ml_thumbnail/Moodify_Songs/posters/Pushpa_Pushpa__From__Pushpa_2_The_Rule____-_Hindi__DownloadMing.WS__81bv6IWDV.jpeg",
  //   "title": "Pushpa Pushpa (From \"Pushpa 2 The Rule\")  - Hindi [DownloadMing.WS]",
  //   "artist": "Mika Singh, Nakash Aziz, Devi Sri Prasad, Raqueeb Alam [DownloadMing.WS]",
  //   "mood": "surprise"
  // });
  const { song } = useExpression();

  return (
    <div className="home-page">
      <div className="top-section">
        <h2>Home Page</h2>

        <button
          onClick={() => {
            logoutUser();
          }}
        >
          Logout
        </button>
      </div>

      <div className="main-content">
        <Expression />

        <div className="song-card">
          <img className="song-poster" src={song.poster} alt={song.title} />
          <div className="song-info">
            <div className="song-header">
              <div>
                <h3>{song.title}</h3>
                <p className="song-artist">{song.artist}</p>
              </div>
              <span className={`expression-tag ${song.mood}`}>{song.mood}</span>
            </div>

            <p className="song-description">
              Expression tag based on the selected song state.
            </p>

            <audio className="song-audio" autoPlay controls preload="metadata" src={song.url}>
              Your browser does not support the audio element.
            </audio>

            <div className="song-meta">
              <strong>Expression:</strong>
              <span className="song-mood">{song.mood}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;