import MyFormButton from "@/app/faq/component/component/component/MyFormButton";
import MyInput from "@/app/faq/component/component/component/MyInput";
import React from "react";

export default function FormRegister() {
	return (
		<form className="flex flex-col gap-8">
			<div className="flex flex-col gap-4">
				<MyInput label="Prénom :" name="first_name" placeholder="John" />
				<MyInput label="Nom :" name="last_name" placeholder="Doe" />
				<MyInput label="Email :" name="email" placeholder="exemple@gmail.com" />
				<MyInput label="Mot de passe :" name="password" placeholder="I see you" type="password" />
			</div>
			<div>
				<MyFormButton label="Créer mon compte" />
			</div>
		</form>
	);
}
