import React, { Component } from 'react';
// Redux
import { loginUser } from "../../Redux/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


class Login extends Component {
    state = { auth: "" };
    handleSubmit = () => {
        const { dispatch } = this.props;
        dispatch(loginUser());
    };
    render() {
        const { isAuthenticated, userName } = this.props;
        if (isAuthenticated) {
            console.log(this.props);
            return (
                <div>
                    INICIADO como {userName}
                    <button onClick={this.handleSubmit}>Iniciar</button>
                </div>
            )
        } else {
            return (
                <div>
                    NO INICIADO
                    <button onClick={this.handleSubmit}>Iniciar</button>
                </div>
            )
        }
    }

}

function mapStateToProps(state) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginError: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated,
        userName: state.auth.user.displayName
    };
}
export default connect(mapStateToProps)(Login);