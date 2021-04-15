import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../../../assets/common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utilities/validators/Validators";
import React from "react";
import {NewMessageFormType} from "./Dialogs";

const maxLength50 = maxLengthCreator(50)

export type NewMessageFormValuesKeys = Extract<keyof NewMessageFormType, string>

type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormValuesKeys>("Enter your message", "newMessageBody", [required, maxLength50], Textarea)}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm<NewMessageFormType>({form: "dialogAddMessageForm"})(AddMessageForm)
