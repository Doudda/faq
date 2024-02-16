import SearchBar from "./component/SearchBar";
import Content from "./component/Content";

export default function Home() {
	return (
		<div className="w-full h-screen mt-10 flex flex-col items-center gap-10">
			<SearchBar />
			<Content />
		</div>
	);
}
