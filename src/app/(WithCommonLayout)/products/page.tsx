import ProductBanner from "@/components/modules/products/Banner";
import CategoryCard from "@/components/ui/core/CategoryCard";
import NMContainer from "@/components/ui/core/NMContainer";
import { getAllCategories } from "@/services/Category";
import { ICategory } from "@/types";

const AllProductPage = async() => {
            const {data:categories}= await getAllCategories()
            return (
                        <NMContainer>
                                    <ProductBanner title="All products" path="Home - products"></ProductBanner>
                                    <h2 className="text-xl font-bold my-5">Featured Collection</h2>
                                    <div className="grid grid-cols-6 gap-6 ">
        {categories?.slice(0, 6).map((category: ICategory, idx: number) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div>
                               
                        </NMContainer>
            );
};

export default AllProductPage;