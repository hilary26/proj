import React, { useState, useEffect} from "react";
import Sidebar from "../../navigation/sidebar/sidebar-component";
import { BASE_URL } from '../../config';
import axios from 'axios';
import './explore-styles.css';



const Explorepage = () => {
    const [data, setData] = useState ([]);
    useEffect(() => {
        //fetch data from the API endpoint using Axios
        axios.get(`${BASE_URL}/order`)
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
        <div className="web-page p-0">
            <div className="col-3 p-0">
              <Sidebar />
            </div>
      
            <div className="right-view">

            <table className="news-table">
             <thead>
             <tr>
        <th>Full Name</th>
        <th>Goods</th>
        <th>Amount</th>
        <th>State</th>
        <th>Address</th>
    </tr>
             </thead>

                <tbody>
                {data.map((item) => (
                        <tr key={item._id}>
                            <td>{item.FullName}</td>
                            <td>{item.YourGoods}</td>
                            <td>{item.Amount}</td>
                            <td>{item.state}</td>
                            <td>{item.address}</td>
                            </tr>
                    ))}
                </tbody>
                    </table>
            </div>
 
            </div>
        
        </>
    )
}
export default Explorepage;