import Image from "next/image";
import WhyUSCardBG from "../public/assets/why_us_card_bg.svg";
const WHY_US = [
	{
		title: "Consolidated View",
		description:
			"Single platform providing access to multiple wallets enabling easter tracking.",
		image: (
			<Image
				alt="MPC"
				src="/assets/mpc1.svg"
				width={0}
				height={0}
				className="w-[512px]"
			/>
		),
	},
	{
		title: "Policy Controls",
		description:
			"Implement account specific transaction policies and role based access.",
		image: (
			<Image
				alt="Policy Controls"
				src="/assets/policy_control_card_bg.svg"
				width={0}
				height={0}
				className="w-[284px]"
			/>
		),
	},
	{
		title: "Automated Operations",
		description:
			"Schedule, manage and monitor transactions with designated alerts.",
		image: (
			<Image
				alt="Automated Operations"
				src="/assets/automated_operations_card_bg.svg"
				width={0}
				height={0}
				className="w-[502px]"
			/>
		),
	},
	{
		title: "Regulatory Compliance",
		description:
			"Add tags and context to transactions for your accountants, auditors and others.",
		image: (
			<Image
				alt="MPC"
				src="/assets/regulatory_compliance_card_bg.svg"
				width={0}
				height={0}
				className="w-[390px]"
			/>
		),
	},
];
const WhyUSCard = ({ why_us }: { why_us: (typeof WHY_US)[0] }) => {
	return (
		<div className="rounded-[16px] relative h-[201px] md:h-[330px] w-[336px]  md:w-[450px] xl:w-[550px] overflow-hidden flex items-center justify-center text-white">
			<div
				className="absolute left-0 top-0 w-full h-full "
				style={{
					background:
						"linear-gradient(180deg,rgba(217,217,217,0) 0%,rgba(0,0,0,.699999988079071) 100%)",
				}}
			></div>
			<div className="absolute z-[-1]">
				<WhyUSCardBG />
			</div>
			<div className="flex  items-center justify-center">{why_us.image}</div>
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[305px] md:w-[355px] xl:w-[455px] flex flex-col gap-2">
				<h3>{why_us.title}</h3>
				<p className="hidden md:block">{why_us.description}</p>
			</div>
		</div>
	);
};
export default function WhyUS() {
	return (
		<div className="mx-auto container mt-16 flex flex-col gap-16">
			<div className="flex flex-col items-center">
				<p className=" text-kgreen-400 text-xl">BUILT FOR WEB3 TEAMS</p>
				<h2 className="text-[#015657] text-center md:text-left">
					Crypto Assets seamlessly managed
				</h2>
			</div>
			<div className="flex flex-wrap justify-center gap-6">
				{WHY_US.map((why_us) => (
					<WhyUSCard key={why_us.title} why_us={why_us} />
				))}
			</div>
		</div>
	);
}
