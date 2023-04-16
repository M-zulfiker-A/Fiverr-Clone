import React , {useState, useEffect} from 'react'
import "./Navbar.scss"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [showMenu , setshowMenu] = useState(false)
  const [userMenu , setUserMenu] = useState(false)
  const pathname = useLocation().pathname;
  const menuTrigger =()=>{
    window.scrollY > 0 ? setshowMenu(true) : setshowMenu(false)
  }
  const closeUserMenu=(e)=>{
    if(e.target.innerHTML !== currentUser.username){
      setUserMenu(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', menuTrigger);
    window.addEventListener('click', (e)=>closeUserMenu(e));

    return ()=>{
      window.removeEventListener('scroll',menuTrigger)
      window.removeEventListener('click', (e)=>closeUserMenu(e));
    }
  },[])
  const currentUser = {
    username : "Zulfiker",
    isSeller : true,
    imageUrl : `https://ui-avatars.com/api/?name=`
  }
  return (
    <div className={showMenu || pathname !== "/" ? 'navbar active' : 'navbar' }>
      <div className="container">
        <div className="logo">
          <Link to="/" className="text">
              fiverr
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiver Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser ? <button className={showMenu && 'active'}>Join</button> : 
            <>
              <img className='profile_pic' src={currentUser.imageUrl+currentUser.username+'&rounded=true'} alt="userlogo"/>
              <span onClick={()=> setUserMenu(!userMenu)}>{currentUser.username}</span>
            </>
          }
          {
            currentUser && userMenu && <div className="usermenu">
              <Link to="/gigs">Gigs</Link>
              <Link to="/addnew">Add a new Gig</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/messages">Messages</Link>
              <Link>Logout</Link>
            </div>
          }
        </div>
      </div>
      { (showMenu || pathname !== "/") &&
        <>
            <hr />
            <div className="menu">
              <Link>Music & Audio</Link>
              <Link>Graphics & Designing</Link>
              <Link>Programming & Tech</Link>
              <Link>Writing & Translation</Link>
              <Link>Video & Animation</Link>
              <Link>Photography</Link>
              <Link>Business</Link>
            </div>
        </>
      }
    </div>
  )
}

export default Navbar