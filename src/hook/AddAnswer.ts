"use client";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

export function AddAnswer(closePopup: () => void) {
	// * VALIDATION YUP
	const addAnswerSchema = yup.object().shape({
		content: yup.string().required("Ce champ est obligatoire"),
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
