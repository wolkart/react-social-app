import React from 'react'
import {addMessageActionCreator, updateTextMessageActionCreator} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateMessageText: (text) => {
      dispatch(updateTextMessageActionCreator(text))
    },
    onAddMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)