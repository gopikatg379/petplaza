import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './UpdateDetails.css';

const UpdateDetails = ()=>{
    const navigate = useNavigate();
    let [pet,setPet] = useState({})
    let {id} = useParams()
    let[cat,setCate] = useState([])

    const fetchCate = async()=>{
        try{
            const response = await axios.get('http://127.0.0.1:8000/adminapp/list')
            console.log(response.data)
            setCate(response.data)
        }catch(error){
            console.error("The error is",error)
        }
    }
    const fetchData = async()=>{
        try{
            const response = await axios.get(`http://127.0.0.1:8000/one/${id}`)
            console.log(response.data)
            setPet(response.data)
        }catch(error){
            console.error('The error was',error)
        }
    }
    const InputData=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        let files = e.target.files;
        let newPetData = {};
        if(files){
            newPetData = {...pet,[name]:files[0]};
            setPet(newPetData)
        }else{
            newPetData = {...pet,[name]:value};
            setPet(newPetData)
        }
    }
    const replaceData = async ()=>{
        try{
            const response = await axios.put(` http://127.0.0.1:8000/update/${id}`, pet,{
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            });
            navigate('/home')
        }catch(error){
            console.log("The error was", error)
        }
    }
    useEffect(()=>{
        fetchData()
        fetchCate()
    },[])
    const submitData=()=>{
        replaceData()
    }
    return(
        <div className="container mt-5" id="contain">
      <h2 className="mb-4">Add a Pet</h2>
      <form  >
        <div className="form-group">
          <label htmlFor="pet_name">Pet Name:</label>
          <input
            type="text"
            className="form-control"
            id="pet_name"
            name="pet_name"
            value={pet.pet_name}
            onChange={InputData}

            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pet_description">Pet Description:</label>
          <input
            type="text"
            className="form-control"
            id="pet_description"
            name="pet_description"
            value={pet.pet_description}
            onChange={InputData}
          
 
            required
          />
        </div>
        <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select
                        className="form-control"
                        id="category"
                        name="category"
                        value={pet.category}
                        onChange={InputData}
                        required
                    >
                        <option value="">Select a category</option>
                        {cat.map((x) => (
                            <option key={x.category_id} value={x.category_id}>{x.category_name}</option>
                        ))}
                    </select>
                </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="pet_image"
            onChange={InputData}

            required
          />
        </div>
        <button type="button" onClick={submitData}  className="btn btn-primary">Submit</button>
        
      </form>
    </div>
    )
}
export default UpdateDetails;