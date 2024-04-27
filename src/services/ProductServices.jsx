import { useEffect, useState } from "react";
import axios from "axios";


const fetchItems = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const getItems = async () => {
        try {
            setLoading(true);
            const respond = await axios.get(url);
            setData(respond);
            setLoading(false);
        } catch (error) {
            setError(true);
        } 
    }


    useEffect(() => {
        getItems();
    }, [])
    
    return {data, loading, error};
}
 
export default fetchItems;