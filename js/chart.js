const renderChart = () => {
    $('#container').empty();
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Skill Count'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Skill Count'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Skill Count <b>{point.y:.1f}</b>'
        },
        series: [{
            name: 'Population',
            data: filterBySkill(),
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
}