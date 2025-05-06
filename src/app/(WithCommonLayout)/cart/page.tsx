import ProductBanner from '@/components/modules/products/Banner';
import NMContainer from '@/components/ui/core/NMContainer';
import React from 'react';

const CartPage = () => {
            return (
                        <NMContainer>
                                    <ProductBanner title='Cart Page'  path='Home - Cart'></ProductBanner>
                        </NMContainer>
            );
};

export default CartPage;