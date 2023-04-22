//-- import light/dark theme change hooks --//
import { useToggleStore } from '../__header/toggle';

//-- import components --//
import { LeftIcons, MusicControl, MusicListIcon, AlbumFrame, MusicInfo } from "./";

import { useState } from "react";
// import useSound from 'use-sound';
// import Mp3Files from ".";
import { PlayFunction } from 'use-sound/dist/types';

export interface PropsType {
    currentIndex: number[];
    setCurrentIndex: React.Dispatch<React.SetStateAction<number[]>>;
}

export interface PlayProps {
    play: PlayFunction;
    pause: (id?: string | undefined) => void;
}


//(4/17)

//뮤직바 음악 구현에 대해서 엄청 고민했습니다.
//API를 가져오자니 국내 API는 불가능, spotifyAPI는 로그인 기능을 넣어야지 쓸 수 있고, 발급도 번거롭다.
//클론코딩이라도 해봤으면 감이 올텐데(하...ㅋㅋ) 아무것도 못배웠고, 냅다 리디자인을 해버렸고, 학원 발표일(27일)까지 시간이 없음
//구글링을 열심히 해서 useSound 라이브러리를 찾았고, 이 방법을 써보기로 했음.

//useSound 라이브러리
/* 훅의 형태로 소리기능을 구현할 수 있음 
이 라이브러리를 사용하면 굳이 HTML audio 태그를 사용하지 않고도 특정 상황이나 
이벤트에 오디오를 재생할 수 있는 기능을 추가해줄 수 있다 */


const MusicBar = () => {

    //테마 색 변경 store
    const light = useToggleStore((state: { light: boolean }) => state.light);

    //mp3 상태값 관리 state
    const [currentIndex, setCurrentIndex] = useState([0, 1, 2]);



    return (

        <div className="music-bar" id={light ? 'light-mode' : 'dark-mode'}>
            <AlbumFrame currentIndex={currentIndex} />
            <MusicInfo currentIndex={currentIndex} />
            <LeftIcons />
            <MusicControl currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
            <MusicListIcon />
        </div>

    );
}


export default MusicBar;