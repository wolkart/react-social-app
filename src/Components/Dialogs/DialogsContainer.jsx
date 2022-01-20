import React from 'react'
import {addMessageActionCreator, updateTextMessageActionCreator} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)