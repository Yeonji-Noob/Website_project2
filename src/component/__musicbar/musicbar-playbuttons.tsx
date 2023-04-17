import { Random, Reverse, Play, Forward, Repeat, Pause } from "./";
import useSound from "use-sound";
import { useState } from 'react';

import Mp3Files from ".";


export const MusicPlayButtons = () => {



    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const [playButton, setPlayButton] = useState<boolean>(true);
    const [pauseButton, setPauseButton] = useState<boolean>(false);
    const [reverseButton, setReverseButton] = useState<boolean>(false);


    const handleReverseClick = () => {
        if (isPlaying) {
          pause();
          setIsPlaying(false);
          setPauseButton(true);
          setPlayButton(false);
        }
        setReverseButton(true);
        setCurrentIndex(currentIndex - 1);
      };


    const handleClick = () => {
      if (isPlaying) {
        pause();
        setIsPlaying(false);
        setPauseButton(false);
        setPlayButton(true);
      } else {
        play();
        setIsPlaying(true);
        setPlayButton(false);
        setPauseButton(true);
      }
    };

    const [play, { pause }] = useSound(Mp3Files[currentIndex].mp3, {
        onend: () => {
            if (reverseButton) {
                setCurrentIndex(currentIndex - 1);
                setReverseButton(false);
            } else {
                setCurrentIndex((currentIndex + 1) % Mp3Files.length);
            }
        }
    });
    
    return (
        <div className="music-play-button">
            <Random id="music-play-button-random" />
            <Reverse id="music-play-button-reverse" onClick={handleReverseClick} />
            {playButton && <Play id="play" onClick={handleClick} />}
            {pauseButton && <Pause id="music-play-button-pause" onClick={handleClick} />}
            <Forward id="music-play-button-forward" onClick={() => setCurrentIndex((currentIndex + 1) % Mp3Files.length)}/>
            <Repeat id="music-play-button-repeat" />
            <div className="blur"></div>
        </div>
    );
}