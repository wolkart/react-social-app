import React from "react";
import './ProfileStatus.scss'

export class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: 'Snap'
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
  }

  editStatus = (event) => {
    this.setState({
      status: event.target.value
    })
  }


  render() {
    return (
      <div className="ProfileStatus">
        {!this.state.editMode &&
        <span onClick={this.activeEditMode} className="ProfileStatus__text">{this.state.status}</span>
        }

        {this.state.editMode &&
          <div className="ProfileStatus__input">
          <input onChange={this.editStatus}
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