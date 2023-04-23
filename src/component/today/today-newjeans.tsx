import { useRef, useState } from "react";
import { SelectBox, CheckBoxItem, CheckBox } from ".";
import { all } from "axios";




export interface setBoxProps {
    checked: boolean;
}

export interface checkedItemHandlerProps {
    id: string;
    checked: boolean;
}


export const TodayNewJeans = (): React.ReactElement => {


    interface AlbumListProps {
        id: string;
        key: number;
        idx: string;
        title: string;
        artist: string;
        cover: string;
        album: string;
    }

    interface AlbumListArrayProps extends Array<AlbumListProps> { }




    // id: 0 를 'id': 0 이렇게 하고 key값을 넘겨야 콘솔창 에러가 안뜬다!!!!!!!
    // map에서 idx값으로 넘겨도 되긴 하지만 이건 권장하는 방식은 아니라고 한다.

    const NewJeansList: AlbumListArrayProps = [
        { 'id': 'a', key: 1, idx: 'check1', cover: 'today-omg', title: 'Ditto', artist: 'NewJeans', album: ` NewJeans'OMG' ` },
        { 'id': 'b', key: 2, idx: 'check2', cover: 'today-omg', title: 'OMG', artist: 'NewJeans', album: ` NewJeans'OMG' ` },
        { 'id': 'c', key: 3, idx: 'check3', cover: 'today-omg', title: 'Cookie', artist: 'NewJeans', album: ` NewJeans'OMG' ` },
        { 'id': 'd', key: 4, idx: 'check4', cover: 'today-newjeans', title: 'Hype boy', artist: 'NewJeans', album: ` NewJeans 1st EP 'New Jeans' ` },
        { 'id': 'e', key: 5, idx: 'check5', cover: 'today-zero', title: 'Zero', artist: 'NewJeans', album: 'Zero' },
        { 'id': 'f', key: 6, idx: 'check6', cover: 'today-newjeans', title: 'Attention', artist: 'NewJeans', album: ` NewJeans 1st EP 'New Jeans' ` },
        { 'id': 'g', key: 7, idx: 'check7', cover: 'today-newjeans', title: 'Hurt', artist: 'NewJeans', album: ` NewJeans 1st EP 'New Jeans' ` }
    ];


    //(4/18)
    // checkbox 상태관리를 array로 할지 Set객체로 할 지 고민
    // 연습 차원에서 Set 객체로 하기로 결정함



    //set 객체 생성
    const [checkedItems, setCheckedItems] = useState(new Set());




    const checkedItemHandler = ({ id, checked }: checkedItemHandlerProps) => {
        if (checked) {
            checkedItems.add(id);
            setCheckedItems(checkedItems);
        } else if (!checked && checkedItems.has(id)) {
            checkedItems.delete(id);
            setCheckedItems(checkedItems);
        }
        return(
            console.log(checkedItems)
        );
    };



    const [allCheckedItems, setAllCheckedItems] = useState<boolean>(false);

    const allCheckedRef = useRef<null>(null)


    const allHandleCheck = () => {
        setAllCheckedItems(!allCheckedItems);
    }

    const allCheckedItemHandler = () => {
        if(checkedItems.size === 7)
            {
            //  allCheckedRef.current.style
            }
        else {
            setAllCheckedItems(false)
        }
        return (console.log())
    }

    const checkBoxDisplay = allCheckedItems ? "block" : "none";

    console.log(allCheckedItems);

    return (
        <>
            <div className="today-check_box_select_all_box" >
                <CheckBox ref={allCheckedRef} className="today-NewJeans_All_Check" 
                style={{ display: checkBoxDisplay }}
                />
                <input className="today-check_box_select_all" id="btn1" type="Checkbox" name='select-all' onClick={allCheckedItemHandler} />
                <label htmlFor="btn1">총 7곡</label>
            </div>


            {NewJeansList.map((info) => {
                return (
                    <div className="today-newJeans_check_box_container" key={info.key} id={info.id}>
                        <CheckBoxItem idx={info.idx} name={info.idx} checkedItemHandler={checkedItemHandler} />
                        <SelectBox cover={info.cover} title={info.title} artist={info.artist} album={info.album} id={info.id} />
                    </div>
                );
            })}
            {console.log(checkedItems)}
        </>
    );


}
