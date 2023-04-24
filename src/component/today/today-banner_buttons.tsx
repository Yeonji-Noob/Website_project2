import { ReactComponent as TodayPlay } from '../../assets/today/today-play.svg';
import { ReactComponent as TodayShuffle } from '../../assets/today/today-shuffle.svg';


const TodayButtons = () => {
  return (
    <div className="today-button-container">
      <TodayPlay id="today-play"/>
      <TodayShuffle id="today-shuffle"/>
    </div>
  );
}

export default TodayButtons;
