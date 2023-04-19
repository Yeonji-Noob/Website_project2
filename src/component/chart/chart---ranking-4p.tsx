import { ChartPrevButton } from "./";
import { Link } from "react-router-dom";

export const ChartRanking4p: React.FC = () => {

  // 대략 25번까지 있음
  // 숫자 array는 만들고 싶은데 일일히 끝까지 치기 귀찮다면 Array.from()을 이용하면 된다.
  const chartItems = Array.from({ length: 25 }, (_, i) => i + 76);

  return (
    <>
      <Link to="/chart3p" style={{ position: 'absolute' }}>
        <ChartPrevButton />
      </Link>

      {chartItems.map((item, idx) => {
        return (

          <div key={idx}>

            <div className="chart-album-flaxbox">
              <div className="chart-album-flax">
                <div className="chart-album-cover"></div>
                <div className="chart-album-textbox">
                  <p>{item}</p>
                  <p>song title</p>
                  <p>composer</p>
                </div>
              </div>
            </div>

          </div>

        )
      })}
    </>
  );
};
