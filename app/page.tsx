import Banner from "@/components/Banner";
import NewArrivals from "@/components/NewArrivals";

export const dynamic = 'force-dynamic'
export default function Home() {
  return (
    <main>
      <Banner />
      <NewArrivals/>
    </main>
  );
}
