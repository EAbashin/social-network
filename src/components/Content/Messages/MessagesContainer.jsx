import {connect} from "react-redux";
import {addMessage, updateNewMessage} from "../../../redux/reducers/messages-reducer";
import Messages from "./Messages";
import withAuthRedirectComponent from "../../../HOC/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewValueText: (text) => dispatch(updateNewMessage(text)),
        addBlock: (newMessage) => dispatch(addMessage(newMessage))
    }
}

const MessagesContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent
)(Messages);

export default MessagesContainer;