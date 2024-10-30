import Login from "@/components/login/login";
import { Metadata } from "next";


export const metadata : Metadata = {
	title : "Devy-Login"
}


export default function login(){
    return(
        <main>
            <Login/>

        </main>
    );
}

