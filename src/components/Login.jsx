import React,{useState} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import { login as authLogin } from '../store/authSlice';
import { Logo } from './index'
import { useDispatch } from 'react-redux';
import authservice from '../appwrite/auth';
import Input from './Input';
import Button from './Button';

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const [error,setError] = useState("")
    const login = async (data)=>{
        setError("")
        try{
            const session = await authservice.login(data)

            if (session){

                const userData = authservice.getCurrentUser()
                if(userData) dispatch(authLogin(userData))
                navigate("/")
            }
        }
        catch(error){
            setError(error.message)

        }
    }

    return (
        <div className=' flex item-center justify-center w-full'>

            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>

<div className="mb-2 flex justify-center">
    <span className="inline-block w-full max-w-{100px}">
        <Logo width='100%'/>
    </span>
    </div>
    <h2 className="text-center font-bold text-2xl leading-tight">Sign In To Your Account</h2>
    <p className="mt-2 text-center text-base text-black/60">

        Don&apos;t have any accounnt ?&npsp;
        <Link
        to='/signup'
        className='font-medium text-primary transition-all duration-200 hover:underline'
        >
            Sign Up
        </Link>
    </p>
    { error && <p className='text-red-600 mt-8 text-center'>{error}</p> }

    <form onSubmit={handleSubmit(login) } className='mt-8' >
        <div className='space-y-5' >
            <Input
            label="email"
            placeholder='Enter your email'
            {...register("email",{ 
                required:true,
                validate:{
                    matchPatern :(value)=>{
                        /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
                    .test(value) || "Email address must be a valid address"
                    }
                }
            })}
            />

                 <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
            <Button
            type="submit"
            className="w-full"
            >Sign In </Button>
        </div>
    </form>
</div>
        
        </div>
      );
}

export default Login;