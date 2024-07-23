import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom';

const Login = ({setpopup}) => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [redirect, setredirect] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/login', {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
    if (response.status === 200) {
      alert('Login Successful');
      setredirect(true);
      setpopup(true);
    }
    else {
      const a = await response.json();
      alert(a)
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className='w-full h-full text-black'>
      <form className='w-full h-full text-left flex flex-col gap-2 px-5 py-16' action="login" onSubmit={handleLogin}>
        <h1 className='text-4xl font-semibold text-black'>Login to your <br /> account.</h1>
        <p className='text-gray-600 text-base mb-5'>Please sign in to your account</p>

        <div className='mb-2'>
          <label className='text-lg font-semibold'>Email Address
            <input className='w-full text-lg px-4 py-3 bg-white border border-gray-400 rounded-lg text-gray-500' placeholder='Email' type="email" id="4"
              value={email}
              onChange={(e) => setemail(e.target.value)} />
          </label>
        </div>

        <div className='mb-2'>
          <label className='text-lg font-semibold'>Password
            <input className='w-full text-lg px-4 py-3 bg-white border border-gray-400 rounded-lg text-gray-500' placeholder='Password' type="password" id="5"
              value={password}
              onChange={(e) => setpassword(e.target.value)} />
          </label>
        </div>

        <div className='w-full text-right text-[#FE8C00] font-semibold mb-2'><p>Forgot Password?</p></div>

        <button className='w-full py-3 bg-[#FE8C00] rounded-3xl font-semibold text-white mb-2' type="submit">Sign In</button>

        <div className="py-4 font-cr-regular text-sm flex items-center justify-center relative text-dark w-full mb-2"><span className="block w-full bg-gray-300 h-px"></span><span className="bg-white py-2 px-4 absolute">or Sign In with</span></div>

        <button className='mx-auto p-2 border border-gray-300 rounded-full w-[40px] flex items-center justify-center mb-4'>
        <svg width="25" height="25" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.7074 12.2531C22.7074 11.4389 22.6436 10.6203 22.5074 9.81934H11.582V14.4315H17.8385C17.5788 15.9191 16.7446 17.235 15.5232 18.0711V21.0638H19.2557C21.4476 18.9777 22.7074 15.8971 22.7074 12.2531Z" fill="#4285F4"></path><path d="M11.5851 23.9555C14.7091 23.9555 17.3436 22.8949 19.2631 21.0641L15.5305 18.0715C14.492 18.802 13.1514 19.2157 11.5894 19.2157C8.56757 19.2157 6.00542 17.1077 5.08611 14.2734H1.23438V17.3585C3.20068 21.403 7.20563 23.9555 11.5851 23.9555Z" fill="#34A853"></path><path d="M5.07965 14.2764C4.59446 12.7888 4.59446 11.1781 5.07965 9.69055V6.60547H1.23214C-0.410713 9.98981 -0.410713 13.9771 1.23214 17.3614L5.07965 14.2764Z" fill="#FBBC04"></path><path d="M11.5851 4.74065C13.2365 4.71424 14.8325 5.35678 16.0285 6.53624L19.3354 3.11669C17.2415 1.08344 14.4622 -0.0344006 11.5851 0.000807131C7.20564 0.000807131 3.20068 2.55337 1.23438 6.60225L5.08186 9.68733C5.99692 6.84871 8.56333 4.74065 11.5851 4.74065Z" fill="#EA4335"></path>
        </svg>
        </button>

        <p className='text-base font-semibold mx-auto'>Don&apos;t have an account? <Link to={'/register'} className='text-[#FE8C00]'>Register</Link></p>
      </form>
    </div>
  )
}

export default Login
