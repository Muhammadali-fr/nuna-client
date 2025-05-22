"use client"

// lucide icons
import { SquarePen, ImagePlus, X } from "lucide-react";
import { useState } from "react";

export default function Collection() {
  const [title, setTite] = useState("");
  const [descr, setDescr] = useState("");
  const [banner, setBanner] = useState(null);

  // changing image 
  const handleBannerChange = (e: any) => {
    const files = e.target.files?.[0];

    setBanner({
      img: files,
      url: URL.createObjectURL(files)
    })
  }

  // for removing image 
  const handleRemoveImage =  () => {
    setBanner(null);
  }

  return (
    <div className="w-[95%] mx-auto flex flex-col py-3 gap-3">
      <p className="text-2xl font-bold">New collection</p>

      {/* form  */}
      <form className="flex flex-col gap-5">
        {/* post title  */}
        <label className="space-y-1">
          <p className="text-[#8989E4] cursor-pointer">Collection title*</p>
          <input
            className="w-full bg-[#1B1B2D] p-3 rounded"
            placeholder="something cool"
            type="text"
            required
            value={title}
            onChange={e => setTite(e.target.value)}
          />
        </label>

        {/* description */}
        <label className="space-y-1">
          <p className="text-[#8989E4] cursor-pointer">
            Collection description (optional)
          </p>
          <textarea
            value={descr}
            onChange={e => setDescr(e.target.value)}
            placeholder="cool description"
            className="bg-[#1B1B2D] w-full min-h-[100px] max-h-[150px] rounded p-3"
          ></textarea>
        </label>

        {
          banner &&
          <div className="space-y-1">
            <p className="text-[#8989E4] cursor-pointer">
              your banner
            </p>

            <div className="bg-[#1B1B2D] rounded relative">
              <img className="w-full h-[200px] object-cover object-center rounded" src={banner.url} alt="uploaded image" />
              <div onClick={handleRemoveImage} title="remove" className="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-red-700 hover:bg-red-500 cursor-pointer absolute top-1 right-1">
                <X className="scale-80" />
              </div>
            </div>
          </div>
        }

        {/* for file  */}
        <label className="space-y-1">
          <p className="text-[#8989E4] cursor-pointer">Banner (optional)</p>
          <div className="w-full h-[150px] bg-[#1B1B2D] rounded text-[#8989E4] flex items-center justify-center flex-col gap-3 cursor-pointer select-none">
            <ImagePlus className="scale-200" />
            <p>Upload or drop image here</p>
          </div>
          <input onChange={handleBannerChange} className="hidden" type="file" />
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
