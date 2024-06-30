import Header from "./Header"
import { useState } from "react"

function Login() {

    const [isSignInForm, setIsSignInForm] = useState('True')

    function toggleSignInForm() {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg'
                    alt='logo'
                />
            </div>
            <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 rounded-md bg-opacity-80">
                <h1 className="font-bold text-white text-3xl py4">{isSignInForm
                    ? 'Sign In'
                    : 'Sign Up'}</h1>
                {!isSignInForm && <input type='text' placeholder="Full Name" className="p-2 my-4 w-full bg-black border border-white rounded-md text-white" />}
                <input type='text' placeholder="Email Address" className="p-2 my-4 w-full bg-black border border-white rounded-md text-white" />
                <input type='password' placeholder="Password" className="p-2 my-4 w-full bg-black border border-white rounded-md text-white" />
                <button className='p-4 my-6 bg-red-700 w-full text-white font-semibold rounded-md'>{isSignInForm
                    ? 'Sign In'
                    : 'Sign Up'}</button>
                <p className="text-white cursor-pointer" onClick={toggleSignInForm}>{
                    isSignInForm
                        ? 'New to Netflix? Sign Up Now.'
                        : 'Already a User? Sign In Now.'}</p>
            </form>
        </div>
    )
}

export default Login

