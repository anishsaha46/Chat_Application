import {React,useState}from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setAuthUser } from '../redux/userSlice'
const Login = () => {
  const [user, setUser] = useState({
    
    username: "",
    password: "",
    

  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitHandler = async(e) => {
    e.preventDefault();
    //sending data to the database...
    try {
      const res = await axios.post('http://localhost:8080/api/v1/user/login',user,{
        headers:{
          'Content-Type': 'application/json'
        },
        withCredentials:true
      });
    
      navigate("/");
      console.log(res);
      dispatch(setAuthUser(res,data));
      
    
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      
      username: "",
      password: "",
      
    })

  }
  return (
    <div className='min-w-96 mx-auto text-black'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center'>Log in</h1>
        <form onSubmit={onSubmitHandler}>
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
          <p className='text-center my-2'> Don't have an account?
            <Link to="/register">
              Click here to register
            </Link>
          </p>
          <div>
            <button  type='submit'
            className='btn btn-block btn-md mt-2 border-slate-700'>Log in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login