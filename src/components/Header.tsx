"use client";

import {Person} from "@/utils/icon/Icon";
import React, {useState} from "react";

export default function Header() {
	const [Open, setOpen] = useState(false);
	return (
		<div className="w-full h-14 bg-customDarkBlue flex justify-end items-center">
			<div className="mr-10 px-4 py-2 flex gap-2 bg-black  text-white opacity-50 hover:opacity-90 transition-opacity ease-linear duration-100 rounded-full cursor-pointer">
				<div className="font-bold">Se connecter</div>
				<Person className="h-6 w-6" />
			</div>
		</div>
	);
}
