import AlbumsInfo from "./home--album_info";



// home-AlbumsInfo 컴포넌트의 부모 컴포넌트
export const HomeAlbums = (): React.ReactElement => {



    // 이 부분에서 진짜 고생을 많이 해서 타입스크립트 공부 차원에서 메모해 둠
    // 데이터가 [{},{},{}]인 객체 배열일 때
    // 객체 따로 배열 따로 interface를 정해주는 것이 좋다.
    // ref : https://velog.io/@adguy/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9D%EC%B2%B4-%EB%B0%B0%EC%97%B4-%EC%A0%95%EC%9D%98%ED%95%98%EB%8A%94%EB%B2%95


    //먼저 객체의 interface를 정해줌
    //?를 붙여준 것은 union type이 됨
    interface AlbumListProps {
        key: number;
        title: string;
        artist: string;
        cover: string;
    }

    //정해줬던거에다가 [] interface를 씌움
    // <>형태로 씌우는 것을 제네릭(Generic)이라고 함. 
    // 타입정의를 매개변수로 넘겨주는 것임
    interface AlbumListArrayProps extends Array<AlbumListProps> { }


    let albumList: AlbumListArrayProps = [
        {
            key: 0,
            title: '계몽',
            artist: '쏜애플(Thornapple)',
            cover: 'home-thornapple'
        },
        {
            key: 1,
            title: '미아',
            artist: '20:69',
            cover: 'home-2069'
        },
        {
            key: 2,
            title: 'INAZMA',
            artist: 'NOMELON NOLEMON',
            cover: 'home-nomelon_nolemon'
        },
        {
            key: 3,
            title: '실리카겔',
            artist: '실리카겔',
            cover: 'home-silica_gel'
        },
        {
            key: 4,
            title: 'Ingredients',
            artist: 'Chilldspot',
            cover: 'home-chilldspot'
        },

    ];

    // 앨범커버들한테 '각각' 마우스를 올렸을 때(hover), 재생과 etc버튼이 뜨게 하기 기능구현
    // 이미 map을 줘버린 상태에서 하는 것이라 어떻게 구현할지 고민이 됨...

    // map에서 이미지 불러올 때 오류가 있어서 해결했음(내 기초지식 부족 문제,,,)
    // https://velog.io/@dlruddms5619/Error-React-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B2%BD%EB%A1%9C-%EC%97%90%EB%9F%AC
    // 링크와 동일한 오류여서 해결했고, es6 백틱 써서 넣음
    return (
        <div className="home-album-container">

            {albumList.map(info => {

                return (
                    <div key={info.key} className="album-info-flexbox">
                        <img src={require(`../../assets/home/${info.cover}.jpg`)} alt="album-cover" className="home-album" />
                        <AlbumsInfo key={info.key} title={info.title} artist={info.artist} />
                    </div>
                )
            })}
        </div>

    )
}
