import React from 'react';
import { Form , Icon, Dropdown, Menu}  from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import '../styles/header.css'


const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">Account</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">Settings</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
    <a href="#">Log Out</a>
    </Menu.Item>
  </Menu>
);

class header extends React.Component {
 
  render() {
    return (
      <header className="header">
       
        <div id = "logo">
        
          <h1>METERING DATA</h1>
                    
        </div>
       
        

        <div className="search">
          <input type="search" name="search" placeholder="  search" id="search" />
        </div>

        <div className="icons">
        <Link to="/registernode" style={{color:"#242424"}}>
        <Icon type="plus" style={{ paddingLeft: "20px", backgroundColor: "white", fontSize: "17px" }} /*onClick={this.props.onAddNode}*/ />
        </Link>
        <Icon type="mail" style={{ paddingLeft: "20px", backgroundColor: "white", fontSize: "17px" }} />

        <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" href="#" style={{color:"#242424"}}>
        <Icon type="user" style={{ paddingLeft: "20px", backgroundColor: "white", fontSize: "17px" }} />
        </a>
  </Dropdown>
               
                 
        </div>

       
      </header>
    );
  }
}
export const Header = Form.create()(header);