"use client";
import { fetcher } from "@/lib/fetcher";
import { notFound, useParams } from "next/navigation";
import useSWR from "swr";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import StarRating from "@/components/StarRating";
import { Button } from "@/components/ui/button";

const ProductDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const url = `/api/products/${slug}`;
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading)
    return (
      <div>
        <div id="loader" className="absolute left-1/2 top-1/2 -translate-1/2" />
      </div>
    );
  if (error) return notFound();

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/category">{data.category}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{data.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid p-3 gap-10 grid-cols-1 lg:grid-cols-12 mt-8">
        {/* col 1 */}
        <div className="grid col-span-6 grid-rows-6 gap-3.5 grid-cols-6">
          <div className="grid col-span-2 row-span-6 gap-3.5 grid-rows-6">
            {data.images.slice(0, 3).map((imgSrc: string, i: number) => {
              return (
                <img
                  src={imgSrc}
                  alt={data.name}
                  key={i}
                  className="bg-muted row-span-2 rounded-2xl"
                />
              );
            })}
          </div>

          <div className="col-span-4 row-span-6 relative">
            <Image
              src={data.thumbnail}
              alt={data.name}
              fill
              className="object-cover bg-muted object-center rounded-2xl"
            />
          </div>
        </div>
        {/* col 2 */}
        <div className="col-span-6 flex flex-col gap-3.5">
          <h1 className="font-integral font-bold text-4xl">{data.name}</h1>
          <StarRating rating={data.rating} size={6} />
          <div className="flex gap-3 items-center">
            <h2 className="font-bold text-2xl">
              {data.price.toLocaleString("en-US", {
                style: "currency",
                currency: "NGN",
              })}
            </h2>
            <h2 className="text-muted-foreground font-bold text-2xl">
              {(data.price + 100).toLocaleString("en-US", {
                style: "currency",
                currency: "NGN",
              })}
            </h2>
            <div className="px-2.5 py-2 bg-destructive/10 font-medium text-destructive rounded-4xl w-18 flex items-center justify-center">
              -x%
            </div>
          </div>

          <p className="text-foreground/60">{data.description}</p>

          <hr className="text-foreground/10" />

          <div className="flex flex-col gap-4 items-start">
            <p>Select Colors</p>
            <div className="flex gap-4">
              <div className="size-10 rounded-full cursor-pointer bg-red-500" />
              <div className="size-10 rounded-full cursor-pointer bg-blue-500" />
              <div className="size-10 rounded-full cursor-pointer bg-green-500" />
            </div>
          </div>
          <hr className="text-foreground/10" />

          <div className="flex flex-col gap-4 items-start">
            <p>Choose Size</p>
            <div className="flex gap-4">
              <Button className="px-6 py-2 text-foreground/60 bg-secondary items-center justify-center flex rounded-full">Small</Button>
              <Button className="px-6 py-2 text-foreground/60 bg-secondary items-center justify-center flex rounded-full">Medium</Button>
              <Button className="px-6 bg-ba py-2 bg-foreground text-background items-center justify-center flex rounded-full">Large</Button>
              <Button className="px-6 py-2 text-foreground/60 bg-secondary items-center justify-center flex rounded-full">X-Large</Button>
            </div>
          </div>
          <hr className="text-foreground/10" />
          <div  className="flex gap-5 items-center justify-center font-medium">
            <div className="w-42 bg-secondary rounded-md flex justify-between px-4 py-2">
              <button>+</button>
              <span>10</span>
              <button>-</button>
            </div>
            <Button className="grow">Add To Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
