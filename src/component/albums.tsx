import AlbumsInfo from "./home-albuminfo";
import A2069 from "../assets/2069.jpg"

// interface AlbumListProps {
//     albumList: albumList[]
// }


let albumList = [
    {
        name: 'thornApple',
        cover: '../assets/thornapple.jpg'
    },
    {
        name: '20:69',
        cover: {A2069}
    },
    {
        name: 'Nomelon Nolemon',
        cover: '../assets/nomelon-nolemon.jpg'
    },
    {
        name: '실리카겔',
        cover: '../assets/silica-gel.jpg'
    },
    {
        name: 'Chilldspot',
        cover: '../assets/chilldspot.jpg'
    },
];




export function Albums () {


    return (<div className="home-album-container">
        {albumList.map((img, i) => {

            return (
                <div className="album-info-flexbox">
                    {/* <div className="home-album">
                    </div>

                    <div className="album-info">
                        <p>albumList.name</p>
                        <p>dddd</p>
                    </div> */}
                    <AlbumsInfo cover={A2069} title="미아" artist="20:69"/>

                </div>
            )
        })}

    </div>

    )
}
