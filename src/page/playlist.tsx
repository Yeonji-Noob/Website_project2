import { ReactComponent as Chevron } from "../assets/playlist-chevron.svg"
import PlayListAlbums from "component/playlist-albums";

const PlayList = () => {

  let playListText = ['내', '유저', '추천']




  return (
    <div>
      {playListText.map(text => {

        return (
          <>

          <div className="playlist-textbox">
            <h1 className="playlist-h1"># {text} 플레이리스트</h1>
            <Chevron id="playlist-chevron" />
          </div>

          <div>
            {/* 앨범자켓이 들어갈 곳입니다 */}
            <PlayListAlbums/>
          </div>
          </>
        )

      })}
      
    </div>
  );
};

export default PlayList;