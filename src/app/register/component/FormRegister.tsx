"use client";

import MyFormButton from "@/app/faq/component/component/component/MyFormButton";
import MyInput from "@/app/faq/component/component/component/MyInput";
import {CreateAccount} from "@/hook/Registration";
import React from "react";

export default function FormRegister() {
	const {register, handleSubmit, onSubmit, errors} = CreateAccount();

	return (
		<form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-4">
				<MyInput
					label="Prénom :"
					name="first_name"
					placeholder="John"
					register={register("first_name")}
					errorMessage={errors.first_name}
				/>
				<MyInput
					label="Nom :"
					name="last_name"
					placeholder="Doe"
					register={register("last_name")}
					errorMessage={errors.last_name}
				/>
				<MyInput
					label="Email :"
					name="email"
					placeholder="exemple@gmail.com"
					register={register("email")}
					errorMessage={errors.email}
				/>
				<MyInput
					label="Mot de passe :"
					name="password"
					placeholder="Password"
					type="password"
					register={register("password")}
					errorMessage={errors.password}
				/>
			</div>
			<div>
				<MyFormButton label="Créer mon compte" type="submit" />
			</div>
		</form>
	);
}
