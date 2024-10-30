import { Metadata } from "next";
import Swap from "@/components/swap/swap";

export const metadata : Metadata = {
	title : "Devy-Swap"
}


export default function swap(){
    return(
        <main>
          <Swap/>
        </main>
    );
}

