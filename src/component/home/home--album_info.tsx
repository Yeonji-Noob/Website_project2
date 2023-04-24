import { HoverButtons } from './';
import { useState } from 'react';

interface AlbumInfoProps {
    title: string;
    artist: string | number;
}

/**
 * 
 * @param {string} 앨범 타이틀
 * @param {string | number} 아티스트 명인데, 숫자로 된 밴드도 있어서 number를 추가 함
 * @returns albums의 자식 컴포넌트 입니다.
 */
const AlbumsInfo :React.FC<AlbumInfoProps> = ({ title, artist }: AlbumInfoProps) => {

    const [isHovering, setisHovering] = useState<boolean>(false);

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
    );

}

export default AlbumsInfo;