export const HoverButtons: React.FC = () => {

    return (
        <>
        {/* 이 부분 svg로 대체해서 수정하고, hover시 색 달라지는거 넣기 */}
            <img src={require('../../assets/home/home-playlist_button.png')} alt="playlist-button" className="playlist-button" />
            <img src={require('../../assets/home/home-etc_icon.png')} alt="playlist-etc" className="playlist-etc" />
        </>
    )
 
}