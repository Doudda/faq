"use client";

import MyButton from "@/app/faq/component/component/MyButton";
import Modal from "@/components/Modal";
import {SearchContext} from "@/context/SearchProvider";
import {TQuestion} from "@/type/TQuestion";
import {TReponse} from "@/type/TReponse";
import React, {useContext, useState} from "react";
import FormAnswer from "./component/FormAnswer";

export default function ContentCl() {
	const search = useContext(SearchContext);

	// State Popup
	const [open, setOpen] = useState<boolean>(false);
	const togglePopup = () => setOpen(!open);

	const [SelectedQuestion, setSelectedQuestion] = useState<TQuestion>();
	const handleAnswer = (question: TQuestion) => {
		togglePopup();
		setSelectedQuestion(question);
	};

	return (
		<div className="w-1/2 flex flex-col">
			<>
				{search.FilteredQuest.map((question: TQuestion) => {
					const i: number = search.ListRep.filter(
						(reponse: TReponse) => reponse.question === question.id
					).length;
					return (
						<div key={question.id} className="flex flex-col">
							<div className="flex flex-col">
								<div className="mt-4 flex flex-row gap-2">
									<div
										id="Question"
										className="px-6 py-4 flex flex-row gap-2 items-center rounded-xl bg-customGray text-white grow">
										<div className="grow">{question.title}</div>
										<div className="px-3 py-1 bg-black opacity-60 rounded-full font-bold">{i}</div>
									</div>
									<MyButton
										label="Répondre"
										handleClick={() => {
											handleAnswer(question);
										}}
									/>
								</div>
								<div>
									<div className="my-2 px-6 py-2 rounded-xl bg-white">
										{search.ListRep.map((reponse: TReponse) => {
											return (
												<div key={reponse.id}>
													{reponse.question === question.id && (
														<>
															<div id="Reponse" className="my-2">
																{reponse.content}
															</div>
														</>
													)}
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</>
			{open && (
				<Modal open={open} onClick={togglePopup}>
					<FormAnswer closePopup={togglePopup} question={SelectedQuestion} />
				</Modal>
			)}
		</div>
	);
}
