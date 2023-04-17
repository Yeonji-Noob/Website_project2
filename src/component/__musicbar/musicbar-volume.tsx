import { ReactComponent as Volume } from "../../assets/__musicbar/musicbar-volume.svg"


export const MusicVolume = () => {


    return (
        <>
            <Volume className="musicbar-volume_icon" />
            <div className="musicbar-volume_comtanier">
                {/* <div className="musicbar-volume_slider_thumb" ></div> */}
                <div className="musicbar-volume_slide"></div>
                <input type="range" min={0} max={100} step={0.5} className="musicbar-volume_slider" />
                <div className="musicbar-volume_track"></div>
            </div>
        </>
    );

}
