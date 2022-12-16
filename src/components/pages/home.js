import React, { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get("http://localhost:3003/user");
        setUser(result.data);
    }
    return (
        <div className="container">
            <div className="py-4">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="row">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user,index) =>( 
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td className="btn btn-outline-primary m-2"> view</td>
                            <td className="btn btn-outline-warning m-2 "> delete</td>
                        </tr>
                   ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home;