import { Random, Reverse, Play, Forward, Repeat, Pause } from "./";
import useSound from "use-sound";
import { useState, useRef, useEffect } from 'react';
import type { RefObject } from 'react';
import Mp3Files from ".";
import { Volume } from "./"
import { PropsType } from "./musicbar";



export const MusicControl = ({ currentIndex, setCurrentIndex }: PropsType) => {


  // const [currentIndex, setCurrentIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playButton, setPlayButton] = useState<boolean>(true);
  const [pauseButton, setPauseButton] = useState<boolean>(false);
  const [reverseButton, setReverseButton] = useState<boolean>(false);



  const handleReverseClick = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
      setPauseButton(true);
      setPlayButton(false);
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
    const [musicBarWidth, setmusicBarWidth] = useState<string>('0');


    const [currentTime, setCurrentTime] = useState({min: "", sec: ""});
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
            setmusicBarWidth(`${value / 5.416666666666667}vw`);
            //길이가 36vw라서 이렇게 함
        }
    };

    
    console.log(musicBarStateRef.current?.value);

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
    if (inputRef.current) {
      const value = Number(inputRef.current.value);
      //산술 연산의 왼쪽은 'any', 'number', 'bigint' 또는 열거형 형식이어야 합니다.ts(2362) 에러가 뜨기 때문에
      //Number()를 사용해서 number로 바꿔줌
      console.log(value);
      setVolumeWidth(`${value * 10}vw`);
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
      } else {
        const currentIndexCalc = currentIndex[0] + 1
        setCurrentIndex([(currentIndexCalc) % Mp3Files.length]);
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
  }, [isPlaying]);


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
  







// 값 return //

  return (
    <>

    {/* play buttons */}
      <div className="music-play-button">
        <Random id="music-play-button-random" />
        <Reverse id="music-play-button-reverse" onClick={handleReverseClick} />
        {playButton && <Play id="play" onClick={handleClick} />}
        {pauseButton && <Pause id="music-play-button-pause" onClick={handleClick} />}
        <Forward id="music-play-button-forward" onClick={() => setCurrentIndex([(currentIndex[0] + 1) % Mp3Files.length])} />
        <Repeat id="music-play-button-repeat" />
        <div className="blur"></div>
      </div>




    {/* Slider */}
    <div className="musicbar-slider_container">
            <span className="musicbar-time">
                {/* {currentTime.min}:{currentTime.sec} */}
                {currentTimeString}
            </span>
            {/* 실제 width가 움직여보이는 것은 아래 div박스임 */}
            {/* width에 seconds를 넣으면 자동으로 움직여는 지는데 싱크가 안맞음 */}
            <div className="musicbar-slide" style={{ width: `${seconds / 5.416666666666667}vw` }} ></div>
            <input ref={musicBarStateRef} type="range" min={0} max={195} step={0.5} className="musicbar-slider" onInput={handleMusicBarChange}
            defaultValue={0} value={seconds} onChange={(e) => {sound.seek([e.target.value])}}/>
            <div className="musicbar-range_track"></div>
            <span className="musicbar-time">
                {/* {time.min}:{time.sec} */}
                {durationString}
            </span>
        </div>

        {console.log(musicBarWidth)}

    {/* Volume */}
      <Volume className="musicbar-volume_icon" />
      <div className="musicbar-volume_comtanier">
        {/* 실제 움직여보이는 width */}
        <div className="musicbar-volume_slide" style={{ width: volumeWidth }}></div>
        {/* 이벤트는 onChange와 onInput의 선택지가 있었는데, 실시간 반영하는 onInput으로 채택하였다. */}
        <input ref={inputRef} type="range" min={0} max={1} step={0.01} className="musicbar-volume_slider"
          onInput={handleVolumeChange}
          defaultValue={0.5} />
        <div className="musicbar-volume_track"></div>
      </div>



    </>
  );
}