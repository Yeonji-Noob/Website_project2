// ======image import====== //
import MainImg from "../../assets/home/home-playlistbox.png"
import { ReactComponent as Play } from "../../assets/home/home-playlist_button.svg"
import { ReactComponent as Shared } from "../../assets/home/home-shared.svg"
import { ReactComponent as Add } from "../../assets/home/home-addmusic.svg"
import Album4 from "../../assets/home/home-album.svg"

export const MainBanner = () => {


    return (
        <div className="home-main-img">
            <div className="home-text-box" style={{color:'black'}}>
                <p>내 음악친구의</p>
                <p>추천 플레이리스트</p>
            </div>
            <div className="home-icon">
                <Play id="home-Play" />
                <Shared id="home-shared" />
                <Add id="home-add" />
            </div>
            <img className="home-img-box" src={MainImg} alt="imgbox" />
            <img className="albums-image" src={Album4} alt="Albums-home" />
        </div>
    );

}