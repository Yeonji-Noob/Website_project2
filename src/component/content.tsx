import Home from "../page/home";
import TodaysMusic from "page/today";
import Chart from "page/chart";
import PlayList from "page/playlist";
import MusicVideo from "page/musicvideo";

// import { home, todaysMusic, chart, playList, musicVideo } from "../page";

// import를 하나로 합치려 했으나,
// 경로 지정에서 
// TS2307: Cannot find module '../page' or its corresponding type declarations. 오류가 떠서 잠시 보류함


import Footer from "./__footer/footer"
import { Route, Routes } from "react-router-dom";
// import Scrollbar from 'react-smooth-scrollbar'

// 페이지들 집어넣는 공간
const Content: React.FC = () => (
    <div className="content">
        <Routes>

            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/today" element={<TodaysMusic/>}></Route>
            <Route path="/chart" element={<Chart/>}></Route>
            <Route path="/playlist" element={<PlayList/>}></Route>
            <Route path="/musicvideo" element={<MusicVideo/>}></Route>

        </Routes>

        <Footer/>
    </div>
)

export default Content;