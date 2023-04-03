import AlbumsInfo2 from "./home-albuminfo2";


export let HomePlayLists = (): React.ReactElement => {


    interface PlayListsprops {
        key: number;
        title: string;
        cover: string;
    }

    interface PlayListsArrayProps extends Array<PlayListsprops>{}

    let playLists: PlayListsArrayProps = [
        {
            key: 5,
            title: 'Chill & Relax',
            cover: 'chill_n_relax_playlist'
        },
        {
            key: 6,
            title: 'House Music',
            cover: 'house_music_playlist'

        }, {
            key: 7,
            title: '행복을 찾아서',
            cover: 'happy_playlist'

        }, {
            key: 8,
            title: '몽글몽글',
            cover: 'healing_playlist'

        }, {
            key: 9,
            title: '갬성힙합',
            cover: 'emo_rap_playlist'

        }

    ]

    return (
        <div className="home-album-container">
            {playLists.map(info => {
                return(
                    <div className="album-info-flexbox" key={info.key}>
                        <img src={require(`../assets/${info.cover}.png`)} alt="playlists" className="home-album" />
                        <AlbumsInfo2 key={info.key} title={info.title} />
                    </div>
                )
            })}
        </div>
    )

}