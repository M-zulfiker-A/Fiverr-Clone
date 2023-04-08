import React , {useState, useEffect} from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showMenu , setshowMenu] = useState(false)
  const [userMenu , setUserMenu] = useState(false)
  const menuTrigger =()=>{
    window.scrollY > 0 ? setshowMenu(true) : setshowMenu(false)
  }
  useEffect(()=>{
    window.addEventListener('scroll', menuTrigger);

    return ()=>{
      window.removeEventListener('scroll',menuTrigger)
    }
  },[])
  const currentUser = {
    username : "Zulfiker",
    isSeller : true,
    imageUrl : `https://ui-avatars.com/api/?name=`
  }
  return (
    <div className={showMenu ? 'navbar active' : 'navbar' }>
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
              <Link to="addnew">Add a new Gig</Link>
              <Link to="orders">Orders</Link>
              <Link to="messages">Messages</Link>
              <Link>Logout</Link>
            </div>
          }
        </div>
      </div>
      { showMenu &&
        <>
            <hr />
            <div className="menu">
              <span>Text1</span>
              <span>Text2</span>
            </div>
        </>
      }
    </div>
  )
}

export default Navbar