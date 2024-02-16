"use client";

import React, {Context, createContext, useState} from "react";
// import {SearchContext} from "./SearchContext";

type SearchContextType = {
	Value: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchContext = React.createContext<any>({
	Value: "",
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

export default function SearchProvider({children}: {children: React.ReactNode}) {
	const [Value, setValue] = useState<string>("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const value = {
		Value,
		handleChange,
	};

	return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}
