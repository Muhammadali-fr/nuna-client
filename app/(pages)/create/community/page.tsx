"use client";

// lucide icons
import { SquarePen, ImagePlus, X } from "lucide-react";

import { topics } from "@/app/data/data";
import { useState, useEffect } from "react";

// ✅ TYPE for images
type ImageType = {
  img: File;
  url: string;
};

export default function Community() {
  const [communityName, setCommunityName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [descr, setDescr] = useState<string>("");

  // ✅ FIXED TYPES
  const [communityIcon, setCommunityIcon] = useState<ImageType | null>(null);
  const [banner, setBanner] = useState<ImageType | null>(null);

  // ✅ ICON CHANGE
  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    setCommunityIcon({
      img: file,
      url,
    });
  };

  // ✅ BANNER CHANGE
  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    setBanner({
      img: file,
      url,
    });
  };

  // ✅ REMOVE BANNER
  const handleRemoveBanner = () => {
    if (banner?.url) {
      URL.revokeObjectURL(banner.url);
    }
    setBanner(null);
  };

  // ✅ CLEANUP (important)
  useEffect(() => {
    return () => {
      if (communityIcon?.url) URL.revokeObjectURL(communityIcon.url);
      if (banner?.url) URL.revokeObjectURL(banner.url);
    };
  }, [communityIcon, banner]);

  return (
    <div className="w-[95%] mx-auto flex flex-col gap-3 py-3">
      <p className="text-2xl font-bold">New community</p>

      <form className="flex flex-col gap-5">
        {/* title */}
        <label className="space-y-1">
          <p className="text-[#8989E4]">Collection title*</p>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#1B1B2D] p-3 rounded"
            placeholder="something cool"
            type="text"
            required
          />
        </label>

        {/* description */}
        <label className="space-y-1">
          <p className="text-[#8989E4]">
            Collection description (optional)
          </p>
          <textarea
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
            placeholder="cool description"
            className="bg-[#1B1B2D] w-full min-h-[100px] max-h-[150px] rounded p-3"
          />
        </label>

        {/* icon */}
        <label className="space-y-3 cursor-pointer">
          <p className="text-[#8989E4]">
            Community icon*{" "}
            {communityIcon && "click to change"}
          </p>

          <div className="w-[145px] h-[145px] rounded-full bg-[#313145] flex items-center justify-center mx-auto overflow-hidden">
            {communityIcon ? (
              <img
                className="w-full h-full object-cover"
                src={communityIcon.url}
                alt="community icon"
              />
            ) : (
              <ImagePlus className="text-[#8989E4] scale-200" />
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleIconChange}
            className="hidden"
          />
        </label>

        {/* banner preview */}
        {banner && (
          <div className="space-y-1">
            <p className="text-[#8989E4]">your banner image</p>

            <div className="bg-[#1B1B2D] rounded relative">
              <img
                className="w-full h-[200px] object-cover rounded"
                src={banner.url}
                alt="banner"
              />

              <button
                type="button"
                onClick={handleRemoveBanner}
                className="absolute top-1 right-1 w-[22px] h-[22px] flex items-center justify-center bg-red-600 hover:bg-red-500 rounded-full"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        )}

        {/* banner upload */}
        <label className="space-y-1 cursor-pointer">
          <p className="text-[#8989E4]">Banner (optional)</p>

          <div className="w-full h-[150px] bg-[#1B1B2D] rounded flex flex-col items-center justify-center gap-3 text-[#8989E4]">
            <ImagePlus className="scale-200" />
            <p>Upload or drop image here</p>
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleBannerChange}
            className="hidden"
          />
        </label>

        {/* unique name */}
        <label className="space-y-1">
          <p className="text-[#8989E4]">
            Community unique name*
          </p>
          <input
            value={communityName}
            onChange={(e) => setCommunityName(e.target.value)}
            className="w-full bg-[#1B1B2D] p-3 rounded"
            placeholder="something cool"
            type="text"
            required
          />
        </label>

        {/* submit */}
        <button
          type="submit"
          className="w-full max-w-[300px] mx-auto flex items-center justify-center gap-3 bg-[#0C8CE9] py-3 rounded-lg hover:opacity-90"
        >
          <SquarePen />
          add new post
        </button>
      </form>
    </div>
  );
}