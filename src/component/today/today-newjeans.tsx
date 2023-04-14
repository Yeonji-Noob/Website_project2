// import { ReactComponent as Kebab } from "../../assets/today/today-kebab_menu.svg";
import { SelectBox } from ".";


export const TodayNewJeans = (): React.ReactElement => {

    interface AlbumListProps {
        id: number;
        title: string;
        artist: string;
        cover: string;
        album: string;
    }

    interface AlbumListArrayProps extends Array<AlbumListProps> { }


    // id: 0 를 'id': 0 이렇게 하고 key값을 넘겨야 콘솔창 에러가 안뜬다!!!!!!!
    // map에서 idx값으로 넘겨도 되긴 하지만 이건 권장하는 방식은 아니라고 한다.

    const NewJeansList: AlbumListArrayProps = [
        { 'id': 0, cover: 'today-omg', title: 'Ditto', artist: 'NewJeans', album: ` NewJeans'OMG' ` },
        { 'id': 1, cover: 'today-omg', title: 'OMG', artist: 'NewJeans', album: ` NewJeans'OMG' ` },
        { 'id': 2, cover: 'today-omg', title: 'Cookie', artist: 'NewJeans', album: ` NewJeans'OMG' ` },
        { 'id': 3, cover: 'today-newjeans', title: 'Hype boy', artist: 'NewJeans', album: ` NewJeans 1st EP 'New Jeans' ` },
        { 'id': 4, cover: 'today-zero', title: 'Zero', artist: 'NewJeans', album: 'Zero' },
        { 'id': 5, cover: 'today-newjeans', title: 'Attention', artist: 'NewJeans', album: ` NewJeans 1st EP 'New Jeans' ` },
        { 'id': 6, cover: 'today-newjeans', title: 'Hurt', artist: 'NewJeans', album: ` NewJeans 1st EP 'New Jeans' ` }
    ];


    return (
        <>
            {NewJeansList.map((info) => {
                return <SelectBox cover={info.cover} title={info.title} artist={info.artist} album={info.album} key={info.id}  />
            })}
        </>
    );


}
