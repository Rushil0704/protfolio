// App.jsx
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { ToastContainer } from "react-toastify";
import Experience from "./components/ui/Experience";
import Education from "./components/Education";

const themes = [
	"theme-1",
	"theme-2",
	"theme-3",
	"theme-4",
	"theme-5",
	"theme-6",
	"theme-7",
];

export default function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-out-quart",
			once: true,
			offset: 100,
			delay: 100,
		});
	}, []);

	const [activeSection, setActiveSection] = useState("home");
	const [theme, setTheme] = useState("theme-1");
	const [themePickerOpen, setThemePickerOpen] = useState(false);

	// Scroll handler to set active section
	useEffect(() => {
		const handleScroll = () => {
			const sections = ["home", "about", "skills", "projects", "contact"];
			const scrollPosition = window.scrollY + 100;

			for (const sectionId of sections) {
				const element = document.getElementById(sectionId);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(sectionId);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // initial call
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Theme handling
	useEffect(() => {
		themes.forEach((t) => document.documentElement.classList.remove(t));
		document.documentElement.classList.add(theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) setTheme(savedTheme);
	}, []);

	// Initialize AOS

	return (
		<div className="min-h-screen bg-background text-foreground overflow-hidden">
			{/* Navigation */}
			<Navigation
				activeSection={activeSection}
				onSectionChange={setActiveSection}
			/>

			{/* Main Content */}
			<main>
				<Hero />
				<About />
				<Skills />
				<Experience />
				<Education />
				<Projects />
				<Contact />
			</main>

			{/* Footer */}
			<Footer />

			{/* Toaster */}
			<Toaster />
			{/* React-Toastify container for toast.ts */}
			<ToastContainer />

			{/* Theme Picker */}
			<div className="fixed bottom-5 right-5 flex flex-col items-end gap-2 z-50">
				<button
					className="p-3 rounded-full bg-[color:var(--color-primary)] text-white shadow-lg hover:scale-110 transition"
					onClick={() => setThemePickerOpen(!themePickerOpen)}
				>
					<span style={{ fontSize: 24 }}>⚙️</span>
				</button>
				{themePickerOpen && (
					<div className="flex flex-row gap-2 mt-2 bg-black/70 p-3 rounded-lg shadow-lg">
						{themes.map((t, i) => (
							<button
								key={i}
								className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
								style={{
									backgroundColor: `var(--color-theme-${
										i + 1
									})`,
								}}
								onClick={() => setTheme(t)}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
