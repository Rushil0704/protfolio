import React, { useState, useEffect, useRef } from "react";
import { Code, User, Briefcase, Mail, Home } from "lucide-react";

interface NavigationProps {
	activeSection: string;
	onSectionChange: (section: string) => void;
}

export function Navigation({
	activeSection,
	onSectionChange,
}: NavigationProps) {
	const [selectedResume, setSelectedResume] = useState<File | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const lastActiveRef = useRef<string>(activeSection);

	// keep ref synced if parent changes activeSection externally
	useEffect(() => {
		lastActiveRef.current = activeSection;
	}, [activeSection]);

	// Trigger file input when Resume button is clicked
	const handleResumeButtonClick = (e: React.MouseEvent) => {
		e.preventDefault();
		if (fileInputRef.current) {
			fileInputRef.current.value = ""; // reset
			fileInputRef.current.click();
		}
	};

	// Handle file selection
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			setSelectedResume(file);
			// Immediately trigger download
			const url = URL.createObjectURL(file);
			const a = document.createElement("a");
			a.href = url;
			a.download = file.name;
			document.body.appendChild(a);
			a.click();
			setTimeout(() => {
				document.body.removeChild(a);
				URL.revokeObjectURL(url);
			}, 100);
		}
	};

	// Download the selected file
	const handleDownload = () => {
		if (selectedResume) {
			const url = URL.createObjectURL(selectedResume);
			const a = document.createElement("a");
			a.href = url;
			a.download = selectedResume.name;
			document.body.appendChild(a);
			a.click();
			setTimeout(() => {
				document.body.removeChild(a);
				URL.revokeObjectURL(url);
			}, 100);
		}
	};

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);

		const sectionIds = [
			"home",
			"about",
			"skills",
			"experience",
			"education",
			"projects",
			"contact",
		];

		const getElements = () =>
			sectionIds
				.map((id) => document.getElementById(id))
				.filter(Boolean) as HTMLElement[];

		let sectionElements = getElements();

		const observer = new IntersectionObserver(
			(entries) => {
				// choose entry with largest intersectionRatio
				let best: IntersectionObserverEntry | null = null;
				for (const entry of entries) {
					if (!best) {
						best = entry;
						continue;
					}
					if (
						entry.intersectionRatio > (best.intersectionRatio ?? 0)
					) {
						best = entry;
					}
				}

				if (best) {
					const id = (best.target as HTMLElement).id;
					// require some visible portion to avoid flicker
					if (best.isIntersecting && best.intersectionRatio > 0.15) {
						if (id !== lastActiveRef.current) {
							lastActiveRef.current = id;
							onSectionChange(id);
						}
					} else {
						// fallback: pick the currently most visible element by bounding rect
						const visible = sectionElements
							.map((el) => {
								const rect = el.getBoundingClientRect();
								const visibleHeight = Math.max(
									0,
									Math.min(rect.bottom, window.innerHeight) -
										Math.max(rect.top, 0)
								);
								const ratio =
									rect.height > 0
										? visibleHeight / rect.height
										: 0;
								return { el, ratio };
							})
							.sort((a, b) => b.ratio - a.ratio);

						if (visible.length > 0 && visible[0].ratio > 0.02) {
							const mostVisible = visible[0].el.id;
							if (mostVisible !== lastActiveRef.current) {
								lastActiveRef.current = mostVisible;
								onSectionChange(mostVisible);
							}
						}
					}
				}
			},
			{
				root: null,
				// prefer center of viewport but balanced for up/down scrolling
				rootMargin: "-20% 0px -30% 0px",
				threshold: [0, 0.15, 0.25, 0.5, 0.75, 1],
			}
		);

		// observe currently existing sections
		sectionElements.forEach((el) => observer.observe(el));

		// handle sections that render later (lazy / conditional)
		const mutation = new MutationObserver(() => {
			const newEls = getElements();
			if (newEls.length !== sectionElements.length) {
				sectionElements.forEach((el) => observer.unobserve(el));
				sectionElements = newEls;
				sectionElements.forEach((el) => observer.observe(el));
				// refresh in case layout changed
				setTimeout(() => window.dispatchEvent(new Event("scroll")), 50);
			}
		});
		mutation.observe(document.body, { childList: true, subtree: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
			mutation.disconnect();
			observer.disconnect();
		};
	}, [onSectionChange]);

	const navItems = [
		{ id: "home", label: "Home", icon: Home },
		{ id: "about", label: "About", icon: User },
		{ id: "skills", label: "Skills", icon: Code },
		{ id: "experience", label: "Experience", icon: Briefcase },
		{ id: "education", label: "Education", icon: Briefcase },
		{ id: "projects", label: "Projects", icon: Briefcase },
		{ id: "contact", label: "Contact", icon: Mail },
	];

	const handleNavClick = (sectionId: string) => {
		onSectionChange(sectionId);
		setIsMenuOpen(false);
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav
			className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
			style={{
				backgroundColor: "var(--color-bgc-bgSelect)",
			}}
		>
			<div className="container">
				<div className="flex justify-between items-center h-15 sm:h-20">
					<div className="flex-shrink-0">
						<button className="flex items-center cursor-pointer gap-2 group">
							<div className="relative">
								{/* Logo placeholder */}
							</div>
							<span className="text-xl font-bold hidden sm:block gradient-text">
								Rushil Vagadiya
							</span>
						</button>
					</div>

					<div className="hidden md:block">
						<div className="flex items-center gap-5">
							{navItems.map((item, idx) => (
								<button
									key={item.id}
									className={`relative px-3 py-2 transition-all duration-500 group font-medium rounded-full ${
										activeSection === item.id
											? "shadow-lg scale-105"
											: ""
									}`}
									style={{
										animationDelay: `${idx * 0.1}s`,
										color:
											activeSection === item.id
												? "var(--color-primaryActive)"
												: "var(--color-primary)",
										background:
											activeSection === item.id
												? "var(--color-primary)"
												: "var(--color-primary-tabbg)",
									}}
									onClick={() => handleNavClick(item.id)}
								>
									<span className="relative z-10">
										{item.label}
									</span>

									{/* Underline for active section */}
									<div
										className={`absolute -bottom-2 left-1/2 h-1 rounded-full transition-all duration-300 ${
											activeSection === item.id
												? "w-8 -translate-x-4"
												: "w-0 group-hover:w-6 group-hover:-translate-x-3"
										}`}
										style={{
											background: `linear-gradient(90deg, var(--color-primaryActive), var(--color-primary))`,
										}}
									></div>
								</button>
							))}

							<div className="flex items-center gap-2">
								{/* Hidden file input for selecting resume */}
								<input
									type="file"
									accept="application/pdf"
									ref={fileInputRef}
									style={{ display: "none" }}
									onChange={handleFileChange}
								/>
								<button
									type="button"
									className="inline-flex items-center justify-center sm:gap-2 whitespace-nowrap text-xs sm:text-sm font-medium disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none h-8 rounded-md gap-1.5 has-[>svg]:px-2.5 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 border-2 scale-105"
									style={{
										background: "var(--color-primary)",
										color: "var(--color-primaryActive)",
										fontWeight: 700,
										borderColor: "var(--color-primary)",
									}}
									onClick={handleResumeButtonClick}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-upload w-4 h-4"
										aria-hidden="true"
									>
										<path d="M12 3v12"></path>
										<path d="m7 8 5-5 5 5"></path>
										<path d="M5 21h14"></path>
									</svg>
									Resume
								</button>
							</div>
						</div>
					</div>

					<div className="md:hidden">
						<button
							data-slot="button"
							className="inline-flex items-center justify-center sm:gap-2 whitespace-nowrap text-xs sm:text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-8 rounded-md gap-1.5 has-[>svg]:px-2.5 p-2 relative group"
							style={{
								background: "var(--color-primary-tabbg)",
								color: "var(--color-primary)",
							}}
							onClick={() => setIsMenuOpen((prev) => !prev)}
						>
							<div
								className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200"
								style={{
									background: "var(--color-primary-tabbg)",
								}}
							></div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-menu relative z-10"
								aria-hidden="true"
							>
								<path d="M4 5h16"></path>
								<path d="M4 12h16"></path>
								<path d="M4 19h16"></path>
							</svg>
						</button>
						{isMenuOpen && (
							<div className="absolute top-16 left-0 w-full bg-[var(--color-bgc)] shadow-lg rounded-b-xl z-50 flex flex-col items-center py-4">
								{navItems.map((item) => (
									<button
										key={item.id}
										className={`w-full py-2 px-4 text-lg font-medium text-left hover:bg-[var(--color-primary-tabbg)] transition-colors ${
											activeSection === item.id
												? "font-bold underline"
												: ""
										}`}
										style={{
											color: "var(--color-primary)",
										}}
										onClick={() => handleNavClick(item.id)}
									>
										<span className="inline-flex items-center gap-2">
											<item.icon
												size={20}
												style={{
													color: "var(--color-primary)",
												}}
											/>
											{item.label}
										</span>
									</button>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}
