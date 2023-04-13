

const MusicSlider = () => {

    return (
        <div className="musicbar-slider_container">
            <span className="musicbar-time">0:00</span>
            <input type="range" min={0} max={100} className="musicbar-slider" />
            <div className="musicbar-range_track"></div>
            <span className="musicbar-time">0:00</span>
        </div>
    );

}

export default MusicSlider;