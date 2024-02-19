import React, {ReactNode} from "react";

type ModalProps = {
	children: ReactNode;
	open: boolean;
	onClick: VoidFunction;
	className?: string;
};

export default function Modal(props: ModalProps) {
	const {children, open, onClick, className} = props;
	const modalclass = `modal modal-middle ${open ? "modal-open" : ""}`;
	return (
		<div className={modalclass}>
			<div className="w-2/5 bg-white rounded-3xl px-10 py-12 flex flex-row gap-6 relative">
				<button
					className="w-10 h-10 rounded-xl absolute right-4 top-4 hover:bg-slate-200 transition-all ease-linear duration-100"
					onClick={onClick}>
					✕
				</button>
				{children}
			</div>
		</div>
	);
}
