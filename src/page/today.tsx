import TodayMainBannerBG from "../assets/todaymusicbanner.png"

const TodaysMusic = () => {
    return (
        <div className="today">
            <div className="today-main-banner-bg">
                <div className="today-main-banner-textbox">
                    <h1 className="today-main-text">#오늘의 음악</h1>
                    <span className="text-highlight"></span>
                    <h2 className="today-newJeans-main-text">NewJeans 특집~!</h2>
                    <p className="today-newJeans-text">내가 만든 쿠키🍪 너를 위해 구웠지</p>
                </div>
                <img className="today-img-box" src={TodayMainBannerBG} alt="today-main-banner-bg" />
            </div>
        </div>
    );
};

export default TodaysMusic;