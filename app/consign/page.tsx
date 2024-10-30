import { Metadata } from "next";
import Consign from "@/components/signup/consign";


export const metadata : Metadata = {
	title : "Devy-Consign"
}


export default function consign (){
    return(
        <main>
            <Consign/>
        </main>
    );
}