import React from "react";
import MyInput from "./component/MyInput";
import MyFormButton from "./component/MyFormButton";

export default function FormQuestion({closePopup}: {closePopup: VoidFunction}) {
	return (
		<div className="w-full flex flex-col gap-8">
			<div className="font-bold">Posez-nous votre question</div>
			<form className="flex flex-col gap-8">
				<div className="flex flex-col gap-4">
					<MyInput label="Votre Question :" name="title" placeholder="Que vaut PHP en 2024 ?" />
					<MyInput label="Votre avis :" name="title" placeholder="PHP c'est nul !" />
					<MyInput label="Thème :" name="title" placeholder="Langages de programmation" />
				</div>
				<div className="w-full flex flex-row gap-4">
					<MyFormButton label="Envoyer" />
					<MyFormButton label="Annuler" reset />
				</div>
			</form>
		</div>
	);
}
