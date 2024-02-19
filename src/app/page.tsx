import Link from "next/link";
import React from "react";

export default function page() {
	return (
		<div className="p-4 w-64 flex flex-col justify-around gap-2">
			<Link href="/faq">
				<div className="px-6 py-2 bg-green-500 text-white rounded-lg cursor-pointer">
					FAQ si visiteur
				</div>
			</Link>
			<Link href="/client">
				<div className="px-6 py-2 bg-green-500 text-white rounded-lg cursor-pointer">
					FAQ si client
				</div>
			</Link>
			<Link href="/register">
				<div className="px-6 py-2 bg-green-500 text-white rounded-lg cursor-pointer">
					Création de compe
				</div>
			</Link>
		</div>
	);
}
