import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';

const MatchEdit = () => {

    const {id} = useParams();

    const [team1, setTeam1] = useState("");
    const [team2, setTeam2] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [group, setGroup] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/teams/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setTeam1(res.data.team1);
            setTeam2(res.data.team2);
            setDate(res.data.date);
            setLocation(res.data.location);
            setGroup(res.data.group)
        })
        .catch((err) => console.log(err))
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/teams/${id}`,{
            team1, team2, location,date, group
        })

        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate(`/react`);
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        });
    }
    return (
        <div className="container">
            <div className="row">
            <h2>Edit: {team1} vs {team2}</h2>
            <Link to={'/react'}>back to Home</Link>
            
            <form onSubmit={onSubmitHandler}>
                <div className="form-fields">
                <label>Team #1:</label>
                        <input type="text" 
                        name="team1" value={team1}
                        onChange = {(e) => setTeam1(e.target.value)}/>

                    {errors.name ? 
                    <p>{errors.name.message}</p>
                :   null
                    }
                </div>

                <div className="form-fields">
                <label>Team #2:</label>
                        <input type="text" 
                        name="team2" value={team2}
                        onChange = {(e) => setTeam2(e.target.value)}/>

                    {errors.name ? 
                    <p>{errors.name.message}</p>
                :   null
                    }
                </div>

                <div className="form-fields">
                <label>Date:</label>
                        <input type="date"
                        name="date" value={date}
                        onChange = {(e) => setDate(e.target.value)}/>

                    {errors.name ? 
                    <p>{errors.name.message}</p>
                :   null
                    }
                </div>

                <div className="col-4">
                    <div className="form-fields">
                    <label>Location:</label>
                        <input type="text" 
                        name="Location" value={location}
                        onChange = {(e) => setLocation(e.target.value)}/>
                    </div>

                    <div className="form-fields">
                    <label>Group:</label>
                        <input type="text" 
                        name="group" value={group}
                        onChange = {(e) => setGroup(e.target.value)}/>
                    </div>
                </div>
                
                <br/>
                <button className="btn btn-primary" type="submit">Edit Match</button>
            </form>  
        </div>
    </div>
    )
}

export default MatchEdit;