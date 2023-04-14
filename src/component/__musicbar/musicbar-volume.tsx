import { ReactComponent as Volume } from "../../assets/__musicbar/musicbar-volume.svg"

export const MusicVolume = () => {

    return (
        <>
        <Volume className="musicbar-volume_icon"/>
        <div className="musicbar-volume_comtanier">
            <input type="range" min={0} max={50} className="musicbar-volume_slider" />
            <div className="musicbar-volume_track"></div>
        </div>
        </>
    );

}
