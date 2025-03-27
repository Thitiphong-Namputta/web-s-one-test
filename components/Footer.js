import Image from "next/image";
import SOne_index_logo from "../assets/images/SOne_index_logo.png";

export default function FooterBanner() {
  return (
    <div>
      <div className="flex flex-row">
        <Image src={SOne_index_logo} alt="" className="h-[35] w-[130]" />
        <div className="bg-stone-800 w-full rounded-md text-white flex items-center ms-3 ps-3">
          Copyright © 2014
        </div>
      </div>
    </div>
  );
}
