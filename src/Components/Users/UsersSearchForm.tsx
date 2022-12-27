import {Field, Form, Formik} from "formik";
import './UsersSearchForm.scss'
import {FilterUsersType} from "../../redux/usersReducer";
import {FC, memo} from "react";
import {useAppSelector} from "../../hooks/useAppSelector";

type FormType = {
    term: string
    friend: 'null' | 'true' | 'false'
}

type PropsType = {
    onFilterChange: (filter: FilterUsersType) => void
}

const usersSearchFormValidate = (values: FormType) => {
    const errors = {} as FormType;
    if (!values.term) {
        errors.term = 'Введите запрос';
    }
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.term)) {
    //     errors.term = 'Invalid email address';
    // }
    return errors;
}

export const UsersSearchForm: FC<PropsType> = memo(({onFilterChange}) => {
    const {filter} = useAppSelector(state => state.usersPage)
    
    const submit = (
        values: FormType,
        {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        // Преобразую строковые типы в boolean
        const filterValues: FilterUsersType = {
            term: values.term,
            friend: values.friend === 'null'
                ? null
                : values.friend === 'true'
        }

        onFilterChange(filterValues)
        setSubmitting(false);
    }

    return (
        <div className="UsersSearch">
            <Formik
                enableReinitialize
                initialValues={{term: filter.term, friend: String(filter.friend)} as FormType}
                // validate={usersSearchFormValidate}
                onSubmit={submit}
            >
                {({isSubmitting, errors}) => (
                    <Form className='UsersSearchForm'>
                        <div className="UsersSearchForm__fields">
                            <Field type="text" name="term" placeholder="Поиск"/>
                            <Field name="friend" as="select">
                                <option value="null">Все</option>
                                <option value="true">Подписан</option>
                                <option value="false">Не подписан</option>
                            </Field>
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Искать
                        </button>
                        {errors.term && <div className="UsersSearchFormError">{errors.term}</div>}
                    </Form>
                )}
            </Formik>
        </div>
    )
})