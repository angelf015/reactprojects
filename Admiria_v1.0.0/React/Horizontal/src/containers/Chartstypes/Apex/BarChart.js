import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import ReactApexChart from 'react-apexcharts';

class BarChart extends Component{

    constructor(props) {
        super(props);

        this.state = {
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
                dataLabels: {
                  position: 'top',
                },
              }
            },
            dataLabels: {
              enabled: true,
              offsetX: -6,
              style: {
                fontSize: '12px',
                colors: ['#fff']
              }
            },
            stroke: {
              show: true,
              width: 1,
              colors: ['#fff']
            },

            xaxis: {
              categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
            }
          },
          series: [{
            data: [44, 55, 41, 64, 22, 43, 21]
          }, {
            data: [53, 32, 33, 52, 13, 44, 32]
          }],
        }
      }
render(){

    return(
            <AUX>
                   <div>
                        <div id="chart">
                        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="350" />
                        </div>
                        <div id="html-dist">
                        </div>
                    </div>
            </AUX>
        );
    }
}

export default BarChart;   