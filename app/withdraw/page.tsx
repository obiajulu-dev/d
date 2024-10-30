
import Withdraw from "@/components/buy/withdraw";
import { Metadata } from "next";


export const metadata : Metadata = {
	title : "Devy-Withdraw"
}


export default function withdraw(){
    return(
        <main>
           <Withdraw/>

        </main>
    );
}

