// ======image import====== //
import MainImg from "../../assets/home/home-playlistbox.png"
import { Play, Shared, Add, Album4 } from "./"

export const MainBanner = () => {


    return (
        <div className="home-main-img">
            <div className="home-text-box" style={{ color: 'black' }}>
                <p>내 음악친구의</p>
                <p>추천 플레이리스트</p>
            </div>
            <div className="home-icon">
                <Play id="home-Play" />
                <Shared id="home-shared" />
                <Add id="home-add" />
            </div>
            <img className="home-img-box" src={MainImg} alt="imgbox" />
            <Album4 className="albums-image" />
        </div>
    );

}