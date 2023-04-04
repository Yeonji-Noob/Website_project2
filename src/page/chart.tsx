// ReactComponent로 쓸 때 꼭 앞글자 대문자여야 한다
import { ReactComponent as Trophy } from "../assets/chart/chart-trophy.svg"
import { ReactComponent as Chevron } from  "../assets/chart/chart-chevron.svg"

import ChartRanking from "../component/chart/chart-ranking"

const Chart: React.FC = () => {
    return (

        <div className="chart">
            <Trophy id="chart-icon-trophy" />
            <p className="chart-text-flex">
                <p>K - POP</p>
                <p>Top 100</p>
            </p>
            <Chevron id="chart-icon-chevron" />
            <ChartRanking />    
        </div>
    );
};

export default Chart;