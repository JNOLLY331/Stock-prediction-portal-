import React, { useState } from "react";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");     
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false)  
  const [loading, setLoading] = useState(false);     

  const handleRegistration = async (e) => {   
    e.preventDefault()
    setLoading 
    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/register",
        userData
      );

      console.log("response.data ===", response.data);
      console.log("Registration successful");
      setErrors({})
      
    setSuccess(true);
    setTimeout(() => {
    setSuccess(false); 
  },2000);
      setUsername("");
    setEmail("");
  setPassword("");
    } catch (error) {
      setErrors(error.response.data)
      console.error(
        "Registration error:",
        error.response?.data || error.message
      );
    }
    finally {
      setLoading(false);
    }       
  };

  return (
    <div className="container bg-light-dark rounded px-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="form-controls" onSubmit={handleRegistration}>
            <h3 className="text-light">Create account</h3>

            <label htmlFor="username" className="text-light">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              placeholder="jnolly"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <small>
                {errors.username && <div className="text-danger">{errors.username}</div>}
            </small>
            <label htmlFor="email" className="text-light">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"  
              placeholder="japhethanold2@gmail.com"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             <small>
                {errors.email && <div className="text-danger">{errors.email}</div>}
            </small>
            <label htmlFor="password" className="text-light">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
             <small>
                {errors.password && <div className="text-danger">{errors.password}</div>}
            </small>
            {success && <div className="alert alert-success my-2">Registration successful</div>}
            {loading ? (
              <button className="btn btn-info d-block mx-auto my-3" disabled>
                Registering...
              </button>
            ) : ( <button type="submit" className="btn btn-info d-block mx-auto my-3">
              Submit
            </button>)}
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register