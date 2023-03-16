import React from "react";
import Home from "../assets/home.svg";
import Today from "../assets/today_music.svg";
import Chart from "../assets/chart.svg"
import Playlist from "../assets/playlist.svg"
import Musicvideo from "../assets/music_video.svg"
import Foryou from "../assets/for_you.svg"
import Friend from "../assets/friend.svg"
import Mymusic from "../assets/my_music.svg"
import Shopping from "../assets/shopping_cart.svg"
import Cloud from "../assets/cloud.svg"
import Facebook from "../assets/facebook.svg"
import Twitter from "../assets/twitter.svg"
import Blog from "../assets/blog.svg"
import Ticket from "../assets/buyticket.svg"
import Seach from "../assets/seachimg.svg"



const Sidebar: React.FC = () => (

    <div className="sidebar">


        <img className="seach-icon" src={Seach} alt="seach-icon" />
        <input type="search" />

        <div className="sidebar-contents">

            <div className="scroll-area">
                <p>
                    <img src={Home} alt="home" />
                    <h3>Home</h3>
                </p>

                <p>
                    <img src={Today} alt="today" />
                    <h3>오늘의 음악</h3>
                </p>

                <p>
                    <img src={Chart} alt="chart" />
                    <h3>음악 차트</h3></p>
                <p>
                    <img src={Playlist} alt="playlist" />
                    <h3>플레이리스트</h3>
                </p>
                <p>
                    <img src={Musicvideo} alt="musicvideo" />
                    <h3>뮤직비디오</h3>
                </p>


                {/*----------------- 구분선 ----------------------*/}
                <hr />


                <p>
                    <img src={Foryou} alt="foryou" />
                    <h3>For you</h3></p>
                <p>
                    <img src={Friend} alt="friend" />
                    <h3>음악친구</h3>
                </p>
                <p>
                    <img src={Mymusic} alt="mymusic" />
                    <h3>내 음악</h3>
                </p>
                <p>
                    <img src={Shopping} alt="shopping" />
                    <h3>구매한 음악</h3>
                </p>
                <p>
                    <img src={Cloud} alt="cloud" />
                    <h3>클라우드</h3>
                </p>

                {/*----------------- 구분선 ----------------------*/}
                <hr />
                {/* ---------------- */}
                {/* --- sns icon --- */}
                {/* ---------------- */}
                <div className="sns-icon">
                    <img src={Facebook} alt="facebook" />
                    <img src={Twitter} alt="twitter" />
                    <img src={Blog} alt="blog" />
                </div>
            </div>
        </div>

        {/* ---------------- */}
        {/* ---- buttons ---- */}
        {/* ---------------- */}
        <div className="sidebar--button--container">
            <div className="sidebar-button">
                <button className="ticket">
                    <img src={Ticket} alt="buy-ticket" />
                    <span>이용권 구매</span>
                </button>
                <button className="event-button">
                    <span>이벤트</span>
                </button>
            </div>
        </div>


    </div>

)

export default Sidebar;
