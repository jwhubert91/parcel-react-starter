import * as React from 'react'
import LottieAnimation from '../Lottie';
import parcelFallingAnimation from '../animations/28181-falling-parcel.json';

function App() {
    return (
        <div class='app-container'>
            <h1>Parcel-React Starter</h1>
            <p>by <a href="https://www.twitter.com/jwhubert91">@jwhubert91</a></p>
            <LottieAnimation lotti={parcelFallingAnimation} height={400} width={400} />
            <code>Courtesy <a href="https://www.freecodecamp.org/news/how-to-up-a-react-app-with-parcel/">Bob Ziroll</a> for the setup and <a href="https://lottiefiles.com/teef">Elmer Vergara</a> for the animation.</code>
        </div>
    )
}

export default App;
