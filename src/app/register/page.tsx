import React from "react";
import MyInput from "../component/component/component/MyInput";
import MyFormButton from "../component/component/component/MyFormButton";

export default function page() {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-1/3 px-6 py-6 flex flex-col gap-6 bg-white rounded-xl shadow-xl">
				<div className="font-bold">Créez votre compte dès maintenant</div>
				<form className="flex flex-col gap-8">
					<div className="flex flex-col gap-4">
						<MyInput label="Prénom :" name="first_name" placeholder="John" />
						<MyInput label="Nom :" name="last_name" placeholder="Doe" />
						<MyInput label="Email :" name="email" placeholder="exemple@gmail.com" />
						<MyInput
							label="Mot de passe :"
							name="password"
							placeholder="I see you"
							type="password"
						/>
					</div>
					<div>
						<MyFormButton label="Créer mon compte" />
					</div>
				</form>
			</div>
		</div>
	);
}
