import { MouseEventHandler, ReactNode } from "react";


export interface BunttonUiType {
    size:"lg" | "sm" | "icon"
    variant?:"default" | "destructive" | "ghost" | "link" | "outline"
    onClick?:MouseEventHandler<HTMLButtonElement>
    extraClass?:string
    children?:ReactNode
    icon?:ReactNode
    iconPosition?:"left" | "right" 
    type:"button" | "reset" | "submit"
}