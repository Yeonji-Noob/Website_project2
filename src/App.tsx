import './sass/_main.scss';
import Header from './component/header';
import Sidebar from './component/sidebar';
import Content from './component/content';
import MusicBar from './component/music-bar';
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