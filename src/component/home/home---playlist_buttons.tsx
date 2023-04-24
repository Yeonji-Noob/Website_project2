import { PlayListButton, Etc } from '.';

/**
 * 
 * @returns play버튼과 ...버튼(meatballs menu)을 return하는 컴포넌트입니다.
 */
export const HoverButtons: React.FC = () => {

    return (
        <>
            <PlayListButton className="playlist-button" />
            <Etc className="playlist-etc" />
        </>
    );

}