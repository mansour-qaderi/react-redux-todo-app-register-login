import anarLogo from '../../../img/anar-logo.png';
import '../../../sass/signinMainScss.scss';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ButtonForm } from '../../partComponents/button';
import Input from '../../partComponents/input';
import { Link } from 'react-router-dom';
import { ActionCreators } from '../../redux/constants/profile';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



const Signin = () => {

    const dispatch = useDispatch();
    const history = useHistory()
    const selector = useSelector((state) => state.user);
    const user = selector.profile

    const Auto_increment_id = (users) => {
        const max = users.reduce((maxId, user) => Math.max(user.id, maxId), 0);
        return max + 1
    }


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        if (user.length === 0) {
            dispatch(ActionCreators.userAccess(true))
            dispatch(ActionCreators.addProfile({
                id: Auto_increment_id(user),
                fullname: data.fullname,
                username: data.username,
                email: data.email,
                password: data.password,
                image: '',
                image_name: ''
            }))
            history.push('/')
        }

        else {
            user.reduce((preValue, curValue) => {
                if (preValue?.email === curValue.email) {
                    alert('user already exists')

                }
                else if (preValue?.username === curValue.username) {
                    alert('username already exists! change it')
                }

                else {
                    dispatch(ActionCreators.userAccess(true))
                    dispatch(ActionCreators.addProfile({
                        id: Auto_increment_id(user),
                        fullname: data.fullname,
                        username: data.username,
                        email: data.email,
                        password: data.password,
                        image: '',
                        image_name: ''
                    }))
                    return history.push('/')
                }
            }, data)
        }

    };


    return (
        <>
            <section className="section-signin">
                <div className="app__header">
                    <img src={anarLogo} className="app__header--logo" alt="header logo" />
                </div>
                <form className='signin__form' onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        register={register}
                        inputName='Email'
                        inputType='text'
                        inputClass='form__input--text'
                        inputPlaceholder='Email'
                        inputErrors={errors}
                        inputLabel='email'
                        rules={{
                            required: true, minLength: 5
                        }}
                    />
                    {errors.email && errors.email.type === 'required' && <p>Email is required</p>}
                    {errors.email && errors.email.type === 'minLength' && <p>Email is invalid</p>}


                    <Input
                        register={register}
                        inputName='Full Name'
                        inputType='text'
                        inputClass='form__input--text'
                        inputPlaceholder='Full Name'
                        inputErrors={errors}
                        inputLabel='fullname'
                        rules={{
                            required: true, maxLength: 30, minLength: 3
                        }}
                    />
                    {errors.fullname && errors.fullname.type === 'required' && <p>Full Name is required</p>}
                    {errors.fullname && errors.fullname.type === 'maxLength' && <p>Full Name should be have maximum of 30 characters</p>}
                    {errors.fullname && errors.fullname.type === 'minLength' && <p>Full Name should be contain atleast 3 characters</p>}

                    <Input
                        register={register}
                        inputName='Username'
                        inputType='text'
                        inputClass='form__input--text'
                        inputPlaceholder='Username'
                        inputErrors={errors}
                        inputLabel='username'
                        rules={{
                            required: true, maxLength: 20, minLength: 3
                        }}
                    />

                    {errors.username && errors.username.type === 'required' && <p>Full Name is required</p>}
                    {errors.username && errors.username.type === 'maxLength' && <p>Username should be have maximum of 20 characters</p>}
                    {errors.username && errors.username.type === 'minLength' && <p>Username should be contain atleast 3 characters</p>}

                    <Input
                        register={register}
                        inputName='Password'
                        inputType='password'
                        inputClass='form__input--password'
                        inputPlaceholder='Password'
                        inputErrors={errors}
                        inputLabel='password'
                        rules={{
                            required: true, maxLength: 20, minLength: 8,
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
                <p className='signin__message'>Have an account? <Link className='signin__message--link' to='/login'>Log in</Link></p>
            </section>
        </>
    )
}

// const mapStateToProps = (state) => {
//     return {
//       profile: state.user.profile,
//     }

//   }

// export default connect(mapStateToProps)(withRouter(Signin))
export default Signin

