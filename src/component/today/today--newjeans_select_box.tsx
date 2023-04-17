import { Kebab } from ".";

interface AlbumListProps {
    key: number;
    cover:string;
    title: string;
    artist: string;
    album: string;
}



export const SelectBox = ({cover, title, artist, album, key}:AlbumListProps ) => {



    return(
        <div className="today-NewJeans_select_box" key={key} >
            <picture className="today-cover_img_container">
                <source className="today-NewJeans_cover_img" srcSet={require(`../../assets/today/${cover}.webp`).default} type="image/webp" />
                <img className="today-NewJeans_cover_img" src={require(`../../assets/today/${cover}.jpg`)} alt="album_cover" />
            </picture>
            <h1 className="today-NewJeans_title">{title}</h1>
            <h3 className="today-artist_text">{artist}</h3>
            <h3 className="today-album_text">{album}</h3>
            <div className="today-kebab_container">
                <Kebab />
            </div>
        </div>
    );

}