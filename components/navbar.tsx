import KoshanceLogo from "../public/icons/koshance_white.svg";

export default function Navbar() {
	return (
		<div className="bg-[#002626] sticky top-0	z-[10]">
			<nav className="container mx-auto flex items-center justify-between px-16 py-5">
				<KoshanceLogo />
				<a href="#" className="rounded-[8px] bg-koshance-yellow p-[10px] px-5">
					Get a Demo
				</a>
			</nav>
		</div>
	);
}
