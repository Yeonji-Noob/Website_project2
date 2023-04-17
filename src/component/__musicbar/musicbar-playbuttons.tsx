import { Random, Reverse, Play, Forward, Repeat } from "./";
import useSound from "use-sound";
import { useState } from 'react';

import Mp3Files from ".";


export const MusicPlayButtons = () => {


    const [play, { pause }] = useSound(Mp3Files[0].mp3);

    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
      if (isPlaying) {
        pause();
        setIsPlaying(false);
      } else {
        play();
        setIsPlaying(true);
      }
    };

    return (
        <div className="music-play-button">
            <Random id="music-play-button-random" />
            <Reverse id="music-play-button-reverse" />
            <Play id="play" onClick={handleClick} />
            <Forward id="music-play-button-forward" />
            <Repeat id="music-play-button-repeat" />
            <div className="blur"></div>
        </div>
    );
}