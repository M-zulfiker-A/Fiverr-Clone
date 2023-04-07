import React , {useState, useEffect} from 'react'
import "./Navbar.scss"

const Navbar = () => {
  const [showMenu , setshowMenu] = useState(false)
  const menuTrigger =()=>{
    window.scrollY > 0 ? setshowMenu(true) : setshowMenu(false)
  }
  useEffect(()=>{
    window.addEventListener('scroll', menuTrigger);

    return ()=>{
      window.removeEventListener('scroll',menuTrigger)
    }
  })
  return (
    <div className={showMenu ? 'navbar active' : 'navbar' }>
      <div className="container">
        <div className="logo">
          <span className="text">
            fiverr
          </span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiver Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Become a Seller</span>
          <span>Sign In</span>
          <button className={showMenu && 'active'}>Join</button>
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