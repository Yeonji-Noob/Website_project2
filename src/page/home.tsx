import Mainimg from "../assets/playlistbox.png"
import { ReactComponent as Play } from "../assets/playlistbutton.svg"
import { ReactComponent as Shared } from "../assets/shared.svg"
import { ReactComponent as Add } from "../assets/addmusic.svg"
import Album4 from "../assets/album.svg"

import {Albums} from "component/albums"
// import { useState } from 'react'


//component name 첫글자는 항상 대문자로
//안그러면 TS(2339)에러 날 수 있음

const Home: React.FC = () => {

    //map 메서드를 사용해서 반복되는 부분을 줄임
    let text = ['추천앨범', '추천플레이리스트', '장르별추천'];


    return (
        <div className="home">
            <div className="home-main-img">
                <div className="home-text-box">
                    <p>내 음악친구의</p>
                    <p>추천 플레이리스트</p>
                </div>
                <div className="home-icon">
                    <Play id="home-Play" />
                    <Shared id="home-shared" />
                    <Add id="home-add" />
                </div>
                <img className="home-img-box" src={Mainimg} alt="imgbox" />
                <img className="albums-image" src={Album4} alt="Albums-home" />
            </div>

            {text.map((txt, i)=>{
                return (
                    <div className="home--contents">
                    <p className="home-text"># {text[i]}</p>
                        <Albums/>
                    </div>
                )
            })}

            <p>Artist News</p>
            <div></div>
        </div>
    )

}

export default Home;