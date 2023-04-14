import {Trophy, Chevron, ChartTitleText, ChartRanking} from "../component/chart"

const Chart: React.FC = () => {
    return (

        <div className="chart">
            <Trophy id="chart-icon-trophy" />
            <ChartTitleText/>
            <Chevron id="chart-icon-chevron" />
            <ChartRanking />    
        </div>
    );
};

export default Chart;