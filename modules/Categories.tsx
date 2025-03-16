"use client"
import { Button } from '@/components/ui/button'
import { ArrowIcon } from '@/icons'
import getRequest from '@/services/getRequest'
import { CategotyType } from '@/types/CategoryType'
import ButtonUi from '@/ui/ButtonUi'
import React, {useState, useContext} from 'react'
import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"
import { Context } from '@/context/Context'
import { useQueryClient } from '@tanstack/react-query'

const Categories = () => {
    const {data:categoryList = [], isLoading} = getRequest("/categories", "category")
    const [sortTitle, setSortTitle] = useState<"популярности" | "по цене" | "по алфавиту">("популярности") 
    const {categoryId, setCategoryId} = useContext(Context)
    const queryClient = useQueryClient()

    function handleChangaClick(obj:CategotyType){
      if(obj.id == "0"){
        setCategoryId(null)
      }
      else{
        setCategoryId(obj.id)
      }
      // queryClient.invalidateQueries({queryKey:['products']})`
    }
  return (
    <div className='flex items-center justify-between mb-[32px]'>
        <div className='flex items-center gap-[9px]'>
            {isLoading ? "Loading" : categoryList.map((item:CategotyType) => <ButtonUi onClick={() => handleChangaClick(item)} type='button' extraClass='flex items-center gap-[8px] rounded-[30px] bg-[#282828] text-white cursor-pointer' key={item.id} size='lg'>{item.name}</ButtonUi>)}
        </div>
          <div className='flex items-center gap-[8px]'>
            <Popover>
                <div className='flex items-center gap-[7px]'>
                  <ArrowIcon/>
                  <p className='font-bold text-[14px]'>Сортировка по:</p>
                </div>
              <PopoverTrigger className='leading-[110%]'>
                <strong className='text-[#FE5F1E] !w-[101px] inline-block text-[14px]'>{sortTitle}</strong>
              </PopoverTrigger>
              <PopoverContent className='!w-[132px] p-0 bg-white  rounded-[10px] !border-none py-[9px] '>
                <button onClick={(e) => setSortTitle("популярности")} className='w-full hover:bg-[#FE5F1E0D] cursor-pointer hover:text-[#FE5F1E] hover:font-bold duration-200 py-[10px] pl-[14px] text-start leading-[100%] text-[14px] '>популярности</button>
                <button onClick={(e) => setSortTitle("по цене")} className='w-full hover:bg-[#FE5F1E0D] cursor-pointer hover:text-[#FE5F1E] hover:font-bold duration-200 py-[10px] pl-[14px] text-start leading-[100%] text-[14px] '>по цене</button>
                <button onClick={(e) => setSortTitle("по алфавиту")} className='w-full hover:bg-[#FE5F1E0D] cursor-pointer hover:text-[#FE5F1E] hover:font-bold duration-200 py-[10px] pl-[14px] text-start leading-[100%] text-[14px] '>по алфавиту</button>
              </PopoverContent>
            </Popover>
          </div>
    </div>
  )
}

export default Categories