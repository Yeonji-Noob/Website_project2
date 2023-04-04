// const playListAlbums2 = () => {


//     interface PlayAlbumListProps2 {
//         key: number;
//         playlist: string;
//         png: string;
//     }

//     interface PlayAlbumListArrayProps2 extends Array<PlayAlbumListProps2> {}



//     let playAlbumList2: PlayAlbumListArrayProps2 = [
//         {
//             key: 5,
//             playlist:,
//             png:
//         }, 
//         {
//             key: 6,
//             playlist:,
//             png:
//         }, 
//         {
//             key: 7,
//             playlist:,
//             png:
//         }, 
//         {
//             key: 8,
//             playlist:,
//             png:
//         }, 
//         {
//             key: 9,
//             playlist:,
//             png:
//         }

//     ]

//     return (
//         <div className="playlist-albums-container">
//             {playAlbumList2.map(info => {

//                 return (
//                     <div key={info.key} className="playlist-box">
//                         <img src={require(`../assets/${info.png}.png`)} alt="album-cover" />
//                         <p>{info.playlist}</p>
//                     </div>
//                 )

//             })}


//         </div>
//     );

// }


// export default PlayListAlbums2;