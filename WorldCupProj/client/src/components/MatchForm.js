import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const MatchForm= (props) =>{
    const {id} = useParams();
    const [team1, setTeam1] = useState("");
    const [team2, setTeam2] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [group, setGroup] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/teams/${id}`)
        .then((response)=>{
            console.log(response.data);
            setTeam1(response.data.team1);
            setTeam2(response.data.team2);
            setDate(response.data.date);
            setLocation(response.data.location);
            setGroup(response.data.group);
        })
        .catch((err) => {
            console.log(err.response);
        });
}, [id]);

const deleteHandler =() => {
    axios.delete(`http://localhost:8000/api/teams/${id}`)
        .then((response)=> {
            console.log(response);
            console.log(response.data);
            navigate("/react");
        })
        .catch((err)=> console.log(err))
};




    return(
        <div className="container">
            <h2> Details about: {team1} v {team2}</h2>
            <Link to={'/react'}>back to Home</Link>
            <p className="form-fields">Fifa Updates:<a href="https://www.fifa.com/fifaplus/en">News</a></p>
            <p className="form-fields">Date: {date}</p>
            <p className="form-fields">Location: {location}</p>
            <p className="form-fields">Group: {group}</p>
            <button onClick={deleteHandler}>Delete Match!</button>
        </div>
    
            
        
    );
};
export default MatchForm;