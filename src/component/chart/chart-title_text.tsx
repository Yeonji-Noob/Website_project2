import { Trophy, Chevron } from "./"

export const ChartTitleText = () => {

    return (
        <>
        <Trophy id="chart-icon-trophy" />
        <div className="chart-text-flex">
            <p className="chart-text">Billboard</p>
            <p className="chart-text">Hot 100</p>
        </div>
        <Chevron id="chart-icon-chevron" />
        </>
    );
}