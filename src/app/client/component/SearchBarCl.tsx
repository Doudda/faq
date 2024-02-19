"use client";

import React, {useContext, useState} from "react";
import {SearchContext} from "@/context/SearchProvider";
import {TQuestion} from "@/type/TQuestion";
import {Search} from "@/utils/icon/Icon";

export default function SearchBarCl() {
	const search = useContext(SearchContext);

	return (
		<div className="pl-5 pr-3 py-3 w-1/3 rounded-xl flex justify-center items-center gap-2 bg-white relative">
			<Search className="h-6 w-6 opacity-80" />
			<input
				type="text"
				placeholder="Recherche par thème"
				className="grow outline-none active:shadow-2xl"
				value={search.Value}
				onChange={search.handleChange}
			/>
			{search.SuggestedValues && (
				<div className="w-full bg-white flex flex-col gap-1 shadow-sm z-50 absolute left-0 top-10 rounded-b-xl border-white">
					{search.SuggestedValues.map((item: TQuestion) => (
						<div
							key={item.id}
							className="flex flex-raw items-center px-5 py-3 rounded-xl hover:text-customBlue transition-all duration-100 cursor-pointer"
							onClick={() => {
								search.handleSelectValue(item);
							}}>
							{item.theme}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
