import React from "react";

export default function MyButton({
	label,
	type = "button",
	handleClick,
}: {
	label: string;
	type?: "submit" | "button";
	handleClick?: VoidFunction;
}) {
	return (
		<div className="max-h-11 px-6 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:opacity-90 ease-linear duration-100">
			<button type={type} onClick={handleClick} className="">
				{label}
			</button>
		</div>
	);
}
