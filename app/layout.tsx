import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
	title: "Simplifying Web3 Finance | Koshance",
	description:
		"Robust security, precise access controls, and smooth operations, all on a single platform.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />

			<body>{children}</body>
		</html>
	);
}
