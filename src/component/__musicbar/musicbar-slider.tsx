import { useState, useRef } from "react";
import type { RefObject } from 'react';
// import useSound from "use-sound";

//(4/17)
//volume 움직일때랑 똑같은 방식으로 hook 써서 구성했습니다.
//useRef 연습을 할 수 있어서 좋았음


//(4/21)
//useEffect와 useState로 재생 길이에 따른 숫자 바뀜 구현 도전


export const MusicSlider = () => {


    const musicBarStateRef: RefObject<HTMLInputElement> = useRef(null);
    const [musicBarWidth, setmusicBarWidth] = useState<string>('10px');


    // const [currntTime, setCurrntTime] = useState({min: "", sec: ""});
    // const [seconds, setSeconds] = useState(0);


    // useEffect(() => {
    //     const duration = 360;
    //     const sec = duration / 1000;
    //     const min = Math.floor(sec / 60);
    //     const secRemain = Math.floor(sec % 60);
    //     const time = {
    //       min: min,
    //       sec: secRemain
    //     }},[]);


          
    const handleMusicBarChange = () => {
        if (musicBarStateRef.current) {
            const value = Number(musicBarStateRef.current.value);
            //산술 연산의 왼쪽은 'any', 'number', 'bigint' 또는 열거형 형식이어야 합니다.ts(2362) 에러가 뜨기 때문에
            //Number()를 사용해서 number로 바꿔줌
            setmusicBarWidth(`${value / 100}vw`);
            //길이가 36vw라서 이렇게 함
        }
    };


    return (
        <div className="musicbar-slider_container">
            <span className="musicbar-time">0:00</span>
            {/* 실제 width가 움직여보이는 것은 아래 div박스임 */}
            <div className="musicbar-slide" style={{ width: musicBarWidth }}></div>
            <input ref={musicBarStateRef} type="range" min={0} max={3600} step={0.5} className="musicbar-slider" onInput={handleMusicBarChange} />
            <div className="musicbar-range_track"></div>
            <span className="musicbar-time">0:00</span>
        </div>
    );

}
