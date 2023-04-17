import Mp3Files from ".";


export const MusicInfo = () => {
    return (
        <div className="song-by">
            <p>{Mp3Files[0].title}</p>
            <p>{Mp3Files[0].artist}</p>
        </div>
    );
}