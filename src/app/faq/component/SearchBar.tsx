"use client";

import React, {useContext, useState} from "react";
import MyButton from "./component/MyButton";
import {SearchContext} from "@/context/SearchProvider";
import Modal from "@/components/Modal";
import FormQuestion from "./component/FormQuestion";
import {Search} from "@/utils/icon/Icon";
import {TTheme} from "@/type/TTheme";

export default function SearchBar() {
	const search = useContext(SearchContext);

	// State Popup
	const [open, setOpen] = useState(false);
	const togglePopup = () => setOpen(!open);

	return (
		<div className="pl-5 pr-3 py-3 rounded-xl flex justify-center items-center gap-2 bg-white relative">
			<Search className="h-6 w-6 opacity-80" />
			<input
				type="text"
				placeholder="Recherche par thème"
				className="grow outline-none active:shadow-2xl"
				value={search.Value}
				onChange={search.handleChange}
			/>
			{search.SuggestedValues && (
				<div className="w-full bg-white flex flex-col gap-1 shadow-sm z-50 absolute left-0 top-14 rounded-b-xl border-white">
					{search.SuggestedValues.map((item: TTheme) => (
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
			<MyButton label="Demander une question" handleClick={togglePopup} />
			{open && (
				<Modal open={open} onClick={togglePopup}>
					<FormQuestion closePopup={togglePopup} />
				</Modal>
			)}
		</div>
	);
}
