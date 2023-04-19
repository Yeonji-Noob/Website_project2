import { TodayBanner } from "component/today/today-banner";
import { TodayNewJeans } from "component/today/today-newjeans";


//today 페이지의 컴포넌트 규칙: 
//-------class명 앞에 'today'를 붙이는 것을 원칙으로 한다.



export const TodaysMusic = () => {

  return (
    <div className="today">
      <TodayBanner />
      <TodayNewJeans/>
    </div>
  );
};
