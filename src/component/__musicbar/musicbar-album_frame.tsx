import Mp3Files from ".";

interface CurrentIndexProps {
    currentIndex: number[];
  }

export const AlbumFrame = (props :CurrentIndexProps) => {
    return (
        <div className="musicbar-album_frame_container">
            <div className="album-frame">
                <img className="musicbar-album_cover" src={`${process.env.PUBLIC_URL}/images/__musicbar/${Mp3Files[props.currentIndex[0]].cover}.webp`} alt="album_cover" />
            </div>
        </div>
    );
}