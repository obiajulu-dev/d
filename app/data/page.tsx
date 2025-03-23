import Airtime from "@/components/ut/data";
import { Metadata } from "next";

export const metadata : Metadata = {
	title : "Devy-utility"
}


export default function data(){
    return(
        <main>
           <Airtime/>
        </main>
    );
}

