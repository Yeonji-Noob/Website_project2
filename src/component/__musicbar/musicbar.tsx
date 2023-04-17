//-- import light/dark theme change hooks --//
import { useToggleStore } from '../__header/toggle';

//-- import components --//
import { MusicSlider, MusicVolume, LeftIcons, MusicPlayButtons, MusicListIcon, AlbumFrame, MusicInfo } from "./";
// import {useState} from "react";


//(4/17)

//뮤직바 음악 구현에 대해서 엄청 고민했습니다.
//API를 가져오자니 국내 API는 불가능, spotifyAPI는 로그인 기능을 넣어야지 쓸 수 있고, 발급도 번거롭다.
//클론코딩이라도 해봤으면 감이 올텐데(하...ㅋㅋ) 아무것도 못배웠고, 냅다 리디자인을 해버렸고, 학원 발표일(27일)까지 시간이 없음
//구글링을 열심히 해서 useSound 라이브러리를 찾았고, 이 방법을 써보기로 했음.



const MusicBar = () => {

    const light = useToggleStore((state: { light: boolean }) => state.light);



    return (

        <div className="music-bar" id={light ? 'light-mode' : 'dark-mode'}>
            <AlbumFrame />
            <MusicInfo />
            <LeftIcons />
            <MusicPlayButtons />
            <MusicSlider />
            <MusicVolume />
            <MusicListIcon />
        </div>

    )
}


export default MusicBar;