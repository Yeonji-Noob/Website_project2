import { HoverButtons } from "./home---playlist_buttons";
import { useState } from "react";

// albums의 자식 컴포넌트 입니다 (#장르별추천)
interface AlbumInfoProps {
    // cover: string
    title: string
}

const AlbumsInfo3 = ({ title }: AlbumInfoProps) => {

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

export default AlbumsInfo3;