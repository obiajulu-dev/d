import { Metadata } from "next";
import Login from "@/components/admin/login";


export const metadata : Metadata = {
	title : "Devy-admin"
}


export default function admin (){
    return(
        <main>
            <Login/>
        </main>
    );
}