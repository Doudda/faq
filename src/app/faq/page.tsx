import SearchBar from "./component/SearchBar";
import Content from "./component/Content";
import Header from "@/components/Header";
import SearchProvider from "@/context/SearchProvider";

export default function page() {
	return (
		<>
			<Header />
			<div className="h-full mt-8 flex flex-col items-center gap-6">
				<SearchProvider>
					<SearchBar />
					<Content />
				</SearchProvider>
			</div>
		</>
	);
}
