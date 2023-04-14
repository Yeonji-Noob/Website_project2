// ======component import====== //
import { HomeAlbums, HomePlayLists, HomeGenreLists, MainBanner} from "../component/home/"

// ======svg import====== //
import {ReactComponent as Interview } from "../assets/home/home-artist_interview.svg";


//component name 첫글자는 항상 대문자로
//안그러면 TS(2339)에러 날 수 있음
const Home: React.FC = () => {

    //map 함수를 사용해서 반복되는 부분을 줄임
    let homeText = ['추천앨범', '추천플레이리스트', '장르별추천'];


    return (
        <div className="home">
            <MainBanner/>
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

            
            <div className="home-interview">
                <Interview />
            </div>
        </div>
    )

}

export default Home;