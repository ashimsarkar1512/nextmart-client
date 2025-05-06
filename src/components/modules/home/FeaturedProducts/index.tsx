import { Button } from "@/components/ui/button";
import NMContainer from "@/components/ui/core/NMContainer";
import ProductCard from "@/components/ui/core/ProductCard";
import { getAllProducts } from "@/services/Product";
import { IProduct } from "@/types";
import Link from "next/link";

const FeaturedProducts = async () => {
  const { data: products } = await getAllProducts();

  return (
    <div className="bg-white bg-opacity-50 py-10">
      <NMContainer className="my-16">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Featured Products</h2>
          <Link href="/products">
            <Button variant="outline" className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-5 gap-8 my-5">
          {products?.map((product: IProduct, idx: number) => (
              <ProductCard key={idx} product={product} />
            ))}
        </div>
      </NMContainer>
    </div>
  );
};

export default FeaturedProducts;