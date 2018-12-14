import React, { Fragment,Component } from 'react';
import { connect } from 'react-redux';
import { func,string,shape } from "prop-types";

import HeroTitle from '../../commons/HeroTitle';
import TextField from '../../commons/TextField';
import Button from '../../commons/Button';
import loginData from "./data";
import * as actions from "./actions";


class Login extends Component{

    static propTypes = {
        userLoginDetails:func.isRequired,
        loginDetails:shape({
            email:string.isRequired,
            password:string.isRequired,
            error:string.isRequired
        }).isRequired
    }

    getUserDetails = (e) => {
        const { userLoginDetails } = this.props;
        userLoginDetails(e.target.name,e.target.value);
    }

    login = () => {  
        // console.log(this.state)
    }

    renderLoginFields(){
        return loginData.map(item => (
                <TextField 
                    getUserDetails={this.getUserDetails}
                    parent={this.props.loginDetails}
                    {...item}
                />
            )
            
        )
    }
    render(){
        const { error } = this.props.loginDetails;
        return (
            <Fragment>
                <HeroTitle name="Login" section="0" />
                <div id="login">
                <div className="login-box">
                    <div className="w">
                        {this.renderLoginFields()}
                        <Button value="Login" onClick={this.login} />
                        <div className="register">
                            Dont you already registered ?  
                            <span> click here to register</span>
                            <br /> <br />
                            <span>forget password?</span>
                        </div>

                        <div className="login-error">
                            {error}
                        </div>
                    </div> 
                </div>
                </div>
            </Fragment>
        );
    }

};

function mapStateToProps({loginDetails}){
    return{
        loginDetails
    }
}

export default connect(mapStateToProps,{ userLoginDetails:actions.default })(Login);
