// albums의 자식 컴포넌트 입니다 (#장르별추천)
interface AlbumInfoProps {
    // cover: string
    title: string
}

const AlbumsInfo3 = ({title}: AlbumInfoProps) => {

    return (
        <>
        <div className="album-info">
            <p className="title-bold">{title}</p>
        </div>
        </>
    )

}

export default AlbumsInfo3;