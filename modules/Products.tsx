"use client"
import getRequest from '@/services/getRequest'
import { ProductsType } from '@/types/ProductType'
import React from 'react'
import ProductsItem from "../components/ProductsItem"
import  {useContext} from 'react'
import { Context } from '@/context/Context'

const Products = () => {
    const {categoryId}  = useContext(Context)
    const params = {categoryId}
    const {data:ProductsList, isLoading} = getRequest(`/products`, "products", categoryId)
    
  return (
    <div>
        <h2 className='font-black text-[32px] mb-[35px]'>Все пиццы</h2>
        <div className='flex items-center justify-between flex-wrap'>
             {isLoading ? "loading" : ProductsList.map((item:ProductsType) => <ProductsItem key={item.id} item={item}/>)}
        </div>
    </div>
  )
}

export default Products