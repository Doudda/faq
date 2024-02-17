import React from "react";
import FormRegister from "./component/FormRegister";

export default function page() {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-1/3 px-6 py-6 flex flex-col gap-6 bg-white rounded-xl shadow-xl">
				<div className="font-bold">Créez votre compte dès maintenant</div>
				<FormRegister />
			</div>
		</div>
	);
}
