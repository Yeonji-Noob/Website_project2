import { ReactComponent as NoticeImg } from "../assets/notice.svg";
import { ReactComponent as GitHub } from "../assets/github_icon.svg";


// 모바일 지원하지 않는다는 화면 띄우기
export const Notice = () => {
    return (
        <div className="notice">
            <img className="notice_logo" width={83} height={45} src={`${process.env.PUBLIC_URL}/images/__header/header-soribada_logo.png`} alt="logo" />
            <div className="notice_box">
                <NoticeImg id="notice_img" />
                <p>현재 반응형 페이지는 지원하지 않아요!</p>
                <p>추후 업데이트 예정 (아마도...) </p>
                <p>PC 환경에서 접속해주세요</p>
                <p>Chrome 브라우저에 최적화되어있습니다.</p>
                <p>IE는 지원하지 않습니다.</p>
                <a href="https://github.com/Yeonji-Noob/Website_project2.git" title="soribada-project-github" target="_blank" rel="noreferrer" >
                    <GitHub id="github_icon"/>
                </a>
            </div>
        </div>
    );
}