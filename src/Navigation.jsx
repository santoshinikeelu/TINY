import React from 'react'

export default function 
Navigation() {
  return (
    <body>
      <div className='content'>
        <header>
        <nav>
      {/* <div className='logo'> */}
      <img src="../public/Tiny_Organics_Logo.jpg" alt="logo" />
      {/* </div> */}
      <ul>
        <li href="#">Build Your Plan</li>
        <li href="#">Our Meals</li>
        <li href="#">Bundles</li>
        <li href="#">Why Tiny</li>
        <li href="#">Login</li>
      </ul>
      <button >Shop Now</button>
      {/* <div className='icon-logo'> */}
     <div>
     <img className='icon-logo' src="../public/facebook.png" alt="icon-logo" />
      <img className='icon-logo' src="../public/insta icon.jpeg" alt="icon-logo" />
      <img className='icon-logo' src="../public/tweeter icon.png" alt="icon-logo" />
     </div>
      {/* </div> */}
      

    </nav>    
        </header>
   
    </div>
    </body>
  )
}
