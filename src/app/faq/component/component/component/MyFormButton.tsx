import React from "react";

export default function MyFormButton({
	label,
	type = "button",
	reset = false,
}: {
	label: string;
	type?: "submit" | "button";
	reset?: boolean;
}) {
	const style = reset
		? "bg-transparent border-2 border-customRed text-customRed hover:bg-customRed hover:text-white transition-all ease-linear duration-100"
		: "bg-customGreen border-2 border-customGreen text-white hover:opacity-90 ease-linear duration-100";
	return (
		<div className={`w-full px-6 py-2 flex justify-center ${style}  rounded-lg cursor-pointer`}>
			<button type={type}>{label}</button>
		</div>
	);
}
