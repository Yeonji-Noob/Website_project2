import AlbumsInfo3 from "./home-albuminfo3";


export let HomeGenreLists = (): React.ReactElement => {


    interface GenreListsProps {
        key: number;
        title:string;
        cover: string;
    }

    interface GenreListsArrayProps extends Array<GenreListsProps>{}  

    let genres: GenreListsArrayProps = [
        {
            key: 10,
            title: '인디무드',
            cover: 'indie_music'
        },
        {
            key: 11,
            title: 'WORLD OF METAL',
            cover: 'metal_music'

        }, {
            key: 12,
            title: 'HIP-HOP HITS',
            cover: 'hiphop_music'

        }, {
            key: 13,
            title: 'JAZZ BLISS',
            cover: 'classic_jazz_music'

        }, {
            key: 14,
            title: '일렉트로닉 DJ-MIX',
            cover: 'dj_mix_music'

        }

    ]

    return (
        <div className="home-album-container" >
            {genres.map(info => {
                return(
                    // ...감싸는 div에도 key를 달아줘야 콘솔창에서 key 관련 에러가 안뜬다
                    <div className="album-info-flexbox"  key={info.key}>
                        <img src={require(`../assets/${info.cover}.png`)} alt="music-genres" className="home-album" />
                        <AlbumsInfo3 key={info.key} title={info.title} />
                    </div>
                )
            })}
        </div>
    )

}