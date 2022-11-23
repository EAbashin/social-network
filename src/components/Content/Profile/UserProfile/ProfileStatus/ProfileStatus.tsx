import s from './ProfileStatus.module.css';
import {ChangeEvent, Component} from "react";
import React from 'react';

type PropsType = {
    status: string
    isOwner: boolean
    updateStatusThunkCreator: (status: string) => void
}
type LocalStateType = {
    editMode: boolean
    status: string
}
class ProfileStatus extends Component<PropsType, LocalStateType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMod = () => {
        this.setState({
            editMode: true
        });
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    deActivateEditMod = () => {
        this.props.updateStatusThunkCreator(this.state.status);
        this.setState({
            editMode: false
        });
    }

    componentDidUpdate(prevProps: PropsType, prevState: LocalStateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={s.wrapper}>
                {
                    !this.state.editMode
                        ? <h3 className={s.status} onClick={this.activateEditMod}>{this.props.status ? this.props.status : 'no status'}</h3>
                        : <input className={s.input} value={this.state.status} autoFocus={true} onBlur={this.deActivateEditMod}
                                 onChange={this.onStatusChange} type="text"/>
                }
            </div>
        )
    }
}

export default ProfileStatus;