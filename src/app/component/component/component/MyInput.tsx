import {Danger} from "@/utils/icon/Icon";
import React, {HTMLInputTypeAttribute} from "react";
import {UseFormRegisterReturn} from "react-hook-form";
type Tprop = {
	label?: string;
	name?: string;
	type?: HTMLInputTypeAttribute;
	placeholder?: string;
	register?: UseFormRegisterReturn;
	errorMessage?: any;
};
export default function MyInput({
	label = "",
	name = "",
	type = "text",
	placeholder = "",
	register,
	errorMessage,
}: Tprop) {
	const borderColor = errorMessage ? "border-red-600" : "border-customGray";
	return (
		<>
			<div className="flex flex-row items-center gap-2">
				{label && (
					<label className="w-40" htmlFor={name}>
						{label}
					</label>
				)}
				<div className={`px-2 py-2 w-full border-2 ${borderColor} rounded-xl`}>
					<input
						className="px-2 outline-none"
						id={name}
						name={name}
						type={type}
						placeholder={placeholder}
						{...register}
					/>
				</div>
			</div>
		</>
	);
}
