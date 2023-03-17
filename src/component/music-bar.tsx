import Heart from "../assets/heart.svg"
import Lylics from "../assets/lyrics.svg"
import Etc from "../assets/etc.svg"

const MusicBar: React.FC = () => (

    <div className="music-bar">
        <div className="album-frame"></div>
        <div className="song-by">
            <p>Pathos</p>
            <p>20:69</p>
        </div>
        <figure>
            <img src={Heart} alt="heart" />
            <img src={Lylics} alt="lylics" />
            <img src={Etc} alt="etc" />
        </figure>
    </div>

)

export default MusicBar;