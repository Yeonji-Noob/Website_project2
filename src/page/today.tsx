import { TodayBanner } from "component/today/today-banner";
import { TodayNewJeans } from "component/today/today-newjeans";


//today 페이지의 컴포넌트 규칙: 
//-------class명 앞에 'today'를 붙이는 것을 원칙으로 한다.



const TodaysMusic = () => {



  return (
    <>
    <div className="today">
      <TodayBanner />

      <div className="today-check_box_select_all_box">
        <input className="today-check_box_select_all" id="btn1" type="Checkbox" name='select-all'
          onChange={() => { }} />
        <label htmlFor="btn1">총 7곡</label>
      </div>
    
      <TodayNewJeans/>

    </div>
    </>
  );
};

export default TodaysMusic;