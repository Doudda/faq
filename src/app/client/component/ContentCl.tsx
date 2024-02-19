"use client";

import {SearchContext} from "@/context/SearchProvider";
import {TQuestion} from "@/type/TQuestion";
import {TReponse} from "@/type/TReponse";
import React, {useContext} from "react";

export default function ContentCl() {
	const search = useContext(SearchContext);

	return (
		<div className="w-2/5 flex flex-col">
			<>
				{search.FilteredQuest.map((question: TQuestion) => {
					const i: number = search.ListRep.filter(
						(reponse: TReponse) => reponse.question === question.id
					).length;
					return (
						<div key={question.id} className="flex flex-col">
							<div>
								<div
									id="Question"
									className="mt-4 px-6 py-4 flex flex-row items-center rounded-xl bg-customGray text-white">
									<div className="grow">{question.title}</div>
									<div className="px-3 py-1 bg-black opacity-60 rounded-full font-bold">{i}</div>
								</div>
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
					);
				})}
			</>
		</div>
	);
}
