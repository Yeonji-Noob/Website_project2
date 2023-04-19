import { useToggleStore } from "../__header/toggle"

interface AlbumListProps {
    id: string;
    cover: string;
    title: string;
    artist: string;
    album: string;
}



export const SelectBox = ({ cover, title, artist, album, id }: AlbumListProps) => {

    const light = useToggleStore((state: { light: boolean }) => state.light);

    const fillColor = light ? "#000000" : "#ffffff";

    return (
        <div className="today-NewJeans_select_box" key={id} >
            <picture className="today-cover_img_container">
                <source className="today-NewJeans_cover_img" srcSet={require(`../../assets/today/${cover}.webp`).default} type="image/webp" />
                <img className="today-NewJeans_cover_img" src={require(`../../assets/today/${cover}.jpg`)} alt="album_cover" />
            </picture>
            <h1 className="today-NewJeans_title">{title}</h1>
            <h3 className="today-artist_text">{artist}</h3>
            <h3 className="today-album_text">{album}</h3>
            <div className="today-kebab_container">

                <svg className="today-Kebab_menu" width="9" height="36" viewBox="0 0 9 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 9C6.975 9 9 6.975 9 4.5C9 2.025 6.975 0 4.5 0C2.025 0 0 2.025 0 4.5C0 6.975 2.025 9 4.5 9ZM4.5 13.5C2.025 13.5 0 15.525 0 18C0 20.475 2.025 22.5 4.5 22.5C6.975 22.5 9 20.475 9 18C9 15.525 6.975 13.5 4.5 13.5ZM4.5 27C2.025 27 0 29.025 0 31.5C0 33.975 2.025 36 4.5 36C6.975 36 9 33.975 9 31.5C9 29.025 6.975 27 4.5 27Z" fill={fillColor} />
                </svg>

            </div>
        </div>
    );

}