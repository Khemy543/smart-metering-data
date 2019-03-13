import React from 'react';
import { Form } from 'antd';
import { Menu, Switch } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/loginpage.css';

class login extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="login-content">
                    <form>
                        <h2>Login </h2>
                        <div className="Username">
                            <input type="text" placeholder="Username" id="username" />
                        </div>

                        <div className="password">
                            <input type="password" placeholder="Password" id="password" />
                        </div>

                        <div className="checkbox">
                            <a href="#">Forgot password</a>
                        </div>
                        <div className="button">
                            <input type="button" id="button" value="Login" />
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}
export const Login = Form.create()(login);