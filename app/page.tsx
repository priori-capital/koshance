import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Kira from "@/components/kira";
import Navbar from "@/components/navbar";
import Security from "@/components/security";
import Team from "@/components/team";
import WhatIsKosh from "@/components/what_is_kosh";
import WhyUS from "@/components/why_us";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<WhatIsKosh />
			<Security />
			<WhyUS />
			<Team />
			<Kira />
			<Footer />
		</>
	);
}
