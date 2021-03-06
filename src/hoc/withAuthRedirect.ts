import React from 'react';
import {Redirect} from "react-router-dom";
import {stateAllType} from "../redux/redux-store";
import {connect} from "react-redux";

export const WithAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component<any>{

        // render() {
        //     // if (props.isAuth) return <Redirect to="/login"/>
        //     // return Component {...this.props}
        // }

    }
    return RedirectComponent

    // let mapStatetoPropsRedirect = (state: stateAllType) => ({
    //     isAuth: state.auth.isAuth
    // })
    //
    // let ConnectedAuthRedirectComponent = connect(mapStatetoPropsRedirect)

};

export default WithAuthRedirect;