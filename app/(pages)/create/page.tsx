"use client";

import { useState, useEffect } from "react";

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

// ✅ TYPE
type ImageType = {
  img: File;
  url: string;
};

export default function CreatePost() {
  const [title, setTitle] = useState<string>("");
  const [descr, setDescr] = useState<string>("");

  // ✅ FIXED TYPE
  const [images, setImages] = useState<ImageType[]>([]);

  // ✅ upload handler
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (files.length === 0) return;

    const newImages: ImageType[] = files.map((file) => ({
      img: file,
      url: URL.createObjectURL(file),
    }));

    // 🔥 append instead of overwrite (better UX)
    setImages((prev) => [...prev, ...newImages]);
  };

  // ✅ remove image + cleanup
  const handleRemoveImage = (id: number) => {
    setImages((prev) => {
      const removed = prev[id];
      if (removed?.url) {
        URL.revokeObjectURL(removed.url);
      }
      return prev.filter((_, index) => index !== id);
    });
  };

  // ✅ cleanup on unmount
  useEffect(() => {
    return () => {
      images.forEach((img) => {
        if (img.url) URL.revokeObjectURL(img.url);
      });
    };
  }, [images]);

  return (
    <div className="w-[95%] mx-auto flex flex-col py-3 gap-3">
      <p className="text-2xl font-bold">New post</p>

      <form className="flex flex-col gap-5">
        {/* title */}
        <label className="space-y-1">
          <p className="text-[#8989E4]">post title*</p>
          <input
            className="w-full bg-[#1B1B2D] p-3 rounded"
            placeholder="something cool"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        {/* description */}
        <label className="space-y-1">
          <p className="text-[#8989E4]">description (optional)</p>
          <textarea
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
            placeholder="cool description"
            className="bg-[#1B1B2D] w-full min-h-[100px] max-h-[150px] rounded p-3"
          />
        </label>

        {/* preview */}
        {images.length > 0 && (
          <div className="space-y-1">
            <p className="text-[#8989E4]">
              your images (you can select more at once)
            </p>

            <ul className="grid grid-cols-2 gap-2">
              {images.map((img, index) => (
                <li
                  key={index}
                  className="bg-[#1B1B2D] rounded relative"
                >
                  <img
                    className="w-full h-[200px] object-cover rounded"
                    src={img.url}
                    alt="uploaded"
                  />

                  {index === 0 && (
                    <p className="absolute top-1 left-1 bg-[#0C8CE9] px-2 rounded text-sm">
                      main
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 w-[20px] h-[20px] flex items-center justify-center rounded-full bg-red-700 hover:bg-red-500"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* uploader */}
        <label className="space-y-1 cursor-pointer">
          <p className="text-[#8989E4]">image (optional)</p>

          <div className="w-full h-[250px] bg-[#1B1B2D] rounded flex flex-col items-center justify-center gap-3 text-[#8989E4]">
            <ImagePlus size={32} />
            <p>Upload or drop image here</p>
          </div>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>

        {/* select */}
        <label className="space-y-1">
          <p className="text-[#8989E4]">collection (optional)</p>

          <Select>
            <SelectTrigger className="w-full bg-[#1B1B2D] py-6 border-none">
              <SelectValue placeholder="Not in collection" />
            </SelectTrigger>

            <SelectContent className="bg-[#1B1B2D] text-white border-none">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
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