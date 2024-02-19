import React from "react";
import HeaderCl from "./component/HeaderCl";
import SearchBarCl from "./component/SearchBarCl";
import ContentCl from "./component/ContentCl";
import SearchProvider from "@/context/SearchProvider";

export default function page() {
	return (
		<>
			<HeaderCl />
			<div className="h-full mt-8 flex flex-col items-center gap-6">
				<SearchProvider>
					<SearchBarCl />
					<ContentCl />
				</SearchProvider>
			</div>
		</>
	);
}
