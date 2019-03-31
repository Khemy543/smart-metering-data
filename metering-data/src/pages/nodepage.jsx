import React from 'react';
import { Form, Progress, } from 'antd';
import { Header } from '../components/header';
import { Slider } from '../components/slider';
import { Bar, Line, Pie } from 'react-chartjs-2';
import '../styles/nodepage.css';


class nodepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        datasets: [
          {
            label: 'Nodes',
            data: [
              0,
              381045,
              100000,
              300000,
              50032,
              673789,
              0,
            ],

            backgroundColor: [
              'rgb(73, 60, 255)',


            ]
          }
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    LegendPosition: 'right'
  }

  render() {
    return (
      <div className="node-body">
      <div>
       <Header />
        <Slider />
       </div>
           <div className="content">
            <div className="info">
              <div id="contact" style={{
                width: "480px",
                height: "230px",
                borderRight: "1px solid rgb(197, 197, 197)",
                marginTop: "10px",
                marginLeft: "30px"
              }}>
                <label>Owner's name </label>
                <h2 style={{ marginTop: "30px" }}>Mr . Goerge Ando</h2>

                <label>Meter ID </label>
                <h2 style={{ marginTop: "30px" }}>NO. 412CD</h2>

                <label>Location </label>
                <h2 style={{ marginTop: "30px" }}>Ayeduase, jasmine street, hno. 412 </h2>
              </div>

              <div id="contact" style={{ marginLeft: "50px", marginTop: "10px" }}>
                <label>mobile </label>
                <h2 style={{ marginTop: "30px" }}>0542161579</h2>

                <label>Email</label>
                <h2 style={{ marginTop: "30px" }}>andoj@gmail.com</h2>

                <label>postal address </label>
                <h2 style={{ marginTop: "30px" }}>1001 </h2>
              </div>

            </div>

            <div className="flow">
              <div id="progress" style={{
                width: "342px",
                height: "250px",
                border: "1px solid rgb(197, 197, 197)",
                backgroundColor: "white",
              }}>
                <Progress type="circle" style={{
                  marginLeft: "75px",
                  marginTop: "30px"

                }}
                percent={75}
                format={percent => `${percent} Litres`}
                 width={180}
                />
              </div>


              <div id="progress" style={{
                width: "342px",
                height: "250px",
                border: "1px solid rgb(197, 197, 197)",
                backgroundColor: "white",

              }}>
                <Progress type="circle" style={{
                  marginLeft: "75px",
                  marginTop: "30px"
                }} 
                percent={75}
                format={percent => `${percent} LPM`}
                width={180}
                />
              </div>

              <div id="progress" style={{
                width: "342px",
                height: "250px",
                border: "1px solid rgb(197, 197, 197)",
                backgroundColor: "white",

              }}>
                <Progress type="circle" style={{
                  marginLeft: "75px",
                  marginTop: "30px"
                }} 
                percent={75}
                format={percent => `${percent} Days`}
                width={180}


                />
              </div>

            </div>
            <div className="chart">

              <Line
                data={this.state.chartData}
                options={{
                  title: {
                    display: this.props.displayTitle,
                    text: 'Node Name',
                    fontSize: 25
                  },
                  legend: {
                    display: this.props.displayLegend,
                    position: 'right'
                  }
                }}

              />
            </div>
            </div>
          </div>
        

      );
  }
}
export const Nodepage = Form.create()(nodepage);