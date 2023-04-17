import { Volume } from "./"
import { useState, useRef } from "react";
import type { RefObject } from 'react';

export const MusicVolume = () => {


    // (4/17)
    //1. 볼륨 조절 상태는 input의 value값으로 조절이 가능함
    //2. input을 커스텀 한 상태라서, slider-thumb를 움직여도 value값 상태가 나타나지 않았음(...!)
    //3. div 하나를 상태바로 만들어서, value를 너비로 갖는 방법을 선택하였습니다.
    //4. 음악 재생바도 비슷하게 만들면 될듯 


   //input의 value 값을 가져오기 위한 useRef hook

    const inputRef: RefObject<HTMLInputElement> = useRef(null);
    //ref에서 TS에러가 떠서, RefObject type을 불러와서 type 지정을 해주었음


    const [volumeWidth, setVolumeWidth] = useState<string>('5vw');
    //처음 보여지는 값은 50%로 잡았고(자연스럽게 보임)
    //useState를 사용해서 볼륨을 동적으로 움직이게 만듦

    
    /**
     * input의 value값을 width로 계산해주는 함수입니다
     */
    const handleVolumeChange = () => {
      if (inputRef.current) {
        const value = Number(inputRef.current.value);
        //산술 연산의 왼쪽은 'any', 'number', 'bigint' 또는 열거형 형식이어야 합니다.ts(2362) 에러가 뜨기 때문에
        //Number()를 사용해서 number로 바꿔줌
        setVolumeWidth(`${value / 10}vw`);
      }
    };
  
    return (
        <>
            <Volume className="musicbar-volume_icon" />
            <div className="musicbar-volume_comtanier">
                <div className="musicbar-volume_slide" style={{width: volumeWidth}}></div>
                {/* 이벤트는 onChange와 onInput의 선택지가 있었는데, 실시간 반영하는 onInput으로 채택하였다. */}
                <input ref={inputRef} type="range" min={0} max={100} step={0.5} className="musicbar-volume_slider" 
                onInput={handleVolumeChange}
                defaultValue={50}/>
                <div className="musicbar-volume_track"></div>
            </div>
        </>
    );

}
