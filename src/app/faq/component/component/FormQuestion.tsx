import React from "react";
import MyInput from "./component/MyInput";
import MyFormButton from "./component/MyFormButton";
import {AddQuestion} from "@/hook/AddQuestion";
import MyInputTheme from "./component/MyInputTheme";

export default function FormQuestion({closePopup}: {closePopup: VoidFunction}) {
	const {register, handleSubmit, onSubmit, errors, ACT} = AddQuestion(closePopup);

	return (
		<div className="w-full flex flex-col gap-8">
			<div className="font-bold">Posez-nous votre question</div>
			<form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-4">
					<MyInput
						label="Votre Question :"
						name="title"
						placeholder="Que vaut PHP en 2024 ?"
						register={register("title")}
						errorMessage={errors.title}
					/>
					<MyInput
						label="Votre avis :"
						name="content"
						placeholder="PHP en 2024 : Un avenir peu prometteur"
						register={register("content")}
						errorMessage={errors.content}
					/>
					<MyInputTheme
						label="Thème :"
						name="theme"
						placeholder="Langage de programmation"
						act={ACT}
					/>
				</div>
				<div className="w-full flex flex-row gap-4">
					<MyFormButton label="Envoyer" type="submit" />
					<MyFormButton label="Annuler" reset onClick={closePopup} />
				</div>
			</form>
		</div>
	);
}
