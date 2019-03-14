import React from 'react';
import { Form, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import { Slider } from '../components/slider';
import { Reportsheet } from '../components/reportsheet';
import ReactToPrint from "react-to-print";
import '../styles/report.css';
import Sider from 'antd/lib/layout/Sider';



class report extends React.Component {

  render() {
    return (
      <div className="main">
        <Header />
        <div className="content">
          <Slider />
          <div id = "reportsheet">
          <Reportsheet ref={el => (this.componentRef = el)} />
          </div>

          <div id="generator">
              <select name="Select Node" id="selecter">
                <option value="All nodes">All Nodes</option>
                <option value="Node 1">Node 1</option>
                <option value="Node 2">Node 2</option>
                <option value="Node 3">Node 3</option>
                <option value="Node 4">Node 4</option>
              </select>
            

            <div id="from">
              <label for="Start">Start Date</label>
              <input type="date" />
            </div>

            <div id="to">
              <label for="to">End Date</label>
              <input type="date" />
            </div>

            <button type="submit" id="btn">Generate</button>
            <div>
            <ReactToPrint
            trigger={() => <Link to="#" style={{ left: "850px", position: "relative", top: "-90px", listStyle: "none"}}><input type="button" value="Print" style={{height:"30px", width:"60px" , cursor:"pointer" }} /></Link>}
            content={() => this.componentRef}
          />
          </div>
          </div>
        </div>

      </div>
    )
  };
}
export const Report = Form.create()(report);