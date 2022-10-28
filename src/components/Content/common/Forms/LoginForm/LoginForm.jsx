import {Field, Form} from "react-final-form";
import s from "./LoginForm.module.css";
import {required} from "../../../../utilities/validators/validators";


const LoginForm = ({postAuthLoginThunkCreator}) => {
    const onSubmit = (e) => {
        postAuthLoginThunkCreator(e.email, e.password, e.rememberMe);
    };
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}
            render={({handleSubmit, submitting, pristine}) => (
                <form onSubmit={handleSubmit} className={s.form} action="src/components/Content/common/Forms/LoginForm/LoginForm">
                    <Field
                        name="email"
                        validate={required}>
                        {({input, meta}) => {
                            const hasError = meta.error && meta.touched;
                            return (
                                <div>
                                    <label className={s.label}>Login</label>
                                    <input className={`${s.input} ${hasError ? s.inputError : ''}`} {...input} type="email"
                                           placeholder="login"/>
                                </div>
                            )
                        }}
                    </Field>

                    <Field
                        name="password"
                        validate={required}>
                        {({input, meta}) => {
                            const hasError = meta.error && meta.touched;
                            return (
                                <div>
                                    <label className={s.label}>Password</label>
                                    <input className={`${s.input} ${hasError ? s.inputError : ''}`} {...input} type="password"
                                           placeholder="password"/>
                                </div>
                            )
                        }}
                    </Field>

                    <div className={s.checkbox}>
                        <div className={s.checkbox_input_wrapper}>
                            <Field name="rememberMe" component="input" type="checkbox" className={s.checkbox_input}/>
                            <span>remember me</span>
                        </div>

                        <button type="submit"
                                disabled={submitting || pristine}
                                className={s.btn}>
                            login
                        </button>
                    </div>
                </form>
            )}
        />
    )
};

export default LoginForm;