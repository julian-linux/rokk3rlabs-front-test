import React from 'react';
import _ from 'lodash';
// import chartJS from 'chart.js';
import { Line } from 'react-chartjs';
import RC2 from 'react-chartjs2';
import data from './data';

const chart = props => (
    <div className="chart__element" key={props.index}>
        <canvas id={props.name} width="100%" height="100%"></canvas>
    </div>
);

class Charts extends React.Component {
    constructor(props) {
        super(props);


        this.inc = 0;
        const count = [];
        const speed = [];
        const time = [];

        _.map(data, item => {
            count.push(item.data.count - this.inc);
            speed.push(item.data.speed - this.inc);
            time.push(item.data.time - 1466781876670 - this.inc);
        });
        this.data = {
            // datasets: test,
            datasets: [{
                label: 'Count',
                data: count,
                backgroundColor: 'rgba(100, 99, 132, 0.6)'
            },
            {
                label: 'Speed',
                data: speed,
                backgroundColor: 'rgba(0, 0, 132, 0.6)',
            },
            {
                label: 'time',
                data: time,
                // type: 'line',
                backgroundColor: 'rgba(100, 0, 132, 0.6)',
            }
            ],
            labels: _.flatMap(data, item => item.zoneId)
        };

        this.setChartsUpdateInterval();

    }

    setChartsUpdateInterval() {
        setInterval(() => {
            const count = [];
            const speed = [];
            const time = [];

            _.map(data, item => {
                count.push(item.data.count - this.inc);
                speed.push(item.data.speed - this.inc);
                time.push(item.data.time - 1466781876670 - this.inc);
            });
            this.data = {
                // datasets: test,
                datasets: [{
                    label: 'Count',
                    data: count,
                    backgroundColor: 'rgba(100, 99, 132, 0.6)'
                },
                {
                    label: 'Speed',
                    data: speed,
                    backgroundColor: 'rgba(0, 0, 132, 0.6)',
                },
                {
                    label: 'time',
                    data: time,
                    // type: 'line',
                    backgroundColor: 'rgba(100, 0, 132, 0.6)',
                }
                ],
                labels: _.flatMap(data, item => item.zoneId)
            };
            this.inc++;
            this.forceUpdate()
        }, 60000);
    }


    render() {
        const types = [
            'bar',
            'line'
        ];
        const charts = _.map(types, (type, idx) => (
            <div className="chart__item" key={idx}>
                <RC2 data={this.data} options={this.options} type={type} />
            </div>
        ))
        return (
            <div className="charts">
                {charts}

            </div>
        );
    }
}


export default Charts;
