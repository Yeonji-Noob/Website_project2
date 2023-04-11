import './sass/_main.scss';
import Header from './component/__header/header';
import Sidebar from './component/__sidebar/sidebar';
import MusicBar from './component/__musicbar/music-bar';
import Content from './component/content';

import { BrowserRouter } from 'react-router-dom';


// react.FC로 타입 지정
const App: React.FC = () => {



  return (
    <BrowserRouter>
    <div className="App">
      <div className="container">
        <Header />
        <Sidebar />
        <Content />
        <MusicBar />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;