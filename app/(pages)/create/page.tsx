"use client"

import { useState } from "react";

// shadcn select ui
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/reuseable/ui/select";

// lucide icons
import { SquarePen, ImagePlus, X } from "lucide-react";


export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [images, setImages] = useState([]);

  // file input onchange 
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.map(img => ({
      img,
      url: URL.createObjectURL(img)
    }));
    setImages(newImages);
  }


  return (
    <div className="w-[95%] mx-auto flex flex-col py-3 gap-3">
      <p className="text-2xl font-bold">New post</p>

      {/* form  */}
      <form className="flex flex-col gap-5">
        {/* post title  */}
        <label className="space-y-1">
          <p className="text-[#8989E4] cursor-pointer">post title*</p>
          <input
            className="w-full bg-[#1B1B2D] p-3 rounded"
            placeholder="something cool"
            type="text"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>

        {/* description */}
        <label className="space-y-1">
          <p className="text-[#8989E4] cursor-pointer">
            description (optional)
          </p>
          <textarea
            value={descr}
            onChange={e => setDescr(e.target.value)}
            placeholder="cool description"
            className="bg-[#1B1B2D] w-full min-h-[100px] max-h-[150px] rounded p-3"
          ></textarea>
        </label>

        {/* show images  */}
        {
          images.length !== 0 &&
          <div className="space-y-1">
            <p className="text-[#8989E4] cursor-pointer">
              your images (you can select more at once)
            </p>

            <ul className="grid grid-cols-2 gap-2">
              {
                images.map((img, index) => (
                  <li className="bg-[#1B1B2D] rounded relative" key={index}>
                    <img className="w-full h-[200px] object-cover object-center rounded" src={img.url} alt="uploaded image" />
                    {index === 0 && <p className="absolute top-1 left-1 bg-[#0C8CE9] px-2 rounded text-sm">assosiy</p>}
                    <div title="remove" className="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-red-700 hover:bg-red-500 cursor-pointer absolute top-1 right-1">
                      <X className="scale-80" />
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        }



        {/* image uploader  */}
        <label className="space-y-1">
          <p className="text-[#8989E4] cursor-pointer">image (optional)</p>
          <div className="w-full h-[250px] bg-[#1B1B2D] rounded text-[#8989E4] flex items-center justify-center flex-col gap-3 cursor-pointer select-none">
            <ImagePlus className="scale-200" />
            <p>Upload or drop image here</p>
          </div>
          <input
            multiple
            onChange={handleImageUpload}
            className="hidden" type="file" />
        </label>

        {/* select ui  */}
        <label className="space-y-1">
          <p className="text-[#8989E4] cursor-pointer">collection (optional)</p>
          <Select>
            <SelectTrigger className="w-full bg-[#1B1B2D] py-6 border border-none">
              <SelectValue placeholder="Not in collection" />
            </SelectTrigger>
            <SelectContent className="bg-[#1B1B2D] text-white border-none">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </label>

        {/* btn  */}
        <button className="w-full max-w-[300px] flex items-center justify-center bg-[#0C8CE9] py-3 rounded-lg hover:opacity-90 cursor-pointer gap-3 mx-auto">
          <SquarePen />
          add new post
        </button>
      </form>
    </div>
  );
}
