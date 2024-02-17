"use client";

import {TQuestion} from "@/type/TQuestion";
import {TReponse} from "@/type/TReponse";
import {TTheme} from "@/type/TTheme";
import React, {createContext, useState} from "react";
// import {SearchContext} from "./SearchContext";

const ListQuestion: TQuestion[] = [
	{
		id: 2,
		title: "Quelles sont les différences entre Python et Java ?",
		content:
			"Python et Java sont deux langages de programmation populaires, mais ils présentent des différences importantes",
		theme: "Langages de programmation",
		created_at: "2024-02-15T22:26:51.161689Z",
		updated_at: "2024-02-15T22:26:51.161735Z",
	},
	{
		id: 1,
		title:
			"Qu'est-ce que l'apprentissage automatique et donnez 2 exemples d'applications concrètes",
		content:
			"L'apprentissage automatique est un domaine de l'intelligence artificielle qui permet aux ordinateurs d'apprendre et de s'améliorer par l'expérience, sans être explicitement programmés.",
		theme: "Intelligence artificielle",
		created_at: "2024-02-15T22:23:14.846036Z",
		updated_at: "2024-02-15T22:23:14.846099Z",
	},
];

const ListReponse: TReponse[] = [
	{
		id: 4,
		question: 2,
		content:
			"Gestion de la mémoire: Python utilise un ramasse-miettes automatique, tandis que Java exige une gestion manuelle de la mémoire.",
		author: "Finoana",
		created_at: "2024-02-15T22:28:06.811935Z",
		updated_at: "2024-02-15T22:28:06.811974Z",
	},
	{
		id: 3,
		question: 2,
		content:
			"Orientation objet: Python est un langage partiellement orienté objet, tandis que Java est un langage purement orienté objet.",
		created_at: "2024-02-15T22:27:46.904774Z",
		updated_at: "2024-02-15T22:27:46.904822Z",
	},
	{
		id: 2,
		question: 2,
		content:
			"Typage: Python est un langage dynamiquement typé, tandis que Java est un langage statiquement typé.",
		created_at: "2024-02-15T22:27:29.561707Z",
		updated_at: "2024-02-15T22:27:29.561781Z",
	},
	{
		id: 1,
		question: 1,
		content:
			"Voici 2 exemples d'applications concrètes de l'apprentissage automatique :\r\n\r\nReconnaissance d'images: Détecter des objets et des visages dans des images et des vidéos.\r\n**Trad",
		author: "Finoana",
		created_at: "2024-02-15T22:24:30.965918Z",
		updated_at: "2024-02-15T22:24:30.965967Z",
	},
];

const ListTheme: TTheme[] = [
	{
		id: 1,
		theme: "Langages de programmation",
	},
	{
		id: 2,
		theme: "Intelligence artificielle",
	},
];

type SearchContextType = {
	Value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchContext = createContext<any>({
	Value: "",
	setValue: () => {},
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

export default function SearchProvider({children}: {children: React.ReactNode}) {
	// Search Input
	const [Value, setValue] = useState<string>("");
	// Listes de base
	const [ListQuest, setListQuest] = useState<TQuestion[]>(ListQuestion);
	const [ListRep, setListRep] = useState<TReponse[]>(ListReponse);

	// Questions filtrees
	const [FilteredQuest, setFilteredQuest] = useState<TQuestion[]>(ListQuestion);
	// Questions sur suggestions
	const [SuggestedValues, setSuggestedValues] = useState<TQuestion[] | undefined>();

	// lorsqu'un Theme est selectionne
	const handleSelectValue = (value: TQuestion) => {
		setValue(value.theme);
		setSuggestedValues(undefined);
		setFilteredQuest(ListQuest.filter((quest) => quest.theme === value.theme));
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		if (e.target.value != "") {
			const FilteredQuest = ListQuest.filter((quest) =>
				quest.theme?.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
			);
			setSuggestedValues(FilteredQuest);
		} else {
			setSuggestedValues(undefined);
			setFilteredQuest(ListQuest);
		}
	};

	const value = {
		Value,
		handleChange,
		ListRep,
		handleSelectValue,
		SuggestedValues,
		FilteredQuest,
	};

	return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}
