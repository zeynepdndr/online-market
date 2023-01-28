import { Form, Field } from 'react-final-form'

const SignUp = () => {
    const onSubmit = async (values: any) => {
        console.log("values", values)
    }
    return (<Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <Field name="email" type="text" component="input" autoComplete="none" />
                </div>

                <div>
                    <label>Password</label>
                    <Field name="password" type='password' component="input" autoComplete="none" />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        )}
    />)

};

export default SignUp;