import { Metadata } from "next";
import Consign from "@/components/signup/consign";
import Signupl from "@/components/signup/signupl";

export const metadata : Metadata = {
	title : "Devy-Signup"
}


export default function Signup(){
    return(
        <main>
            <Signupl/>
        </main>
    );
}

