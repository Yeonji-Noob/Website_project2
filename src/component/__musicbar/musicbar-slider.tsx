import { useState, useRef } from "react";
import type { RefObject } from 'react';

//(4/17)
//volume 움직일때랑 똑같은 방식으로 hook 써서 구성했습니다.
//useRef 연습을 할 수 있어서 좋았음


export const MusicSlider = () => {


    const musicBarStateRef: RefObject<HTMLInputElement> = useRef(null);

    const [musicBarWidth, setmusicBarWidth] = useState<string>('10px');


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
            <div className="musicbar-slide" style={{ width: musicBarWidth }}></div>
            <input ref={musicBarStateRef} type="range" min={0} max={3600} step={0.5} className="musicbar-slider" onInput={handleMusicBarChange} />
            <div className="musicbar-range_track"></div>
            <span className="musicbar-time">0:00</span>
        </div>
    );

}
