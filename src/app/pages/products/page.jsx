"use client"
import { getApi } from '@/app/redux/features/productSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProductPage = () => {
  const { ProductData } = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getApi())
    
  }, [])
  console.log(ProductData);

  return (
    <div>

      <h1>Product Page</h1>

    </div>
  )
}

export default ProductPage