import { HoverButtons } from "./home-playlistbuttons";
import { useState } from "react";
// albums의 자식 컴포넌트 입니다 (#추천플레이리스트)
interface AlbumInfoProps {
    // cover: string
    title: string
}



const AlbumsInfo2 = ({ title }: AlbumInfoProps) => {

    const [isHovering, setisHovering] = useState<boolean>(false);

    return (
        <>
            <div className="hover-area"
                onMouseOver={() => setisHovering(true)}
                onMouseOut={() => setisHovering(false)}>
                {isHovering ? (<HoverButtons />) : ("")}
            </div>
            <div className="album-info">
                <p className="title-bold">{title}</p>
            </div>
        </>
    )

}

export default AlbumsInfo2;