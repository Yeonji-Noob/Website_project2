import Ticket from "../assets/buyticket.svg"
import Search from "../assets/seachimg.svg"
import Facebook from "../assets/facebook.svg"
import Twitter from "../assets/twitter.svg"
import Blog from "../assets/blog.svg"
import { Link } from "react-router-dom"
import Scrollbar from 'react-smooth-scrollbar'
// import { useState } from "react"

// import OverscrollPlugin from 'smooth-scrollbar/plugins/overflow';

const Sidebar: React.FC = () => {


  const Sidetext = ['Home', '오늘의 음악', '음악 차트', '플레이리스트', '뮤직비디오', 'For you', '음악친구', '내 음악', '구매한 음악', '클라우드', '이용권 구매', '이벤트']
  // const [currentSelect, setCurrentSelect] = useState<boolean>(true)




  return (
    <div className="sidebar">

      <div className="search-container">
        <img className="search-icon" src={Search} alt="seach-icon" />
        <input type="search" />
      </div>

      {/* smooth scrollbar 라이브러리 사용 */}
      <Scrollbar damping={0.05} thumbMinSize={20} renderByPixels={true} continuousScrolling={true} >
        <div className="sidebar-contents">

          <div className="scroll-content">

            {/* ---------------- */}
            {/* ---첫번째 섹션--- */}
            {/* ---------------- */}
            <p id="home">
              {/* a태그(Link로 감싸져 있으면 a태그로 변환됨) 
                        안에 span 넣는것을 고민했는데 텍스트 정렬을 하기 위해서 넣었음 */}
              <Link to="/home" >
                <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="2px" width="20" height="19" viewBox="0 0 20 19" fill="none">
                  <path d="M7.82369 17.0901V11.6318H12.1715V17.0901C12.1715 17.6906 12.6606 18.1818 13.2584 18.1818H16.5193C17.1171 18.1818 17.6062 17.6906 17.6062 17.0901V9.44843H19.454C19.954 9.44843 20.1932 8.82618 19.8127 8.49868L10.7258 0.278377C10.3128 -0.0927922 9.68237 -0.0927922 9.26933 0.278377L0.182446 8.49868C-0.187116 8.82618 0.041143 9.44843 0.541139 9.44843H2.38895V17.0901C2.38895 17.6906 2.87808 18.1818 3.4759 18.1818H6.73674C7.33456 18.1818 7.82369 17.6906 7.82369 17.0901Z" fill="#231EDC" />
                </svg>
                <span className="sidetext">
                  {Sidetext[0]}
                </span>
              </Link>
            </p>

            <p id="today">
              <Link to="today">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M9.99997 4.34855V11.4736C9.21664 11.0236 8.24997 10.8486 7.22497 11.2069C6.10831 11.6069 5.24997 12.5986 5.04997 13.7652C4.66664 16.0486 6.59997 17.9986 8.87497 17.6402C10.5083 17.3819 11.6666 15.8819 11.6666 14.2236V6.01522H13.3333C14.25 6.01522 15 5.26522 15 4.34855C15 3.43188 14.25 2.68188 13.3333 2.68188H11.6666C10.75 2.68188 9.99997 3.43188 9.99997 4.34855Z" fill="#231EDC" />
                </svg>
                <span className="sidetext" >
                  {Sidetext[1]}
                </span>
              </Link>
            </p>

            <p id="chart">
              <Link to="chart">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M17.7778 0.181885H2.22222C1 0.181885 0 1.18188 0 2.40411V17.9597C0 19.1819 1 20.1819 2.22222 20.1819H17.7778C19 20.1819 20 19.1819 20 17.9597V2.40411C20 1.18188 19 0.181885 17.7778 0.181885ZM11.1111 15.7374H5.55556C4.94444 15.7374 4.44444 15.2374 4.44444 14.6263C4.44444 14.0152 4.94444 13.5152 5.55556 13.5152H11.1111C11.7222 13.5152 12.2222 14.0152 12.2222 14.6263C12.2222 15.2374 11.7222 15.7374 11.1111 15.7374ZM14.4444 11.293H5.55556C4.94444 11.293 4.44444 10.793 4.44444 10.1819C4.44444 9.57077 4.94444 9.07077 5.55556 9.07077H14.4444C15.0556 9.07077 15.5556 9.57077 15.5556 10.1819C15.5556 10.793 15.0556 11.293 14.4444 11.293ZM14.4444 6.84855H5.55556C4.94444 6.84855 4.44444 6.34855 4.44444 5.73744C4.44444 5.12633 4.94444 4.62633 5.55556 4.62633H14.4444C15.0556 4.62633 15.5556 5.12633 15.5556 5.73744C15.5556 6.34855 15.0556 6.84855 14.4444 6.84855Z" fill="#231EDC" />
                </svg>
                <span className="sidetext">
                  {Sidetext[2]}
                </span>

              </Link>
            </p>

            <p id="playlist">
              <Link to="playlist">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M7.99814 13.6801V6.68137C7.99814 6.27144 8.46805 6.03149 8.79799 6.28144L13.4671 9.78079C13.7371 9.98075 13.7371 10.3807 13.4671 10.5806L8.79799 14.08C8.46805 14.3299 7.99814 14.09 7.99814 13.6801ZM19.9559 9.23089C20.5358 15.4897 15.3168 20.7087 9.05794 20.1288C4.62877 19.7189 0.93946 16.2796 0.159607 11.9004C-0.100345 10.4807 -0.030358 9.12091 0.279584 7.86115C0.419558 7.28126 1.03944 6.96132 1.58934 7.16128C2.05925 7.33125 2.3392 7.83115 2.21922 8.32106C2.01926 9.14091 1.94927 10.0207 2.02926 10.9306C2.39919 14.9698 5.91853 18.1792 9.97777 18.1892C14.7669 18.1992 18.5862 13.98 17.9163 9.07092C17.4064 5.37161 14.257 2.45216 10.5277 2.21221C9.69782 2.15222 8.89797 2.2322 8.14811 2.41217C7.6582 2.52215 7.15829 2.2522 6.98833 1.77229C6.78836 1.21239 7.1083 0.602508 7.6782 0.462534C9.46786 0.0326147 11.4275 0.0526112 13.4571 0.832465C17.0164 2.18221 19.606 5.4516 19.9559 9.23089ZM3.49898 2.18221C2.66914 2.18221 1.99926 2.85209 1.99926 3.68193C1.99926 4.51178 2.66914 5.18165 3.49898 5.18165C4.32882 5.18165 4.9987 4.51178 4.9987 3.68193C4.9987 2.85209 4.32882 2.18221 3.49898 2.18221Z" fill="#231EDC" />
                </svg>
                <span className="sidetext">
                  {Sidetext[3]}
                </span>

              </Link>
            </p>

            <p id="music-video">
              <Link to="musicvideo">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 17" fill="none">
                  <path d="M16 0.172852L17.82 3.81285C17.9 3.97285 17.78 4.17285 17.6 4.17285H15.62C15.24 4.17285 14.89 3.96285 14.73 3.62285L13 0.172852H11L12.82 3.81285C12.9 3.97285 12.78 4.17285 12.6 4.17285H10.62C10.24 4.17285 9.89 3.96285 9.73 3.62285L8 0.172852H6L7.82 3.81285C7.9 3.97285 7.78 4.17285 7.6 4.17285H5.62C5.24 4.17285 4.89 3.96285 4.72 3.62285L3 0.172852H2C0.9 0.172852 0 1.07285 0 2.17285V14.1729C0 15.2729 0.9 16.1729 2 16.1729H18C19.1 16.1729 20 15.2729 20 14.1729V1.17285C20 0.622852 19.55 0.172852 19 0.172852H16Z" fill="#231EDC" />
                </svg>
                <span className="sidetext">
                  {Sidetext[4]}
                </span>
              </Link>
            </p>


            {/*----------------- 구분선 ----------------------*/}
            <hr />

            {/* ---------------- */}
            {/* ---두번째 섹션--- */}
            {/* ---------------- */}
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 18" fill="none">
                <path d="M17.6573 0.990273C15.0183 -0.809035 11.7596 0.0306424 10.0003 2.08985C8.24095 0.0306424 4.9822 -0.819031 2.34322 0.990273C0.943757 1.9499 0.0640948 3.56928 0.00411789 5.27862C-0.135828 9.15713 3.30285 12.2659 8.55083 17.0341L8.65079 17.1241C9.4105 17.8138 10.5801 17.8138 11.3398 17.1141L11.4497 17.0141C16.6977 12.2559 20.1264 9.14714 19.9964 5.26863C19.9365 3.56928 19.0568 1.9499 17.6573 0.990273ZM10.1002 15.5447L10.0003 15.6446L9.90031 15.5447C5.14214 11.2363 2.00335 8.38743 2.00335 5.49854C2.00335 3.49931 3.50277 1.99989 5.502 1.99989C7.04141 1.99989 8.54084 2.98951 9.07063 4.35898H10.9399C11.4597 2.98951 12.9591 1.99989 14.4985 1.99989C16.4978 1.99989 17.9972 3.49931 17.9972 5.49854C17.9972 8.38743 14.8584 11.2363 10.1002 15.5447Z" fill="#231EDC" />
              </svg>
              <span>{Sidetext[5]}</span>
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM13.61 6.34C14.68 6.34 15.54 7.2 15.54 8.27C15.54 9.34 14.68 10.2 13.61 10.2C12.54 10.2 11.68 9.34 11.68 8.27C11.67 7.2 12.54 6.34 13.61 6.34ZM7.61 4.76C8.91 4.76 9.97 5.82 9.97 7.12C9.97 8.42 8.91 9.48 7.61 9.48C6.31 9.48 5.25 8.42 5.25 7.12C5.25 5.81 6.3 4.76 7.61 4.76ZM7.61 13.89V17.64C5.21 16.89 3.31 15.04 2.47 12.68C3.52 11.56 6.14 10.99 7.61 10.99C8.14 10.99 8.81 11.07 9.51 11.21C7.87 12.08 7.61 13.23 7.61 13.89ZM10 18C9.73 18 9.47 17.99 9.21 17.96V13.89C9.21 12.47 12.15 11.76 13.61 11.76C14.68 11.76 16.53 12.15 17.45 12.91C16.28 15.88 13.39 18 10 18Z" fill="#231EDC" />
              </svg>
              <span>{Sidetext[6]}</span>
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                <path d="M9 2C7.93913 2 6.92172 2.42143 6.17157 3.17157C5.42143 3.92172 5 4.93913 5 6C5 7.06087 5.42143 8.07828 6.17157 8.82843C6.92172 9.57857 7.93913 10 9 10C10.0609 10 11.0783 9.57857 11.8284 8.82843C12.5786 8.07828 13 7.06087 13 6C13 4.93913 12.5786 3.92172 11.8284 3.17157C11.0783 2.42143 10.0609 2 9 2ZM3 6C3 4.4087 3.63214 2.88258 4.75736 1.75736C5.88258 0.632141 7.4087 0 9 0C10.5913 0 12.1174 0.632141 13.2426 1.75736C14.3679 2.88258 15 4.4087 15 6C15 7.5913 14.3679 9.11742 13.2426 10.2426C12.1174 11.3679 10.5913 12 9 12C7.4087 12 5.88258 11.3679 4.75736 10.2426C3.63214 9.11742 3 7.5913 3 6ZM5 16C4.20435 16 3.44129 16.3161 2.87868 16.8787C2.31607 17.4413 2 18.2044 2 19C2 19.2652 1.89464 19.5196 1.70711 19.7071C1.51957 19.8946 1.26522 20 1 20C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19C0 17.6739 0.526784 16.4021 1.46447 15.4645C2.40215 14.5268 3.67392 14 5 14H13C14.3261 14 15.5979 14.5268 16.5355 15.4645C17.4732 16.4021 18 17.6739 18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20C16.7348 20 16.4804 19.8946 16.2929 19.7071C16.1054 19.5196 16 19.2652 16 19C16 18.2044 15.6839 17.4413 15.1213 16.8787C14.5587 16.3161 13.7956 16 13 16H5Z" fill="#231EDC" />
              </svg>
              <span>{Sidetext[7]}</span>
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5.99777 15.9941C4.89818 15.9941 4.00851 16.8937 4.00851 17.9933C4.00851 19.0929 4.89818 19.9926 5.99777 19.9926C7.09736 19.9926 7.99703 19.0929 7.99703 17.9933C7.99703 16.8937 7.09736 15.9941 5.99777 15.9941ZM0.999629 1.99926H1.99926L5.59792 9.58644L4.24842 12.0255C3.51869 13.365 4.47834 14.9944 5.99777 14.9944H16.9937C17.5435 14.9944 17.9933 14.5446 17.9933 13.9948C17.9933 13.445 17.5435 12.9952 16.9937 12.9952H5.99777L7.09736 10.9959H14.5446C15.2943 10.9959 15.9541 10.5861 16.2939 9.9663L19.8726 3.47871C20.2425 2.81895 19.7627 1.99926 19.0029 1.99926H4.20844L3.53869 0.569788C3.37875 0.219918 3.01888 0 2.63902 0H0.999629C0.449833 0 0 0.449833 0 0.999629C0 1.54942 0.449833 1.99926 0.999629 1.99926ZM15.9941 15.9941C14.8945 15.9941 14.0048 16.8937 14.0048 17.9933C14.0048 19.0929 14.8945 19.9926 15.9941 19.9926C17.0937 19.9926 17.9933 19.0929 17.9933 17.9933C17.9933 16.8937 17.0937 15.9941 15.9941 15.9941Z" fill="#231EDC" />
              </svg>
              <span>{Sidetext[8]}</span>
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 14" fill="none">
                <path d="M16.125 5.03333C15.5583 2.15833 13.0333 0 10 0C7.59167 0 5.5 1.36667 4.45833 3.36667C1.95 3.63333 0 5.75833 0 8.33333C0 11.0917 2.24167 13.3333 5 13.3333H15.8333C18.1333 13.3333 20 11.4667 20 9.16667C20 6.96667 18.2917 5.18333 16.125 5.03333Z" fill="#231EDC" />
              </svg>
              <span>{Sidetext[9]}</span>
            </p>

            {/*----------------- 구분선 ----------------------*/}
            <hr />

            {/* ---------------- */}
            {/* --- sns icon --- */}
            {/* ---------------- */}
            <div className="sns-icon">
              <img src={Facebook} alt="facebook" />
              <img src={Twitter} alt="twitter" />
              <img src={Blog} alt="blog" />
            </div>
          </div>

        </div>
      </Scrollbar>
      {/* ---------------- */}
      {/* ---- buttons ---- */}
      {/* ---------------- */}
      <div className="sidebar--button--container">
        <div className="sidebar-button">
          <button className="ticket">
            <img src={Ticket} alt="buy-ticket" />
            <span>{Sidetext[10]}</span>
          </button>
          <button className="event-button">
            <span>{Sidetext[11]}</span>
          </button>
        </div>
      </div>
    </div>
  )
}


export default Sidebar
