import Image from "next/image";
const TEAM = [
	{
		name: "Sayli",
		designation: "Co-founder",
		image: (
			<img
				alt="sayli"
				src="/assets/team/sayli.webp"
				width={100}
				height={100}
				className="w-[166px] rounded-full"
			/>
		),
	},
	{
		name: "Shilpi",
		designation: "Co-founder",
		image: (
			<img
				alt="shilpi"
				src="/assets/team/shilpi.webp"
				width={100}
				height={100}
				className="w-[166px] rounded-full"
			/>
		),
	},
	{
		name: "Ujjwal",
		designation: "Tech Maestro",
		image: (
			<img
				alt="shilpi"
				src="/assets/team/ujjwal.webp"
				width={100}
				height={100}
				className="w-[166px] rounded-full"
			/>
		),
	},
	{
		name: "Shila",
		designation: "Design Diva",
		image: (
			<img
				alt="shila"
				src="/assets/team/shila.webp"
				width={100}
				height={100}
				className="w-[166px] rounded-full"
			/>
		),
	},
	{
		name: "Dineshh",
		designation: "Backend Wiz",
		image: (
			<img
				alt="dinesh"
				src="/assets/team/dinesh.webp"
				width={100}
				height={100}
				className="w-[166px] rounded-full"
			/>
		),
	},
	{
		name: "Ahmad",
		designation: "Frontend Wiz",
		image: (
			<img
				alt="ahmad"
				src="/assets/team/ahmad.webp"
				width={100}
				height={100}
				className="w-[166px] rounded-full"
			/>
		),
	},
];
const TeamCard = ({ member }: { member: (typeof TEAM)[0] }) => {
	return (
		<div className="flex flex-col items-center gap-[18px] w-[256px]">
			{member.image}
			<div className="text-center">
				<h3 className="text-[#014A4A]">{member.name}</h3>
				<p className="text-[#014A4A]">{member.designation}</p>
			</div>
		</div>
	);
};
export default function Team() {
	return (
		<div
			id="team"
			className="mx-auto md:w-[1172px] mt-16 pt-16 flex flex-col gap-16"
		>
			<h2 className="text-center text-[#015657]">Meet the Team</h2>
			<div className="flex flex-wrap justify-center gap-12">
				{TEAM.map((member) => (
					<TeamCard key={member.name} member={member} />
				))}
			</div>
		</div>
	);
}
