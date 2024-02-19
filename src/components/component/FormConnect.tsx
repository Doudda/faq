import MyFormButton from "@/app/faq/component/component/component/MyFormButton";
import MyInput from "@/app/faq/component/component/component/MyInput";
import {Connexion} from "@/hook/Registration";
import Link from "next/link";
import React from "react";

export default function FormConnect() {
	const {register, handleSubmit, onSubmit, errors} = Connexion();

	return (
		<div className="w-full flex flex-col gap-6">
			<div className="font-bold">Connectez-vous</div>
			<form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-4">
					<MyInput
						name="email"
						placeholder="exemple@gmail.com"
						register={register("email")}
						errorMessage={errors.email}
					/>
					<MyInput
						name="password"
						placeholder="Password"
						type="password"
						register={register("password")}
						errorMessage={errors.password}
					/>
				</div>
				<div>
					<MyFormButton label="Se connecter" type="submit" />
					<Link href="/register">
						<div className="flex justify-end text-xs hover:text-customBlue">Créer un compte</div>
					</Link>
				</div>
			</form>
		</div>
	);
}
