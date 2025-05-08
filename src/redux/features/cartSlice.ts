

import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

 export interface cartProduct extends IProduct{
            orderQuantity:number,

}
interface InitialState{
            products:cartProduct[];
}

const initialState:InitialState={
            products:[],
}



const cartSlice=createSlice({
            name:"cart",
            initialState,
            reducers:{
                        addProduct: (state, action) => {
                                    const productToAdd = state.products.find(
                                      (product) => product._id === action.payload._id
                                    );
                              
                                    if (productToAdd) {
                                      productToAdd.orderQuantity += 1;
                                      return;
                                    }
                              
                                    state.products.push({ ...action.payload, orderQuantity: 1 });
                                  },
                        IncrementOrderQuatity:(state,action)=>{

                                    const productToIncrement=state.products.find((product)=>product._id===action.payload)

                                    if(productToIncrement){
                                                productToIncrement.orderQuantity +=1
                                                return
                                    }

                        },
                        decrementOrderQuatity:(state,action)=>{

                                    const productToIncrement=state.products.find((product)=>product._id===action.payload)

                                    if(productToIncrement && productToIncrement.orderQuantity>1){
                                                productToIncrement.orderQuantity -=1
                                                return
                                    }

                        },
                       
                        removeProduct:(state,action)=>{
                 state.products=state.products.filter((product)=>product._id!==action.payload)
                        }
            }
})


export const orderedProductCollector=(state:RootState)=>{
            return state.cart.products
}
export const {addProduct,IncrementOrderQuatity,decrementOrderQuatity,removeProduct}=cartSlice.actions

export default cartSlice.reducer;