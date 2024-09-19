import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './outerlayout.css';


// import './outerlayout.css'

export default function OuterLayout({finalCategory=[],setCatname}) {
  let cat = finalCategory.length>0?finalCategory.map((v, i) => {
    return (
      <h3 onClick={()=>setCatname(v)} key={i}>{v}</h3>
    )
  }):<p>No cateegories available</p>
  return (
      <div className='main'>
        <div className='categories'>
          <h2>categories</h2>
          <div className='bar'>
            {cat}
          </div>
        </div>
       
      </div>

  )
}



