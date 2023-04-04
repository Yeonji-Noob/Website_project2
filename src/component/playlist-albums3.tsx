const playListAlbums3 = () => {

    interface PlayAlbumListProps3 {
        key: number;
        playlist: string;
        png: string;
    }

    interface PlayAlbumListArrayProps3 extends Array<PlayAlbumListProps3> {}

    let playAlbumList3: PlayAlbumListArrayProps3  = [
        {
            key: 10,
            playlist:,
            png:
        }, 
        {
            key: 11,
            playlist:,
            png:
        }, 
        {
            key: 12,
            playlist:,
            png:
        }, 
        {
            key: 13,
            playlist:,
            png:
        }, 
        {
            key: 14,
            playlist:,
            png:
        }

    ]
    return (
        <div className="playlist-albums-container">
            {playAlbumList3.map(info => {

                return (
                    <div key={info.key} className="playlist-box">
                        <img src={require(`../assets/${info.png}.png`)} alt="album-cover" />
                        <p>{info.playlist}</p>
                    </div>
                )

            })}


        </div>
    );


}

export default PlayListAlbums3;