import Link from "next/link";
import KoshanceLogo from "../public/icons/koshance_white.svg";
export default function Footer() {
	return (
		<div className="bg-[#014A4A]">
			<footer className="flex flex-col gap-6  mx-auto container md:py-16 py-8 px-5">
				<KoshanceLogo />
				<div className="h-1 w-full bg-[rgba(217,217,217,0.10)] " />
				<div className="flex flex-col md:flex-row gap-4 items-center justify-between ">
					<div className="flex flex-wrap text-xs md:text-base text-[#D4D4D4] text-[16px] mt-[10px] justify-between w-full md:w-auto md:gap-12">
						<Link href="/">Privacy Policy</Link>
						<Link href="/">Terms of use</Link>
						<Link href="/">Cookie Policy</Link>
						<Link href="/">Contact us</Link>
					</div>
					<div className="flex gap-4">
						<Link href="https://medium.com/@koshance" target="_blank">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="17"
								height="14"
								viewBox="0 0 17 14"
								fill="none"
							>
								<path
									d="M16.7722 2.59215V11.9581C16.7722 12.5665 16.2841 13.0601 15.6818 13.0601H13.1354V6.81631L8.77195 10.1228L4.40851 6.81631V13.0607H1.86268C1.26036 13.0607 0.772217 12.5676 0.772217 11.9592V11.9587V2.59269C0.772217 1.67985 1.5047 0.939453 2.40844 0.939453C2.77869 0.939453 3.12012 1.06393 3.39434 1.27301L3.39007 1.26978L8.77195 5.34736L14.1538 1.26978C14.4238 1.06339 14.7652 0.939453 15.1355 0.939453C16.0392 0.939453 16.7722 1.67931 16.7722 2.59215Z"
									fill="white"
								/>
							</svg>
						</Link>
						<Link href="https://twitter.com/koshance" target="_blank">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="17"
								height="16"
								viewBox="0 0 17 16"
								fill="none"
							>
								<path
									d="M0.311226 0.512207L6.48865 8.772L0.272217 15.4876H1.67129L7.11376 9.60799L11.5111 15.4876H16.2722L9.74723 6.76317L15.5334 0.512207H14.1344L9.12211 5.92718L5.07231 0.512207H0.311226ZM2.36866 1.54276H4.55592L14.2145 14.4569H12.0272L2.36866 1.54276Z"
									fill="white"
								/>
							</svg>
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
