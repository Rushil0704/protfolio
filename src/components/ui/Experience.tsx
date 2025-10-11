import React from "react";

const Experience = () => {
	return (
		// <section
		// 	id="experience"
		// 	className="sm:py-16 py-8 bg-gradient-to-b from-[var(--color-background)] to-[var(--color-muted)]/30 relative overflow-hidden"
		// 	style={{ backgroundColor: "var(--color-bgText)" }}
		// >
		<section
			id="experience"
			className="sm:py-16 py-8 relative overflow-hidden"
			style={{ backgroundColor: "var(--color-bgc-bgSelect)" }}
		>
			{/* Background gradients */}
			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(circle at 25% 25%, var(--color-primary)/0.05, transparent 50%)",
				}}
			></div>
			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(circle at 75% 75%, var(--color-accent)/0.05, transparent 50%)",
				}}
			></div>
			<div className="container relative z-10 flex flex-col gap-12 sm:gap-16">
				<div className="text-center flex flex-col gap-4 sm:gap-6">
					<div
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
							className="lucide lucide-building w-4 h-4 text-[var(--color-primary)]"
							aria-hidden="true"
						>
							<path d="M12 10h.01"></path>
							<path d="M12 14h.01"></path>
							<path d="M12 6h.01"></path>
							<path d="M16 10h.01"></path>
							<path d="M16 14h.01"></path>
							<path d="M16 6h.01"></path>
							<path d="M8 10h.01"></path>
							<path d="M8 14h.01"></path>
							<path d="M8 6h.01"></path>
							<path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
							<rect
								x="4"
								y="2"
								width="16"
								height="20"
								rx="2"
							></rect>
						</svg>
						<span className="text-xs sm:text-sm font-medium text-[var(--color-foreground)]/80">
							Professional Experience
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
							Work & Learning Journey
						</h2>
						<p
							data-aos="fade-up"
							data-aos-delay="300"
							data-aos-duration="700"
							className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed sm:text-center text-start transition-all duration-700 ease-out opacity-100 translate-y-0"
							style={{ willChange: "auto" }}
						>
							Professional experience, internships, and continuous
							learning through workshops and certifications.
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-10 sm:gap-16">
					{/* Professional Experience Timeline */}
					<div className="flex flex-col gap-4 sm:gap-8">
						<h3
							data-aos="fade-up"
							data-aos-delay="240"
							data-aos-duration="700"
							className="text-xl sm:text-2xl font-semibold  flex items-center gap-3 "
							style={{ color: "var(--color-foreground)" }}
						>
							<div className="size-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg flex items-center justify-center">
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
									className="lucide lucide-building size-4 text-[var(--color-primary-foreground)]"
									aria-hidden="true"
								>
									<path d="M12 10h.01"></path>
									<path d="M12 14h.01"></path>
									<path d="M12 6h.01"></path>
									<path d="M16 10h.01"></path>
									<path d="M16 14h.01"></path>
									<path d="M16 6h.01"></path>
									<path d="M8 10h.01"></path>
									<path d="M8 14h.01"></path>
									<path d="M8 6h.01"></path>
									<path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
									<rect
										x="4"
										y="2"
										width="16"
										height="20"
										rx="2"
									></rect>
								</svg>
							</div>
							Professional Experience
						</h3>
						<div className="relative">
							<div
								data-aos="fade-right"
								data-aos-delay="320"
								data-aos-duration="700"
								className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)]/20"
							></div>
							<div className="flex flex-col gap-8">
								<div
									data-aos="fade-right"
									data-aos-delay="380"
									data-aos-duration="700"
									className="relative transition-all duration-700 ease-out opacity-100 translate-x-0"
									style={{ willChange: "auto" }}
								>
									<div className="absolute left-[9px] sm:left-[25px] top-7 sm:top-10 w-4 h-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full border-4 border-[var(--color-background)] shadow-lg">
										<div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full animate-pulse"></div>
									</div>
									<div className="ml-8 sm:ml-16">
										<div
											data-aos="fade-right"
											data-aos-delay="440"
											data-aos-duration="700"
											data-slot="card"
											className="text-[var(--color-card-foreground)] flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-500 hover:-translate-y-1"
										>
											<div
												data-slot="card-content"
												className="[&:last-child]:pb-6 p-5 sm:p-8"
											>
												<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg opacity-30 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
												<div className="relative z-10 flex flex-col gap-4 sm:gap-6">
													<div className="flex flex-col gap-2 sm:gap-4">
														<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
															<div className="flex flex-col gap-1 sm:gap-2">
																<h4
																	className="text-xl font-semibold"
																	style={{
																		color: "var(--color-foreground)",
																	}}
																>
																	MERN Stack
																	Developer
																	Intern
																</h4>
																<p className="text-lg text-[var(--color-primary)] font-medium">
																	D.B.Codder
																</p>
															</div>
															<div className="flex flex-col sm:items-end gap-2">
																<span
																	data-slot="badge"
																	className="inline-flex items-center justify-center rounded-md border text-xs font-medium w-fit whitespace-nowrap shrink-0 px-3 py-1 transition-[color,box-shadow] overflow-hidden border-transparent"
																	style={{
																		backgroundColor:
																			"var(--color-primary)",
																		color: "var(--color-primary-foreground)",
																	}}
																>
																	Internship
																</span>
																<div className="flex items-center gap-2">
																	<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
																	<span className="text-sm text-muted-foreground font-medium">
																		Currently
																		Active
																	</span>
																</div>
															</div>
														</div>
														<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-[var(--color-muted-foreground)]">
															<div className="flex items-center gap-2 text-foreground">
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
																	className="lucide lucide-calendar w-4 h-4"
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
																Feb 2025 –
																Present
															</div>
															<div className="flex items-center gap-2 text-foreground">
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
																	className="lucide lucide-map-pin w-4 h-4"
																	aria-hidden="true"
																>
																	<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
																	<circle
																		cx="12"
																		cy="10"
																		r="3"
																	></circle>
																</svg>
																Ahmedabad
															</div>
														</div>
													</div>
													<div className="flex flex-col gap-3">
														<h5
															className="font-medium "
															style={{
																color: "var(--color-foreground)",
															}}
														>
															Key
															Responsibilities:
														</h5>
														<ul className="flex flex-col gap-2">
															<li className="flex items-start gap-3 text-foreground ">
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
																	className="lucide lucide-star w-4 h-4 mt-0.5 flex-shrink-0"
																	aria-hidden="true"
																>
																	<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
																</svg>
																<span className="text-sm leading-relaxed">
																	Built and
																	deployed
																	full-stack
																	web
																	applications
																	using
																	React.js,
																	Node.js,
																	Express.js,
																	and MongoDB
																</span>
															</li>
															<li className="flex items-start gap-3 text-[var(--color-muted-foreground)]">
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
																	className="lucide lucide-star w-4 h-4 mt-0.5 flex-shrink-0"
																	aria-hidden="true"
																>
																	<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
																</svg>
																<span className="text-sm leading-relaxed text-foreground">
																	Collaborated
																	with senior
																	developers
																	to write
																	reusable
																	code, debug
																	issues, and
																	participate
																	in code
																	reviews
																</span>
															</li>
															<li className="flex items-start gap-3 text-[var(--color-muted-foreground)]">
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
																	className="lucide lucide-star w-4 h-4 mt-0.5 flex-shrink-0"
																	aria-hidden="true"
																>
																	<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
																</svg>
																<span className="text-sm leading-relaxed text-foreground">
																	Integrated
																	REST APIs
																	and
																	implemented
																	authentication
																	using JWT
																	and bcrypt
																</span>
															</li>
															<li className="flex items-start gap-3 text-[var(--color-muted-foreground)]">
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
																	className="lucide lucide-star w-4 h-4 mt-0.5 flex-shrink-0"
																	aria-hidden="true"
																>
																	<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
																</svg>
																<span className="text-sm leading-relaxed text-foreground">
																	Gained
																	hands-on
																	experience
																	in agile
																	workflows
																	and
																	Git-based
																	version
																	control
																</span>
															</li>
														</ul>
													</div>
													<div className="flex flex-col gap-2 sm:gap-3">
														<h5 className="font-medium text-[var(--color-foreground)]">
															Technologies Used:
														</h5>
														<div className="flex flex-wrap gap-1 sm:gap-2">
															{[
																"HTML5",
																"CSS3",
																"JavaScript(ES6+)",
																"TypeScript",
																"Tailwind CSS",
																"React.js",
																"React Router",
																"Responsive UI/UX Design",
																"Node.js",
																"Express.js",
																"Resetful API Development",
																"Middleware Development",
																"MongoDB",
																"Database Schema Design",
																"AWS s3 / Tebi s3",
																"JWT Authentication",
																"Git & GitHub",
																"Deployment (Vercel,Netlify,Render)",
															].map((tech, i) => (
																<span
																	key={tech}
																	data-slot="badge"
																	className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-[var(--color-ring)] focus-visible:ring-[var(--color-ring)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--color-destructive)]/20 dark:aria-invalid:ring-[var(--color-destructive)]/40 aria-invalid:border-[var(--color-destructive)] overflow-hidden text-[var(--color-secondary-foreground)] [a&]:hover:bg-[var(--color-secondary)]/90 px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-[var(--color-muted)]/80 to-[var(--color-muted)]/60 hover:from-[var(--color-primary)]/20 hover:to-[var(--color-accent)]/20 border border-[var(--color-border)]/20 hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/10"
																	style={{
																		animationDelay: `${
																			i *
																			50
																		}ms`,
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
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Workshops & Certifications */}
				</div>
			</div>
		</section>
	);
};

export default Experience;
