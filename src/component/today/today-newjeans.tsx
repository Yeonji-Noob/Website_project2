import { ReactComponent as Kebab } from "../../assets/today/today-kebab_menu.svg";

export const TodayNewJeans = (): React.ReactElement => {

    interface AlbumListProps {
        key: number;
        title: string;
        artist: string;
        cover: string;
        album: string;
    }

    interface AlbumListArrayProps extends Array<AlbumListProps> { }


    const NewJeansList: AlbumListArrayProps = [
        { key: 0, cover: 'home-omg', title: 'Ditto', artist: 'NewJeans', album: ` NewJeans'OMG' ` },
        { key: 1, cover: 'home-omg', title: 'OMG', artist: 'NewJeans', album: ` NewJeans'OMG' ` },
        { key: 2, cover: 'home-omg', title: 'Cookie', artist: 'NewJeans', album: ` NewJeans'OMG' ` },
        { key: 3, cover: 'home-newjeans', title: 'Hype boy', artist: 'NewJeans', album: ` NewJeans 1st EP 'New Jeans' ` },
        { key: 4, cover: 'home-zero', title: 'Zero', artist: 'NewJeans', album:'Zero' },
        { key: 5, cover: 'home-newjeans', title: 'Attention', artist: 'NewJeans', album: ` NewJeans 1st EP 'New Jeans' ` },
        { key: 6, cover: 'home-newjeans', title: 'Hurt', artist: 'NewJeans', album: ` NewJeans 1st EP 'New Jeans' ` }
    ];


    return (
        <>
            {NewJeansList.map(info => {
                return (
                    <div className="today-NewJeans_select_box">
                        <input className="today-NewJeans_check_box" type="checkbox" />
                        <div className="coverimg"></div>
                        <h1 className="today-NewJeans_title">{info.title}</h1>
                        <h3 className="today-artist_text">{info.artist}</h3>
                        <h3 className="today-album_text">{info.album}</h3>
                        <Kebab />
                    </div>
                )
            })}
        </>
    );




}
