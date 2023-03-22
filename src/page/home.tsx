import Mainimg from "../assets/playlistbox.png"
import { ReactComponent as Play } from "../assets/playlistbutton.svg"
import { ReactComponent as Shared } from "../assets/shared.svg"
import { ReactComponent as Add } from "../assets/addmusic.svg"
import Albums from "../assets/album.svg"

const Home: React.FC = () => (

    <div className="home">
        <div className="home-main-img">
            <div className="home-text-box">
                <p>내 음악친구의</p>
                <p>추천 플레이리스트</p>
            </div>
            <div className="home-icon">
                <Play id="home-Play" />
                <Shared id="home-shared" />
                <Add id="home-add" />
            </div>
            <img className="home-img-box" src={Mainimg} alt="imgbox" />
            <img className="albums-image" src={Albums} alt="Albums-home" />
        </div>
        <p># 추천앨범</p>
        <div></div>
        <p># 추천플레이리스트</p>
        <div></div>
        <p># 장르별추천</p>
        <div></div>
        <p>Artist News</p>
        <div></div>
    </div>

)

export default Home;