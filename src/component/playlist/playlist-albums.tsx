import AlbumHover from './playlist--album_hover';

export const PlayListAlbums: React.FC = () => {


    interface PlayAlbumListProps {
        key: number;
        playlist: string;
        webp: string;
    }


    interface PlayAlbumListArrayProps extends Array<PlayAlbumListProps>{}



    let playAlbumList: PlayAlbumListArrayProps = [
        {
            key: 0,
            playlist: 'K-POP',
            webp: 'playlist-kpop'
        },
        {
            key: 1,
            playlist: 'J-POP',
            webp: 'playlist-jpop'
        },
        {
            key: 2,
            playlist: 'Electronic',
            webp: 'playlist-electronic'
        },
        {
            key: 3,
            playlist: 'Rock & Metal',
            webp: 'playlist-rock_metal'
        },
        {
            key: 4,
            playlist: 'R&B',
            webp: 'playlist-rnb'
        }
    ];


    return (
        <div className="playlist-albums-container">
            
            
            
            {playAlbumList.map(info => {

                return (
                    <div key={info.key} className="playlist-box">
                        <AlbumHover/>
                        <img src={`${process.env.PUBLIC_URL}/images/playlist/${info.webp}.webp`} alt="album-cover" className="playlist--album-img" />
                        <p>{info.playlist}</p>
                    </div>
                )

            })}


        </div>
    );
}

