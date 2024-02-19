import Link from "next/link";
import React from "react";

export default function page() {
	return (
		<div className="m-4 w-64 flex flex-col justify-around gap-2">
			<div className="px-6 py-2 bg-green-500 text-white rounded-lg cursor-pointer">
				<Link href="/faq">FAQ côté visiteur</Link>
			</div>
			<div className="px-6 py-2 bg-green-500 text-white rounded-lg cursor-pointer">
				<Link href="/client">FAQ côté client</Link>
			</div>
			<div className="px-6 py-2 bg-green-500 text-white rounded-lg cursor-pointer">
				<Link href="/register">Création de compe</Link>
			</div>
		</div>
	);
}
