import AlbumHover from "./playlist--album_hover"

export const PlayListAlbums: React.FC = () => {


    interface PlayAlbumListProps {
        key: number;
        playlist: string;
        png: string;
    }


    interface PlayAlbumListArrayProps extends Array<PlayAlbumListProps>{}



    let playAlbumList: PlayAlbumListArrayProps = [
        {
            key: 0,
            playlist: 'K-POP',
            png: 'playlist-kpop'
        },
        {
            key: 1,
            playlist: 'J-POP',
            png: 'playlist-jpop'
        },
        {
            key: 2,
            playlist: 'Electronic',
            png: 'playlist-electronic'
        },
        {
            key: 3,
            playlist: 'Rock & Metal',
            png: 'playlist-rock_metal'
        },
        {
            key: 4,
            playlist: 'R&B',
            png: 'playlist-rnb'
        }
    ];


    return (
        <div className="playlist-albums-container">
            
            
            
            {playAlbumList.map(info => {

                return (
                    <div key={info.key} className="playlist-box">
                        <AlbumHover/>
                        <img src={require(`../../assets/playlist/${info.png}.png`)} alt="album-cover" className="playlist--album-img" />
                        <p>{info.playlist}</p>
                    </div>
                )

            })}


        </div>
    );
}

