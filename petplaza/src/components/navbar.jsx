import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ searchTerm, setSearchTerm }) => {
    let[cat,setCate] = useState([]);
    const fetchCat= async()=>{
        try{
            const response = await axios.get('http://127.0.0.1:8000/adminapp/list')
            console.log(response.data)
            setCate(response.data)
        }catch(error){ 
            console.error('Error',error)
        }
    }
    
    useEffect(()=>{
        fetchCat()
    },[])
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        
    };
    const filteredCat = cat.filter(item =>
        item.category_name.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    return (
        <nav className="navbar">
            
            <div className="logo">
                <h1 id='head1'>PetPlaza</h1>
            </div>
            <div className="search-bar-container">
                <Form inline className="search-form">
                    <FormControl 
                        type="text"
                        placeholder="Search for your campanion"
                        className="mr-sm-2"
                        value={searchTerm}
                        id='search'
                        onChange={handleSearchChange}
                    />
                    {searchTerm && (
                    <div className="category-results">
                        {filteredCat.map((item) => (
                            <div key={item.category_id} className="result-item">
                                {item.category_name}  
                            </div>
                        ))}
                    </div>
                )}
                </Form>
            </div>
            <ul className="nav-links">
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/add'}>Donate</Link></li>
                <li><Link to={'/service'}>Service</Link></li>
                <li><a href="/contact">Contact</a></li>
                <li><Link to={'/'}><FontAwesomeIcon icon={faRightFromBracket} /></Link></li>
            </ul>
        </nav>
        
    );
}

export default Navbar;
