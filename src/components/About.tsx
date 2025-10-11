// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect, useRef } from "react";
// import SplitType from "split-type";

// gsap.registerPlugin(ScrollTrigger);

export function About() {
	// const textRef = useRef(null);

	// useEffect(() => {
	// 	if (textRef.current) {
	// 		// Split text into lines, words, and characters
	// 		const split = new SplitType(textRef.current, {
	// 			types: "lines,words,chars",
	// 			tagName: "span",
	// 		});

	// 		// set initial state
	// 		gsap.set(split.chars, {
	// 			opacity: 0,
	// 			x: 50,
	// 		});

	// 		// animate with scroll
	// 		gsap.to(split.chars, {
	// 			scrollTrigger: {
	// 				trigger: textRef.current,
	// 				start: "top 100%",
	// 			},
	// 			x: 0,
	// 			y: 0,
	// 			rotateX: 0,
	// 			opacity: 1,
	// 			duration: 1,
	// 			ease: "back.out(1.7)",
	// 			stagger: 0.02,
	// 		});

	// 		// cleanup on unmount
	// 		return () => {
	// 			split.revert();
	// 			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	// 		};
	// 	}
	// }, []);

	return (
		// <section
		// 	id="about"
		// 	className="sm:py-16 py-8 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
		// 	style={{ backgroundColor: "var(--color-bgText)" }}
		// >
		<section
			id="about"
			className="sm:py-16 py-8 relative overflow-hidden"
			style={{ backgroundColor: "var(--color-bgc-bgSelect)" }}
		>
			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(circle at 20% 50%, var(--color-primary)/0.05, transparent 50%)",
				}}
			></div>
			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(circle at 80% 20%, var(--color-accent)/0.05, transparent 50%)",
				}}
			></div>
			<div className="container relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
					<div className="flex flex-col gap-6 sm:gap-8">
						{/* ========== SECTION HEADER ========== */}
						<div
							className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-full border border-[var(--color-primary)]/20 w-fit"
							data-aos="fade-right"
							data-aos-duration="700"
							data-aos-delay="100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="var(--color-primary)"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-zap sm:size-4 size-3"
							>
								<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
							</svg>
							<span
								className="sm:text-sm text-xs font-medium"
								style={{ color: "var(--color-foreground)" }}
							>
								About Me
							</span>
						</div>

						{/* ========== TITLE ========== */}
						<h2
							className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[var(--color-foreground)] via-[var(--color-primary)] to-[var(--color-foreground)] bg-clip-text text-transparent pb-3 sm:pb-7"
							data-aos="fade-right"
							data-aos-duration="700"
							data-aos-delay="300"
						>
							Building Tomorrow's Web
						</h2>

						{/* ========== INTRO PARAGRAPH ========== */}
						<p
							className="text-lg sm:text-xl leading-relaxed"
							data-aos="fade-right"
							data-aos-duration="700"
							data-aos-delay="500"
							style={{ color: "var(--color-muted-foreground)" }}
						>
							I'm a passionate MERN Stack Developer currently
							pursuing Master of Computer Applications,
							specializing in building scalable web applications
							with modern technologies.
						</p>

						{/* ========== EXPERIENCE DESCRIPTION ========== */}
						<div
							className="flex flex-col gap-2 sm:gap-4"
							data-aos="fade-right"
							data-aos-duration="700"
							data-aos-delay="700"
						>
							<p
								className="leading-relaxed"
								style={{
									color: "var(--color-muted-foreground)",
								}}
							>
								With 6+ months of hands-on experience in
								full-stack development, I've worked on diverse
								projects ranging from authentication systems to
								campground management platforms. I believe in
								writing clean, maintainable code that delivers
								real value.
							</p>
							<p
								className="leading-relaxed"
								style={{
									color: "var(--color-muted-foreground)",
								}}
							>
								Currently working as a MERN Stack Developer
								Intern at D.B.Codder, I focus on building
								responsive web applications with React.js,
								Node.js, and MongoDB. I'm passionate about
								learning new technologies and contributing to
								innovative web solutions.
							</p>
						</div>

						{/* ========== SKILL CARDS (with step-by-step animation) ========== */}
						<div className="flex flex-col gap-4 sm:gap-6 mt-4">
							{[
								{
									title: "MERN Stack Development",
									desc: "Building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
									delay: 900,
									bg: "from-blue-500/20 to-cyan-500/20",
								},
								{
									title: "Clean Code Practices",
									desc: "Writing maintainable, scalable code following industry best practices and patterns.",
									delay: 1100,
									bg: "from-purple-500/20 to-pink-500/20",
								},
								{
									title: "Continuous Learning",
									desc: "Currently pursuing MCA while staying updated with latest web development trends.",
									delay: 1300,
									bg: "from-green-500/20 to-emerald-500/20",
								},
							].map((item, i) => (
								<div
									key={i}
									data-aos="fade-right"
									data-aos-duration="700"
									data-aos-delay={item.delay}
									className="flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-r from-[var(--color-background)]/50 to-[var(--color-background)]/30 backdrop-blur-sm hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all duration-300"
								>
									<div
										data-slot="card-content"
										className="[&:last-child]:pb-6 p-4 sm:p-6 sm:!pb-6 !pb-4 relative"
									>
										<div
											className={`absolute inset-0 bg-gradient-to-r ${item.bg} rounded-lg opacity-30 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
										></div>
										<div className="relative z-10 flex flex-col gap-2">
											<h4
												className="font-semibold"
												style={{
													color: "var(--color-foreground)",
												}}
											>
												{item.title}
											</h4>
											<p
												className="text-xs sm:text-sm"
												style={{
													color: "var(--color-muted-foreground)",
												}}
											>
												{item.desc}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="flex flex-col gap-6 sm:gap-8">
						<div className="grid grid-cols-2 gap-4 sm:gap-6">
							{/* ...stat cards... */}
							<div
								data-slot="card"
								className="flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-[var(--color-primary)]/1 to-[var(--color-accent)]/1 backdrop-blur-sm shadow-sm sm:shadow-none hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-500 hover:-translate-y-2  ease-out opacity-100 scale-100"
								style={{ willChange: "auto" }}
							>
								<div
									data-slot="card-content"
									className="[&:last-child]:pb-6 p-4 sm:p-6 text-center flex flex-col gap-1 sm:gap-2"
								>
									<div className="size-8 sm:size-12 mx-auto bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="var(--color-primary)"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-code size-4 sm:size-6"
											aria-hidden="true"
										>
											<path d="m16 18 6-6-6-6"></path>
											<path d="m8 6-6 6 6 6"></path>
										</svg>
									</div>
									<div className="flex flex-col gap-1">
										<div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
											3+ Projects
										</div>
										<div
											className="text-xs sm:text-sm font-medium uppercase tracking-wider"
											style={{
												color: "var(--color-primary)",
											}}
										>
											Completed
										</div>
									</div>
								</div>
							</div>
							<div
								data-slot="card"
								className="flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-[var(--color-primary)]/1 to-[var(--color-accent)]/1 backdrop-blur-sm shadow-sm sm:shadow-none hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-500 hover:-translate-y-2  ease-out opacity-100 scale-100"
								style={{ willChange: "auto" }}
							>
								<div
									data-slot="card-content"
									className="[&:last-child]:pb-6 p-4 sm:p-6 text-center flex flex-col gap-1 sm:gap-2"
								>
									<div className="size-8 sm:size-12 mx-auto bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="var(--color-primary)"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-calendar size-4 sm:size-6"
											aria-hidden="true"
										>
											<path d="M8 2v4"></path>
											<path d="M16 2v4"></path>
											<rect
												width="18"
												height="18"
												x="3"
												y="4"
												rx="2"
											></rect>
											<path d="M3 10h18"></path>
										</svg>
									</div>
									<div className="flex flex-col gap-1">
										<div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
											6+ Months
										</div>
										<div
											className="text-xs sm:text-sm font-medium uppercase tracking-wider"
											style={{
												color: "var(--color-primary)",
											}}
										>
											Experience
										</div>
									</div>
								</div>
							</div>
							<div
								data-slot="card"
								className="flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-[var(--color-primary)]/1 to-[var(--color-accent)]/1 backdrop-blur-sm shadow-sm sm:shadow-none hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-500 hover:-translate-y-2  ease-out opacity-100 scale-100"
								style={{ willChange: "auto" }}
							>
								<div
									data-slot="card-content"
									className="[&:last-child]:pb-6 p-4 sm:p-6 text-center flex flex-col gap-1 sm:gap-2"
								>
									<div className="size-8 sm:size-12 mx-auto bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="var(--color-primary)"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-graduation-cap size-4 sm:size-6"
											aria-hidden="true"
										>
											<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
											<path d="M22 10v6"></path>
											<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
										</svg>
									</div>
									<div className="flex flex-col gap-1">
										<div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
											7.6 CGPA
										</div>
										<div
											className="text-xs sm:text-sm font-medium uppercase tracking-wider"
											style={{
												color: "var(--color-primary)",
											}}
										>
											BCA
										</div>
									</div>
								</div>
							</div>
							<div
								data-slot="card"
								className="flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-[var(--color-primary)]/1 to-[var(--color-accent)]/1 backdrop-blur-sm shadow-sm sm:shadow-none hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-500 hover:-translate-y-2  ease-out opacity-100 scale-100"
								style={{ willChange: "auto" }}
							>
								<div
									data-slot="card-content"
									className="[&:last-child]:pb-6 p-4 sm:p-6 text-center flex flex-col gap-1 sm:gap-2"
								>
									<div className="size-8 sm:size-12 mx-auto bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="var(--color-primary)"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-heart size-4 sm:size-6"
											aria-hidden="true"
										>
											<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
										</svg>
									</div>
									<div className="flex flex-col gap-1">
										<div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
											100%
										</div>
										<div
											className="text-xs sm:text-sm font-medium uppercase tracking-wider"
											style={{
												color: "var(--color-primary)",
											}}
										>
											Commitment
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							data-slot="card"
							className="flex flex-col gap-6 rounded-lg border-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm overflow-hidden"
						>
							<div
								data-slot="card-content"
								className="[&:last-child]:pb-6 p-5 sm:p-8 flex flex-col gap-4 sm:gap-6"
							>
								<div className="flex flex-col gap-3 sm:gap-4">
									<div className="flex items-center gap-1.5 sm:gap-3">
										<div className="sm:size-10 size-6 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg flex items-center justify-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="var(--color-primary-foreground)"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="lucide lucide-map-pin size-3 sm:size-5"
												aria-hidden="true"
											>
												<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
												<circle
													cx="12"
													cy="10"
													r="3"
												></circle>
											</svg>
										</div>
										<h4
											className="text-base sm:text-lg font-semibold"
											// style={{
											// 	color: "var(--color-textSecondary-dark)",
											// }}
										>
											Currently
										</h4>
									</div>
									<p
										className="leading-relaxed"
										style={{
											color: "var(--color-muted-foreground)",
										}}
									>
										Currently working as a MERN Stack
										Developer Intern at D.B.Codder, building
										full-stack web applications and learning
										industry best practices in agile
										development environments.
									</p>
									<div className="flex items-center gap-3 pt-2">
										<div className="flex items-center gap-2">
											<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
											<span
												className="text-sm font-medium"
												style={{
													color: "var(--color-muted-foreground)",
												}}
											>
												Available for new projects
											</span>
										</div>
									</div>
								</div>
								<div
									className="border-t"
									style={{
										borderColor: "var(--color-border)",
									}}
								>
									<button
										data-slot="button"
										className="inline-flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap text-xs sm:text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-[var(--color-ring)] focus-visible:ring-[var(--color-ring)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--color-destructive)]/20 dark:aria-invalid:ring-[var(--color-destructive)]/40 aria-invalid:border-[var(--color-destructive)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary)]/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full shadow-lg shadow-[var(--color-primary)]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-primary)]/40"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="var(--color-primary-foreground)"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-download w-4 h-4"
											aria-hidden="true"
										>
											<path d="M12 15V3"></path>
											<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
											<path d="m7 10 5 5 5-5"></path>
										</svg>
										Download Resume
									</button>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-4 sm:gap-6">
							<h3
								className="text-lg sm:text-xl font-semibold"
								style={{
									color: "var(--color-primary)",
								}}
							>
								Technologies &amp; Tools
							</h3>
							<div className="flex flex-wrap gap-1.5 sm:gap-2">
								{/* ...badges... */}
								{[
									"React.js",
									"Node.js",
									"Express.js",
									"MongoDB",
									"JavaScript",
									"TypeScript",
									"HTML",
									"CSS",
									"TailwindCSS",
									"EJS",
									"MySQL",
									"Git",
									"GitHub",
								].map((tech, i) => (
									<span
										key={tech}
										data-slot="badge"
										className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-[var(--color-ring)] focus-visible:ring-[var(--color-ring)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--color-destructive)]/20 dark:aria-invalid:ring-[var(--color-destructive)]/40 aria-invalid:border-[var(--color-destructive)] overflow-hidden text-[var(--color-secondary-foreground)] [a&]:hover:bg-[var(--color-secondary)]/90 px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-[var(--color-muted)]/80 to-[var(--color-muted)]/60 hover:from-[var(--color-primary)]/20 hover:to-[var(--color-accent)]/20 border border-[var(--color-border)]/20 hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/10"
										style={{
											animationDelay: `${i * 50}ms`,
											backgroundColor:
												"var(--color-bgc-bgSelect)",
											color: "var(--color-primary)",
										}}
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
