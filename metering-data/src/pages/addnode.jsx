import React from 'react';
import { Form , Input , Select,  Row, Col, Icon, Button} from 'antd';
import { Header } from '../components/header';
import { Slider } from '../components/slider';
import '../styles/addnode.css'
import axios from 'axios';


async function post(url, data) {
	try {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const resdata = await res.json();
		return resdata;
	} catch (error) {
		return error;
	}
}




const InputGroup = Input.Group;

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}


class addnode extends React.Component {
    constructor() {
		super();
		this.state = {
            Owners_Name :'',
            Meter_ID : '',
            Location :'',
            Mobile : '',
            Email :'',
            Address : '',
            Time : ''
		};
    }
    
    onChange = e => {
		e.persist();
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
    };
    
    onSubmit = e => {
		e.persist();
		e.preventDefault();
		console.log(e);
		const { Owners_Name: Owners_Name, Meter_ID: Meter_ID,Location:Location,Mobile:Mobile,Email:Email,Adress:Adress,Time:Time } = this.state;
		
		var config = {
				headers:{
					'Content-Type' : 'application/json'
				}
		};

		
		axios.post('http://localhost:5000/newnode', {
            Owners_Name,Meter_ID,Location,Mobile,Email,Adress,Time
		}).then(res => {
            console.log(res);
		}).catch(console.log);


	};
    

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
                            <input
                            type="input"
                            style={{width: "230px", marginTop:"5px" }}
                            placeholder="Name"
                            id="Owners_Name"
                            name="Owners_Namee"
                            onChange={this.onChange}
                            value={this.state.Owners_Name}
                        />
                            
                        </div>    
                        <div id = "item" style={{marginLeft:"70px"}}>
                            <label>Meter ID *</label>
                            <input
                            type="text"
                            style={{width: "230px", marginTop:"5px" }}
                            placeholder="Meter ID"
                            id="Meter_ID"
                            name="Meter_ID"
                            onChange={this.onChange}
                            value={this.state.Meter_ID}
                        />
                            </div>    
                            
                        </div>
                        <div className="contact">
                        <div className="r1">
                            <div id ="Location">
                            <label>Location *</label>
                            <input
                            type="text"
                            style={{width: "230px", marginTop:"5px" }}
                            placeholder="Location"
                            id="Location"
                            name="Location"
                            onChange={this.onChange}
                            value={this.state.Location}
                        />
                            </div>



                            <div id ="item" style={{marginLeft:"70px"}}>
                            <label>Mobile *</label>
                            <input
                            type="text"
                            style={{width: "230px", marginTop:"5px" }}
                            placeholder="+233-XXXXXXX"
                            id="Mobile"
                            name="Mobile"
                            onChange={this.onChange}
                            value={this.state.Mobile}
                        />
                        
                            </div>

                        </div> 

                        <div className="r2">
                        <div id ="item" style={{position:"relative", top:"15px"}}>
                            <label>Email</label>
                            <input
                            type="text"
                            style={{width: "230px", marginTop:"5px" }}
                            placeholder="Email"
                            id="Email"
                            name="Email"
                            onChange={this.onChange}
                            value={this.state.Email}
                        />
                            </div>


                        <div id ="item" style={{marginLeft:"70px" ,position:"relative", top:"15px"}}>
                            <label>Postal Address</label>
                            <input
                            type="text"
                            style={{width: "230px", marginTop:"5px" }}
                            placeholder="Address"
                            id="Address"
                            name="Address"
                            onChange={this.onChange}
                            value={this.state.Address}
                        />
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
                        <button type="submit" id="button" onClick={this.onSumit} style={{ marginTop:"15px" ,backgroundColor:"#1a30fc", color:"white"}}>
                        Create
                    </button>
                        
                    </div>

               
            </div>

                </div>
        );
    }
}
export const Addnode = Form.create()(addnode);