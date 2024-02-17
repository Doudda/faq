"use client";

import {SearchContext} from "@/context/SearchProvider";
import {useSearch} from "@/hook/Search";
import {TQuestion} from "@/type/TQuestion";
import {TReponse} from "@/type/TReponse";
import React, {useContext, useState} from "react";

const ListQuestion: TQuestion[] = [
	{
		id: 2,
		title: "Quelles sont les différences entre Python et Java ?",
		content:
			"Python et Java sont deux langages de programmation populaires, mais ils présentent des différences importantes",
		theme: "Langages de programmation",
		created_at: "2024-02-15T22:26:51.161689Z",
		updated_at: "2024-02-15T22:26:51.161735Z",
	},
	{
		id: 1,
		title:
			"Qu'est-ce que l'apprentissage automatique et donnez 2 exemples d'applications concrètes",
		content:
			"L'apprentissage automatique est un domaine de l'intelligence artificielle qui permet aux ordinateurs d'apprendre et de s'améliorer par l'expérience, sans être explicitement programmés.",
		theme: "Intelligence artificielle",
		created_at: "2024-02-15T22:23:14.846036Z",
		updated_at: "2024-02-15T22:23:14.846099Z",
	},
];

const ListReponse: TReponse[] = [
	{
		id: 4,
		question: 2,
		content:
			"Gestion de la mémoire: Python utilise un ramasse-miettes automatique, tandis que Java exige une gestion manuelle de la mémoire.",
		author: "Finoana",
		created_at: "2024-02-15T22:28:06.811935Z",
		updated_at: "2024-02-15T22:28:06.811974Z",
	},
	{
		id: 3,
		question: 2,
		content:
			"Orientation objet: Python est un langage partiellement orienté objet, tandis que Java est un langage purement orienté objet.",
		created_at: "2024-02-15T22:27:46.904774Z",
		updated_at: "2024-02-15T22:27:46.904822Z",
	},
	{
		id: 2,
		question: 2,
		content:
			"Typage: Python est un langage dynamiquement typé, tandis que Java est un langage statiquement typé.",
		created_at: "2024-02-15T22:27:29.561707Z",
		updated_at: "2024-02-15T22:27:29.561781Z",
	},
	{
		id: 1,
		question: 1,
		content:
			"Voici 2 exemples d'applications concrètes de l'apprentissage automatique :\r\n\r\nReconnaissance d'images: Détecter des objets et des visages dans des images et des vidéos.\r\n**Trad",
		author: "Finoana",
		created_at: "2024-02-15T22:24:30.965918Z",
		updated_at: "2024-02-15T22:24:30.965967Z",
	},
];

export default function Content() {
	const search = useContext(SearchContext);
	const {SuggestedValues} = useSearch(ListQuestion, search.Value, search.setValue);

	const [ListQuest, setListQuest] = useState<TQuestion[]>(ListQuestion);
	// const [QuestFiltre, setQuestFiltre] = useState<TQuestion[]>();

	const [ListRep, setListRep] = useState<TReponse[]>(ListReponse);
	return (
		<div className="w-2/5 flex flex-col">
			<>
				{ListQuest.map((question, index) => (
					<div key={index} className="flex flex-col">
						<div>
							<div id="Question" className="mt-4 px-6 py-4 rounded-xl bg-customGray text-white">
								{question.title}
							</div>
							<div className="my-2 px-6 py-2 rounded-xl bg-white">
								{ListRep.map((reponse, index) => (
									<div key={index}>
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
