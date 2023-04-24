import { useState } from 'react';
import { HoverButtons2 } from './';



const AlbumHover: React.FC = () => {

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

// 어차피 단일로 나가는 컴포넌트기 때문에 export default로 써주었다.
export default AlbumHover;