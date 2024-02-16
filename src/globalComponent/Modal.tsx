import React, {ReactNode} from "react";

type ModalProps = {
	children: ReactNode;
	open: boolean;
	onClick: VoidFunction;
	className?: string;
};

export default function ModalLayout(props: ModalProps) {
	const {children, open, onClick, className} = props;
	const modalclass = open ? "modal modal-open" : "modal";
	return (
		<div className=" model model-open">
			<div className="bg-white rounded-3xl px-10 py-12 flex flex-row gap-6 relative w-3/2 h-1/2">
				<button
					className="w-10 h-10 rounded-xl bg-blue text-white absolute right-4 top-4 hover:bg-opacity-80 "
					onClick={onClick}>
					✕
				</button>
				{children}
			</div>
		</div>
	);
}
