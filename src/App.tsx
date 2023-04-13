import './sass/_main.scss';
import Header from './component/__header/header';
import Sidebar from './component/__sidebar/sidebar';
import MusicBar from './component/__musicbar/musicbar';
import Content from './component/content';

import { BrowserRouter } from 'react-router-dom';

import { useToggleStore } from './component/__header/toggle'

// react.FC로 타입 지정
const App: React.FC = () => {


  const light = useToggleStore((state: { light: boolean }) => state.light);

  return (
    <BrowserRouter>
    <div className="App" id={light ? '' : 'dark-mode2'}>
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