import TodayMainBannerBG from "../assets/today/today-music_banner.png"
import { ReactComponent as TodayPlay } from "../assets/today/today-play.svg"
import { ReactComponent as TodayShuffle } from "../assets/today/today-shuffle.svg"



//today 페이지의 컴포넌트 규칙: 
//-------class명 앞에 'today'를 붙이는 것을 원칙으로 한다.


const TodaysMusic = () => {
  return (
    <div className="today">

      <div className="today-main-banner-bg">

        {/* ----textbox--- */}
        <div className="today-main-banner-textbox">

          <h1 className="today-main-text">#오늘의 음악</h1>
          <span className="text-highlight"></span>
          <h2 className="today-newJeans-main-text">NewJeans 특집~!</h2>
          <p className="today-newJeans-text">내가 만든 쿠키🍪 너를 위해 구웠지</p>


          {/*-----버튼 컨테이너----- (버튼 컴포넌트 분리 예정 ㅠㅠ)*/}
          <div className="today-button-container">
            <TodayPlay id="today-play" />
            <TodayShuffle id="today-shuffle" />
          </div>

        </div>
        <img className="today-img-box" src={TodayMainBannerBG} alt="today-main-banner-bg" />
      </div>

    </div>
  );
};

export default TodaysMusic;