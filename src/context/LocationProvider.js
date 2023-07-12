import React from 'react'
import { useContext , createContext , useState } from 'react'

const LocationContext = createContext({
  location : {} ,
  updateLocation : () => {}
})

export const useLocation = () => useContext(LocationContext)

export default function LocationProvider({children}) {

  const [location , setLocation] = useState({ latitude : 33.6166912 , longitude : 73.0431488 })

  const updateLocation = ( lat , long ) => {
    setLocation( { latitude : lat , longitude : long } )
  }

  return (
    <LocationContext.Provider value={{location,updateLocation}}>
        {children}
    </LocationContext.Provider>
  )
}
