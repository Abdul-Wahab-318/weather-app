import React , { useState , useEffect } from "react"
import axios from "axios" 
import api from "../api"
import {key} from '../api'
import { useLocation } from "../context/LocationProvider"

export const useFetch = ( url ) => {

    const [ loading , setLoading ] = useState(true)
    console.log("loading:" , loading)
    const { location , updateLocation } = useLocation()
    const [ data , setData ] = useState({})
    const [ error , setError ] = useState({})

   const endPoint = api + url + "&key=" + key + "&q=" + location

    let fetchData = async () => {

        try{

          setLoading(true)
          let { data : response } = await axios.get( endPoint )
          setLoading(false)

         setData( response )
        
        }
        catch(err)
        {
          let error = err.response.data.error
          setError( error )
          
          //if no matching location found then reset location to isb default
          if ( error.code === 1006)
            updateLocation("islamabad")
          console.log(err)
        }
  
    }



    useEffect(()=>{
        fetchData()
    },[ location ])

    return { loading , data , error }

}