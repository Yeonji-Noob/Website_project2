const PlayListAlbums = () => {


    interface PlayAlbumListProps {
        key: number;
        playlist: string;
        png: string;
    }


    interface PlayAlbumListArrayProps extends Array<PlayAlbumListProps> { }



    let playAlbumList: PlayAlbumListArrayProps = [
        {
            key: 0,
            playlist: 'K-POP',
            png: 'playlist_kpop'
        },
        {
            key: 1,
            playlist: 'J-POP',
            png: 'playlist_jpop'
        },
        {
            key: 2,
            playlist: 'Electronic',
            png: 'playlist_electronic'
        },
        {
            key: 3,
            playlist: 'Rock & Metal',
            png: 'playlist_rockmetal'
        },
        {
            key: 4,
            playlist: 'R&B',
            png: 'playlist_rnb'
        }
    ]


    return (
        <div className="playlist-albums-container">
            {playAlbumList.map(info => {

                return (
                    <div key={info.key} className="playlist-box">
                        <img src={require(`../assets/${info.png}.png`)} alt="album-cover" />
                        <p>{info.playlist}</p>
                    </div>
                )

            })}


        </div>
    );
};

export default PlayListAlbums;