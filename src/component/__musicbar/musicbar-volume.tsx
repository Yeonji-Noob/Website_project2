const MusicVolume = () => {

    return (
        <div className="musicbar-volume_comtanier">
            <input type="range" min={0} max={50} className="musicbar-volume_slider" />
            <div className="musicbar-volume_track"></div>
        </div>
    );

}

export default MusicVolume;