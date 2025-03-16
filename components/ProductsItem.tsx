"use client"
import { PlusIcon } from '@/icons'
import { ProductsType } from '@/types/ProductType'
import ButtonUi from '@/ui/ButtonUi'
import Image from 'next/image'
import React   from 'react'
import {useState} from "react"
import {useDispatch} from "react-redux"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SavedOrderProduct } from '@/store/OrderSlice'


const ProductsItem:React.FC<{item:ProductsType}> = ({item}) => {
    const [orderCount, setOrderCount] = useState<number>(0)
    const dispatch = useDispatch()

    function handeBtnClick(obj:ProductsType):void{
        setOrderCount(orderCount + 1)
        dispatch(SavedOrderProduct(obj))
    }
  return (
    <div className='w-[280px]'>
        <Image className='w-[260px] h-[260px] mb-[11px]' src={item.img} alt='product Img' width={260} height={260} priority/>
        <strong className='font-bold text-[20px] text-center block mb-[25px]'>{item.title}</strong>
        <div className='bg-[#F3F3F3] p-[7px] rounded-[10px] mb-[17px]'>
            <Tabs defaultValue="account" className="!w-full">
                <TabsList className='w-full'>
                    <TabsTrigger className='product-item !w-[50%] text-[14px] cursor-pointer font-bold leading-[100%] ' value="тонкое">тонкое</TabsTrigger>
                    <TabsTrigger className='product-item !w-[50%] text-[14px] cursor-pointer font-bold leading-[100%] ' value="традиционное">традиционное</TabsTrigger>
                </TabsList>
            </Tabs>
            <Tabs defaultValue="account" className="!w-full">
                <TabsList className='w-full'>
                    <TabsTrigger className='product-item !w-[50%] text-[14px] cursor-pointer font-bold leading-[100%] ' value="26 см.">26 см.</TabsTrigger>
                    <TabsTrigger className='product-item !w-[50%] text-[14px] cursor-pointer font-bold leading-[100%] ' value="30 см.">30 см.</TabsTrigger>
                    <TabsTrigger className='product-item !w-[50%] text-[14px] cursor-pointer font-bold leading-[100%] ' value="40 см.">40 см.</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
        <div className='flex items-center justify-between'>
            <div className='font-bold text-[22px]'>от {item.price} ₽</div>
            <ButtonUi type='button'  onClick={() => handeBtnClick(item)} extraClass='!text-[16px] text-white bg-[#FE5F1E] rounded-full' icon={<PlusIcon/>} iconPosition='left' size='lg'>
                Добавить
                {orderCount !== 0 &&  <span className='w-[22px] h-[22px] flex items-center justify-center bg-red-500 text-white rounded-full leading-[100%] text-[12px]'>{orderCount}</span>}
            </ButtonUi>
        </div>  
    </div>
  )
}

export default ProductsItem