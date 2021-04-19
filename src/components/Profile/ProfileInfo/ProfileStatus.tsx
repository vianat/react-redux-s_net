import React from 'react';
import css from "./ProfileInfo.module.css";

type ProfileStatusPropsType ={
    status: string
}
class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        title: "zaglushka"
    }

    activateEditMode() {
        this.setState({  //setState asynchronous!!
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({  //setState asynchronous!!
            editMode: false
        })
    }

    render() {
        return (
            <div className={css.profile_info}>
                <span>{this.props.status}</span>

                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }

                <div>Name</div>
                <div>DOB</div>
                <div>CITY</div>
                <div>Edu</div>
                <div>Web</div>
            </div>
        )
    }
};

export default ProfileStatus;