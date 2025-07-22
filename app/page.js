import Image from "next/image";
import Link from "next/link";
import SideBar from "./components/SideBar";
import DashBoard from "./components/DashBoard";
export default function Home() {
  return (
    <div className="flex relative m-0 p-0">
      <SideBar/>
      <DashBoard/>
    </div>
  );
}
