import { HoverButtons } from './';

import { useState } from 'react';



interface AlbumInfoProps {
    title: string
}


/**
 * 
 * @param {string} 앨범 타이틀
 * @returns playlists와 genres의 자식 컴포넌트 입니다 (#추천플레이리스트)
 */
const AlbumsInfo2 :React.FC<AlbumInfoProps> = ({ title }: AlbumInfoProps) => {

    const [isHovering, setIsHovering] = useState<boolean>(false);

    return (
        <>
            <div className="hover-area"
                onMouseOver={() => setIsHovering(true)}
                onMouseOut={() => setIsHovering(false)}>
                {isHovering ? (<HoverButtons />) : ("")}
            </div>
            <div className="album-info">
                <p className="title-bold">{title}</p>
            </div>
        </>
    )

}

export default AlbumsInfo2;