"use client";

import { Button } from "@/components/ui/button";
import { orderSelector, shoppingCostSelector, subTotalSeclector } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";

export default function PaymentDetails() {

            const Subtotal=useAppSelector(subTotalSeclector)

            const ShippingCost=useAppSelector(shoppingCostSelector)

            const order=useAppSelector(orderSelector)
            const handleOrder=()=>{
              console.log(order);
            }


  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="font-semibold">{Subtotal}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Discount</p>
          <p className="font-semibold">00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Shipment Cost</p>
          <p className="font-semibold">{ShippingCost}</p>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500 ">Grand Total</p>
        <p className="font-semibold">00</p>
      </div>
      <Button onClick={handleOrder} className="w-full text-xl font-semibold py-5">
        Order Now
      </Button>
    </div>
  );
}
