import { Play, Pause } from "./";
import useSound from "use-sound";
import { useState, useRef, useEffect } from 'react';
import type { RefObject } from 'react';
import Mp3Files from ".";
import { PropsType } from "./musicbar";
import { useToggleStore } from '../__header/toggle';



export const MusicControl = ({ currentIndex, setCurrentIndex }: PropsType) => {


  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playButton, setPlayButton] = useState<boolean>(true);
  const [pauseButton, setPauseButton] = useState<boolean>(false);
  const [reverseButton, setReverseButton] = useState<boolean>(false);

  const [volumeButton, setVolumeButton] = useState<boolean>(false);


  const handleReverseClick = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
      setPauseButton(false);
      setPlayButton(true);
    }
    setReverseButton(true);
    setCurrentIndex([currentIndex[0] - 1])

  };


  const handleClick = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
      setPauseButton(false);
      setPlayButton(true);
    } else {
      play();
      setIsPlaying(true);
      setPlayButton(false);
      setPauseButton(true);
    }
  };




  //////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////// slide 영역 //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////

  const musicBarStateRef: RefObject<HTMLInputElement> = useRef(null);

  
  const [musicBarWidth, setMusicBarWidth] = useState<string>('0');
  
  // const musicState = useState(0);
  // const setMusicBarWidth = musicState[1];

  const [currentTime, setCurrentTime] = useState({ min: "", sec: "" });
  const [seconds, setSeconds] = useState(0);

  const [time, setTime] = useState({
    min: "",
    sec: ""
  });





  const handleMusicBarChange = () => {
    if (musicBarStateRef.current) {
      const value = Number(musicBarStateRef.current.value);
      //산술 연산의 왼쪽은 'any', 'number', 'bigint' 또는 열거형 형식이어야 합니다.ts(2362) 에러가 뜨기 때문에
      //Number()를 사용해서 number로 바꿔줌
      setMusicBarWidth(`${value}px`);
    }
  };


  // console.log(musicBarStateRef.current?.value);



  //////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////// volume 영역 //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////

  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  //ref에서 TS에러가 떠서, RefObject type을 불러와서 type 지정을 해주었음


  const [volumeWidth, setVolumeWidth] = useState<string>('5vw');
  //처음 보여지는 값은 50%로 잡았고(자연스럽게 보임)
  //useState를 사용해서 볼륨을 동적으로 움직이게 만듦



  const volumeControl = inputRef.current ? Number(inputRef.current.value) : 0.5;
  // null 체크 후 number 타입으로 변환


  /**
   * input의 value값을 width로 계산해주는 함수입니다
   */
  const handleVolumeChange = () => {
    const inputValue = Number(inputRef.current?.value);
    if (!isNaN(inputValue)) {
      setVolumeWidth(`${inputValue * 10}vw`);

    }
  };

  const volumeClick = () => {
    if (inputRef.current) {
      setVolumeButton(!volumeButton);
      inputRef.current.value = "0";
      handleVolumeChange();
    }
  };

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////







  //////////////////////////////////////////////////
  ////////// useSound 사용//////////////////////////
  ////////////////////////////////////////////////



  const [play, { pause, duration, sound }] = useSound(Mp3Files[currentIndex[0]].mp3, {

    volume: volumeControl,


    /**
     * 재생이 끝났을 때 다음 동작 수행에 대한 함수 
     */
    onend: () => {
      if (reverseButton) {
        setCurrentIndex([currentIndex[0] - 1]);
        setReverseButton(false);
      }
      else {
        const currentIndexCalc = currentIndex[0] + 1
        setCurrentIndex([(currentIndexCalc) % Mp3Files.length]);
        setPlayButton(true);
        setPauseButton(false);
      }
    }



  });


  ///////////////////////////////////
  /////// 재생 시간 출력 부분 ///////
  ///////////////////////////////////

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60).toString();
      const secRemain = Math.floor(sec % 60).toString();
      setTime({
        min: min,
        sec: secRemain
      });
    }
  }, [isPlaying, duration]);


  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60).toString();
        const sec = Math.floor(sound.seek([]) % 60).toString();
        setCurrentTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const currentTimeString = `${currentTime.min.toString().padStart(2, '0')}:${currentTime.sec.toString().padStart(2, '0')}`;
  const durationString = `${time.min.toString().padStart(2, '0')}:${time.sec.toString().padStart(2, '0')}`;





  const light = useToggleStore((state: { light: boolean }) => state.light);


  // 값 return //

  return (
    <>

      {/* play buttons */}
      <div className="music-play-button">
        <svg id="music-play-button-random" width="14" height="14" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7.966c.94.166 3.223-.198 4.834-2.983C6.37 3.99 8.009 2 10.265 2" stroke={light ? '#231edc' : '#ffffff'} strokeLinecap="round" /><path d="M1 2.034c.94-.166 3.223.198 4.834 2.983C6.37 6.01 8.009 8 10.265 8M10.265 1l.66.641a.5.5 0 0 1 0 .718l-.66.641M10.265 7l.66.641a.5.5 0 0 1 0 .718l-.66.641" stroke={light ? '#231edc' : '#ffffff'} strokeLinecap="round" /></svg>
        <svg id="music-play-button-reverse" onClick={handleReverseClick} width="23" height="23" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#a)"><path d="M4.454 5.136a1 1 0 0 0 0 1.728l7.309 4.26a1 1 0 0 0 1.503-.864V1.74a1 1 0 0 0-1.503-.864l-7.309 4.26z" fill={light ? '#231edc' : '#ffffff'} /></g><path stroke={light ? '#231edc' : '#ffffff'} strokeWidth="2" strokeLinecap="round" d="M1.913 2v8" /><defs><filter id="a" x="2.958" y=".739" width="13.309" height="14.523" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dx="1" dy="2" /><feGaussianBlur stdDeviation="1" /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" /><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_203_1065" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_203_1065" result="shape" /></filter></defs></svg>
        {playButton && <Play id="play" onClick={handleClick} />}
        {pauseButton && <Pause id="music-play-button-pause" onClick={handleClick} />}
        <svg id="music-play-button-forward" onClick={() => setCurrentIndex([(currentIndex[0] + 1) % Mp3Files.length])} width="23" height="23" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#a)"><path d="M10.67 5.136a1 1 0 0 1 0 1.728l-7.308 4.26a1 1 0 0 1-1.504-.864V1.74A1 1 0 0 1 3.362.876l7.308 4.26z" fill={light ? '#231edc' : '#ffffff'} /></g><path stroke={light ? '#231edc' : '#ffffff'} strokeWidth="2" strokeLinecap="round" d="M13.153 2v8" /><defs><filter id="a" x=".858" y=".739" width="13.309" height="14.523" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dx="1" dy="2" /><feGaussianBlur stdDeviation="1" /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" /><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_203_1068" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_203_1068" result="shape" /></filter></defs></svg>
        <svg id="music-play-button-repeat" width="14" height="14" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.915 1-.713.624a.5.5 0 0 0 0 .752L1.915 3M9.922 7l.713.624a.5.5 0 0 1 0 .752L9.922 9M1.915 2h6.94c.355 0 1.067.15 1.067.75V5M9.922 8h-6.94c-.355 0-1.067-.15-1.067-.75V5" stroke={light ? '#231edc' : '#ffffff'} strokeLinecap="round" /></svg>
        <div className="blur"></div>
      </div>



      {/* Slider */}
      <div className="musicbar-slider_container">
        <div className="musicbar-time_container">
          <span className="musicbar-time">
            {currentTimeString}
          </span>
        </div>


        <div className="musicbar-slide_container">
          {/* 실제 width가 움직여보이는 것은 아래 div박스임 */}
          {duration && <div className="musicbar-slide" style={{ width: `${(seconds / Math.floor((duration || 0) / 1000)) * 585}px` }} ></div>}
          <input ref={musicBarStateRef} type="range" min={0} max={Math.floor((duration || 0) / 1000)} step={0.01} className="musicbar-slider" onInput={handleMusicBarChange}
            defaultValue={0} value={seconds} onChange={(e) => { sound.seek([e.target.value]) }} aria-label="musicbar_range"/>
          <div className="musicbar-range_track"></div>
        </div>


        <div className="musicbar-time_container">
          <span className="musicbar-time">
            {durationString}
          </span>
        </div>

      </div>

      {/* 검사를 위한 console.log */}
      {/* {console.log(musicBarWidth)} */}
      {/* {console.log(Math.floor((duration || 0) / 1000))}
      {console.log(inputRef.current?.value)} */}

      {/* Volume */}

      <div className="musicbar-volume_container">
        {/* 🔊 */}
        <svg className="musicbar-volume_icon" width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={volumeClick} style={{ display: volumeButton ? 'none' : 'block' }}>
          <path d="M4.125 12.5V17.5C4.125 18.1875 4.74375 18.75 5.5 18.75H9.625L14.1487 22.8625C15.015 23.65 16.5 23.0875 16.5 21.975V8.01248C16.5 6.89998 15.015 6.33748 14.1487 7.12498L9.625 11.25H5.5C4.74375 11.25 4.125 11.8125 4.125 12.5ZM22.6875 15C22.6875 12.7875 21.285 10.8875 19.25 9.96248V20.025C21.285 19.1125 22.6875 17.2125 22.6875 15ZM19.25 5.56248V5.81248C19.25 6.28748 19.5937 6.69998 20.075 6.87498C23.6225 8.16248 26.125 11.325 26.125 15C26.125 18.675 23.6225 21.8375 20.075 23.125C19.58 23.3 19.25 23.7125 19.25 24.1875V24.4375C19.25 25.225 20.1162 25.775 20.9137 25.5C25.575 23.8875 28.875 19.8 28.875 15C28.875 10.2 25.575 6.11248 20.9137 4.49998C20.1162 4.21248 19.25 4.77498 19.25 5.56248Z" fill={light ? '#231edc' : '#ffffff'} />
        </svg>
        {/* 🔇 */}
        <svg className="musicbar-volume_mute_icon" width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={volumeClick} style={{ display: volumeButton ? 'block' : 'none' }}>
          <path d="M0 7.74251V12.7425C0 13.43 0.61875 13.9925 1.375 13.9925H5.5L10.0237 18.105C10.89 18.8925 12.375 18.33 12.375 17.2175V3.25501C12.375 2.14251 10.89 1.58001 10.0237 2.36751L5.5 6.49251H1.375C0.61875 6.49251 0 7.05501 0 7.74251Z" fill={light ? '#231edc' : '#ffffff'} />
          <path d="M21.377 10L23.7539 7.62304C24.082 7.29493 24.082 6.76267 23.7539 6.43456L22.5654 5.24608C22.2373 4.91797 21.7051 4.91797 21.377 5.24608L19 7.62304L16.623 5.24608C16.2949 4.91797 15.7627 4.91797 15.4346 5.24608L14.2461 6.43456C13.918 6.76267 13.918 7.29493 14.2461 7.62304L16.623 10L14.2466 12.3764C13.9185 12.7045 13.9185 13.2368 14.2466 13.5649L15.4351 14.7534C15.7632 15.0815 16.2955 15.0815 16.6236 14.7534L19 12.377L21.377 14.7539C21.7051 15.082 22.2373 15.082 22.5654 14.7539L23.7539 13.5654C24.082 13.2373 24.082 12.7051 23.7539 12.377L21.377 10Z" fill={light ? '#231edc' : '#ffffff'} />
        </svg>



        <div className="musicbar-volume_slide_box">
          {/* 실제 움직여보이는 width */}
          <div className="musicbar-volume_slide" style={{ width: volumeWidth }}></div>
          {/* 이벤트는 onChange와 onInput의 선택지가 있었는데, 실시간 반영하는 onInput으로 채택하였다. */}
          <input ref={inputRef} type="range" min={0} max={1} step={0.01} className="musicbar-volume_slider"
            onInput={handleVolumeChange}
            defaultValue={0.5} aria-label="volume_range"/>
          <div className="musicbar-volume_track"></div>
        </div>
      </div>


    </>
  );
}