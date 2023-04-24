// ======image import====== //
import { Play, Shared, Add, Album4 } from './';


/**
 * 
 * @returns home 최상단에 있는 메인 배너 이미지 입니다.
 */
export const MainBanner :React.FC = () => {


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
            <img className="home-img-box" src={'/images/home/home-playlistbox.webp'} alt="imgbox" />
            <Album4 className="albums-image" />
        </div>
    );

}