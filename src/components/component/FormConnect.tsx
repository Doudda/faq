import MyFormButton from "@/app/component/component/component/MyFormButton";
import MyInput from "@/app/component/component/component/MyInput";
import Link from "next/link";
import React from "react";

export default function FormConnect() {
	return (
		<div className="w-full flex flex-col gap-6">
			<div className="font-bold">Connectez-vous</div>
			<form className="flex flex-col gap-8">
				<div className="flex flex-col gap-4">
					<MyInput name="email" placeholder="exemple@gmail.com" />
					<MyInput name="password" placeholder="I see you" type="password" />
				</div>
				<div>
					<MyFormButton label="Se connecter" />
					<Link href="/register">
						<div className="flex justify-end text-xs hover:text-customBlue">Créer un compte</div>
					</Link>
				</div>
			</form>
		</div>
	);
}
