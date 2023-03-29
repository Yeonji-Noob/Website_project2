// albums의 자식 컴포넌트 입니다 (#추천플레이리스트)
interface AlbumInfoProps {
    // cover: string
    title: string
}

const AlbumsInfo2 = ({title}: AlbumInfoProps) => {

    return (
        <>
        <div className="album-info">
            <p className="title-bold">{title}</p>
        </div>
        </>
    )

}

export default AlbumsInfo2;