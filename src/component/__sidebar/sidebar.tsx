
import { Search, SidebarButtons, SidebarSnsIcon, SidebarSecondSection } from "./"

import { useToggleStore } from '../__header/toggle';


import { Link } from "react-router-dom"
import Scrollbar from "react-smooth-scrollbar";
import { useRef } from "react"


// export interface SidebarButtonsProps {
//   SideText: string[];
// }

const Sidebar: React.FC = () => {



  const SideText = ['Home', '오늘의 음악', '음악 차트', '플레이리스트', '뮤직비디오', 'For you', '음악친구', '내 음악', '구매한 음악', '클라우드', '이용권 구매', '이벤트'];

  const scrollbar = useRef(null);

  const light = useToggleStore((state: { light: boolean }) => state.light);

  return (
    <div className="sidebar" id={light ? 'light-mode2' : 'dark-mode'}>

      <div className="search-container">
        <Search className="search-icon" />
        <input type="search" aria-label="Search" />
      </div>

      {/* smooth scrollbar 라이브러리 사용 */}
      < Scrollbar ref={scrollbar} damping={0.09} thumbMinSize={10} >
        <div className="sidebar-contents"  >

          <div className="scroll-content" id={light ? 'light-mode-sidebar' : 'dark-mode-sidebar'}>

            {/* ---------------- */}
            {/* ---첫번째 섹션--- */}
            {/* ---------------- */}
            <p id="home">
              {/* a태그(Link로 감싸져 있으면 a태그로 변환됨) 
                        안에 span 넣는것을 고민했는데 텍스트 정렬을 하기 위해서 넣었음 */}
              <Link to={`${process.env.PUBLIC_URL}/home`} >
                <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="2px" width="20" height="19" viewBox="0 0 20 19" fill="none">
                  <path d="M7.82369 17.0901V11.6318H12.1715V17.0901C12.1715 17.6906 12.6606 18.1818 13.2584 18.1818H16.5193C17.1171 18.1818 17.6062 17.6906 17.6062 17.0901V9.44843H19.454C19.954 9.44843 20.1932 8.82618 19.8127 8.49868L10.7258 0.278377C10.3128 -0.0927922 9.68237 -0.0927922 9.26933 0.278377L0.182446 8.49868C-0.187116 8.82618 0.041143 9.44843 0.541139 9.44843H2.38895V17.0901C2.38895 17.6906 2.87808 18.1818 3.4759 18.1818H6.73674C7.33456 18.1818 7.82369 17.6906 7.82369 17.0901Z" fill="#231EDC" />
                </svg>
                <span className="sidetext">
                  {SideText[0]}
                </span>
              </Link>
            </p>

            <p id="today">
              <Link to={`${process.env.PUBLIC_URL}/today`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M9.99997 4.34855V11.4736C9.21664 11.0236 8.24997 10.8486 7.22497 11.2069C6.10831 11.6069 5.24997 12.5986 5.04997 13.7652C4.66664 16.0486 6.59997 17.9986 8.87497 17.6402C10.5083 17.3819 11.6666 15.8819 11.6666 14.2236V6.01522H13.3333C14.25 6.01522 15 5.26522 15 4.34855C15 3.43188 14.25 2.68188 13.3333 2.68188H11.6666C10.75 2.68188 9.99997 3.43188 9.99997 4.34855Z" fill="#231EDC" />
                </svg>
                <span className="sidetext" >
                  {SideText[1]}
                </span>
              </Link>
            </p>

            <p id="chart">
              <Link to={`${process.env.PUBLIC_URL}/chart`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M17.7778 0.181885H2.22222C1 0.181885 0 1.18188 0 2.40411V17.9597C0 19.1819 1 20.1819 2.22222 20.1819H17.7778C19 20.1819 20 19.1819 20 17.9597V2.40411C20 1.18188 19 0.181885 17.7778 0.181885ZM11.1111 15.7374H5.55556C4.94444 15.7374 4.44444 15.2374 4.44444 14.6263C4.44444 14.0152 4.94444 13.5152 5.55556 13.5152H11.1111C11.7222 13.5152 12.2222 14.0152 12.2222 14.6263C12.2222 15.2374 11.7222 15.7374 11.1111 15.7374ZM14.4444 11.293H5.55556C4.94444 11.293 4.44444 10.793 4.44444 10.1819C4.44444 9.57077 4.94444 9.07077 5.55556 9.07077H14.4444C15.0556 9.07077 15.5556 9.57077 15.5556 10.1819C15.5556 10.793 15.0556 11.293 14.4444 11.293ZM14.4444 6.84855H5.55556C4.94444 6.84855 4.44444 6.34855 4.44444 5.73744C4.44444 5.12633 4.94444 4.62633 5.55556 4.62633H14.4444C15.0556 4.62633 15.5556 5.12633 15.5556 5.73744C15.5556 6.34855 15.0556 6.84855 14.4444 6.84855Z" fill="#231EDC" />
                </svg>
                <span className="sidetext">
                  {SideText[2]}
                </span>
              </Link>
            </p>

            <p id="playlist">
              <Link to={`${process.env.PUBLIC_URL}/playlist`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M7.99814 13.6801V6.68137C7.99814 6.27144 8.46805 6.03149 8.79799 6.28144L13.4671 9.78079C13.7371 9.98075 13.7371 10.3807 13.4671 10.5806L8.79799 14.08C8.46805 14.3299 7.99814 14.09 7.99814 13.6801ZM19.9559 9.23089C20.5358 15.4897 15.3168 20.7087 9.05794 20.1288C4.62877 19.7189 0.93946 16.2796 0.159607 11.9004C-0.100345 10.4807 -0.030358 9.12091 0.279584 7.86115C0.419558 7.28126 1.03944 6.96132 1.58934 7.16128C2.05925 7.33125 2.3392 7.83115 2.21922 8.32106C2.01926 9.14091 1.94927 10.0207 2.02926 10.9306C2.39919 14.9698 5.91853 18.1792 9.97777 18.1892C14.7669 18.1992 18.5862 13.98 17.9163 9.07092C17.4064 5.37161 14.257 2.45216 10.5277 2.21221C9.69782 2.15222 8.89797 2.2322 8.14811 2.41217C7.6582 2.52215 7.15829 2.2522 6.98833 1.77229C6.78836 1.21239 7.1083 0.602508 7.6782 0.462534C9.46786 0.0326147 11.4275 0.0526112 13.4571 0.832465C17.0164 2.18221 19.606 5.4516 19.9559 9.23089ZM3.49898 2.18221C2.66914 2.18221 1.99926 2.85209 1.99926 3.68193C1.99926 4.51178 2.66914 5.18165 3.49898 5.18165C4.32882 5.18165 4.9987 4.51178 4.9987 3.68193C4.9987 2.85209 4.32882 2.18221 3.49898 2.18221Z" fill="#231EDC" />
                </svg>
                <span className="sidetext">
                  {SideText[3]}
                </span>

              </Link>
            </p>

            <p id="music-video">
              {/* <Link to="musicvideo"> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 17" fill="none">
                  <path d="M16 0.172852L17.82 3.81285C17.9 3.97285 17.78 4.17285 17.6 4.17285H15.62C15.24 4.17285 14.89 3.96285 14.73 3.62285L13 0.172852H11L12.82 3.81285C12.9 3.97285 12.78 4.17285 12.6 4.17285H10.62C10.24 4.17285 9.89 3.96285 9.73 3.62285L8 0.172852H6L7.82 3.81285C7.9 3.97285 7.78 4.17285 7.6 4.17285H5.62C5.24 4.17285 4.89 3.96285 4.72 3.62285L3 0.172852H2C0.9 0.172852 0 1.07285 0 2.17285V14.1729C0 15.2729 0.9 16.1729 2 16.1729H18C19.1 16.1729 20 15.2729 20 14.1729V1.17285C20 0.622852 19.55 0.172852 19 0.172852H16Z" fill="#231EDC" />
                </svg>
                <span className="sidetext">
                  {SideText[4]}
                </span>
              {/* </Link> */}
            </p>

            {/*----------------- 구분선 ----------------------*/}
            <hr />

            {/* ---------------- */}
            {/* ---두번째 섹션--- */}
            {/* ---------------- */}
            <SidebarSecondSection SideText={SideText}/>
            {/*----------------- 구분선 ----------------------*/}
            <hr />

            {/* ---------------- */}
            {/* --- sns icon --- */}
            {/* ---------------- */}
            <SidebarSnsIcon />
          </div>

        </div>
      </ Scrollbar>

      {/* ---------------- */}
      {/* ---- buttons ---- */}
      {/* ---------------- */}
      <SidebarButtons SideText={SideText} />
    </div>
  )
}


export default Sidebar;