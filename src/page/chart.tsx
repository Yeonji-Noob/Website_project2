import { ChartTitleText, Chart1Page } from "../component/chart"


export const Chart: React.FC = () => {
    return (
        <>
            <div className="chart">
                <ChartTitleText />
                <Chart1Page/>
            </div>
        </>
    );
};
