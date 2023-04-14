import { HoverButtons } from "./";
import { useState } from "react";
// albums의 자식 컴포넌트 입니다
interface AlbumInfoProps {
    // cover: string
    title: string;
    artist: string | number;
}

const AlbumsInfo = ({ title, artist }: AlbumInfoProps) => {

    const [isHovering, setisHovering] = useState<boolean>(false)

    return (
        <>
            <div className="hover-area"
                onMouseOver={() => setisHovering(true)}
                onMouseOut={() => setisHovering(false)}>
                {isHovering ? (<HoverButtons />) : ("")}
            </div>
            <div className="album-info">
                <p>{title}</p>
                <p className="album-info-artist">{artist}</p>
            </div>
        </>
    )

}

export default AlbumsInfo;