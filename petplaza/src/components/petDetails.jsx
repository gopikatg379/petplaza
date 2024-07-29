import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import './petDetails.css'
const PetDetails=()=>{
    let {id} = useParams()
    let [pet,setPet] = useState({})
    const navigate = useNavigate()

    const fetchData = async()=>{
        try{
            const response = await axios.get(`http://127.0.0.1:8000/one/${id}`)
            console.log(response.data)
            setPet(response.data)
        }catch(error){
            console.log('the error is', error)
        }
    }
    const handleDelete= async()=>{
        try{
            const response = await axios.delete(`http://127.0.0.1:8000/delete/${id}`) 
            console.log(response.data)
            navigate('/home')
        }catch(error){
            console.log('the error is',error)
        }
    }
   useEffect(()=>{
    fetchData()
   },[]) 
   return(
    <div className="book-details-container">
            <img src={`http://127.0.0.1:8000${pet.pet_image}`} alt="{pet.pet_name}" />
            <h3>{pet.pet_name}</h3>
            <h4>{pet.pet_description}</h4>
            <div className="d-flex justify-content-start" style={{justifyContent:"center", marginLeft:100}}>
                <button onClick={handleDelete} className="btn btn-danger m-2"><FontAwesomeIcon icon={faTrashAlt} /> Delete</button>
                <button onClick={()=>navigate(`/update/${id}`)} className="btn btn-danger m-2"><FontAwesomeIcon icon={faEdit} /> Update</button>
            </div>

            
        </div>
   )
}
export default PetDetails