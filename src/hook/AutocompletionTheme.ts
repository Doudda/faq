import {TTheme} from "@/type/TTheme";
import {useState} from "react";

const ConstListTheme: TTheme[] = [
	{
		id: 1,
		theme: "Langages de programmation",
	},
	{
		id: 2,
		theme: "Intelligence artificielle",
	},
];

export function AutocompletionTheme() {
	// Search Input
	const [Value, setValue] = useState<string>("");
	// Listes de base
	const [ListTheme, setListTheme] = useState<TTheme[]>(ConstListTheme);
	// Questions sur suggestions
	const [SuggestedValues, setSuggestedValues] = useState<TTheme[] | undefined>();

	// lorsqu'un Theme est selectionne
	const handleSelectValue = (value: TTheme) => {
		setValue(value.theme);
		setSuggestedValues(undefined);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		if (e.target.value != "") {
			const FilteredTheme = ListTheme.filter((theme) =>
				theme.theme?.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
			);
			setSuggestedValues(FilteredTheme);
		} else {
			setSuggestedValues(undefined);
		}
	};

	return {
		Value,
		handleChange,
		handleSelectValue,
		SuggestedValues,
	};
}
