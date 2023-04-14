import AlbumHover from "./playlist--album_hover"

export const PlayListAlbums3 = () => {

    interface PlayAlbumListProps3 {
        key: number;
        playlist: string;
        png: string;
    }

    interface PlayAlbumListArrayProps3 extends Array<PlayAlbumListProps3> { }

    let playAlbumList3: PlayAlbumListArrayProps3 = [
        {
            key: 10,
            playlist: 'HIP-HOP',
            png: 'playlist-hip_hop_trend'
        },
        {
            key: 11,
            playlist: 'POP',
            png: 'playlist-pop_trend'
        },
        {
            key: 12,
            playlist: 'ROCK',
            png: 'playlist-rock_trend'
        },
        {
            key: 13,
            playlist: 'J-POP',
            png: 'playlist-jpop_trend'
        },
        {
            key: 14,
            playlist: 'R&B',
            png: 'playlist-rnb_trend'
        }

    ]
    return (
        <div className="playlist-albums-container">
            {playAlbumList3.map(info => {

                return (
                    <div key={info.key} className="playlist-box">
                        <AlbumHover />
                        <img src={require(`../../assets/playlist/${info.png}.png`)} alt="album-cover" className="playlist--album-img" />
                        <p>{info.playlist}</p>
                    </div>
                )

            })}


        </div>
    );


}
