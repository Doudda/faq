"use client";

import {SearchContext} from "@/context/SearchProvider";
import {TQuestion} from "@/type/TQuestion";
import {TReponse} from "@/type/TReponse";
import React, {useContext, useState} from "react";

export default function Content() {
	const search = useContext(SearchContext);

	return (
		<div className="w-2/5 flex flex-col">
			<>
				{search.FilteredQuest.map((question: TQuestion) => (
					<div key={question.id} className="flex flex-col">
						<div>
							<div id="Question" className="mt-4 px-6 py-4 rounded-xl bg-customGray text-white">
								{question.title}
							</div>
							<div className="my-2 px-6 py-2 rounded-xl bg-white">
								{search.ListRep.map((reponse: TReponse) => (
									<div key={reponse.id}>
										{reponse.question === question.id && (
											<>
												<div id="Reponse" className="my-2">
													{reponse.content}
												</div>
											</>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</>
		</div>
	);
}
