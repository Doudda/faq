"use client";

import React, {useContext, useState} from "react";
import MyButton from "./MyButton";
import ModalLayout from "@/globalComponent/Modal";
import FormQuestion from "./component/FormQuestion";
import {SearchContext} from "@/context/SearchProvider";

export default function SearchBar() {
	const search = useContext(SearchContext);

	// State Popup
	const [open, setOpen] = useState(false);
	const handleToogle = () => {
		setOpen(!open);
	};

	return (
		<div className="px-6 py-4 rounded-xl flex justify-center items-center gap-2 bg-white ">
			<input
				type="text"
				placeholder="Recherche par thème"
				className="grow outline-none"
				value={search.Value}
				onChange={search.handleChange}
			/>
			<MyButton label="Demander une question" handleClick={handleToogle} />

			{/* <FormQuestion closePopup={handleToogle} /> */}
		</div>
	);
}
