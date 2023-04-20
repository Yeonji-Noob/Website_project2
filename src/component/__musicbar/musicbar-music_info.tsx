import Mp3Files from ".";
import { useState } from "react";


export const MusicInfo = () => {


    const [currentIndex, setCurrentIndex] = useState(0);

    

    return (
        <div className="song-by">
            <p>{Mp3Files[currentIndex].title}</p>
            <p>{Mp3Files[currentIndex].artist}</p>
        </div>
    );
}