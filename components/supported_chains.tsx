import Image from "next/image";

const SupportedChains = () => {
	return (
		<div className="flex flex-col items-center justify-center mt-16 mb-10 gap-2">
			<h3 className="color-[#012221]">Supported chains:</h3>
			<div className="flex flex-wrap justify-center">
				<Image
					alt="polygon"
					src="/chains/polygon.svg"
					width={0}
					height={0}
					className="w-auto h-18 py-2 px-2 md:px-6 md:py-4"
				/>
				<Image
					alt="ethereum"
					src="/chains/ethereum.svg"
					width={0}
					height={0}
					className="w-auto h-18  py-2 px-2 md:px-6 md:py-4"
				/>
				<Image
					alt="optimism"
					src="/chains/optimism.svg"
					width={0}
					height={0}
					className="w-auto h-18  py-2 px-2 md:px-6 md:py-4"
				/>
				<Image
					alt="binance"
					src="/chains/binance.svg"
					width={0}
					height={0}
					className="w-auto h-18  py-2 px-2 md:px-6 md:py-4"
				/>
				<Image
					alt="arbitrum"
					src="/chains/arbitrum.svg"
					width={0}
					height={0}
					className="w-auto h-18  py-2 px-2 md:px-6 md:py-4"
				/>

				{/* <Image alt="polygon" src="/polygon.svg" /> */}
			</div>
		</div>
	);
};
export default SupportedChains;
