import {TQuestion} from "@/type/TQuestion";
import {useState} from "react";

export function useSearch(
	questions: TQuestion[],
	Value: string,
	setValues: React.Dispatch<React.SetStateAction<string>>
) {
	// liste de base
	const [BaseValues, setBaseValues] = useState<TQuestion[]>(questions);
	// liste des suggestions
	const [SuggestedValues, setSuggestedValues] = useState<TQuestion[] | undefined>();
	// control input artisan et gerer suggestions

	// lorsqu'un element est selected
	const [SelectedValue, setSelectedValue] = useState<TQuestion | undefined>();
	const handleSelectValue = (value: TQuestion) => {
		setSelectedValue(value);
		setSuggestedValues(undefined);
		setValues(value.theme);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues(e.target.value);
		setSelectedValue(undefined);
		if (e.target.value != "") {
			const filteredValues = BaseValues.filter((value) =>
				value.theme?.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
			);
			setSuggestedValues(filteredValues);
		} else {
			setSuggestedValues(undefined);
		}
	};

	return {
		SuggestedValues,
	};
}
