import { lazy, useEffect, useState } from "react";
import axios from "axios";

export default function Usefetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await axios.get(url)
                setData(res.data);

            } catch (error) {
                setError(error.message)

            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { data, loading, error }
};
