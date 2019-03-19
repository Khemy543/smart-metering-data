import React from 'react';
import { Form , Input , Select,  Row, Col, Icon, Button} from 'antd';
import { Header } from '../components/header';
import { Slider } from '../components/slider';
import '../styles/addnode.css'


const InputGroup = Input.Group;

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}


class addnode extends React.Component {

       render() {
        return (
            <div className="main">
            <Header />
            <Slider />
            <div className="content">
            
                <div className="form">
                    <div className="heading">
                    
                        <h2>
                            Create a new Node 
                            <p style={{fontSize:"12px", fontWeight:"normal"}}>Add a new node, include all information of the user.</p>
                        </h2>
                        
                    </div>    
                        <div className = "user_info">
                        <div id="item">
                            <label>Owner's Name *</label>
                            <Input placeholder="Name" style={{width: "230px", marginTop:"5px" }} required/>
                        </div>    
                        <div id = "item" style={{marginLeft:"70px"}}>
                            <label>Meter ID *</label>
                            <Input placeholder="ID" style={{width: "230px", marginTop:"5px" }} required/>
                            </div>    
                            
                        </div>
                        <div className="contact">
                        <div className="r1">
                            <div id ="item">
                            <label>Location *</label>
                            <Input placeholder="Location" style={{width: "230px", marginTop:"5px" }} required/>
                            </div>
                            <div id ="item" style={{marginLeft:"70px"}}>
                            <label>Mobile *</label>
                            <Input placeholder="+233-XXXXXXX" style={{width: "230px", marginTop:"5px" }} required/>
                            </div>

                        </div> 

                        <div className="r2">
                        <div id ="item" style={{position:"relative", top:"15px"}}>
                            <label>Email</label>
                            <Input placeholder="Email" type="email" style={{width: "230px", marginTop:"5px"}}/>
                            </div>
                        <div id ="item" style={{marginLeft:"70px" ,position:"relative", top:"15px"}}>
                            <label>Postal Address</label>
                            <Input placeholder="Adress" style={{width: "230px", marginTop:"5px" }}/>
                            </div>
                        </div>    

                        </div>
                        <div className="radio">
                        <Select defaultValue="private" style={{ width: 150 , marginTop:"5px"}} onChange={handleChange}>
                        <Option value="private">
                        <Icon type="lock" />  Private
                        </Option>
                        <Option value="company">
                        <Icon type="book" />   Company
                        </Option>
                        </Select>
                        </div>

                        <Button type="submit" style={{ marginTop:"15px" ,backgroundColor:"#1a30fc", color:"white"}}>Create</Button>    
                    </div>

               
            </div>

                </div>
        );
    }
}
export const Addnode = Form.create()(addnode);