import React, {useState, useEffect} from "react";
import axios from "axios";

function GetWatchValue(props) {
    const [watchPrice, setWatchPrice] = useState([]);

    const fetchData = () => {
        const watchAPI = props.url;


        const getWatchValue = axios.get(watchAPI)
        axios.all([getWatchValue]).then(
            axios.spread((...allData) => {
                const allWatchData = allData[0].data.average_price;

                setWatchPrice(allWatchData)
            })
        )
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <div className="api-request-value">
            <p>{watchPrice}</p>
        </div>
    );
}

export default GetWatchValue;

