import React, { useState, useEffect} from 'react';
import Header from "../../navigation/header/header.component";
import axios from 'axios';
import { BASE_URL } from '../../config';
import './learn-styles.css';


const LearnPage = () => {
    const [data, setData] = useState ([]);
    useEffect(() => {
        //fetch data from the API endpoint using Axios
        axios.get(`${BASE_URL}/manage`)
        .then((response)=> {
            // assuming the data is in the "data" property of the response
            setData(response.data); // updating the state with received data

        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

    }, []);
    return (
        <>
        <Header />

        <div id="tableDiv">
            <table className='table'>
                <thead>
                    <tr className='head'>
                        <th scope="col">Full Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Complaints</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item._id}>
                            <td>{item.FullName}</td>
                            <td>{item.YourLocation}</td>
                            <td>{item.Email}</td>
                            <td>{item.Gender}</td>
                            <td>{item.Complaints}</td>
                            </tr>
                    ))}
                    
                    

                    
                    
                </tbody>
            </table>
        </div>

        </>
    )
}
export default LearnPage;