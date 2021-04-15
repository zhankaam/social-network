import React, {ChangeEvent} from 'react';

type ProfileStatusPropstype = {
    status: string
    updateStatus: (status: string) => void
}
export type ProfileStatusStateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropstype, ProfileStatusStateType> {

    state: ProfileStatusStateType = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.props.updateStatus(this.state.status);

        this.setState({
            editMode: false
        });
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || "-----"}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}
                           autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}/>
                </div>}
            </div>
        )
    }
}

