import { ReactComponent as Chevron } from "../assets/playlist/playlist-chevron.svg";
import PlayListAlbums from "component/playlist/playlist-albums";
import PlayListAlbums2 from "component/playlist/playlist-albums2";
import PlayListAlbums3 from "component/playlist/playlist-albums3";

const PlayList = () => {

  let playListText = ['내', '유저', '추천']


        return (
          <>
          <div className="playlist-textbox">
            <h1 className="playlist-h1"># {playListText[0]} 플레이리스트</h1>
            <Chevron id="playlist-chevron" />
          </div>

          <div>
            {/* 앨범자켓이 들어갈 곳입니다 */}
            <PlayListAlbums/>
          </div>


{/* ============================================================== */}


          <div className="playlist-textbox">
            <h1 className="playlist-h1"># {playListText[1]} 플레이리스트</h1>
            <Chevron id="playlist-chevron" />
          </div>

          <div>
            {/* 앨범자켓이 들어갈 곳입니다2*/}
            <PlayListAlbums2/>
          </div>


{/* ============================================================== */}


          <div className="playlist-textbox">
            <h1 className="playlist-h1"># {playListText[2]} 플레이리스트</h1>
            <Chevron id="playlist-chevron" />
          </div>

          <div>
            {/* 앨범자켓이 들어갈 곳입니다3 - 임시 컴포넌트 넣어놓음*/}
            <PlayListAlbums3/>
          </div>
          </>
        );


}

export default PlayList;