import { useEffect, useRef, useState } from "react";
import {
  FaceLandmarker,
  FilesetResolver,
} from "@mediapipe/tasks-vision";
import { useContext } from "react";
import { songContext } from "../home/song.context.jsx";
import useExpression from "../home/hooks/Expressionhooks.js";

function EmotionDetector() {
  const videoRef = useRef(null);
  const faceLandmarkerRef = useRef(null);
  let { allSongs, setallSongs, SongsLoading, GetAllSongs, emotion, setEmotion, SelectSong } = useExpression();
  let detectedEmotion = "neutral";
    
    useEffect(() => {
        async function initialize() {
            const vision = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
            );

            faceLandmarkerRef.current = await FaceLandmarker.createFromOptions(
                vision,
                {
                baseOptions: {
                    modelAssetPath:
                    "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
                },
                runningMode: "VIDEO",
                outputFaceBlendshapes: true,
                numFaces: 1,
                }
            );

            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });

            videoRef.current.srcObject = stream;

            videoRef.current.onloadeddata = () => {
                
            };
        }

        initialize();
        
    }, []);

    async function DetectFace(){
      let animationFrame;
      
      function detect() {
        if (
          !faceLandmarkerRef.current ||
          !videoRef.current
        ) {
          animationFrame = requestAnimationFrame(detect);
          return;
        }

        const results =
          faceLandmarkerRef.current.detectForVideo(
            videoRef.current,
            performance.now()
          );

        if (
          results.faceBlendshapes &&
          results.faceBlendshapes.length > 0
        ) {
          const blendshapes =
            results.faceBlendshapes[0].categories;

          const getScore = (name) =>
            blendshapes.find((b) => b.categoryName === name)
              ?.score || 0;

          const smile =
            getScore("mouthSmileLeft") +
            getScore("mouthSmileRight");

          const jawOpen = getScore("jawOpen");

          const browUp = getScore("browInnerUp");

          const browDown =
            getScore("browDownLeft") +
            getScore("browDownRight");

          if (smile > 0.8) {
            detectedEmotion = "happy";
          } else if (jawOpen > 0.5 && browUp > 0.3) {
            detectedEmotion = "surprise";
          } else if (browDown > 0.5) {
            detectedEmotion = "angry";
          } else if (browUp > 0.1 && smile < 0.1) {
            detectedEmotion = "sad";
          }
          setEmotion(detectedEmotion);
        }
      }

      detect();

      try {
        await GetAllSongs(detectedEmotion);
      } catch (error) {
          console.error(error);
          alert(error.message);
      }


      return () => {
        cancelAnimationFrame(animationFrame);

        const stream = videoRef.current?.srcObject;

        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
      };
    }

    return (
      <div className="Face-Dectection">
        <h2>Emotion: <span>{emotion}</span></h2>

        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="emotion-video"
        />

        <div className="all-bottom">
            <button 
              onClick={DetectFace}
            >Detect Emotion</button>
            <button 
              onClick={SelectSong}
            >Change Song</button>
        </div>
      </div>
    );
}

export default EmotionDetector;