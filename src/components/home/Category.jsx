import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';
import { getProducts } from '../../redux/productSlice'

const Category = ({ setCategory }) => {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories)

 
    useEffect(() => {

        dispatch(getProducts())

    }, [dispatch,])



    useEffect(() => {
        dispatch(getCategories())

    }, [dispatch])

    return (
        <div className='w-1/6 bg-gray-100 p-4 max-h-screen'>

            <div className='border-b pb-1 px-2 text-xl font-bold'>KATEGORİ</div>
            <div onClick={()=>dispatch(getProducts())} className='text-lg mt-1 cursor-pointer hover:bg-gray-200 p-2'>Tümü</div>
            {
                categories?.map((category, i) => {
                    return <div onClick={() => setCategory(category)} className='text-lg mt-1 cursor-pointer hover:bg-gray-200 p-2' key={i}>{category}</div>

                })
            }
        </div>
    )
}

export default Category