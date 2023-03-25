
interface AlbumInfoProps {
    cover?: string
    title: string
    artist: string | number
}

const AlbumsInfo = ({cover, title, artist}: AlbumInfoProps) => {

    return (
        <>
        {/* <div className="home-album">
        </div> */}
        <img src= {cover} alt="album-cover" className="home-album" />
        <div className="album-info">
            <p>{title}</p>
            <p>{artist}</p>
        </div>
        </>
    )

}

export default AlbumsInfo;