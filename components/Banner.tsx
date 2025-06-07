import Image from "next/image";
import { Button } from "./ui/button";

const Banner = async () => {
  return (
    <section className="bg-primary-foreground ">
      <div className="grid  max-w-7xl mx-auto place-items-center grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-8">
          <h1 className="font-bold text-6xl font-integral">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-foreground/60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button variant="default" className="font-medium py-4 px-13">Shop Now</Button>

          <div className="flex items-center gap-8">
            <div>
              <h3 className="font-bold text-4xl">200+</h3>
              <p className="text-foreground/60">International Brands</p>
            </div>
            <div>
              <h3 className="font-bold text-4xl">2,000+</h3>
              <p className="text-foreground/60">High-Quality Products</p>
            </div>
            <div>
              <h3 className="font-bold text-4xl">30,000+</h3>
              <p className="text-foreground/60">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Image
            src="/banner.jpg"
            alt="Next Store Banner"
            width={400}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;