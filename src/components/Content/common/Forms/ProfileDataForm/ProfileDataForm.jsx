import s from "./ProfileDataForm.module.css";
import {Field, Form} from "react-final-form";
import {required} from "../../../../utilities/validators/validators";
import {FORM_ERROR} from "final-form";

const ProfileDataForm = (props) => {
    const onSubmit = async (profile) => {
        const response = await props.updateProfileThunkCreator(profile);
        if (response.resultCode === 1) {
            return {[FORM_ERROR]: response.messages};
        }
        props.setEditMode(false);
    };
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={props.userProfile}
            render={({submitError, handleSubmit, submitting, pristine}) => (
                <form onSubmit={handleSubmit} className={s.form} action="src/components/Content/common/Forms/LoginForm/LoginForm">
                    <Field name="fullName" validate={required}>
                        {({input, meta}) => {
                            return (
                                <div className={s.wrapper}>
                                    <label className={s.label}>Full name: </label>
                                    <input className={s.input} {...input} type="text"
                                           placeholder="full name"/>
                                </div>
                            )
                        }}
                    </Field>
                    <Field name="aboutMe">
                        {({input, meta}) => {
                            return (
                                <div className={s.wrapper}>
                                    <label className={s.label}>About me: </label>
                                    <input className={s.input} {...input} type="text"
                                           placeholder="about me"/>
                                </div>
                            )
                        }}
                    </Field>
                    <div className={s.checkbox_input_wrapper}>
                        <span>Looking for a job? </span>
                        <Field name="lookingForAJob" component="input" type="checkbox" className={s.checkbox_input}/>
                    </div>
                    <div className={s.wrapper + ' ' + s.wrapperTextarea}>
                        <label className={s.label}>description: </label>
                        <Field name="lookingForAJobDescription" component="textarea" placeholder="description"/>
                    </div>

                    <div className={s.label}><b>Contacts:</b></div>
                    <ul>
                        {
                            Object.keys(props.userProfile.contacts).map(key => {
                                return (
                                    <Field key={key} name={'contacts.' + key}>
                                        {({input, meta}) => {
                                            const hasError = meta.error && meta.touched;
                                            return (
                                                <div className={s.wrapper}>
                                                    <label className={s.label}>{key}: </label>
                                                    <input className={`${s.input} ${hasError ? s.inputError : ''}`} {...input} type="text"
                                                           placeholder={props.userProfile.contacts.key}/>
                                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                                </div>
                                            )
                                        }}
                                    </Field>
                                )
                            })
                        }
                    </ul>
                    {submitError && <div className={`${s.label} ${s.error}`}>{submitError}</div>}
                    <button type="submit" disabled={submitting || pristine} className={s.btn}>save</button>
                </form>
            )}
        />
    )
};

export default ProfileDataForm;