import SearchIcon from "../public/icons/search.svg";
import TwoFa from "../public/icons/2fa.svg";
import Key from "../public/icons/key.svg";

const SecurityCard = ({
	security_point,
}: {
	security_point: (typeof SECURITY_POINTS)[0];
}) => {
	return (
		<div className=" py-12 px-8 flex flex-col gap-[19px] bg-[#C4E7FF] rounded-[16px] drop-shadow-[20px_20px_30px_rgba(0,0,0,0.15)]">
			{security_point.icon}
			<div className="flex flex-col gap-4 w-[285px]">
				<h3>{security_point.title}</h3>
				<p>{security_point.description}</p>
			</div>
		</div>
	);
};
const SECURITY_POINTS = [
	{
		title: "MPC TSS",
		description:
			"Seedless wallets boost security and eliminate the single point of failure",
		icon: <SearchIcon />,
	},
	{
		title: "2 FA",
		description: "Added protection layer to augment your security",
		icon: <TwoFa />,
	},
	{
		title: "Hassle free recovery",
		description: "Easier wallet recovery preventing accidental loss of funds",
		icon: <Key />,
	},
];
export default function Security() {
	return (
		<div className="p-9" id="features">
			<div className=" mx-auto flex flex-col gap-8 items-center justify-center ">
				<div className="text-center">
					<h4 className="text-[rgba(1,74,74,0.60)]">Unlocking security </h4>
					<h2 className="text-[#014A4A]">MPC-based wallets</h2>
				</div>
				<div className="flex flex-wrap gap-12 justify-center">
					{SECURITY_POINTS.map((security_point) => (
						<SecurityCard
							key={security_point.title}
							security_point={security_point}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
