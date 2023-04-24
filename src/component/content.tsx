import { Home, TodaysMusic, Chart, PlayList } from "./";

import { ChartPage2, ChartPage3, ChartPage4 } from "../component/"



import Footer from "./__footer/footer"
import { Route, Routes } from "react-router-dom";
import { useToggleStore } from './__header/toggle';
// import Scrollbar from 'react-smooth-scrollbar'

// 페이지들 집어넣는 공간

//(4/22)
// build시 빈 화면이 보이는 오류를 수정하였음
// path 부분에 process.env.PUBLIC_URL 추가
const Content = () => {


    const light = useToggleStore((state: { light: boolean }) => state.light);

    return (
        <div className="content" id={light ? 'light-mode' : 'dark-mode2'}>
            <Routes>

                
                <Route path={'/'} element={<Home />}></Route>
                <Route path={'/home'} element={<Home />}></Route>
                <Route path={'/today'} element={<TodaysMusic />}></Route>
                <Route path={'/chart'} element={<Chart />}></Route>
                <Route path={'/chart2p'} element={<ChartPage2 />}></Route>
                <Route path={'/chart3p'} element={<ChartPage3 />}></Route>
                <Route path={'/chart4p'} element={<ChartPage4 />}></Route>
                <Route path={'/playlist'} element={<PlayList />}></Route>
                {/* <Route path={`/musicvideo`} element={<MusicVideo />}></Route> */}

            </Routes>

            <Footer />
        </div>
    );
}
export default Content;