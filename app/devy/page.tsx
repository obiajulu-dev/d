import { Metadata } from "next"
import CallToActionl from "@/components/call to action/call.to.actionl"
import Explorel from "@/components/exporal"
import Herol from "@/components/hero/herol"
import Newsletter from "@/components/newsletter"
import Porrol from "@/components/porro/porrol"
import Rowl from "@/components/row/rowl"
import TopNavigationl from "@/components/topnav/top.navigationl"
import Fast from "@/components/fast"
import Footerl from "@/components/footer/footerl"
import Footer from "@/components/footer/footer"
import Utility from "@/components/utility"



export const metadata : Metadata = {
	title : "DEVy.com ",
	description : "Devy"
}

export default function Home() {
  	return (
		<main>
     <TopNavigationl/>
      <Herol/>
      <Rowl/>
      <Fast/>
      <Explorel/>
      <Utility/>
      <Porrol/>
      <Newsletter/>
      <CallToActionl/>
      <Footer/>
		</main> 
  	)
}
