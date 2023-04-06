import { useState } from "react";
import { HoverButtons2 } from "component/playlist/playlist---playlist_buttons";



const AlbumHover = () => {

  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <>
      <div className="playlist--album-hover"
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        {isHovering ? (<HoverButtons2 />) : ("")}
      </div>
    </>


  );

}

export default AlbumHover;