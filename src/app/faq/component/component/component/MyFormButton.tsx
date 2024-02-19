import React from "react";

export default function MyFormButton({
	label,
	type = "button",
	reset = false,
	onClick,
}: {
	label: string;
	type?: "submit" | "button";
	reset?: boolean;
	onClick?: VoidFunction;
}) {
	const style = reset
		? "bg-transparent border-2 border-transparent text-customRed hover:opacity-80 transition-all ease-linear duration-100"
		: "bg-customGreen border-2 border-customGreen text-white hover:opacity-90 ease-linear duration-100";
	return (
		<button
			className={`w-full px-6 py-2 flex justify-center ${style} rounded-lg cursor-pointer`}
			type={type}
			onClick={onClick}>
			{label}
		</button>
	);
}
