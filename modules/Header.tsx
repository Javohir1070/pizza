import { SavedIcon } from "@/icons"
import { Button } from "@mui/material"
import Image from "next/image"

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white border-b-[1px] border-[#F6F6F6] mb-[40px] ">
        <div className="flex items-center gap-[17px]">
            <Image className="w-[38px] h-[38px]" src={"/Logo.svg"} alt="Logo" width={38} height={30}/>
            <div>
                <h1 className="font-extrabold text-[24px] leading-[100%] text-[#181818] ">REACT PIZZA</h1>
                <p className="text-[16px] leading-[100%] text-[#7B7B7B]">самая вкусная пицца во вселенной</p>
            </div>
        </div>
        <Button className="!w-[150px] flex items-center gap-[27px] cursor-pointer  !bg-[#FE5F1E] !py-[15px]  !rounded-[30px]"> 
            <strong className="!text-white text-[16px]">520 ₽</strong>
            <div className="flex items-center pl-[15px] border-l-[1px] border-[#FFFFFF40] gap-[8px]">
                <SavedIcon/>
                <span className="text-white text-[16px] font-bold">3</span>
            </div>
        </Button>
    </header>
  )
}

export default Header