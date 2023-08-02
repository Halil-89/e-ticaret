import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, getCategoryProducts } from '../../redux/productSlice'
import Loading from '../Loading'
import Producttems from './Producttems'
import ReactPaginate from 'react-paginate';

const Product = ({ category, sort,search }) => {

  const dispatch = useDispatch()

  const { product, productStatus } = useSelector(state => state.products)

  console.log(search,"search");

  useEffect(() => {


    if (category) {
      dispatch(getCategoryProducts(category))

    } else {
      dispatch(getProducts())
    }


  }, [dispatch, category])

  const [itemOffset, setItemOffset] = useState(0);


  const itemsPerPage = 6
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = product.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(product.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  return (


    <div>
      {
        productStatus === "LOADING" ? <Loading /> :
          <>
            <div className='flex flex-wrap'>
              {
                currentItems?.sort((a, b) => sort === "inc" ? a.price + b.price : sort === "dec" ? b.price - a.price : null)?.filter((a) => a.title.toLowerCase().includes(search)).map((product, i) => (
                  <Producttems key={i} product={product} />
                ))

              }
            </div>
            <ReactPaginate
              className='paginate'
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
          </>

      }
    </div>


  )
}

export default Product