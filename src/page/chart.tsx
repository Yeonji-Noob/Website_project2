// ReactComponent로 쓸 때 꼭 앞글자 대문자여야 한다
import { ReactComponent as Trophy } from "../assets/trophy.svg"
import { ReactComponent as Chevron } from  "../assets/chart-chevron.svg"

import ChartRanking from "../component/chart-ranking"

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