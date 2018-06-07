import React from "react";
import Chart from "chart.js";
import axios from "axios";

class Graph extends React.Component {
    constructor(props) {
        super(props);
     this.state = {
            resultNumber: Number,
            results: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5555/events/hourly')
            .then((results)=>{
                this.setState({
                    resultNumber : results.data.length,
                    results: results.data
                 });

                 const ctx = document.getElementById("myChart");

                 const myChart = new Chart(ctx, {
                    type: "scatter",
                    data: {
                        datasets: [{
                            label: "Hourly Events",
                            data: this.state.results.map((value) => {
                                return {
                                    x: value.hour,
                                    y: value.events
                                }
                            })
                        }]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                type: "linear",
                                position: "botton"
                            }]
                        }
                    }
                 });
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    render() {
        return (
            <div id="chart">
            <p>We found {this.state.resultNumber} results</p>
                <canvas id="myChart"></canvas>
            </div>
        );
    }
}

export default Graph;