

import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

 export interface cartProduct extends IProduct{
            orderQuantity:number,

}
interface InitialState{
            products:cartProduct[];
            city:string;
            shoppingAddress:string
}

const initialState:InitialState={
            products:[],
            city:"",
            shoppingAddress:""
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
                        },

                   updateCity:(state,action)=>{
                    state.city=action.payload
                   },

                   upadateShoppingAddress:(state,action)=>{
                  state.shoppingAddress=action.payload
                   }

                        
            }

          
})


export const orderedProductCollector=(state:RootState)=>{
            return state.cart.products
}
export const subTotalSeclector=(state:RootState)=>{
  return state.cart.products.reduce((acc,product)=>{
    if(product.offerPrice){
      return acc+product.offerPrice*product.orderQuantity
    }
    else{
      return acc+product.price*product.orderQuantity
    }
  },0)
}

export const shoppingCostSelector=(state:RootState)=>{
  if(state.cart.city && state.cart.city==="Dhaka" && state.cart.products.length>0){
    return 60;
  }else if(state.cart.city && state.cart.city!=="Dhaka" && state.cart.products.length>0){
    return 120;
  }
  else{
    return 0;
  }

}
export const citySeclector=(state:RootState)=>{
 return state.cart.city
}

export const shoppingAddressSelector=(state:RootState)=>{
return state.cart.shoppingAddress
}

export const orderSelector=(state:RootState)=>{
   return{
    products:state.cart.products.map((product)=>({
      product:product._id,
      quaitity:product.orderQuantity
    })),

     shoppingAddress:`${state.cart.shoppingAddress}-${state.cart.city}`,
     paymentMethod:"online"
   }
}

 export const grandTotalSelector=(state:RootState)=>{
  const subTotal=subTotalSeclector(state)
  const shoppingCost=shoppingCostSelector(state)
  return subTotal+shoppingCost
 } 
export const {addProduct,IncrementOrderQuatity,decrementOrderQuatity,removeProduct,updateCity,upadateShoppingAddress}=cartSlice.actions

export default cartSlice.reducer;