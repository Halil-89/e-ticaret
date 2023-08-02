import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState ={
    product:[],
    productStatus: STATUS.IDLE,
    productDetail:[],
    productDetailStatus:STATUS.IDLE
}

export const getProducts= createAsyncThunk('getproducts',async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data;

})

export const getDetailProducts= createAsyncThunk('getdetailproducts',async(id)=>{
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    return data;

})

export const getCategoryProducts= createAsyncThunk('getcategory',async(category)=>{
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await response.json()
    return data;

})

const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=> { 
        builder
        .addCase(getProducts.pending,(state,action)=>{
            state.productDetailStatus=STATUS.LOADING

        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.productDetailStatus=STATUS.SUCCESS
            state.product=action.payload
        })

        .addCase(getProducts.rejected,(state,action)=>{
            state.productDetailStatus=STATUS.FAIL
        })

        .addCase(getDetailProducts.pending,(state,action)=>{
            state.productDetailStatus=STATUS.LOADING

        })
        .addCase(getDetailProducts.fulfilled,(state,action)=>{
            state.productDetailStatus=STATUS.SUCCESS
            state.productDetail=action.payload
        })

        .addCase(getDetailProducts.rejected,(state,action)=>{
            state.productDetailStatus=STATUS.FAIL
        })
        .addCase(getCategoryProducts.pending,(state,action)=>{
            state.productDetailStatus=STATUS.LOADING

        })
        .addCase(getCategoryProducts.fulfilled,(state,action)=>{
            state.productDetailStatus=STATUS.SUCCESS
            state.product=action.payload
        })

        .addCase(getCategoryProducts.rejected,(state,action)=>{
            state.productDetailStatus=STATUS.FAIL
        })
    }
})

export default productSlice.reducer