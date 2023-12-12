import Image from "next/image";

export default function Hero() {
	const CHINS = ["polygon", "ethereum"];
	return (
		<main className="relative overflow-hidden">
			<div className="container mx-auto flex flex-col items-center justify-center gap-[18px] pt-8 text-white md:gap-12 md:pt-[84px]">
				<div className="flex flex-col items-center gap-6 md:gap-20">
					<h1 className="text-[24px] text-center md:text-[40px]">
						Simplifying Organisational Finance
					</h1>
					<p className="w-[304px] text-center text-[14px] text-light-300 md:w-[686px] md:text-[16px]">
						Welcome to the one-stop hub to visualise, manage and execute your
						finances. Be it any digital currency, finance shall be a peaceful
						enabler to the teams.
					</p>
				</div>
				<a
					href="#"
					className="rounded-[8px] bg-koshance-yellow p-[10px] px-7 text-[#023C3A]"
				>
					Get a Demo
				</a>
			</div>
			<div className="container mx-auto ov flex justify-center mt-8 md:mt-16">
				<div className="  relative z-0 overflow-hidden p-4 rounded-[8px] md:rounded-[32px] shadow-[40px_30px_40px_0px_rgba(0,0,0,0.20);] md:p-8">
					<div className="absolute left-0 top-0 z-[-1] h-full w-full rounded-[8px] md:rounded-[32px] border bg-[rgba(255,255,255,0.20)] backdrop-blur-[10px]"></div>
					<img
						src="https://framerusercontent.com/images/u5clIUjXjSJMxHMDbP5j5S1h7g.png"
						className="w-[255px] rounded-[4px] md:w-[608px] md:rounded-[8px]"
					/>
				</div>
			</div>
			<div className="absolute left-1/2 top-0 z-[-1] w-[658px] min-w-full -translate-x-1/2">
				<img
					src="https://framerusercontent.com/images/vVSxyP71hEtt53QMWViEYRGbc.png"
					className="h-[auto]"
				/>
			</div>
			<div className="flex flex-col items-center justify-center mt-16 mb-10 gap-2">
				<h3 className="color-[#012221]">Supported chains:</h3>
				<div className="flex gap-6 flex-wrap justify-center">
					<Image
						alt="polygon"
						src="/chains/polygon.svg"
						width={0}
						height={0}
						className="w-auto h-18 py-4"
					/>
					<Image
						alt="ethereum"
						src="/chains/ethereum.svg"
						width={0}
						height={0}
						className="w-auto h-18 py-4"
					/>

					{/* <Image alt="polygon" src="/polygon.svg" /> */}
				</div>
			</div>
		</main>
	);
}
