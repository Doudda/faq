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
		<div className="px-6 py-2 bg-green-500 text-white rounded-lg cursor-pointer">
			<button type={type} onClick={handleClick}>
				{label}
			</button>
		</div>
	);
}
