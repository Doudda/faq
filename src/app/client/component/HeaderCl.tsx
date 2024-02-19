import React from "react";

export default function HeaderCl() {
	return (
		<div className="w-full h-14 bg-customDarkBlue flex justify-end items-center relative">
			<div className="mr-10 px-4 py-2 flex gap-2 bg-black text-white opacity-50 hover:opacity-90 transition-opacity ease-linear duration-100 rounded-full cursor-pointer">
				<div className="font-bold drawer-button">Se déconnecter</div>
			</div>
		</div>
	);
}
