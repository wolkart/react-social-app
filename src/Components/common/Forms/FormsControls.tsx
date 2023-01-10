import React, {FC, ReactNode} from "react";
import './FormControls.scss'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidator} from "../../../utils/validators/validators";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    children: ReactNode
}

export type GetFormKeys<T> = Extract<keyof T, string>

const FormControl: FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error

    return (
        <div className={!hasError ? 'FormField' : 'FormField error'}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const InputCustom: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = <FormKeysType extends string>(
    placeholder: string | undefined,
    name: FormKeysType,
    component: FC<WrappedFieldProps>,
    validate: Array<FieldValidator>,
    props = {},
    text = '') => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            component={component}
            validate={validate}
            {...props}
        />
        {text}
    </div>
)