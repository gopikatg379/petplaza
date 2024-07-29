import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddFeedback.css';

const AddFeedback=()=>{
    let [feed,setFeed]= useState({
        "user_name":"",
        "feedback":""
    })
    const navigate = useNavigate()

    const InputData=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        let newFeedData = {...feed,[name]:value}
        setFeed(newFeedData)

    }
    const fetchData = async()=>{
        try{
            const response = await axios.post('http://127.0.0.1:8000/addfeed',feed)
            console.log(response.data)
            setFeed(response.data)
            navigate('/home')
        }catch(error){
            console.log('The error is', error)
        }
        
    }
    
    const submitData =()=>{
        fetchData()
    }
    return(
        <div className="container mt-5" id="contain">
          <h2 className="mb-4" id="head3">Feedback</h2>
          <form >
            <div className="form-group">
              <label htmlFor="name">User Name:</label>
              <input
                type="text"
                className="form-control"
                id="user_name"
                name="user_name"
                value={feed.user_name}
                onChange={InputData}
    
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="text">Feedback</label>
              <input
                type="text"
                className="form-control"
                id="feedback"
                name="feedback"
                value={feed.feedback}
                onChange={InputData}
              
     
                required
              />
            </div>
             <button type="button" onClick={submitData}  className="btn btn-primary">Submit</button>
          </form>
        </div>
      )
}
export default AddFeedback;