"use client";

import { NMTable } from "@/components/ui/core/NMTable/index";
import { IProduct } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react";
import DiscountModal from "./DiscountModel";
import TablePagination from "@/components/ui/core/NMTable/tablePagination";


const ManageProducts = ({ products }: { products: IProduct[] }) => {
  const router = useRouter();
  const [seletedId,setSelectedIds]=useState<string[]|[]>([])
  console.log(seletedId);

  const handleView = (product: IProduct) => {
    console.log("Viewing product:", product);
  };

  const handleDelete = (productId: string) => {
    console.log("Deleting product with ID:", productId);
  };

  const columns: ColumnDef<IProduct>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            if(value){
              setSelectedIds((prev)=>[...prev,row.original._id])
            }
            else{
              setSelectedIds(seletedId.filter(id=>id!=row.original._id))
            }
            
            row.toggleSelected(!!value)}}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: "Product Name",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
       <div className="flex items-center space-x-3">
  {row.original.imageUrls?.[0] ? (
    <Image
      src={row.original.imageUrls[0]}
      alt={row.original.name}
      width={40}
      height={40}
      className="w-8 h-8 rounded-full"
    />
  ) : (
    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">
      N/A
    </div>
  )}
  <span className="truncate">{row.original.name}</span>
</div>


          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <span>{row.original.category.name}</span>,
    },
    {
      accessorKey: "brand",
      header: "Brand",
      cell: ({ row }) => <span>{row.original.brand.name}</span>,
    },
    {
      accessorKey: "stock",
      header: "Stock",
      cell: ({ row }) => <span>{row.original.stock}</span>,
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => <span>$ {row.original.price.toFixed(2)}</span>,
    },
    {
      accessorKey: "offerPrice",
      header: "Ofter Price",
      cell: ({ row }) => (
        <span>
          $ {row.original.offerPrice ? row.original.offerPrice.toFixed(2) : "0"}
        </span>
      ),
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-500 hover:text-blue-500"
            title="View"
            onClick={() => handleView(row.original)}
          >
            <Eye className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-green-500"
            title="Edit"
            onClick={() =>
              router.push(
                `/user/shop/products/update-product/${row.original._id}`
              )
            }
          >
            <Edit className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-red-500"
            title="Delete"
            onClick={() => handleDelete(row.original._id)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Products</h1>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => router.push("/user/shop/products/add-product")}
            size="sm"
          >
            Add Product <Plus />
          </Button>
          <DiscountModal selectedId={seletedId} setSelectedIds={setSelectedIds}></DiscountModal>
        </div>
      </div>
      <NMTable columns={columns} data={products || []} />
      <TablePagination></TablePagination>
    </div>
  );
};

export default ManageProducts;