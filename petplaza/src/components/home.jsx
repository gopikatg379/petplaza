import axios from "axios";
import { useState,useEffect } from "react";
import { Card, Button,Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Link } from "react-router-dom";

const Home = ()=>{
    let [pet,setPet]= useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const services = [
      {
          id: 1,
          title: "Donate a Pet",
          description: "Help pets find a loving home by donating.",
          image: "src/assets/media/new_donate.jpg", 
          link: "/donate-pet"
      },
      {
          id: 2,
          title: "Adopt meet the adoptables",
          description: "Find a campanion!!!",
          image: "src/assets/media/adopt.jpg",
          link: "/sell-products"
      },
      {
        id: 3,
        title: "Volunteer ",
        description: "Make a differnce!!!",
        image: "src/assets/media/volunteer.webp",
        link: "/sell-products"
    }
  ];
  useEffect(() => {
    const fetchFeedbacks = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/viewfeed');
            setFeedbacks(response.data);
        } catch (error) {
            console.error("Error fetching feedback:", error);
        }
    };

    fetchFeedbacks();
}, []);
    const fetchData = async() =>{
        try{
            const response = await axios.get('http://127.0.0.1:8000/home')
            console.log(response.data)
            setPet(response.data)
        }catch(error){
            console.error('There was some error', error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    
    return(
      
      <div>
        
        <Carousel>
            {services.map((service) => (
                <Carousel.Item key={service.id}>
                    <img
                        className="d-block w-100"
                        src={service.image}
                        alt={service.title}
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
        <div>
          <h2 id="head2">Looking For A Campanion</h2>
        </div>
        <div className='scrollable-container'>
        <div className='row'>
      {pet.map((x) => (
        <Card style={{ width: '17rem' }} className='col-3' key={x.pet_id}>
          <Card.Img variant="top" src={`http://127.0.0.1:8000${x.pet_image}`} alt={x.pet_name} style={{ height: '200px', objectFit: 'contain' }} /> 
          <Card.Body>
            <Card.Title>{x.pet_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{x.category.category_name}</Card.Subtitle>
            <Card.Text>
              {x.pet_description}
            </Card.Text>
              <Link to={`/pet/${x.pet_id}`} className='custom-link'><Button className='btn btn-login' id="btn2">View More</Button></Link>
          </Card.Body>
        </Card>

      ))}
      </div>
      </div>
      <div>
      <h2 id="head2">Feedbacks</h2>
      </div>
      <div className='scrollable-container'>
      <div className='row'>
      {feedbacks.map((x) => (
        <Card style={{ width: '17rem' }} className='col-3' key={x.pet_id} id="cards">
          <Card.Body>        
            <Card.Text>
              {x.feedback}
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">{x.user_name}</Card.Subtitle>
          </Card.Body>
        </Card>

      ))}
        </div>
    </div>
    </div>
    )

}

export default Home;