import React, { Fragment,Component } from 'react';
import { connect } from "react-redux";
import { shape,func } from "prop-types";

import HeroTitle from '../../commons/HeroTitle';
import TextField from '../../commons/TextField';
import Button from '../../commons/Button';
import signupData from "./data";
import * as actions from "./actions";


class Signup extends Component{

    static propTypes = {
        updateSignupDetails:func.isRequired,
        signupDetails:shape().isRequired
    }

    getUserDetails = (e) => {
        const { updateSignupDetails } = this.props;
        updateSignupDetails(e.target.name,e.target.value);
    }

    login = ()=>{
        // console.log(this.state)
    }

    renderLoginFields(){
        return signupData.map(item => (
                <TextField 
                    getUserDetails={this.getUserDetails}
                    parent={this.props.signupDetails}
                    {...item}
                />
            )
            
        )
    }
    render(){
        return (
            <Fragment>
                <HeroTitle name="Signup" section="0" />
                <div id="signup">
                    <div className="wraper">
                        {this.renderLoginFields()}
                        <Button value="Register" onClick={this.login} />
                    </div>
                </div>
            </Fragment>
        );
    }

};
function mapStateToProps({signupDetails}){
    return{
        signupDetails
    }
}

export default connect(mapStateToProps,{ updateSignupDetails:actions.default })(Signup);

