import anarLogo from '../../../img/anar-logo.png';
import '../../../sass/loginMainScss.scss';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ButtonForm } from '../../partComponents/button';
import Input from '../../partComponents/input';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { ActionCreators } from '../../redux/constants/profile';


const LoginPage = () => {
    const selector = useSelector((state) => state.user);
    const user = selector.profile
    console.log('selector', user)

    const history = useHistory()
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const isUser = user.find((user) => {
            return user.username === data.username && user.password === data.password
        })

        if (isUser) {
            dispatch(ActionCreators.userAccess(true))
            history.push('/')
        }

        else {
            alert('username or password is invalid')
        }

    }


    return (
        <section className="section-login">
            <div className="app__header">
                <img src={anarLogo} className="app__header--logo" alt="header logo" />
            </div>
            <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register}
                    inputName='User name'
                    inputType='text'
                    inputClass='form__input--text'
                    inputPlaceholder='Username'
                    inputErrors={errors}
                    inputLabel='username'
                    rules={{
                        required: true, maxLength: 20, minLength: 3
                        // pattern: {
                        //     value: new RegExp("(?=.*[a-zA-Z0-9])(?!=.[_-.])"),
                        //     message: 'Username must contain a to z and do not contain "-" , "_" or "."'
                        // }
                    }}
                />
                {errors.username && errors.username.type === 'required' && <p>User name is required</p>}
                {errors.username && errors.username.type === 'maxLength' && <p>User name should be have maximum of 20 characters</p>}
                {errors.username && errors.username.type === 'minLength' && <p>User name should be contain atleast 3 characters</p>}
                {/* {errors.username && errors.username.type === 'pattern' && <p>{errors.username.message}</p>} */}


                <Input
                    register={register}
                    inputName='Password'
                    inputType='password'
                    inputClass='form__input--password'
                    inputPlaceholder='Password'
                    inputErrors={errors}
                    inputLabel='password'
                    rules={{
                        required: true, maxLength: 20, minLength: 3,
                        pattern: {
                            value: new RegExp("(?=.*[a-z])(?=.*[0-9])"),
                            message: 'Password must contain at least one letter or number'
                        }
                    }}
                />

                {errors.password && errors.password.type === 'required' && <p>Password is required</p>}
                {errors.password && errors.password.type === 'maxLength' && <p>Password should be have maximum of 20 characters</p>}
                {errors.password && errors.password.type === 'minLength' && <p>Password should be contain atleast 8 characters</p>}
                {errors.password && errors.password.type === 'pattern' && <p>{errors.password.message}</p>}

                <ButtonForm
                    buttonValue='Submit'
                    buttonType='submit'
                    buttonClass='form__button--white'
                />

            </form>
            <p className='login__message'>do not have an account? <Link className='login__message--link' to='/signin'>sign in</Link></p>
        </section>
    )
}

export default LoginPage

// {/* <Link to='/home'>Home Page</Link> */}