import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';

//screen toggle is just for viewing auth or app screens
//need to implement redux store and loading or home screen while user is being loaded

export default function Home() {
  //set to true for appscreens and false for authscreens
  const [screenToggle, setScreenToggle] = useState(true);

    return (
      <NavigationContainer>
        {/* Need to add async for hitting backend, while autlogin is running, display loading screen */}
          {screenToggle ?
            <AppScreens /> 
          : 
            <AuthScreens />
          };
      </NavigationContainer>
    );
  };