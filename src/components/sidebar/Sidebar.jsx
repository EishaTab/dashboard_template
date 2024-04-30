import React from 'react'
import { Home } from '../icons'

const Sidebar = () => {
  return (
    <div id='sidebar' className='sb_container'>
      <ul>
        <li>Logo Here</li>
        <li> <span>{Home} </span><span> Dashboard</span>  </li>
        <li> <span>{Home} </span><span> Blogs</span>  </li> 
        <li> <span>{Home} </span><span> Comments</span>  </li>
        <li> <span>{Home} </span><span> Dashboard</span>  </li>
        <li> <span>{Home} </span><span> Blogs</span>  </li> 
        <li> <span>{Home} </span><span> Comments</span>  </li>
       

      </ul>
    </div>
  )
}

export default Sidebar
