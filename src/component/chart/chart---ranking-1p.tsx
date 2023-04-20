import { ChartNextButton } from ".";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useToggleStore } from "component/__header/toggle";


// Billboard Hot 100 type //

// 출처 : https://github.com/KoreanThinker/billboard-json

/*{
  "date": "YYYY-DD-MM",
  "data": [
    {
      "name": "string",
      "artist": "string",
      "image": "string",
      "rank": "number",
      "last_week_rank": "number | null",
      "peak_rank": "number",
      "weeks_on_chart": "number"
    },
    "..."
  ]
}*/


// 가져올 데이터의 타입 지정
// 다른 페이지에도 동시 적용할 예정이기 때문에 export로 빼줌

export interface chartData {

  rank: number,
  name: string;
  artist: string,
  image: string

}




export const ChartRanking1p: React.FC = () => {

  // 테마별 글씨 색 변경을 위해서 가져옴
  const light = useToggleStore((state: { light: boolean }) => state.light);




  //axios를 활용한 api 호출
  // 상태관리는 useState로

  const [chart, setChart] = useState<null | Array<chartData>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null>(null);
  // console.log(chart);


  //본격적인 호출, async와 await를 사용했습니다
  useEffect(() => {
    const fetchCharts = async () => {

      try {
        setError(null);
        setChart(null);
        setLoading(true);

        //데이터 가져오기
        const response = await axios.get('https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json');
        // 25위까지의 데이터를 잘라서(원본 배열은 유지한 채!) 가져오기
        const hot100Data = response.data.data.slice(0, 25);
        setChart(hot100Data);
      }

      // error type은 unknown이나 any를 쓸 수 있다는데 난 any는 가급적 지양해서 unknown으로 설정함
      catch (e: unknown) {
        console.error(e);
      }

      setLoading(false);
    }

    fetchCharts();

  }, []);


  // 이 부분은 후추에 다른 것으로 교체하기
  if (loading) return <div></div>;
  if (error) return <div>에러가 발생했습니다.</div>
  if (!chart) return null;

  // 숫자 array는 만들고 싶은데 일일히 끝까지 치기 귀찮다면 Array.from()을 이용하면 된다.
  // const chartItems = Array.from({ length: 25 }, (_, i) => i + 1);
  // api를 가져오기 전에 박스 형태의 모습을 보고싶어서 임의로 만든 배열임


 

  return (
    <>
      <Link to="/chart2p" style={{ position: 'absolute' }}>
        <ChartNextButton />
      </Link>

      {chart.map((billboard, idx) => {
        return (

          <div key={idx}>
            <div className="chart-album-flaxbox">
              <div className="chart-album-flax">
                <div className="chart-album-cover">
                  <img src={billboard.image} className="chart-album-cover" alt="album_image" />
                </div>
                <div className="chart-album-textbox">
                  <p>{billboard.rank}</p>
                  <br />
                  <p style={{color: light? '#231edc' : '#aff7d4' }}>{billboard.name}</p>
                  <p>{billboard.artist}</p>
                </div>
              </div>
            </div>
          </div>

        )
      })}
    </>
  );
};
