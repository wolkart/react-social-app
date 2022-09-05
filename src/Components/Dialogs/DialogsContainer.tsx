import React, {ComponentType} from 'react';
import {actions} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/store-redux";

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
  }
}

export default compose<ComponentType>(
  connect(mapStateToProps, {...actions}),
  withAuthRedirect
)(Dialogs)