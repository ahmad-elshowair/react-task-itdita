
import React from "react";
export const Login= () =>{

  const [loginData, setLoginData] = React.useState({
    username: "",
    password: "",
    isLogged : false,
  });

  const isDisabled = loginData.username === "" || loginData.password === ""? true: false ;
  const handleChange = (event) =>{
    const {name, value} = event.target;
        setLoginData((prevData)=>{
            return {
                ...prevData,
                [name]: value
            };
        });
    console.log(loginData);
  };

  const handleSubmit = (event, username, password) =>{ 
    event.preventDefault();
    password = event.target.username.value;
    username= event.target.password.value;
    setLoginData((prevData)=>{
      return{
        ...prevData,
        isLogged: true
      };
    });
  };
  return(
      <>
        <div className="logo--box">        
          <img
            className="login--logo"
            src="./login.png" 
            alt="login"
          />
        </div>
        <form className="login--form" onSubmit={handleSubmit}>
          <input
              type="text"
              id="username-input"
              name="username"
              placeholder="Type Your username Here !"
              className="login--input"
              onChange={handleChange}
              value={loginData.username}
          />
           <input
              id="password-input"
              type="password"
              name="password"
              placeholder="Type Your Password Here !"
              className="login--input"
              onChange={handleChange}
              value={loginData.password}
            />
            <button 
              className="btn"
              disabled={isDisabled} 
              id="login-button"
            > 
              Login
            </button>
            
        </form>
        {
          loginData.isLogged && 
          <p> Successfully Logged in !</p>
        }
      </>
  );
}