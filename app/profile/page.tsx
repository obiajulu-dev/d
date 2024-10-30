
import Profile from "@/components/profile/profile";
import { Metadata } from "next";


export const metadata : Metadata = {
	title : "Devy-Profile"
}


export default function profile(){
    return(
        <main>
            <Profile/>
         
 
        </main>
    );
}

