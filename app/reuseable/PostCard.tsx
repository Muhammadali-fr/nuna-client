'use client';

import Link from "next/link";
import NextImage, { StaticImageData } from "next/image";
import { Image } from 'antd';

// lucide icons
import { MessageSquare, ArrowBigUp, EllipsisVertical } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home({
  PostName,
  UserImage,
  descr,
  PostImage,
  SupportNumber,
}: {
  PostName: string;
  UserImage: string | StaticImageData;
  descr: string;
  PostImage: string[] | StaticImageData[];
  SupportNumber: number;
}) {

  return (
    <div className="border-b border-[#30305D] flex justify-center">
      <div className="w-[95%] space-y-3 py-3">
        <Link href={`/${PostName}`} className="flex items-center gap-3">
          <NextImage
            width={30}
            height={30}
            className="w-[30px] h-[30px] rounded-full object-cover object-center"
            src={UserImage}
            alt={PostName}
          />
          <p>{PostName}</p>
        </Link>

        {/* descr */}
        <p className="text-lg font-semibold">{descr}</p>

        {/* image swiper */}
        {PostImage && PostImage.length > 0 && (
          <div className="rounded-lg overflow-hidden">
            <Swiper
              // navigation
              modules={[Pagination]}
              pagination={{ clickable: true }}
              loop
              spaceBetween={10}
              className="aspect-video rounded-lg"
            >
              {PostImage.map((img, id) => (
                <SwiperSlide key={id}>
                  <div className="w-full h-full relative">
                    <Image
                      className="w-full h-full object-cover rounded-lg"
                      src={img}
                      alt={`${PostName}-${id}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* support */}
        <div className="flex items-center justify-between py-2">
          {/* comment */}
          <div className="flex items-center gap-1 text-[#8989E4] cursor-pointer select-none">
            <MessageSquare />
            <p>Comments</p>
          </div>

          {/* support number */}
          <div className="flex gap-5">
            <div className="flex items-center gap-1 cursor-pointer select-none">
              <ArrowBigUp className="text-[#8989E4]" />
              <span>{SupportNumber}</span>
            </div>
            <button className="cursor-pointer">
              <EllipsisVertical />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
