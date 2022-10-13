import React, {useState, useEffect} from 'react';
import "./login.css";
import union from "../../../assets/Union.png";
import lendsqr from  "../../../assets/lendsqr.png";
import pablo from "../../../assets/pablo-sign-in.svg";
import {useNavigate} from "react-router-dom";


function Auth() {
    const [isSignup, setIsSignup] = useState(false)

    const switchMode = ()=>{
        setIsSignup((prevIsSignup)=> !prevIsSignup)
    }


    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const [values, setValues] = useState({
        email:"",
        password:"",
        name:"",
    })
    const handleChange = (ev) => {
		setValues({
			...values,
			[ev.target.name]: ev.target.value,
		});
	};

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleError = (targets) => {
		let errorsValue = {};
		if (!targets.name) errorsValue.name = "Name is required";

        if (!targets.email) errorsValue.email = "Email  is required";
        else if(!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";

        if (!targets.password) errorsValue.password = "password is required";
        else if(targets.password.length <5){
                errorsValue.password="Password must be more than five character"
            }
        
        
		if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
		else setErrors({});

		return Object.keys(errorsValue).length;

	};

    function loginSubmit (e){
        e.preventDefault();
        let v = handleError(values);

        let usercredentials =  JSON.parse(localStorage.getItem("user-info"))
        console.log(usercredentials)

		// check if there is any eror available and handle here 
		// if (v > 0) console.log("error");
		if((values.email !== usercredentials.email) && (values.password !== usercredentials.password)){
                 alert("Wrong email or Password!!! sign up to continue")
                console.log("An error occur") 
        } 
        
		else {
            JSON.parse(window.localStorage.getItem("user-info"))
            navigate('/users');
            console.log("submitted");
        }
        
    }
    function signupSubmit(e){
        e.preventDefault();
        let v = handleError(values);
		// check if there is any eror available and handle here 
		if (v > 0) console.log("error");
		//submit form here if no error availble
		else {
            localStorage.setItem("user-info", JSON.stringify(values))
            navigate('/users');
            console.log("submitted");
        }

        
    }
    

  return (
    <div className='loginPage'>
        <div className='logo'>
            <img src={union} alt="" className='logo1'/>
            <img src={lendsqr} alt=""  className='logo2'/>
        </div>

        <div className='login-row-session'>
            <div className='login-row-image '>
                <img src={pablo} alt="" />
            </div>

            <div className='login-container'>
                <div className='Welcome'>Welcome!</div>
                <div className='text'>{isSignup ? 'Enter details to sign up' : 'Enter details to login'}</div>

                <form className='login-form' onSubmit={isSignup ? signupSubmit : loginSubmit }>
                    {
                        isSignup && (
                            <>
                                <input type="text" placeholder="Full name ..." name="name" value={values.name} className='form-input' onChange={handleChange} />
                                {errors ? <p> {errors.name }</p>: ""}
                            </>
                        )
                    }
                    
                    <input type="email" name="email" placeholder="Email" className='form-input' value={values.email} onChange={handleChange}/>
                    {errors ? <p> {errors.email }</p>: ""}

                    <div className='passwordshow'>
                        <input type={passwordShown ? "text" : "password"} placeholder="password ..." name="password"  value={values.password} className='form-input' onChange={handleChange} />
                        <span onClick={togglePassword} className="show-password" >show</span>
                        {errors ? <p> {errors.password }</p>: ""}
                    </div>

                    {!isSignup && (<div className='forgot-password'>Forgot password?</div>)}

                    <div className='submit-div'>
                        <button type= "submit" value="submit" className='submit-btn'>
                            {isSignup ? 'Sign Up' : "Log in"}
                        </button>
                    </div>
                    
                    <div className='btn-div'>
                        <button onClick={switchMode} className="button-text">
                            {isSignup ? 'Already have an account? Log In' : "Don't have an account?  Sign Up" }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Auth