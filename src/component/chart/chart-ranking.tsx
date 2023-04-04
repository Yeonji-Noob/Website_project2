const ChartRanking: React.FC = () => {


    let chartText = ['rank number', 'song title', 'composer'];

    return (
        <div className="chart-album-flax">
            <div className="chart-album-cover"></div>
            <div className="chart-album-textbox">
                {chartText.map( item => {
                    return (<p>{item}</p> )
                })}
            </div>
        </div>
    );
};

export default ChartRanking;