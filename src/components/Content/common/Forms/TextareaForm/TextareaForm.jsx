import s from './TextAreaForm.module.css';
import {Form, Field} from 'react-final-form';
import {composeValidators, maxValue, required} from "../../../../utilities/validators/validators";

const TextAreaForm = (props) => {
    const onSubmit = (e) => {
        props.addBlock(e.newBlock);
    };
    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, submitting, pristine, form}) => (
                <form className={s.form} onSubmit={handleSubmit}>
                    <Field
                        name="newBlock"
                        validate={composeValidators(required, maxValue(98))}>
                        {({input, meta}) => {
                            const hasError = meta.error && meta.touched && meta.error === `Max length is 98 symbols`;
                            return (
                                <div className={s.form}>
                                    <textarea className={`${s.textarea} ${hasError ? s.textareaError : ''}`} {...input} type="text" placeholder={props.placeholder}/>
                                    {hasError && <span className={s.error}>{meta.error}</span>}
                                </div>
                            )
                        }}
                    </Field>
                    <button className={s.btn}
                            type="submit"
                            disabled={submitting || pristine}
                            onClick={() => setTimeout(() => form.reset(), 1)}>SEND
                    </button>
                </form>
            )}
        />
    )
};
export default TextAreaForm;