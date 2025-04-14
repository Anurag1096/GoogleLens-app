
import './homePageNav.css'
function HomePageNav() {

  const initialServer=null;

  const handleLabClick=()=>{
    alert("clicked lab icon")
  }

  const handleInitialClick=()=>{
    alert('now showing the popover');
  }
  return (
    <div className="nav-wrapper">
     <div className="btn-labs" onClick={handleLabClick}>
       <img src="/vite.svg" alt='labs_img' width={34} height={34}/>
     </div>
     <div  className="btn-initial" onClick={handleInitialClick}>
       <span>{`${initialServer??"A"}`}</span>
     </div>
    </div>
  )
}

export default HomePageNav