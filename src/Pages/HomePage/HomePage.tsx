
import HomePageNav from '../../ Components/HomePageComp/homePageNav'
import TextSearchLink from '../../ Components/HomePageComp/TextSearchLink'

function HomePage() {
  // This Home page will handle all the data calling and passing data for every component
  // This page will follow the composition design
  // A components job will be to receive data and render it.
  
  return (
    <main className='home-wrapper'>
        {/* This is the google app home page for mobile devices and will contain the following components */}
        {/* Top navigation bar components    */}
        <HomePageNav/>
        {/* Google logo */}
       
        {/* Text Search component */}
        <TextSearchLink/>
        {/* fidget component's section */}
        {/* Real time feed section */}

    </main>
  )
}



export default HomePage