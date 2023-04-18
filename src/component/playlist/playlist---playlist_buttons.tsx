import { PlayListButton, Etc } from "."

// (4/18)
// hover시 색 변화를 추가하였음

export const HoverButtons2: React.FC = () => {

    return (
        <div className="playlist--button-flex-box">
            <PlayListButton className="playlist-button2" />
            <Etc className="playlist-etc2" />
        </div>
    )

}