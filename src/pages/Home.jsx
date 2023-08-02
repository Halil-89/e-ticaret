import React, { useState } from 'react'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Product from '../components/home/Product'

const Home = ({search}) => {
  const [sort,setSort]= useState('');
  const [category,setCategory]=useState('');
 
 

    
  return (
    <div>
        <SliderComp/>
        <Sorting setSort={setSort}/>
        <div className='flex'>
          <Category setCategory={setCategory}/>
          <Product category={category} sort={sort} search={search}/>
        </div>
    </div>
  )
}

export default Home