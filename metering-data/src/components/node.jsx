import React from 'react';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import { CircularProgressBar } from '../components/circularProgress';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/node.css';

// class node extends React.Component{
//     render() {
//       return(
//         <div className="node">
//               <div>

//               </div>
//         </div>
//     );
//    }
//   }
// export const  Node = Form.create()(node);




class node extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      percentage: 25
    };

    this.handleChangeEvent = this.handleChangeEvent.bind(this);
  }

  handleChangeEvent(event) {
    this.setState({
      percentage: event.target.value
    });
  }

  render() {
    return (

      <div className="node">
        <h3 class="text-center" style={{ margin: "5px 10px" }}><Link to="/nodepage" style={{ listStyle: "none" }}>Node Name</Link></h3>
        <div class="text-center" id="app">
          <CircularProgressBar
            strokeWidth="5"
            sqSize="200"
            percentage={this.state.percentage} />
        </div>
      </div>
    );
  }
}

export const Node = Form.create()(node);