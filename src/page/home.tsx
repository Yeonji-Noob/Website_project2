// ======image import====== //
import MainImg from "../assets/home/home-playlistbox.png"
import { ReactComponent as Play } from "../assets/home/home-playlist_button.svg"
import { ReactComponent as Shared } from "../assets/home/home-shared.svg"
import { ReactComponent as Add } from "../assets/home/home-addmusic.svg"
import Album4 from "../assets/home/home-album.svg"


// ======component import====== //
import { HomeAlbums } from "../component/home/home-albums"
import { HomePlayLists } from "../component/home/home-playlists"
import { HomeGenreLists } from "../component/home/home-music_genres"




//component name 첫글자는 항상 대문자로
//안그러면 TS(2339)에러 날 수 있음
const Home: React.FC = () => {

    //map 함수를 사용해서 반복되는 부분을 줄임
    let homeText = ['추천앨범', '추천플레이리스트', '장르별추천'];


    return (
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
                <img className="home-img-box" src={MainImg} alt="imgbox" />
                <img className="albums-image" src={Album4} alt="Albums-home" />
            </div>

            {/* 추천앨범, 추천플레이리스트, 장르별추천 텍스트 */}

            <div className="home--contents">
                <p className="home-text"># {homeText[0]}</p>
                <HomeAlbums />
            </div>

            <div className="home--contents">
                <p className="home-text"># {homeText[1]}</p>
                <HomePlayLists />
            </div>

            <div className="home--contents">
                <p className="home-text"># {homeText[2]}</p>
                <HomeGenreLists />
            </div>

            <p>Artist News</p>
            <div className="home-news">

            </div>
        </div>
    )

}

export default Home;