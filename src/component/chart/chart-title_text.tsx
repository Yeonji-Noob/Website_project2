import { Trophy, Chevron } from "./"
import axios from "axios";
import { useEffect, useState } from "react";
// import { Chart } from "page/chart";


export const ChartTitleText = () => {

  const [chart, setChart] = useState<null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null>(null);

  useEffect(() => {
    const fetchCharts = async () => {

      try {
        setError(null);
        setChart(null);
        setLoading(true);

        //데이터 가져오기
        const response = await axios.get('https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json');

        const dateData = response.data.date

        setChart(dateData);

        // console.log(dateData);

      }

      
      catch (e: unknown) {
        console.error(e);
      }

      setLoading(false);
    }

    fetchCharts();

  }, []);


  // 이 부분은 후추에 다른 것으로 교체하기
  if (loading) return <div>로딩중 ...</div>;
  if (error) return <div>에러가 발생했습니다.</div>
  if (!chart) return null;
  // console.log(chart);
  return (
    <>
      <Trophy id="chart-icon-trophy" />
      <div className="chart-text-flex">
        <p className="chart-text">Billboard</p>
        <p className="chart-text">Hot 100</p>
        <p className="chart-date">{chart}</p>
      </div>
      <Chevron id="chart-icon-chevron" />
    </>
  );
}