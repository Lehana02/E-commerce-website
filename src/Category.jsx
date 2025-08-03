import React from 'react'

export default function Category({finalCat, setcatitems}) {
  let cat=finalCat.map((v,i)=>{
    return(
        <li onClick={()=>setcatitems(v)} key={i} className='bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-[500] font-serif mb-2'>{v}</li>
    )
  })
  return (
    <div>
      <h3 className='font-[500] text-[25px] p-[10px]'>Product Category</h3>
      <ul>
        {cat}
      </ul>
    </div>
  )
}
