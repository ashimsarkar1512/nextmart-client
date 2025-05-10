"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {  citySeclector, grandTotalSelector, orderedProductCollector, orderSelector, shoppingAddressSelector, shoppingCostSelector, subTotalSeclector } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { error } from "console";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function PaymentDetails() {

            const Subtotal=useAppSelector(subTotalSeclector)

            const ShippingCost=useAppSelector(shoppingCostSelector)
            const grandTotal=useAppSelector(grandTotalSelector)

            const order=useAppSelector(orderSelector)
            const city=useAppSelector(citySeclector)
            const shoppingAdress=useAppSelector(shoppingAddressSelector)
            const orderProduct=useAppSelector(orderedProductCollector)
            const user=useUser()
            const router=useRouter()

            const handleOrder=()=>{
              const overLoading=toast.loading("oder is loading place")
             try{
              if(!user.user){
                
                router.push("/login")
                throw new Error("login first ")
              }
              if(!city){
                throw new Error("City is missing")
              }
              if(!shoppingAdress){
                throw new Error("ShoppingAdress is missing")
              }
              if(orderProduct.length===0){
                throw new Error("cart is empty, what are you trying to order")
              }

              toast.success("order create successfully",{id:overLoading})

             }catch(error:any){
              toast.error(error.message ,{id : overLoading})
             }
            }


  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="font-semibold">{currencyFormatter(Subtotal)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Discount</p>
          <p className="font-semibold">{currencyFormatter(0)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Shipment Cost</p>
          <p className="font-semibold">{currencyFormatter(ShippingCost)}</p>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500 ">Grand Total</p>
        <p className="font-semibold">{currencyFormatter(grandTotal)}</p>
      </div>
      <Button onClick={handleOrder} className="w-full text-xl font-semibold py-5">
        Order Now
      </Button>
    </div>
  );
}
