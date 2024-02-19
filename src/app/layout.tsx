import "./globals.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
	title: "FAQ",
	description: "Page pour FAQ",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="fr" data-theme="light">
			<body className="m-0 p-0 min-h-screen bg-customWhite">
				<div>{children}</div>
			</body>
		</html>
	);
}
