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

const ProductDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const url = `/api/products/${slug}`;
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) return <p>loading.....</p>;
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
    </div>
  );
};

export default ProductDetails;
