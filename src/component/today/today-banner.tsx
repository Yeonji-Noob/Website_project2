import TodayButtons from 'component/today/today-banner_buttons';


export const TodayBanner = () => {

    return (

        <div className="today-main-banner-bg">

            {/* ----textbox--- */}
            <div className="today-main-banner-textbox">

                <h1 className="today-main-text">#오늘의 음악</h1>
                <span className="text-highlight"></span>
                <h2 className="today-newJeans-main-text">NewJeans 특집~!</h2>
                <p className="today-newJeans-text">내가 만든 쿠키🍪 너를 위해 구웠지</p>


                <TodayButtons />

            </div>
            <img className="today-img-box" src={`${process.env.PUBLIC_URL}/images/today/today-music_banner.webp`} alt="today-main-banner-bg" />
        </div>
    );

}