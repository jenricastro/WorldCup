import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const MatchView = () => {
const [allTeams, setAllTeams] = useState ([]);

useEffect(() => {
    axios.get(`http://localhost:8000/api/teams`)
    .then((res) => {
        console.log(res.data);
        setAllTeams(res.data);
    })
    .catch((err)=>console.log(err));
}, []);

return(
    <div className="container">
        <div className="row">
        <div className="col-8">
            <Link to="/create">Add a new Match</Link>
            <p className="text">These are the upcoming games for the World Cup</p>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Team #1</th>
                <th scope="col">Team #2</th>
                <th scope="col">Date</th>
                <th scope="col">Location</th>
                <th scope="col">Group</th>
                <th scope="col">Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {allTeams.map((team, index) => {
                return (
                    <tr key={team._id}>
                        <td>{team.team1}</td>
                        <td>{team.team2}</td>
                        <td>{team.date}</td>
                        <td>{team.location}</td>
                        <td>{team.group}</td>
                        <td>
                            <Link to={`/edit/${team._id}`}>
                            <button className="btn btn-primary">Edit</button>
                            </Link>
                            <Link to={`/view/${team._id}`}>
                            <button className="btn btn-primary">Details</button>
                            </Link>
                        </td>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>
        </div>
    </div>
);
};

export default MatchView;