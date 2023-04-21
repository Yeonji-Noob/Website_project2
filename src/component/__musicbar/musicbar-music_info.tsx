import Mp3Files from ".";

interface CurrentIndexProps {
    currentIndex: number[];
  }

//musicbar로부터 props를 가져와 곡의 정보가 바뀜

export const MusicInfo = (props: CurrentIndexProps) => {


    
    return (
        <div className="song-by">
            <p>{Mp3Files[props.currentIndex[0]].title}</p>
            <p>{Mp3Files[props.currentIndex[0]].artist}</p>
        </div>
    );
}