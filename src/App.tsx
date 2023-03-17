import './sass/_main.scss' ;
// import './style/_App.scss' ;
import Header from './component/header';
import Sidebar from './component/sidebar';
import Content from './component/content';
import MusicBar from './component/music-bar';


// react.FC로 타입 지정
const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Sidebar/>
        <Content/>
        <MusicBar/>
      </div>
    </div>
  );
}

export default App;