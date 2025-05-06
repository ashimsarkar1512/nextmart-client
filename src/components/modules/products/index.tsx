import ProductCard from '@/components/ui/core/ProductCard';
import { IProduct } from '@/types';
import React from 'react';
import FilterSidebar from './FilterSidebar';

const AllProducts = ({products}:{products:IProduct[]}) => {
      
            return (
                        <div className='flex gap-5 my-8'>
                            <div>
 <FilterSidebar></FilterSidebar>
                                    
                            </div>
                           <div>
                           <div className="grid grid-cols-3 gap-8 ">
          {products?.map((product: IProduct, idx: number) => (
              <ProductCard key={idx} product={product} />
            ))}
        </div>       
                           </div>
                        </div>
            );
};

export default AllProducts;