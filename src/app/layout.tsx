import type {Metadata} from "next";
import "./globals.css";
import Header from "../globalComponent/Header";

export const metadata: Metadata = {
	title: "FAQ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html data-theme="light">
			<body className="m-0 p-0 bg-slate-100">
				<Header />
				<div className="container m-auto">{children}</div>
			</body>
		</html>
	);
}
