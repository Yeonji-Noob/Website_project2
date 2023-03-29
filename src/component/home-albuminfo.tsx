
// albums의 자식 컴포넌트 입니다
interface AlbumInfoProps {
    // cover: string
    title: string
    artist: string | number
}

const AlbumsInfo = ({title, artist}: AlbumInfoProps) => {

    return (
        <>
        <div className="album-info">
            <p>{title}</p>
            <p className="album-info-artist">{artist}</p>
        </div>
        </>
    )

}

export default AlbumsInfo;