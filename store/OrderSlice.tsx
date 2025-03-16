import {PayloadAction, createSlice} from "@reduxjs/toolkit"
import { ProductsType } from "../types/ProductType"

interface OrderType {
    orderList:ProductsType[]
}

const initialState:OrderType = {
    orderList:[]
}

export const OrderSlice = createSlice({
    name:"orderList",
    initialState,
    reducers:{
        SavedOrderProduct:(state:OrderType, action:PayloadAction<ProductsType>):OrderType | any => {
            return {
                orderList:[...state.orderList, action.payload]
            }
        }
    }
})

export const {SavedOrderProduct} = OrderSlice.actions