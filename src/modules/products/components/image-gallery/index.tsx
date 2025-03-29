"use client";
import { HttpTypes } from "@medusajs/types";
import { useState } from "react";
import Image from "next/image";

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]?.url || "");

  return (
    <div className="md:col-span-2">
      {/* Main Image */}
      <div className="relative h-56 md:h-96 lg:h-[550px] border-[3px] border-brand-light-gray rounded-lg mb-4">
        <Image
          className="object-contain p-10"
          src={selectedImage}
          fill
          alt="binocular"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex items-center overflow-x-auto scrollbar-hide gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image.url)}
            className={`relative shrink-0 w-32 h-20 border-[3px] rounded-md transition-colors ${
              selectedImage === image.url
                ? "border-black"
                : "border-brand-light-gray hover:border-black"
            }`}
          >
            <Image
              className="p-2 object-contain"
              src={image.url}
              fill
              alt={`thumbnail-${index}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
