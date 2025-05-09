import CartProducts from '@/components/modules/cart/CartProducts';
import Coupon from '@/components/modules/cart/Coupon';
import PaymentDetails from '@/components/modules/cart/PaymentDetails';
import ProductBanner from '@/components/modules/products/Banner';
import NMContainer from '@/components/ui/core/NMContainer';
import React from 'react';

const CartPage = () => {
            return (
                        <NMContainer>
                                    <ProductBanner title='Cart Page'  path='Home - Cart'></ProductBanner>
                                    <div className="grid grid-cols-12 gap-8 my-5">
        <CartProducts />
        <Coupon />
        <PaymentDetails></PaymentDetails>
      </div>
                        </NMContainer>
            );
};

export default CartPage;