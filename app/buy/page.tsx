import { Metadata } from "next";
import Buy from "@/components/buy/buy";


export const metadata : Metadata = {
	title : "Devy-buy"
}


export default function buy (){
    return(
        <main>
            <Buy/>
        </main>
    );
}