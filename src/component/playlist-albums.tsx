import KpopAlbum from "../assets/kpopalbum.png"

const PlayListAlbums = () => {
    return (
        <div className="playlist-albums-container">
            <img className="playlist-albums" src={KpopAlbum} alt="케팝" />
            <p>K-POP</p>
        </div>
    );
};

export default PlayListAlbums;