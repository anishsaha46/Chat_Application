import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';


const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""

  });
  const navigate = useNavigate();
  const handleCheckbox = (gender) => {
    setUser({ ...user, gender })
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //sending data to the database...
    try {
      const res = await axios.post('http://localhost:8080/api/v1/user/register', user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      if (res.data.success) {
        navigate("/login"); //navigate to login page
        toast.success(res.data.message);
      };
    } catch (error) {
      toast.error(error.response.message);
      console.log(error);
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: ""
    })

  }
  return (
    <div className='min-w-96 mx-auto text-black'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center'>Signup</h1>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Full Name</span>
            </label>
            <input value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}//...user: This is the spread operator. It takes all the properties of the existing user object and copies them into a new object.
              // This is important because it allows you to keep all the other properties of user unchanged.
              className='w-full bg-white input input-bordered h-19' type='text' placeholder='Fullname'></input>

          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className='w-full bg-white input input-bordered h-19' type='text' placeholder='username'></input>

          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Password</span>
            </label>
            <input value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className='w-full bg-white input input-bordered h-19' type='password' placeholder='Password'></input>

          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Confirm Password</span>
            </label>
            <input value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              className='w-full bg-white input input-bordered h-19' type='password' placeholder='Confirm password'></input>

          </div>
          <div className='flex-items-center my-4'>
            <div className='flex items-center'>
              <p>Male</p>
              <input
                type="checkbox"
                checked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
                defaultChecked
                className="checkbox mx-2" />
            </div>
            <div className='flex items-center'>
              <p>Female</p>
              <input type="checkbox"
                checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
                defaultChecked className="checkbox mx-2" />
            </div>

          </div>

          <p className='text-center my-2'> Already have an account?
            <Link className='' to="/login">
              Click here to login
            </Link>
          </p>
          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border-slate-700'>Signup</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup