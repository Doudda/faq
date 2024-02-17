"use client";

import {Person} from "@/utils/icon/Icon";
import React, {useState} from "react";
import FormConnect from "./component/FormConnect";

export default function Header() {
	const [Open, setOpen] = useState(false);
	const togglePopup = () => setOpen(!Open);

	return (
		<div className="w-full h-14 bg-customDarkBlue flex justify-end items-center relative">
			<div
				className="mr-10 px-4 py-2 flex gap-2 bg-black text-white opacity-50 hover:opacity-90 transition-opacity ease-linear duration-100 rounded-full cursor-pointer"
				onClick={togglePopup}>
				<div className="font-bold drawer-button">Se connecter</div>
				<Person className="h-6 w-6" />
			</div>
			{Open && (
				<div className="px-6 py-4 w-1/5 rounded-xl flex flex-row gap-6 absolute top-16 right-6 bg-white shadow-xl">
					<FormConnect />
				</div>
			)}
		</div>
	);
}
