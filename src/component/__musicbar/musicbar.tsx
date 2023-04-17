//-- import theme change hooks --//
import { useToggleStore } from '../__header/toggle';

//-- import components --//
import { MusicSlider, MusicVolume, LeftIcons, MusicPlayButtons, MusicListIcon, AlbumFrame, MusicInfo } from "./";
// import {useState} from "react";

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