import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

export default function Main (props) {
    // State to hold the data.
    const [data, setData] = useState("null");

    // Function to fetch data.
    const getData = async () => {
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search");
            const data = await response.json();
            const user= data[0];
            setData(user);
            console.log(data);
        } catch(e) {
            console.error(e)
        }
    };
    
    // useEffect to run getData when component mounts.
    useEffect(() => {
        getData();
    }, []);

    const click =()=>{
        getData();
    }

    // loaded function for when data is fetched.
    const loaded = () => {
        return (
            <div className="card" >
                <img src={data.url} alt="cat image"/>
                <div className="card-body">
                    <h5 className="card-title">Random Cat</h5>  
                    <p className="card-text">Click the button to get a random picture of a cat</p>
                </div>
                <button onClick={click}>Get new cat</button>
            </div>
        );
    };
    // Function for when data doesn't exist.
    const loading = () => {
        return <h1>Loading...</h1>;
    };
    
    // If data exists, run the loaded function; otherwise, run loading.
   return data ? loaded() : loading();
}