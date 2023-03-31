import Home from "../page/home";
import TodaysMusic from "page/today";
import Chart from "page/chart";
import PlayList from "page/playlist";
import MusicVideo from "page/musicvideo";
import Footer from "../component/footer"
import { Route, Routes } from "react-router-dom";


// 페이지들 집어넣는 공간
const Content: React.FC = () => (

    <div className="content">
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/today" element={<TodaysMusic/>}></Route>
            <Route path="/Chart" element={<Chart/>}></Route>
            <Route path="/playlist" element={<PlayList/>}></Route>
            <Route path="/musicvideo" element={<MusicVideo/>}></Route>
        </Routes>
        <Footer/>
    </div>

)

export default Content;