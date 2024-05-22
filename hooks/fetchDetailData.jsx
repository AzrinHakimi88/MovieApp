import {useState, useEffect} from 'react'
import axios from 'axios'

const fetchMovieDetail = ({type,id}) => {
    const [isLoading,setIsLoading] = useState(false)
    const [data,setData] = useState({})
    const [error,setError] = useState(null)

    

    const options = {
        method: 'GET',
        url: `https://movies-api14.p.rapidapi.com/${type}/${id}`,
        headers: {
          'X-RapidAPI-Key': '055b7e7d85msh0f2b114851c4132p12980djsn7cedf41a3b86',
          'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        }
      };
    
      
      const fetchData = async() => {
        setIsLoading(true)
        try {
          const response = await axios.request(options);
          const resData = response.data
          setData(resData);
          setIsLoading(false)
        } catch (error) {
            console.error(error);
            setError(error);
        }finally{
            setIsLoading(false)
        }
      }
      
      useEffect(() => {
        fetchData()
      },[])  
      
      
      return [isLoading,error,data, fetchData]
}


export default fetchMovieDetail