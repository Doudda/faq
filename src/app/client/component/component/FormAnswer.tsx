import MyFormButton from "@/app/faq/component/component/component/MyFormButton";
import {TQuestion} from "@/type/TQuestion";
import React from "react";
import MyTextarea from "./component/MyTextarea";
import {AddAnswer} from "@/hook/AddAnswer";

export default function FormAnswer({
	closePopup,
	question,
}: {
	closePopup: VoidFunction;
	question?: TQuestion;
}) {
	const {register, handleSubmit, onSubmit, errors} = AddAnswer(closePopup);

	return (
		<div className="w-full flex flex-col gap-8">
			<div className="font-bold">{question?.title}</div>
			<form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-4">
					<MyTextarea
						label="Votre Réponse :"
						name="content"
						placeholder="Votre réponse ici ..."
						register={register("content")}
						errorMessage={errors.content}
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
