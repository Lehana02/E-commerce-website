import axios from 'axios';
import './App.css';
import Category from './Category';
import { useEffect, useState } from 'react';

function App() {
  let [finalCat, setFCat] = useState([])
  let [finalPro, setFPro] = useState([])
  let [catitems,setcatitems]=useState('')

  let getCategory = () => {
    axios.get('https://dummyjson.com/products/category-list')
      .then((res) => res.data)
      .then((finalRes) => {
        setFCat(finalRes)
      })
  }

  let getProducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((res) => res.data)
      .then((finalRes) => {
        setFPro(finalRes.products)
        // console.log(finalRes.products)
      })
  } 

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  useEffect(()=>{
    if(catitems!==''){
      axios.get(`https://dummyjson.com/products/category/${catitems}`)
      .then((res) => res.data)
      .then((finalRes) => {
        setFPro(finalRes.products)
    })
    }
  },[catitems])
  
  let pitems=finalPro.map((v,i)=>{
    return(
      <ProductItem key={i} pdata={v}/>
    )
  })
  return (
    <>
      <div className='py-[40px]'>
        <div className='max-w-[1320px] mx-auto'>
          <h1 className='text-center font-bold text-[40px] mb-[30px]'>Our Products</h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div className='bg-gray-500'>
              <Category finalCat={finalCat} setcatitems={setcatitems}/>
            </div>
            <div>
              <div className='grid grid-cols-3 gap-5'>
                {(finalPro.length>=1)?
                pitems:"No Product Found!"
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductItem({pdata}) {
  // console.log(pdata)
  return (
    <div className='shadow-lg text-center pb-4'>
      <img src={pdata.thumbnail} className='w-[100%] h-[220px]'/>
      <h4>{pdata.title}</h4>
      <b>Rs {pdata.price}</b>
    </div>
  )
}