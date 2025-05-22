"use client"

// lucide icons
import { SquarePen, ImagePlus, X } from "lucide-react";

import { topics } from "@/app/data/data";
import { useState } from "react";

export default function Community() {
  const [communityName, setCommunityName] = useState("");
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [communityIcon, setCommunityIcon] = useState(null);
  const [banner, setbanner] = useState(null);

  // comunityIcon change 
  const handleIconChange = (e: any) => {
    const file = e.target.files?.[0];
    setCommunityIcon({
      img: file,
      url: URL.createObjectURL(file)
    })
  }

  const handleBannerChange = (e: any) => {
    const file = e.target.files?.[0];
    setbanner({
      img: file,
      url: URL.createObjectURL(file),
    })
  }

  const handleRemoveBanner = () => {
    setbanner(null);
  }

  return (
    <div className="w-[95%] mx-auto flex flex-col gap-3 py-3">
      <p className="text-2xl font-bold">New community</p>

      <form className="flex flex-col gap-5">
        {/* post title  */}
        <label className="space-y-1">
          <p className="text-[#8989E4] cursor-pointer">Collection title*</p>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full bg-[#1B1B2D] p-3 rounded"
            placeholder="something cool"
            type="text"
            required
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

        {/* for icon  */}
        <label className="space-y-3">
          <p className="text-[#8989E4] cursor-pointer">Community icon* {communityIcon && "want different image click the image"}</p>
          <div className="w-[145px] h-[145px] rounded-full bg-[#313145] flex items-center justify-center mx-auto">
            {
              communityIcon ? <img className="w-full h-full rounded-full object-center object-cover" src={communityIcon.url} alt="comunity icon img" />
                :
                <ImagePlus className="text-[#8989E4] scale-200" />

            }
          </div>
          <input onChange={handleIconChange} className="hidden" type="file" />
        </label>

        {/* showing banner  */}
        {
          banner &&
          <div className="space-y-1">
            <p className="text-[#8989E4] cursor-pointer">
              your banner image
            </p>
            <div className="bg-[#1B1B2D] rounded relative">
              <img className="w-full h-[200px] object-cover object-center rounded" src={banner.url} alt="uploaded image" />
              <div onClick={handleRemoveBanner} title="remove" className="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-red-700 hover:bg-red-500 cursor-pointer absolute top-1 right-1">
                <X className="scale-80" />
              </div>
            </div>
          </div>
        }

        {/* for banner */}
        <label className="space-y-1">
          <p className="text-[#8989E4] cursor-pointer">Banner (optional)</p>
          <div className="w-full h-[150px] bg-[#1B1B2D] rounded text-[#8989E4] flex items-center justify-center flex-col gap-3 cursor-pointer select-none">
            <ImagePlus className="scale-200" />
            <p>Upload or drop image here</p>
          </div>
          <input onChange={handleBannerChange} className="hidden" type="file" />
        </label>

        {/* tags here 
        <label className="space-y-1">
          <p className="text-[#8989E4] cursor-pointer">Tags *</p>

          <div className="w-full bg-[#1B1B2D] flex items-center justify-between gap-3 p-2 rounded-lg">
            <Hash />
            <input placeholder="New tags" className="flex-1 outline-none" type="text" />
            <button className="w-[110px] flex items-center justify-center gap-1 rounded-lg cursor-pointer bg-[#0C8CE9] py-2 hover:opacity-90">
              <SquarePen />
              add
            </button>
          </div>
        </label> */}

        {/* added  tags 
        <div className="space-y-2">
          <p className="text-[20px] font-bold">added tags</p>

          topics map here 
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, id) => (
              <span
                key={id}
                title={topic}
                className="py-0.5 px-3 bg-[#1B1B2D] hover:bg-[#282849] rounded-3xl cursor-pointer"
              >{`#${topic}`}</span>
            ))}
          </div>
        </div> */}

        {/* unique name  */}
        <label className="space-y-1">
          <p className="text-[#8989E4] cursor-pointer">
            Community unique name*
          </p>
          <input
            className="w-full bg-[#1B1B2D] p-3 rounded"
            placeholder="something cool"
            type="text"
            required
          />
          <p className="text-green-500">unique name is available</p>
          <p className="text-red-500">unique name is not available</p>
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
