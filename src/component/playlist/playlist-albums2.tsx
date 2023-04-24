import AlbumHover from './playlist--album_hover';

export const PlayListAlbums2: React.FC = () => {


    interface PlayAlbumListProps2 {
        key: number;
        playlist: string;
        webp: string;
    }

    interface PlayAlbumListArrayProps2 extends Array<PlayAlbumListProps2> { }



    let playAlbumList2: PlayAlbumListArrayProps2 = [
        {
            key: 5,
            playlist: '부릉부릉',
            webp: 'playlist-vroom_vroom'
        },
        {
            key: 6,
            playlist: '알바할때',
            webp: 'playlist-when_alba'
        },
        {
            key: 7,
            playlist: 'akmaakme',
            webp: 'playlist-akma_akme'
        },
        {
            key: 8,
            playlist: '노동요',
            webp: 'playlist-work_song'
        },
        {
            key: 9,
            playlist: '아이도루',
            webp: 'playlist-idol'
        }

    ];

    return (
        <div className="playlist-albums-container">
            {playAlbumList2.map(info => {

                return (
                    <div key={info.key} className="playlist-box">
                        <AlbumHover />
                        <img src={`${process.env.PUBLIC_URL}/images/playlist/${info.webp}.webp`} alt="album-cover" className="playlist--album-img" />
                        <p>{info.playlist}</p>
                    </div>
                )

            })}


        </div>
    );

}
