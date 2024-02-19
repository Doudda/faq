import React from "react";
import {UseFormRegisterReturn} from "react-hook-form";

type Tprop = {
	label?: string;
	name?: string;
	placeholder?: string;
	register?: UseFormRegisterReturn;
	errorMessage?: any;
};

export default function MyTextarea({
	label = "",
	name = "",
	placeholder = "",
	register,
	errorMessage,
}: Tprop) {
	const borderColor = errorMessage ? "border-red-600" : "border-customGray";

	return (
		<>
			<div className="flex flex-row gap-2">
				{label && (
					<label className="pt-2 w-40" htmlFor={name}>
						{label}
					</label>
				)}
				<div className={`px-2 py-2 w-full border-2 ${borderColor} rounded-xl`}>
					<textarea
						className="px-2 w-full h-full outline-none resize-none"
						id={name}
						name={name}
						placeholder={placeholder}
						{...register}
					/>
				</div>
			</div>
		</>
	);
}
