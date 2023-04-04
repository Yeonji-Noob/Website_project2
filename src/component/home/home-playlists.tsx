import AlbumsInfo2 from "./home--album_info2";

// home-AlbumsInfo2 컴포넌트의 부모 컴포넌트
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
            cover: 'home-chill_n_relax'
        },
        {
            key: 6,
            title: 'House Music',
            cover: 'home-house_music'

        }, {
            key: 7,
            title: '행복을 찾아서',
            cover: 'home-happy'

        }, {
            key: 8,
            title: '몽글몽글',
            cover: 'home-healing'

        }, {
            key: 9,
            title: '갬성힙합',
            cover: 'home-emo_rap'

        }

    ]

    return (
        <div className="home-album-container">
            {playLists.map(info => {
                return(
                    <div className="album-info-flexbox" key={info.key}>
                        <img src={require(`../../assets/home/${info.cover}.png`)} alt="playlists" className="home-album" />
                        <AlbumsInfo2 key={info.key} title={info.title} />
                    </div>
                )
            })}
        </div>
    )

}