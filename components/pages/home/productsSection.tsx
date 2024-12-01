import IconLeftAndRight from "@/components/global/IconLeftAndRight";
import ProductCard, { ProductCardProps } from "@/components/products/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { splitTitleInHalf } from "@/utils/splitArrayInHalf";
import Link from "next/link";
import React from "react";

const productsData: ProductCardProps[] = [
  {
    id: 1,
    image: "/icons/Z2kicMI3jqtu.png",
    title: "Smart TV",
    price: "559$",
    oldPrice: "300$",
    rating: 4,
    category: "Electronics",
    sale: true,
  },
  {
    id: 2,
    image: "/icons/image5.png",
    title: "Comfy Sofa",
    price: "317$",
    // oldPrice: "350$",
    rating: 4,
    category: "Furniture",
    sale: true,
  },
  {
    id: 3,
    image: "/icons/image6.png",
    title: "Skin Routine",
    price: "317$",
    oldPrice: "350$",
    rating: 4,
    category: "Cosmetics",
    sale: true,
  },
  {
    id: 4,
    image: "/icons/image7.png",
    title: "Coffee Set",
    price: "317$",
    oldPrice: "350$",
    rating: 4,
    category: "Appliances",
    sale: true,
  },
  {
    id: 5,
    image: "/icons/Z2kicMI3jqtu.png",
    title: "Smart TV",
    price: "559$",
    oldPrice: "300$",
    rating: 4,
    category: "Electronics",
    sale: true,
  },
  {
    id: 6,
    image: "/icons/image5.png",
    title: "Comfy Sofa",
    price: "317$",
    oldPrice: "350$",
    rating: 4,
    category: "Furniture",
    sale: true,
  },
  {
    id: 7,
    image: "/icons/image6.png",
    title: "Skin Routine",
    price: "317$",
    oldPrice: "350$",
    rating: 4,
    category: "Cosmetics",
    sale: true,
  },
  {
    id: 8,
    image: "/icons/image7.png",
    title: "Coffee Set",
    price: "317$",
    oldPrice: "350$",
    rating: 4,
    category: "Appliances",
    sale: true,
  },
];

interface ProductSectionProps {
  title: string;
  products?: ProductCardProps[];
  linkAll: string;
  isCarousel?: boolean;
}

export default function ProductSection({
  title,
  products = productsData,
  linkAll,
  isCarousel = true,
}: ProductSectionProps) {
  const [firstTitle, secondTitle] = splitTitleInHalf(title);
  return (
    <section className="py-12 bg-white dark:bg-gray-800 dark:text-white">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between text-start border-b border-b-gray-200">
          <h2 className="text-lg sm:text-2xl md:text-3xl text-gray-400 border-b-2 border-primary flex pb-2 gap-x-2">
            <span>{firstTitle}</span>
            <span className="text-primary">{secondTitle}</span>
          </h2>
          <div className="inline-block pb-2 items-center text-xs md:text-base">
          <Link
              href={linkAll}
              className="flex items-center hover:text-primary text-gray-500"
            >
              <span>View All</span>
              <IconLeftAndRight className="size-6 text-primary"/>
            </Link>
          </div>
        </div>
        {isCarousel ? <Carousel className="mt-8">
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
                <ProductCard {...product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel> : 
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((item) => (
            <div key={item.id}>
              <ProductCard isCarousel={isCarousel} {...item}/>
            </div>
            ))}
        </div>
      }
      </div>
    </section>
  );
}
