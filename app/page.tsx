

import Faq from "@/components/buy/faq"
import CallToAction from "@/components/call to action/call.to.action"
import Fast from "@/components/fast"
import Footer from "@/components/footer/footer"
import Hero from "@/components/hero/hero"
import Newsletter from "@/components/newsletter"
import Porro from "@/components/porro/porro"
import Row from "@/components/row/row"
import TopNavigation from "@/components/topnav/top.navigation"
import { Metadata } from "next"

export const metadata : Metadata = {
	title : "Devy ",
	description : "Devy"
}

export default function Home() {
  	return (
		<main>
        <TopNavigation/>
        <Hero/>
        <Row/>
        <Fast/>
        <Porro/>
        <Faq/>
        <Newsletter/>
        <CallToAction/>
        <Footer/>
		</main> 
  	)
}
