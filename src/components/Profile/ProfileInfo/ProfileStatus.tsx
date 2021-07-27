import React from 'react';
import css from "./ProfileInfo.module.css";

type ProfileStatusPropsType ={
    status: string
    updateStatus: (status: string) => void
}
class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({  //setState asynchronous!!
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({  //setState asynchronous!!
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status:e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={css.profile_info}>

                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}
                               autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
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