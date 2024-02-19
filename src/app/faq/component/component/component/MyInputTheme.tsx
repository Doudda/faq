import {TTheme} from "@/type/TTheme";
import React from "react";

type Tprop = {
	label?: string;
	name?: string;
	placeholder?: string;
	act?: any;
};

export default function MyInputTheme({label = "", name = "", placeholder = "", act}: Tprop) {
	return (
		<>
			<div className="flex flex-row items-center gap-2">
				{label && (
					<label className="w-40" htmlFor={name}>
						{label}
					</label>
				)}
				<div className="px-2 py-2 w-full border-2 border-customGray rounded-xl relative">
					<input
						className="px-2 w-full outline-none"
						id={name}
						name={name}
						placeholder={placeholder}
						value={act.Value}
						onChange={act.handleChange}
					/>
					{act.SuggestedValues && (
						<div className="px-2 py-2 w-full bg-white flex flex-col gap-1 shadow-lg z-50 absolute left-0 top-11 rounded-xl">
							{act.SuggestedValues.map((item: TTheme) => (
								<div
									key={item.id}
									className="flex flex-raw items-center px-5 py-1 rounded-xl hover:text-customBlue transition-all duration-100 cursor-pointer"
									onClick={() => {
										act.handleSelectValue(item);
									}}>
									{item.theme}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
}
