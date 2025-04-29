import React, { useState } from "react";
import { Input } from "../../input";


const NMImageUploader = () => {

            const [ImageFiles,SetImageFiles]=useState<File[]|[]>([])

            const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{

                        const file=event.target.files![0]

                        SetImageFiles((prev)=>[...prev,file])

            }
            return (
                        <div>
                              <Input 
                              onChange={handleChange}
                              type="file"
                              multiple
                              accept="image/*"
                              className="hidden"

                              id="image-uploader"
                              >
                              </Input> 
                              <label
        htmlFor="image-upload"
        className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition"
      >
     upload logo
      </label>     
                        </div>
            );
};

export default NMImageUploader ;