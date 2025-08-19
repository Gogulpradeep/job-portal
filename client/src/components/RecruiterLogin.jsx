import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Appcontext } from '../context/Appcontext';

const RecruiterLogin = () => {
  const [loginState, setLoginState] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);
  const [message, setMessage] = useState('');

//   let email = "saju@gmail.com";
//   let password = "saju123"
  const { setShowRecruiterLogin } = useContext(Appcontext);
  const navigate = useNavigate();

  // Load users from localStorage
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem('recruiters');
    return stored ? JSON.parse(stored) : [];
  });

  const saveUsers = (newUsers) => {
    setUsers(newUsers);
    localStorage.setItem('recruiters', JSON.stringify(newUsers));
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setImage(null);
    setIsTextDataSubmitted(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (loginState === 'Sign Up' && !isTextDataSubmitted) {
      setIsTextDataSubmitted(true);
      return;
    }

    if (loginState === 'Sign Up') {
      if (users.some((user) => user.email === email)) {
        setMessage('Email already registered!');
        return;
      }
      const newUser = { name, email, password, image: image ? URL.createObjectURL(image) : null };
      saveUsers([...users, newUser]);
      setMessage('Account created successfully!');
      resetForm();
      setLoginState('Login');
      return;
    }

    // LOGIN
    const user = users.find((u) => u.email === email  && u.password === password);
    console.log(user)
    if (user) {
      setMessage(`Welcome back, ${user.name}!`);
      resetForm();
      setShowRecruiterLogin(false);
      navigate('/dashboard');
    } else {
      setMessage('Invalid email or password');
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
      if (image) URL.revokeObjectURL(image);
    };
  }, [image]);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 rounded-xl text-slate-500 w-full max-w-md"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Recruiter {loginState}
        </h1>
        <p className="text-sm text-center mb-5">
          Welcome! Please {loginState === 'Login' ? 'sign in' : 'sign up'} to continue
        </p>

        {message && <p className="text-center text-red-500 mb-3">{message}</p>}

        {loginState === 'Sign Up' && isTextDataSubmitted ? (
          <div className="flex flex-col items-center gap-4 my-10">
            <label htmlFor="image" className="cursor-pointer">
              <img
                className="w-16 h-16 rounded-full border"
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt="Company Logo"
              />
              <input
                type="file"
                id="image"
                hidden
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
            <p>Upload Company Logo</p>
          </div>
        ) : (
          <>
            {loginState === 'Sign Up' && (
              <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.person_icon} alt="icon" className="w-5 h-5" />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="outline-none text-sm w-full"
                />
              </div>
            )}

            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.email_icon} alt="icon" className="w-5 h-5" />
              <input
                type="email"
                placeholder="Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="outline-none text-sm w-full"
              />
            </div>

            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.lock_icon} alt="icon" className="w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="outline-none text-sm w-full"
              />
            </div>
          </>
        )}

        <p className="text-sm text-blue-600 mt-4 cursor-pointer text-right">
          Forgot password?
        </p>

        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2 rounded-full mt-4 hover:bg-blue-700 transition"
        >
          {loginState === 'Login'
            ? 'Login'
            : isTextDataSubmitted
            ? 'Create account'
            : 'Next'}
        </button>

        {loginState === 'Login' ? (
          <p className="mt-5 text-center text-sm">
            Don't have an account?{' '}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => {
                setLoginState('Sign Up');
                setIsTextDataSubmitted(false);
                setMessage('');
              }}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center text-sm">
            Already have an account?{' '}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => {
                setLoginState('Login');
                setMessage('');
              }}
            >
              Login
            </span>
          </p>
        )}

        <img
          onClick={() => setShowRecruiterLogin(false)}
          className="absolute top-5 right-5 cursor-pointer w-5 h-5"
          src={assets.cross_icon}
          alt="Close"
        />
      </form>
    </div>
  );
};

export default RecruiterLogin;
