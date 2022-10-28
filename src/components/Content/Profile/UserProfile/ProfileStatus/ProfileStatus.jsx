import s from './ProfileStatus.module.css';
import {Component} from "react";

class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMod = () => {
        this.setState({
            editMode: true
        });
    }
    onStatusChange = (e) => {
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

    componentDidUpdate(prevProps, prevState, snapshot) {
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