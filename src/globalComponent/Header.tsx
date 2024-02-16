"use client";

import {Person} from "@/utils/icon/Icon";
import React from "react";

export default function Header() {
	return (
		<div className="w-full h-14 bg-slate-500 flex justify-end items-center">
			<div className="text-white font-bold mr-10">Se connecter</div>
			<Person />
		</div>
	);
}
