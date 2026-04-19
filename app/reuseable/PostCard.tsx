"use client";

import Link from "next/link";
import NextImage, { StaticImageData } from "next/image";
import { Image } from "antd";

// lucide icons
import { MessageSquare, ArrowBigUp, EllipsisVertical } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  PostName: string;
  UserImage: string | StaticImageData;
  descr: string;

  // ✅ FIXED TYPE
  PostImage: (string | StaticImageData)[];

  SupportNumber: number;
};

export default function Home({
  PostName,
  UserImage,
  descr,
  PostImage,
  SupportNumber,
}: Props) {
  return (
    <div className="border-b border-[#30305D] flex justify-center">
      <div className="w-[95%] space-y-3 py-3">
        {/* user */}
        <Link href={`/${PostName}`} className="flex items-center gap-3">
          <NextImage
            width={30}
            height={30}
            className="w-[30px] h-[30px] rounded-full object-cover"
            src={UserImage}
            alt={PostName}
          />
          <p>{PostName}</p>
        </Link>

        {/* descr */}
        <p className="text-lg font-semibold">{descr}</p>

        {/* swiper */}
        {PostImage.length > 0 && (
          <div className="rounded-lg overflow-hidden">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              loop
              spaceBetween={10}
              className="aspect-video rounded-lg"
            >
              {PostImage.map((img, id) => {
                // ✅ normalize src
                const src =
                  typeof img === "string" ? img : img.src;

                return (
                  <SwiperSlide key={id}>
                    <div className="w-full h-full relative">
                      <Image
                        className="w-full h-full object-cover rounded-lg"
                        src={src}
                        alt={`${PostName}-${id}`}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}

        {/* footer */}
        <div className="flex items-center justify-between py-2">
          {/* comments */}
          <div className="flex items-center gap-1 text-[#8989E4] cursor-pointer select-none">
            <MessageSquare />
            <p>Comments</p>
          </div>

          {/* support */}
          <div className="flex gap-5">
            <div className="flex items-center gap-1 cursor-pointer select-none">
              <ArrowBigUp className="text-[#8989E4]" />
              <span>{SupportNumber}</span>
            </div>

            <button type="button" className="cursor-pointer">
              <EllipsisVertical />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}