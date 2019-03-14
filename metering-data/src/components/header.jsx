import React from 'react';
import { Form , Icon} from 'antd';
import '../styles/header.css'


class header extends React.Component {
 
  render() {
    return (
      <header className="header">

        <div>
          <h1>METERING DATA</h1>
        </div>
        

        <div className="search">
          <input type="search" name="search" placeholder="  search" id="search" />
        </div>

        <div className="icons">
        <Icon type="plus" style={{ paddingLeft: "20px", backgroundColor: "white", fontSize: "17px" }} onClick={this.props.onAddNode} />
        <Icon type="mail" style={{ paddingLeft: "20px", backgroundColor: "white", fontSize: "17px" }} />

          <div className = "dropdown">
          <Icon type="user" style={{ paddingLeft: "20px", backgroundColor: "white", fontSize: "17px" }} />
          <div className="dropdown-content"> 
          <a href="#">Account</a>
          <a href="#">Logout</a>

          </div>
          </div>


          
        </div>
      </header>
    );
  }
}
export const Header = Form.create()(header);