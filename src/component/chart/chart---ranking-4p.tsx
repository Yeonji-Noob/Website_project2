import { ChartPrevButton } from "./";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { chartData } from "./chart---ranking-1p";
import { useToggleStore } from "component/__header/toggle";


export const ChartRanking4p: React.FC = () => {


  // 테마별 글씨 색 변경을 위해서 가져옴
  const light = useToggleStore((state: { light: boolean }) => state.light);

  const [chart, setChart] = useState<null | Array<chartData>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null>(null);


  useEffect(() => {


    const fetchChart = async () => {

      try {

        setChart(null);
        setError(null);
        setLoading(true);

        const response = await axios.get('https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json');
        const hot100Data = response.data.data.slice(75, 100);
        setChart(hot100Data);

      }
      catch (e: unknown) {
        console.error(e);
      }

      setLoading(false);

    }

    fetchChart();

  }, []);


  if (loading) return <div></div>;
  if (error) return <div>에러가 발생했습니다.</div>
  if (!chart) return null;



  return (
    <>
      <Link to={`${process.env.PUBLIC_URL}/chart3p`} style={{ position: 'absolute' }}>
        <ChartPrevButton />
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
                  <p style={{ color: light ? '#231edc' : '#aff7d4' }} >{billboard.name}</p>
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
