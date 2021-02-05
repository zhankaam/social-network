import React from 'react';

type ProfileStatusPropstype = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropstype>  {
    state = {
        editMode: false,
        title: 'Yo'
    }

    activateEditMode ()  {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode ()  {
        this.setState({
            editMode: false
        })
    }

    render () {
    return (
        <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>}
            {this.state.editMode &&
                <div>
                    <input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                </div>}
       </div>
      )
    }
}

