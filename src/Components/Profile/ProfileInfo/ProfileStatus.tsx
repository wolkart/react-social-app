import React, {ChangeEvent} from "react";
import './ProfileStatus.scss'

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}

type StateType = {
  editMode: boolean
  status: string
}

export class ProfileStatus extends React.Component<PropsType, StateType> {
  state = {
    editMode: false,
    status: this.props.status
  }

  activeEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactiveEditMode = () => {
    this.setState({
      editMode: false
    })

    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: event.currentTarget.value
    })
  }

  componentDidUpdate(prevProps: PropsType, prevState: StateType) {
    if (prevProps.status != this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }


  render() {
    return (
      <div className="ProfileStatus">
        {!this.state.editMode &&
        <span onClick={this.activeEditMode} className="ProfileStatus__text">{this.props.status || "Edit status"}</span>
        }

        {this.state.editMode &&
        <div className="ProfileStatus__input">
          <input onChange={this.onStatusChange}
                 autoFocus={true}
                 onBlur={this.deactiveEditMode}
                 type="text"
                 value={this.state.status}
          />
        </div>}
      </div>
    )
  }

}