import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { addFlashSale } from "@/services/FlashSale";
import { toast } from "sonner";
import { Dispatch, SetStateAction } from "react";

type TModalProps={
            selectedId:string[];
            setSelectedIds:Dispatch<SetStateAction<[] | string[]>>
}


export const DiscountModal = ({selectedId,setSelectedIds}:TModalProps) => {
 const form=useForm()

  const {
    formState: { isSubmitting },
  } = form || {};

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
            const modifiedData={
                        products:[...selectedId],
                        discountPercentage:parseFloat(data?.discountPercentage)
            }
    try {
          const res= await addFlashSale(modifiedData)

          if(res.success){
            toast.success(res.message)
            setSelectedIds([])
          }
          else{
            toast.error(res.message)
          }
     
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={!selectedId.length} size="sm">Add Flash sale</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Flash sale</DialogTitle>
        </DialogHeader>

      
        <Form {...form}>
          <form
            className=""
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex justify-center mb-5">
            <FormField 
              control={form.control}
              name="discountPercentage"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value || ""}
                      className="rounded-sm w-64"
                      placeholder="discountPercentage"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>

            <Button type="submit" className="w-full rounded-sm">
              {isSubmitting ? "Adding...." : "Add"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountModal;