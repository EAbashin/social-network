import {Field, Form} from "react-final-form";
import s from "./LoginForm.module.css";
import {required} from "../../../../utilities/validators/validators";
import {FORM_ERROR} from "final-form";

const LoginForm = (props) => {
    const onSubmit = async (e) => {
        const data = await props.postAuthLoginThunkCreator(e.email, e.password, e.rememberMe, e.captcha);
        if (data.messages) {
            return { [FORM_ERROR]: data.messages[0] }
        }
    };
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
                captcha: ''
            }}
            render={({handleSubmit, submitting, pristine, submitError}) => (
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

                    {props.captcha ?
                        <Field
                            name="captcha"
                            validate={required}>
                            {({input, meta}) => {
                                const hasError = meta.error && meta.touched;
                                return (
                                    <div>
                                        <label className={s.label}>Captcha</label>
                                        <div className={s.captchaWrapper}>
                                            <input className={`${s.input} ${s.captchaInput} ${hasError ? s.inputError : ''}`} {...input}
                                                   type="text"
                                                   placeholder="captcha"/>
                                            <img src={props.captcha} alt="captcha" className={s.captcha}/>
                                        </div>
                                    </div>
                                )
                            }}
                        </Field> : ''}

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
                    {submitError && <div className={s.error}>{submitError}</div>}
                </form>
            )}
        />
    )
};

export default LoginForm;