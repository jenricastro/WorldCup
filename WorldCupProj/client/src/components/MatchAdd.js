import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const MatchAdd = () => {
    const [team1, setTeam1] = useState("");
    const [team2, setTeam2] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [group, setGroup] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    
    
const handleSubmit = (e) =>{
    e.preventDefault();

        axios
        .post ("http://localhost:8000/api/teams", {team1, team2, date, location, group})
        .then((response) =>{
            console.log(response);
            console.log(response.data);
            setTeam1("");
            setTeam2("");
            setDate("");
            setGroup("");
            navigate("/react");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };


    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                <Link to={'/react'}>HomePage</Link>
                    <form onSubmit={handleSubmit}>

                    <div className="form-fields">
                        <label>Team #1:</label>
                        <input type="text" 
                        name="team1" value={team1}
                        onChange = {(e) => setTeam1(e.target.value)}/>
                    </div><div>
                        {errors.name ?  
                        <p>{errors.name.message}</p>
                        :null}
                    </div>

                    <div className="form-fields">
                    <label>Team #2:</label>
                        <input type="text" 
                        name="team2" value={team2}
                        onChange = {(e) => setTeam2(e.target.value)}/>
                    </div><div>
                        {errors.name ?  
                        <p>{errors.name.message}</p>
                        :null}
                    </div>
                    
                    <div className="form-fields">
                        <label>Date:</label>
                        <input type="date"
                        name="date" value={date}
                        onChange = {(e) => setDate(e.target.value)}/>
                    </div><div>
                        {errors.type ?  
                        <p>{errors.type.message}</p>
                        :null}
                    </div>

                    <div className="form-fields">
                        <label>Location:</label>
                        <input type="text" 
                        name="Location" value={location}
                        onChange = {(e) => setLocation(e.target.value)}/>
                    </div><div>
                        {errors.type ?  
                        <p>{errors.type.message}</p>
                        :null}
                    </div>

                    <div className="col-4">
                    <div className="form-fields">
                        <label>Group:</label>
                        <input type="text" 
                        name="group" value={group}
                        onChange = {(e) => setGroup(e.target.value)}/>
                    </div>
                </div>

                        <button className="btn btn-primary" type="submit">Add Match!</button>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default MatchAdd;