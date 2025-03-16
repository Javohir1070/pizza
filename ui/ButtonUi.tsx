import React from 'react'
import { Button } from "../components/ui/button"
import { BunttonUiType } from '@/types/ButtonUitype'


const ButtonUi:React.FC<BunttonUiType> = ({children, onClick,  size, variant, extraClass, iconPosition, icon, type}) => {
  return (
    <Button type={type} className={`${extraClass}`} onClick={onClick} variant={variant} size={size}>
      {iconPosition == "left" && icon} 
        {children}
      {iconPosition == "right" && icon} 
    </Button>
  )
}

export default ButtonUi