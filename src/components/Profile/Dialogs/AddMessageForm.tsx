import {reduxForm} from "redux-form";
import {createField} from "../../../assets/common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utilities/validators/Validators";
import React from "react";
import {NewMessageFormType} from "./Dialogs";

const maxLength50 = maxLengthCreator(50)

export type NewMessageFormValuesKeys = Extract<keyof NewMessageFormType, string>

 const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormValuesKeys>("Enter your message","newMessageBody",[required],maxLength50)}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm<{ newMessageBody: string }>({form: "dialogAddMessageForm"})(AddMessageForm)
