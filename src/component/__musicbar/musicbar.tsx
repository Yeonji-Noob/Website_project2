//-- import light/dark theme change hooks --//
import { useToggleStore } from '../__header/toggle';

//-- import components --//
import { LeftIcons, MusicControl, AlbumFrame, MusicInfo} from "./";

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
            <MusicControl currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

            <div className="musicbar-music_list_container">
                <svg id="musicbar-music_list" width="30" height="22" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4959 0H1.40872C0.633925 0 0 0.610831 0 1.3574C0 2.10397 0.633925 2.71481 1.40872 2.71481H15.4959C16.2707 2.71481 16.9047 2.10397 16.9047 1.3574C16.9047 0.610831 16.2707 0 15.4959 0ZM15.4959 5.42961H1.40872C0.633925 5.42961 0 6.04044 0 6.78701C0 7.53359 0.633925 8.14442 1.40872 8.14442H15.4959C16.2707 8.14442 16.9047 7.53359 16.9047 6.78701C16.9047 6.04044 16.2707 5.42961 15.4959 5.42961ZM1.40872 13.574H9.86106C10.6359 13.574 11.2698 12.9632 11.2698 12.2166C11.2698 11.4701 10.6359 10.8592 9.86106 10.8592H1.40872C0.633925 10.8592 0 11.4701 0 12.2166C0 12.9632 0.633925 13.574 1.40872 13.574ZM22.5396 0C20.99 0 19.7221 1.22166 19.7221 2.71481V11.1036C19.2854 10.9542 18.8064 10.8592 18.3134 10.8592C15.7213 10.8592 13.6928 13.0854 14.1577 15.6644C14.4535 17.3069 15.8481 18.6507 17.5527 18.9358C20.2293 19.3837 22.5396 17.4291 22.5396 14.9314V2.71481H25.357C26.1318 2.71481 26.7657 2.10397 26.7657 1.3574C26.7657 0.610831 26.1318 0 25.357 0H22.5396Z" fill={light ? '#231edc' : '#ffffff'} />
                </svg>
            </div>
            
        </div>

    );
}


export default MusicBar;