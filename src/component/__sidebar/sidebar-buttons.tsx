import { Ticket } from ".";

export interface SidebarButtonsProps {
    SideText: string[];
}

//(4/18)
// Props를 받을 때 {SideText}로 받았기 때문에, SideText:string[] 했더니 오류가 떠서
// interface를 따로 주고, {} 안에 SideText를 넣어서 type 지정을 해줘야 헀음

/* '{ SideText: string[]; }' 형식은 'IntrinsicAttributes & string[]' 형식에 할당할 수 없습니다.
  'IntrinsicAttributes & string[]' 형식에 'SideText' 속성이 없습니다.ts(2322) */

export const SidebarButtons = ({ SideText }: SidebarButtonsProps) => {
    return (
        <div className="sidebar--button--container">
            <div className="sidebar-button">
                <button className="ticket">
                    <Ticket />
                    <span>{SideText[10]}</span>
                </button>
                <button className="event-button">
                    <span>{SideText[11]}</span>
                </button>
            </div>
        </div>
    );
}