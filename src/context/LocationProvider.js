import React from 'react'
import { useContext , createContext , useState } from 'react'

const LocationContext = createContext({
  location : {} ,
  updateLocation : () => {}
})

export const useLocation = () => useContext(LocationContext)



export default function LocationProvider({children}) {
  //{ latitude : 33.6166912 , longitude : 73.0431488 }
  //location : rawalpindi default
  const [location , setLocation] = useState( "33.6166912,73.0431488" )

  const setDefaultPosition = ( position ) => {
    setLocation( String( position.coords.latitude ) + "," + String( position.coords.longitude )  )
  }

  //get coords from user device and set the position
  navigator.geolocation.getCurrentPosition( setDefaultPosition )

  const updateLocation = ( str ) => {
    setLocation( str )
  }

  return (
    <LocationContext.Provider value={{location,updateLocation}}>
        {children}
    </LocationContext.Provider>
  )
}
