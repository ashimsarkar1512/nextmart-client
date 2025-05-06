import ProductBanner from "@/components/modules/products/Banner";
import ProductDetails from "@/components/modules/products/productDetails";
import NMContainer from "@/components/ui/core/NMContainer";
import { getSingleProduct } from "@/services/Product";


const ProductDetailsPage = async ({params}:{params:Promise<{productId:string}>}) => {

            const {productId}=await params

            const {data:product}=await getSingleProduct(productId)
            return (
                        <div>
                            <NMContainer>
                                    <ProductBanner title="Product Banner" path="Home - products -Product Details "></ProductBanner>
                            </NMContainer>
                            <ProductDetails product={product}></ProductDetails>
                        </div>
            );
};

export default ProductDetailsPage;