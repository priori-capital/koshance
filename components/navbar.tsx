import KoshanceLogo from "../public/icons/koshance_white.svg";

export default function Navbar() {
	return (
		<div className="bg-[#002626] z-[10]">
			<nav className="container mx-auto flex items-center justify-between px-16 py-5">
				<KoshanceLogo />
				<div className="flex items-center gap-12">
					<div className="flex gap-12 text-light-300">
						<a href="#what_is_kosh" className="text-[14px]">
							What&apos;s Koshance?
						</a>
						<a href="#features" className="text-[14px]">
							Features
						</a>
						<a href="#team" className="text-[14px]">
							Team
						</a>
						<a
							href="https://blog.koshance.com"
							target="_blank"
							className="text-[14px]"
						>
							Blogs
						</a>
					</div>
					<a
						href="https://forms.gle/iirJyvJBSNDZUBav9"
						target="_blank"
						className="rounded-[8px] bg-koshance-yellow p-[10px] px-5"
					>
						Get a Demo
					</a>
				</div>
			</nav>
		</div>
	);
}
