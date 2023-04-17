import { useState } from "react";
import { SelectBox, CheckBox } from ".";


export const TodayNewJeans = (): React.ReactElement => {


    const [checkItems, setCheckItems] = useState<Number[]>([]);


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


    interface HandleProps {
        checked: boolean;
        id: number;
    }

    const HandleSingleCheck = ({ checked, id }: HandleProps) => {
        if (checked) {
            // 단일 선택 시 체크된 아이템을 배열에 추가
            setCheckItems(prev => [...prev, id]);
        } else {
            // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
            setCheckItems(checkItems.filter((el) => el !== id));
        }

    };

    // 체크박스 전체 선택
    const HandleAllCheck = (checked: boolean) => {
        if (checked) {
            // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
            const idArray: number[] = [];
            NewJeansList.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        }
        else {
            // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
            setCheckItems([]);
        }

   
    }


    return (
        <>
            <div className="today-check_box_select_all_box">
                <input className="today-check_box_select_all" id="btn1" type="Checkbox" name='select-all'
                    onChange={(e) => HandleAllCheck(e.target.checked)}
                    checked={checkItems.length === NewJeansList.length ? true : false} />
                <label htmlFor="btn1">총 7곡</label>
            </div>


            {NewJeansList.map((info) => {
                return (
                    <div className="today-newJeans_check_box_container">
                        <input className="today-NewJeans_check_box" type="checkbox" name={`select-${info.id}`}
                        onChange={(e) => HandleSingleCheck({checked: e.target.checked, id: info.id})} 
                        checked={checkItems.includes(info.id) ? true : false}
                        />
                        <SelectBox cover={info.cover} title={info.title} artist={info.artist} album={info.album} key={info.id} />
                    </div>
                );
            })}
        </>
    );


}
