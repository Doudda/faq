"use client";

import React, {useContext, useState} from "react";
import MyButton from "./component/MyButton";
import {SearchContext} from "@/context/SearchProvider";
import Modal from "@/components/Modal";
import FormQuestion from "./component/FormQuestion";

export default function SearchBar() {
	const search = useContext(SearchContext);

	// State Popup
	const [open, setOpen] = useState(false);
	const togglePopup = () => setOpen(!open);

	return (
		<div className="pl-5 pr-3 py-3 rounded-xl flex justify-center items-center gap-2 bg-white ">
			<input
				type="text"
				placeholder="Recherche par thème"
				className="grow outline-none"
				value={search.Value}
				onChange={search.handleChange}
			/>
			<MyButton label="Demander une question" handleClick={togglePopup} />
			{open && (
				<Modal open={open} onClick={togglePopup}>
					<FormQuestion closePopup={togglePopup} />
				</Modal>
			)}
		</div>
	);
}
