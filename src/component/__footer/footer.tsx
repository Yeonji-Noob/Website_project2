// (3/25일 기록)
// import * as ~~~~는 namespace를 생성하고 모듈의 모든 내용을 가져옴
// 그냥 import ~~ from은 default export를 가져옴


const Footer: React.FC<{}> = () => (

    <footer>
        {/* -----상단 메뉴----- */}
        <span className="footer--menu">
            <p>회사소개</p>
            <p>제휴문의</p>
            <p>이용약관</p>
            <p>개인정보 처리방침</p>
            <p>청소년보호정책</p>
            <p>이메일주소 무단수집거부</p>
            <p>저작권보호센터</p>
            <p>음원 유통/배급 문의</p>
        </span>



        {/* -----하단내용----- */}
        <div className="footer--contents">

            <div className="footer-text">
                <p>(주)소리바다 대표이사 오재명, 최성일</p>
                <p>주소 : 서울특별시 강남구 도산대로 217, 3층(신사동,강남빌딩)</p>
                <p>고객센터 : webmaster@soribada.com ⁄ T.1577-7334(유료)</p>
                <p>사업자등록번호 : 505-81-15915 통신판매업 </p>
                <p>신고번호 : 제2013-서울강남-00718호 사업자정보확인</p>
                <p>호스팅 제공자: (주)소리바다</p>
                <p>&copy; soribada.lnc. All rights reserved.</p>
            </div>


            <div className="customer-service">
                <p>고객센터 : 1577-7334</p>
                <p>FAQ 바로가기</p>
                <p className="chrome">본 사이트는 chrome 브라우저에 최적화되어있습니다.</p>
            </div>


            <div className="certificate">
                <img width={113} height={35} src={`${process.env.PUBLIC_URL}/images/__footer/footer-quality_certification.webp`} alt="사이트 품질인증" />
                <img width={98} height={35} src ={`${process.env.PUBLIC_URL}/images/__footer/footer-music_copyright.webp`} alt="음악저작권 이용허락인증"/>
                <img width={83} height={35} src ={`${process.env.PUBLIC_URL}/images/__footer/footer-protection.webp`} alt="한국저작권보호원" /> 
                <img width={138} height={35} src ={`${process.env.PUBLIC_URL}/images/__footer/footer-awards.webp`} alt="2014 스마트 앱 어워즈 기능서비스부문 통합대상" /> 
                <img width={200} height={35} src ={`${process.env.PUBLIC_URL}/images/__footer/footer-kisa.webp`} alt="국내 정보보호 표준인증 KISA ISMS획득" />
            </div>


        </div>
    </footer>

)


// 모듈을 export 하는 방법에는 named export도 있다는 것을 알지만 
// 어차피 하나의 모듈만 내보낼 것이기 때문에 export default를 사용했음
export default Footer;