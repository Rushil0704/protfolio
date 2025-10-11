import { toast as toastify, ToastPosition } from "react-toastify";
// @ts-ignore
import "react-toastify/dist/ReactToastify.css";

const getToastConfig = () => {
	const isMobile = window.innerWidth <= 640;
	const position: ToastPosition = isMobile ? "bottom-center" : "top-right";

	return {
		position,
		autoClose: 2500,
		hideProgressBar: isMobile ? true : false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		closeButton: isMobile ? false : true,
		theme:
			localStorage.theme === "dark" ||
			(!localStorage.theme &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
				? "dark"
				: "light",
		toastClassName: ({ theme }: { theme: string }) =>
			`${
				theme === "dark"
					? "bg-gray-800 text-white"
					: "bg-white text-gray-900"
			} !rounded-2xl shadow-[0_20px_35px_rgba(0,0,0,0.05)]`,
	};
};

export const toast = {
	success: (message: string) => {
		toastify.success(message, getToastConfig());
	},
	error: (message: string) => {
		toastify.error(message, getToastConfig());
	},
	info: (message: string) => {
		toastify.info(message, getToastConfig());
	},
	warning: (message: string) => {
		toastify.warning(message, getToastConfig());
	},
};
