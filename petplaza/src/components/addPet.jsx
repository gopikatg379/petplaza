import axios from "axios";
import { useState, useEffect} from "react";
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import './Add.css';

const Add = ()=>{
    const navigate = useNavigate();
    let [pet,setPet] = useState({
        'pet_name':'',
        'pet_description':'',
        'category':0,
        'pet_image':null
    })
    let [cat,setCat] = useState([]);
    const fetchCat= async()=>{
        try{
            const response = await axios.get('http://127.0.0.1:8000/adminapp/list')
            console.log(response.data)
            setCat(response.data)
        }catch(error){ 
            console.error('Error',error)
        }
    }
    useEffect(()=>{
        fetchCat()
    },[])
    const InputData = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        let files = e.target.files;
        let newPetData = {}
        if(files){
            newPetData = {...pet,[name]:files[0]}
            setPet(newPetData)
        }else{
            newPetData = {...pet,[name]:value}
            setPet(newPetData)
        }
    }
    const fetchData= async()=>{
        try{
            const response = await axios.post('http://127.0.0.1:8000/add',pet,{
                headers: {
                       'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data)
            setPet(response.data)
            navigate('/home')
        }catch(error){
            console.log('There was an error', error)
        }
    }
    const submitData=()=>{
        fetchData()
    }
    return(
        <div className="container mt-5" id="cont">
          <h2 className="mb-4">Add a New Book</h2>
          <form  >
            <div className="form-group">
              <label htmlFor="name">Pet Name:</label>
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
              <label htmlFor="price">Pet description</label>
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
export default Add;