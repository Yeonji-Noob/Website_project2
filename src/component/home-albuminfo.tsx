
// albums의 자식 컴포넌트 입니다
interface AlbumInfoProps {
    // cover: string
    title: string
    artist: string | number
}

const AlbumsInfo = ({title, artist}: AlbumInfoProps) => {

    return (
        <>
        {/* <div className="home-album">
        </div> */}
        {/* <img src= {cover} alt="album-cover" className="home-album" /> */}
        <div className="album-info">
            <p>{title}</p>
            <p>{artist}</p>
        </div>
        </>
    )

}

export default AlbumsInfo;