// Skills.tsx
import React from "react";
import { Globe, Server, Database, Settings } from "lucide-react";

export function Skills() {
	return (
		<>
			{/* <section
				id="skills"
				className="sm:py-16 py-8 bg-gradient-to-b from-[var(--color-muted)]/30 to-[var(--color-background)] relative overflow-hidden"
				style={{ backgroundColor: "var(--color-)" }}
			> */}

			<section
				id="skills"
				className="sm:py-16 py-8 relative overflow-hidden"
				style={{ backgroundColor: "var(--color-bgc-bgSelect)" }}
			>
				<div
					className="absolute inset-0"
					style={{
						background:
							"radial-gradient(circle at 30% 20%, var(--color-primary)/0.05, transparent 50%)",
					}}
				></div>
				<div
					className="absolute inset-0"
					style={{
						background:
							"radial-gradient(circle at 70% 80%, var(--color-accent)/0.05, transparent 50%)",
					}}
				></div>
				<div className="container relative z-10 flex flex-col gap-6 sm:gap-12">
					<div className="text-center flex flex-col gap-4 sm:gap-6">
						<div
							data-aos="fade-up"
							data-aos-delay="100"
							data-aos-duration="700"
							className="inline-flex items-center gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-full border border-[var(--color-primary)]/20 w-fit sm:mx-auto transition-all duration-700 ease-out opacity-100 translate-y-0"
							style={{ willChange: "auto" }}
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
								className="lucide lucide-star sm:size-4 size-3"
								aria-hidden="true"
							>
								<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
							</svg>
							<span
								className="text-xs sm:text-sm font-medium"
								style={{ color: "var(--color-foreground)" }}
							>
								Skills &amp; Expertise
							</span>
						</div>
						<div className="flex flex-col gap-2">
							<h2
								data-aos="fade-up"
								data-aos-delay="200"
								data-aos-duration="700"
								className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[var(--color-foreground)] via-[var(--color-primary)] to-[var(--color-foreground)] bg-clip-text text-transparent pb-2 sm:text-center text-start transition-all duration-700 ease-out opacity-100 translate-y-0"
								style={{ willChange: "auto" }}
							>
								Technical Proficiency
							</h2>
							<p
								data-aos="fade-up"
								data-aos-delay="300"
								data-aos-duration="700"
								className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed sm:text-center text-start transition-all duration-700 ease-out opacity-100 translate-y-0"
								style={{ willChange: "auto" }}
							>
								A comprehensive toolkit built through years of
								experience, continuous learning, and hands-on
								project development across multiple domains.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8">
						{/* Frontend Card */}
						<div
							data-aos="fade-up"
							data-aos-delay="400"
							data-aos-duration="700"
							data-slot="card"
							className="text-[var(--color-card-foreground)] flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm shadow-sm sm:shadow-none hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-500 hover:-translate-y-2 duration-700 ease-out opacity-100 translate-y-0"
							style={{ willChange: "auto" }}
						>
							<div
								data-slot="card-content"
								className="[&:last-child]:pb-6 p-4 sm:p-8 flex flex-col gap-6"
							>
								<div className="text-center flex flex-col gap-2 sm:gap-4">
									<div className="size-12 sm:size-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-code-xml sm:size-8 size-6"
											aria-hidden="true"
										>
											<path d="m18 16 4-4-4-4"></path>
											<path d="m6 8-4 4 4 4"></path>
											<path d="m14.5 4-5 16"></path>
										</svg>
									</div>
									<h3
										className="text-lg sm:text-xl font-semibold"
										style={{
											color: "var(--color-bgHeader)",
										}}
									>
										Frontend
									</h3>
									<div className="w-12 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto rounded-full"></div>
								</div>
								<div className="flex flex-col gap-3 sm:gap-4">
									{/* Example skills, replace with dynamic if needed */}
									{[
										{ name: "React", level: 95 },
										{ name: "TypeScript", level: 90 },
										{ name: "Tailwind CSS", level: 92 },
										{ name: "HTML/CSS", level: 95 },
									].map((skill, idx) => (
										<div
											key={skill.name}
											className="flex flex-col sm:gap-2 gap-1"
										>
											<div className="flex justify-between items-center">
												<span className="text-sm font-medium text-80 text-foreground/80">
													{skill.name}
												</span>
												<span className="text-xs text-foreground">
													{skill.level}%
												</span>
											</div>
											<div
												className="relative w-full overflow-hidden rounded-full h-1.5 sm:h-2 bg-[var(--color-muted)]/50"
												style={{
													animationDelay: `${
														idx * 100
													}ms`,
												}}
											>
												<div
													className="bg-[var(--color-primary)] h-full"
													style={{
														width: `${skill.level}%`,
														transition:
															"width 0.7s",
													}}
												></div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						{/* Backend Card */}
						<div
							data-aos="fade-up"
							data-aos-delay="400"
							data-aos-duration="700"
							data-slot="card"
							className="text-[var(--color-card-foreground)] flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm shadow-sm sm:shadow-none hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-500 hover:-translate-y-2 duration-700 ease-out opacity-100 translate-y-0"
							style={{ willChange: "auto" }}
						>
							<div
								data-slot="card-content"
								className="[&:last-child]:pb-6 p-4 sm:p-8 flex flex-col gap-6"
							>
								<div className="text-center flex flex-col gap-2 sm:gap-4">
									<div className="size-12 sm:size-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-database sm:size-8 size-6"
											aria-hidden="true"
										>
											<ellipse
												cx="12"
												cy="5"
												rx="9"
												ry="3"
											></ellipse>
											<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
											<path d="M3 12A9 3 0 0 0 21 12"></path>
										</svg>
									</div>
									<h3
										className="text-lg sm:text-xl font-semibold"
										style={{
											color: "var(--color-bgHeader)",
										}}
									>
										Backend
									</h3>
									<div className="w-12 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto rounded-full"></div>
								</div>
								<div className="flex flex-col gap-3 sm:gap-4">
									{[
										{ name: "Node.js", level: 88 },
										{ name: "Express.js", level: 85 },
										{ name: "REST APIs", level: 90 },
									].map((skill, idx) => (
										<div
											key={skill.name}
											className="flex flex-col sm:gap-2 gap-1"
										>
											<div className="flex justify-between items-center">
												<span className="text-sm font-medium text-foreground/80">
													{skill.name}
												</span>
												<span className="text-xs text-foreground">
													{skill.level}%
												</span>
											</div>
											<div
												className="relative w-full overflow-hidden rounded-full h-1.5 sm:h-2 bg-[var(--color-muted)]/50"
												style={{
													animationDelay: `${
														200 + idx * 100
													}ms`,
												}}
											>
												<div
													className="bg-[var(--color-primary)] h-full"
													style={{
														width: `${skill.level}%`,
														transition:
															"width 0.7s",
													}}
												></div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						{/* Database Card */}
						<div
							data-aos="fade-up"
							data-aos-delay="400"
							data-aos-duration="700"
							data-slot="card"
							className="text-[var(--color-card-foreground)] flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm shadow-sm sm:shadow-none hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-500 hover:-translate-y-2 duration-700 ease-out opacity-100 translate-y-0"
							style={{ willChange: "auto" }}
						>
							<div
								data-slot="card-content"
								className="[&:last-child]:pb-6 p-4 sm:p-8 flex flex-col gap-6"
							>
								<div className="text-center flex flex-col gap-2 sm:gap-4">
									<div className="size-12 sm:size-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-palette sm:size-8 size-6"
											aria-hidden="true"
										>
											<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
											<circle
												cx="13.5"
												cy="6.5"
												r=".5"
												fill="currentColor"
											></circle>
											<circle
												cx="17.5"
												cy="10.5"
												r=".5"
												fill="currentColor"
											></circle>
											<circle
												cx="6.5"
												cy="12.5"
												r=".5"
												fill="currentColor"
											></circle>
											<circle
												cx="8.5"
												cy="7.5"
												r=".5"
												fill="currentColor"
											></circle>
										</svg>
									</div>
									<h3
										className="text-lg sm:text-xl font-semibold"
										style={{
											color: "var(--color-bgHeader)",
										}}
									>
										Database
									</h3>
									<div className="w-12 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto rounded-full"></div>
								</div>
								<div className="flex flex-col gap-3 sm:gap-4">
									{[
										{ name: "MySQL", level: 82 },
										{ name: "MongoDB", level: 80 },
									].map((skill, idx) => (
										<div
											key={skill.name}
											className="flex flex-col sm:gap-2 gap-1"
										>
											<div className="flex justify-between items-center">
												<span className="text-sm font-meditext-foreground/80">
													{skill.name}
												</span>{" "}
												<span className="text-xs text-foreground">
													{skill.level}%
												</span>
											</div>
											<div
												className="relative w-full overflow-hidden rounded-full h-1.5 sm:h-2 bg-[var(--color-muted)]/50"
												style={{
													animationDelay: `${
														400 + idx * 100
													}ms`,
												}}
											>
												<div
													className="bg-[var(--color-primary)] h-full"
													style={{
														width: `${skill.level}%`,
														transition:
															"width 0.7s",
													}}
												></div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					{/* Areas of Expertise */}
					<div className="flex flex-col gap-5 sm:gap-8 mt-8">
						<div className="text-center flex flex-col gap-2 sm:gap-4">
							<h3
								data-aos="fade-up"
								data-aos-delay="100"
								data-aos-duration="700"
								className="text-xl sm:text-2xl font-semibold"
								style={{ color: "var(--color-foreground)" }}
							>
								Areas of Expertise
							</h3>
							<p
								data-aos="fade-up"
								data-aos-delay="160"
								data-aos-duration="700"
								className="text-muted-foreground max-w-2xl mx-auto"
							>
								Specialized knowledge and experience in key
								areas of modern development
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
							{/* Example expertise cards */}
							<div
								data-aos="fade-up"
								data-aos-delay="240"
								data-aos-duration="700"
								data-slot="card"
								className="text-[var(--color-card-foreground)] flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all duration-300  ease-out opacity-100 translate-y-0"
								style={{ willChange: "auto" }}
							>
								<div
									data-slot="card-content"
									className="[&:last-child]:pb-6 p-4 sm:p-6 sm:!pb-6 !pb-4"
								>
									<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg sm:opacity-0 opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
									<div className="relative z-10 flex items-start gap-4">
										<div className="size-8 sm:size-12 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
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
												className="lucide lucide-globe size-4 sm:size-6"
												aria-hidden="true"
											>
												<circle
													cx="12"
													cy="12"
													r="10"
												></circle>
												<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
												<path d="M2 12h20"></path>
											</svg>
										</div>
										<div className="flex flex-col gap-1 sm:gap-2">
											<h4
												className="font-semibold"
												style={{
													color: "var(--color-primary)",
												}}
											>
												Web Development
											</h4>
											<p className="text-xs sm:text-sm text-[var(--color-muted-foreground)]">
												Modern, responsive web
												applications with optimal
												performance
											</p>
										</div>
									</div>
								</div>
							</div>
							<div
								data-aos="fade-up"
								data-aos-delay="320"
								data-aos-duration="700"
								data-slot="card"
								className="text-[var(--color-card-foreground)] flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all duration-300  ease-out opacity-100 translate-y-0"
								style={{ willChange: "auto" }}
							>
								<div
									data-slot="card-content"
									className="[&:last-child]:pb-6 p-4 sm:p-6 sm:!pb-6 !pb-4"
								>
									<div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg sm:opacity-0 opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
									<div className="relative z-10 flex items-start gap-4">
										<div className="size-8 sm:size-12 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
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
												className="lucide lucide-smartphone size-4 sm:size-6"
												aria-hidden="true"
											>
												<rect
													width="14"
													height="20"
													x="5"
													y="2"
													rx="2"
													ry="2"
												></rect>
												<path d="M12 18h.01"></path>
											</svg>
										</div>
										<div className="flex flex-col gap-1 sm:gap-2">
											<h4
												className="font-semibold"
												style={{
													color: "var(--color-primary)",
												}}
											>
												Mobile-First Design
											</h4>
											<p className="text-xs sm:text-sm text-[var(--color-muted-foreground)]">
												Creating seamless experiences
												across all device types
											</p>
										</div>
									</div>
								</div>
							</div>
							<div
								data-aos="fade-up"
								data-aos-delay="400"
								data-aos-duration="700"
								data-slot="card"
								className="text-[var(--color-card-foreground)] flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all duration-300  ease-out opacity-100 translate-y-0"
								style={{ willChange: "auto" }}
							>
								<div
									data-slot="card-content"
									className="[&:last-child]:pb-6 p-4 sm:p-6 sm:!pb-6 !pb-4"
								>
									<div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg sm:opacity-0 opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
									<div className="relative z-10 flex items-start gap-4">
										<div className="size-8 sm:size-12 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
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
												className="lucide lucide-zap size-4 sm:size-6"
												aria-hidden="true"
											>
												<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
											</svg>
										</div>
										<div className="flex flex-col gap-1 sm:gap-2">
											<h4
												className="font-semibold"
												style={{
													color: "var(--color-primary)",
												}}
											>
												Performance Optimization
											</h4>
											<p className="text-xs sm:text-sm text-[var(--color-muted-foreground)]">
												Lightning-fast applications with
												superior user experience
											</p>
										</div>
									</div>
								</div>
							</div>
							<div
								data-aos="fade-up"
								data-aos-delay="480"
								data-aos-duration="700"
								data-slot="card"
								className="text-[var(--color-card-foreground)] flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all duration-300 duration-700 ease-out opacity-100 translate-y-0"
								style={{ willChange: "auto" }}
							>
								<div
									data-slot="card-content"
									className="[&:last-child]:pb-6 p-4 sm:p-6 sm:!pb-6 !pb-4"
								>
									<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg sm:opacity-0 opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
									<div className="relative z-10 flex items-start gap-4">
										<div className="size-8 sm:size-12 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
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
												className="lucide lucide-award size-4 sm:size-6"
												aria-hidden="true"
											>
												<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
												<circle
													cx="12"
													cy="8"
													r="6"
												></circle>
											</svg>
										</div>
										<div className="flex flex-col gap-1 sm:gap-2">
											<h4
												className="font-semibold"
												style={{
													color: "var(--color-primary)",
												}}
											>
												Quality Assurance
											</h4>
											<p className="text-xs sm:text-sm text-[var(--color-muted-foreground)]">
												Rigorous testing and code
												quality standards
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Continuous Learning Card */}
					<div className="text-center mt-8">
						<div
							data-aos="fade-up"
							data-aos-delay="480"
							data-aos-duration="700"
							data-slot="card"
							className="text-[var(--color-card-foreground)] flex-col gap-6 rounded-lg inline-block border-0 bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm"
						>
							<div
								data-slot="card-content"
								className="[&:last-child]:pb-6 p-4 sm:p-6 sm:!pb-6 !pb-4"
							>
								<div className="flex items-center gap-4">
									<div className="size-8 sm:size-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg flex items-center justify-center">
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
											className="lucide lucide-trending-up size-4 sm:size-6"
											aria-hidden="true"
										>
											<path d="M16 7h6v6"></path>
											<path d="m22 7-8.5 8.5-5-5L2 17"></path>
										</svg>
									</div>
									<div className="text-left flex-1 flex flex-col gap-1 sm:gap-2">
										<div className="flex items-center gap-2">
											<div className="size-1.5 sm:size-2 bg-green-500 rounded-full animate-pulse"></div>
											<span
												className="text-sm font-medium"
												style={{
													color: "var(--color-primary)",
												}}
											>
												Continuous Learning
											</span>
										</div>
										<p
											className="text-sm"
											style={{
												color: "var(--color-text-textcolor)",
											}}
										>
											Always exploring new technologies,
											frameworks, and industry best
											practices
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
