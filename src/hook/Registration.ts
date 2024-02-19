"use client";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

export function AddQuestion(closePopup: () => void) {
	// * VALIDATION YUP
	const addAnswerSchema = yup.object().shape({
		first_name: yup.string().required("Ce champ est obligatoire"),
		last_name: yup.string().required("Ce champ est obligatoire"),
		email: yup.string().email("Ce champ est obligatoire").required("Ce champ est obligatoire"),
		password: yup
			.string()
			.required("Ce champ est obligatoire")
			.min(8, "Le mot de passe doit contenir au moins 8 caractères")
			.max(20, "Le mot de passe doit contenir au plus 20 caractères"),
	});

	// * REACT HOOK FORM
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm({resolver: yupResolver(addAnswerSchema)});

	// * WHEN SUBMIT
	const onSubmit = (data: any) => {
		try {
			// * les infos du formulaire sont dans data
			console.log(data);
		} catch (error: any) {
			console.error(error);
		} finally {
			closePopup();
			reset();
		}
	};

	return {register, handleSubmit, onSubmit, errors};
}
