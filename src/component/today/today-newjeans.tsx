import { useRef, useState, ChangeEventHandler } from 'react';

import { SelectBox, CheckBoxItem, CheckBox } from '.';



export interface checkedItemHandlerProps {
    id: string;
    checked: boolean;
}

interface CheckBoxItemProps {
    idx: number;
    name: string;
    checkedItemHandler: (isChecked: boolean, itemId: number) => void;
    allCheckedItems: boolean;
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



    //개별 체크박스에 props로 전달할 것
    const checkedItemHandler = ({ id, checked }: checkedItemHandlerProps) => {
        if (checked) {
            checkedItems.add(id);
            setCheckedItems(checkedItems);
        } else if (!checked && checkedItems.has(id)) {
            checkedItems.delete(id);
            setCheckedItems(checkedItems);
        }
        // return (
        //     // console.log(checkedItems)
        // );
    };

    // 1.전체 체크박스 하나 눌렀을 때 set()에 모든 item이 담겨야 함
    // 2.전체 체크박스의 상태도 block이 되어야 함

    // 3.전체 체크박스를 해제했을때 set()에서 모든 item이 빠져야(delete)함
    // 4.전체 체크박스의 상태도 none이 되어야 함


    const allCheckedRef = useRef<HTMLInputElement>(null)


    const [allCheckedItems, setAllCheckedItems] = useState<boolean>(false);

    const allHandleClick = () => {
        setAllCheckedItems(!allCheckedItems);
    }



    const allHandleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.target as HTMLInputElement;
        allHandleClick();
        checkedItemHandler({ id: target.id, checked: target.checked });
    }


    const allHandleCheck = (isChecked: boolean, CheckBoxItems: CheckBoxItemProps[]) => {
        if (isChecked) {
          setAllCheckedItems(true);
          setCheckedItems(new Set(CheckBoxItems.map(({ idx }) => idx)));
        } else {
          checkedItems.clear();
          setAllCheckedItems(false);
          setCheckedItems(new Set());
        }
      };

    console.log(allHandleCheck);




    const allCheckBoxDisplay = allCheckedItems ? "block" : "none";

    // console.log(allCheckedItems);

    return (
        <>
            <div className="today-check_box_select_all_box" >
                <CheckBox className="today-NewJeans_All_Check" style={{ display: allCheckBoxDisplay }} onClick={allHandleClick} />
                <input className="today-check_box_select_all" id="btn1" type="Checkbox" name='select-all' ref={allCheckedRef} checked={allCheckedItems} onClick={allHandleClick} onChange={allHandleChange} />
                <label htmlFor="btn1">총 7곡</label>
            </div>
            {console.log(allCheckedItems)}

            {NewJeansList.map((info) => {
                return (
                    <div className="today-newJeans_check_box_container" key={info.key} id={info.id}>
                        <CheckBoxItem idx={info.idx} name={info.idx} checkedItemHandler={checkedItemHandler} allCheckedItems={allCheckedItems}/>
                        <SelectBox cover={info.cover} title={info.title} artist={info.artist} album={info.album} id={info.id} />
                    </div>
                );
            })}
            {/* {console.log(checkedItems)} */}
        </>
    );


}
