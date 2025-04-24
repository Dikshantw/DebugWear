import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ShoppingCart, UserIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="flex justify-between items-center max-w-7xl lg:mx-auto p-5 md:px-10 w-full">
        <div className="flex justify-start items-center">
          <Link href={"/"} className="flex justify-start items-center">
            <Image
              src="/terminal.svg"
              alt="DebugWear Logo"
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              DebugWear
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <Button asChild variant={"ghost"}>
            <Link href={"/cart"}>
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild variant={"ghost"}>
            <Link href={"/sign-in"}>
              <UserIcon /> Cart
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
