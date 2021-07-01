import React from 'react';
import {reduxForm, Field} from 'redux-form';

const LoginForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="login" component="input" type="login" name={"login"} />
        </div>
        <div>
            <Field placeholder="password" component="input" name={"password"}/>
        </div>
        <div>
            <Field placeholder="checkbox" component="input" type="checkbox" name={"rememberMe"} /> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const LoginPage = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default LoginPage;