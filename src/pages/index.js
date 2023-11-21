import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import SecondMain from "@/components/SecondMain";
import ThirdMain from "@/components/ThirdMain";
import FourthMain from "@/components/FourthMain";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="FirstPage">
        <Navbar />
        <Main />
      </div>
      <div className="secondPage">
        <SecondMain />
      </div>
     
        <ThirdMain/>
  <FourthMain/>
    </>
  );
}
