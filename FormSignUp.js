import React from 'react'

const FormSignUp = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                <h1>Become a Games Spike member and begin downloading, uploading and promoting today!</h1>
                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>
                        Username
                    </label>
                    <input id='username' type='text' name='username' className='form-input' placeholder="Enter your username" />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                        Email
                    </label>
                    <input id ='email' type='email' name='email' className='form-input' placeholder='Enter your email' />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                        Password
                    </label>
                    <input id ='password' type='password' name='password' className='form-input' placeholder='Enter your password' />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password2' className='form-label'>
                        Confirm Password
                    </label>
                    <input id ='password2' type='password2' name='password2' className='form-input' placeholder='Enter your password2' />
                </div>
                <button className='form-input-btn' type='submit'>
                    Sign Up
                </button>
                <span className="form-input-login">
                    Already have an account? Login <a href="#">Here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignUp
