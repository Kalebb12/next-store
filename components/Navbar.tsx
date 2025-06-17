import { ShoppingCart, UserCircle2, SearchIcon, MenuIcon } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 h-20 bg-background z-10 border-b border-black/10 right-0 flex items-center ">
      <div className="gap-10 w-full px-4 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MenuIcon size={24} className="md:hidden" />
          <h1 className="font-bold text-3xl font-integral">
            <Link href="/">Next Store</Link>
          </h1>
        </div>

        <nav className="md:flex hidden gap-6">
          <Link href="#">On sale</Link>
          <Link href="#">New Arrival</Link>
          <Link href="#">Brands</Link>
        </nav>

        <input
          type="text"
          className="grow py-3 px-4 hidden lg:inline-flex rounded-md outline-none bg-primary-foreground placeholder:text-foreground/40 text-foreground/60"
          placeholder="Search For Products..."
        />
        <div className="flex gap-3.5 items-center">
          <SearchIcon size={24} className="lg:hidden" />
          <ShoppingCart size={24} />
          <UserCircle2 size={24} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
