"use client";
import Image from "next/image";
import SOne_index_pic01 from "../assets/images/SOne_index_pic01.jpg";
import SOne_index_pic02 from "../assets/images/SOne_index_pic02.jpg";
import SOne_index_arrowup from "../assets/images/SOne_index_arrowup.png";
import SOne_index_arrowdown from "../assets/images/SOne_index_arrowdown.png";
import SOne_index_search from "../assets/images/SOne_index_search.png";

export default function Banner() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-[280]">
          <div className="bg-[#f05a28] h-[36] Su_white21 flex items-center ps-2">
            ค้นหายาง
          </div>
          <div className="background_Type h-[264] flex flex-col items-end">
            <div className="">
              <p className="Su_white21">
                หน้ายาง <br />
                <span className="text_white13">ความกว้าง (มม.)</span>
              </p>
              <select name="select2" className="formLogintype" id="select2">
                <option>--เลือกหน้ายาง--</option>
              </select>
            </div>
            <div>
              <p className="Su_white21">
                ซีรี่ย์ <br />
                <span className="text_white13">
                  อัตราส่วนความสูงแก้มยาง (%)
                </span>
              </p>
              <select name="select2" className="formLogintype" id="select2">
                <option>--เลือกซีรี่ย์--</option>
              </select>
            </div>
            <div>
              <p className="Su_white21">
                กระทะล้อ <br />
                <span className="text_white13">เส้นผ่าศูนย์กลาง (นิ้ว)</span>
              </p>
              <select name="select2" className="formLogintype" id="select2">
                <option>--เลือกกระทะล้อ--</option>
              </select>
              <div className="self-center mt-2">
                <a href="#">
                  <Image src={SOne_index_search} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="background_Banner h-[300] w-[900]">
          <div className="flex flex-col justify-center items-end gap-2 h-full me-3">
            <div className="flex flex-col gap-2">
              <Image src={SOne_index_arrowup} alt="" className="self-center" />
              <Image src={SOne_index_pic01} alt="" />
              <Image src={SOne_index_pic02} alt="" />
              <Image src={SOne_index_pic02} alt="" />
              <Image
                src={SOne_index_arrowdown}
                alt=""
                className="self-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
