"use client";
import { useState } from "react";
import Image from "next/image";
import SOne_index_bt_tire from "../assets/images/SOne_index_bt-tire.jpg";
import SOne_index_bt_break from "../assets/images/SOne_index_bt-break.jpg";
import SOne_index_bt_battery from "../assets/images/SOne_index_bt-battery.jpg";
import SOne_index_bt_chokeup from "../assets/images/SOne_index_bt-chokeup.jpg";
import SOne_index_bt_oil from "../assets/images/SOne_index_bt-oil.jpg";
import SOne_index_bt_guarantee from "../assets/images/SOne_index_bt-guarantee.jpg";

export default function Category() {
  const [category, setCategory] = useState([
    { id: 0, name: "ยาง", image: SOne_index_bt_tire },
    { id: 1, name: "เบรก", image: SOne_index_bt_break },
    { id: 2, name: "แบตเตอรี่", image: SOne_index_bt_battery },
    { id: 3, name: "โช๊คอัพ", image: SOne_index_bt_chokeup },
    { id: 4, name: "น้ำมันเครื่องและไส้กรอก", image: SOne_index_bt_oil },
    { id: 5, name: "การรับประกันสินค้า", image: SOne_index_bt_guarantee },
  ]);
  return (
    <div>
      <div className="flex justify-between">
        {category.map((item) => (
          <div key={item.id}>
            <Image src={item.image} alt="" />
            {/* {item.name} */}
          </div>
        ))}
      </div>
    </div>
  );
}
