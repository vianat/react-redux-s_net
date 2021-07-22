import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Input} from "../other/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {stateAllType} from "../../redux/redux-store";
import css from "./../other/FormsControls/FormsControls.module.css"

const maxLength100 = maxLengthCreator(100)
const LoginForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="email"
                   component={Input}
                   validate={[requiredField, maxLength100]}
                   type="login" name="email" />
        </div>
        <div>
            <Field placeholder="password" component={Input} name="password" type="password"/>
        </div>
        <div>
            <Field placeholder="checkbox" component={Input} type="checkbox" name="rememberMe" /> remember me
        </div>
        {props.error && <div className={css.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
};

const LoginReduxFormHOC = reduxForm({form: 'login'})(LoginForm)

const LoginPage = (props: any) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.auth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>login</h1>
            <LoginReduxFormHOC onSubmit={onSubmit}/>
        </div>
    );
};
const mapStateToProps = (state: stateAllType) => ({
    auth: state.auth.isAuth
})
export default connect(mapStateToProps, {login, logout}) (LoginPage);