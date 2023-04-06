import AlbumsInfo2 from "./home--album_info2";

// home-AlbumsInfo3 컴포넌트의 부모 컴포넌트
export const HomeGenreLists = () => {


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
            cover: 'home-indie_music'
        },
        {
            key: 11,
            title: 'WORLD OF METAL',
            cover: 'home-metal_music'

        }, {
            key: 12,
            title: 'HIP-HOP HITS',
            cover: 'home-hiphop_music'

        }, {
            key: 13,
            title: 'JAZZ BLISS',
            cover: 'home-classic_jazz_music'

        }, {
            key: 14,
            title: '일렉트로닉 DJ-MIX',
            cover: 'home-dj_mix_music'

        }

    ]

    return (
        <div className="home-album-container" >
            {genres.map(info => {
                return(
                    // ...감싸는 div에도 key를 달아줘야 콘솔창에서 key관련 에러가 안뜬다
                    <div className="album-info-flexbox"  key={info.key}>
                        <img src={require(`../../assets/home/${info.cover}.png`)} alt="music-genres" className="home-album" />
                        <AlbumsInfo2 key={info.key} title={info.title} />
                    </div>
                )
            })}
        </div>
    )

}