import Mainimg from "../assets/playlistbox.svg"

const Home: React.FC = () => (

    <div className="home">
        <img src={Mainimg} alt="imgbox" />
        <p># 추천앨범</p>
        <div></div>
        <p># 추천플레이리스트</p>
        <div></div>
        <p># 장르별추천</p>
        <div></div>
        <p>Artist News</p>
        <div></div>
    </div>

)

export default Home;