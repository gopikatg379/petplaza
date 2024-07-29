import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

const UserLogin = () => {
  const navigate = useNavigate();
  let [user, setUser] = useState({
    user_name: "",
    user_password: ""
  });

  const InputData = (e) => {
    const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
  };

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/", user, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      }
    } catch (error) {
      console.log("the error is", error);
    }
  };

  return (
    <div className="login-container">
      <div className="card" id="card">
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="user_name" id="user">Username</label>
              <input 
                type="text"
                className="form-control"
                id="user_name1"
                name="user_name"
                value={user.user_name}
                placeholder="Enter your username"
                onChange={InputData}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pwd" id="pwd">Password</label>
              <input
                type="password"
                className="form-control"
                id="user_password"
                name="user_password"
                value={user.user_password}
                placeholder="Enter your password"
                onChange={InputData}
                required
              />
            </div>
            <button
              type="submit"
              onClick={fetchData}
              id="btn"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
