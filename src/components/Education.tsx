import React from "react";

const Education = () => {
	return (
		// <section
		// 	id="education"
		// 	className="sm:py-16 py-8 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
		// 	style={{ backgroundColor: "var(--color-bgText)" }}
		// >
		<section
			id="education"
			className="sm:py-16 py-8 relative overflow-hidden"
			style={{ backgroundColor: "var(--color-bgc-bgSelect)" }}
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,theme(colors.primary/0.05),transparent_50%)]"></div>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,theme(colors.accent/0.05),transparent_50%)]"></div>
			<div className="container relative z-10 flex flex-col gap-12 sm:gap-16">
				<div className="text-center flex flex-col gap-4 sm:gap-6">
					<div
						className="inline-flex items-center gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-full border border-[var(--color-primary)]/20 w-fit sm:mx-auto transition-all duration-700 ease-out opacity-100 translate-y-0"
						data-aos="fade-up"
						style={{ willChange: "auto" }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							className="lucide lucide-graduation-cap w-4 h-4 text-primary"
							aria-hidden="true"
						>
							<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
							<path d="M22 10v6"></path>
							<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
						</svg>
						<span className="text-xs sm:text-sm font-medium text-foreground/80">
							Academic Journey
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<h2
							className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[var(--color-foreground)] via-[var(--color-primary)] to-[var(--color-foreground)] bg-clip-text text-transparent pb-2 sm:text-center text-start transition-all duration-700 ease-out opacity-100 translate-y-0"
							data-aos="fade-up"
							data-aos-delay="200"
							style={{ willChange: "auto" }}
						>
							Educational Background
						</h2>
						<p
							className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed sm:text-center text-start transition-all duration-700 ease-out opacity-100 translate-y-0"
							data-aos="fade-up"
							data-aos-delay="400"
							style={{ willChange: "auto" }}
						>
							A comprehensive educational journey spanning from
							foundational learning to advanced computer
							applications.
						</p>
					</div>
				</div>
				<div className="flex flex-col sm:gap-16 gap-8">
					<div className="relative">
						<div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)]/20"></div>
						<div className="flex flex-col gap-4 sm:gap-8">
							<div
								className="relative transition-all duration-700 ease-out opacity-100 translate-x-0"
								data-aos="fade-right"
								data-aos-delay="0"
								style={{ willChange: "auto" }}
							>
								<div className="absolute left-[9px] sm:left-[25px] top-7 sm:top-10 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-lg hidden sm:block">
									<div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
								</div>
								<div className="sm:ml-16">
									<div
										data-slot="card"
										className="text-card-foreground flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1"
									>
										<div
											data-slot="card-content"
											className="[&amp;:last-child]:pb-6 p-5 sm:p-8"
										>
											<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg opacity-30 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
											<div className="relative z-10 flex flex-col gap-4 sm:gap-6">
												<div className="flex flex-col gap-2 sm:gap-4">
													<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 sm:gap-4">
														<div className="flex flex-col gap-1 sm:gap-2">
															<h3
																className="text-xl font-semibold "
																style={{
																	color: "var(--color-foreground)",
																}}
															>
																Master of
																Computer
																Applications
															</h3>
															<p
																className=" text-lg font-medium"
																style={{
																	color: "var(--color-primary)",
																}}
															>
																Lokmanya College
															</p>
															<p className="text-sm text-foreground">
																Gujarat
																Technological
																University
															</p>
														</div>
														<div className="flex flex-col lg:items-end gap-1.5 sm:gap-3">
															<span
																data-slot="badge"
																className="inline-flex items-center justify-center rounded-md border text-xs font-medium w-fit whitespace-nowrap shrink-0 px-3 py-1 transition-[color,box-shadow] overflow-hidden border-transparent"
																style={{
																	color: "var(--color-primary-foreground)",
																	backgroundColor:
																		"var(--color-primary)",
																}}
															>
																In Progress
															</span>
															<div className="flex items-center gap-2">
																<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
																<span className="text-sm text-muted-foreground font-medium">
																	Currently
																	Studying
																</span>
															</div>
														</div>
													</div>
													<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 text-sm">
														<div className="flex items-center gap-2 text-foreground">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
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
															Currently pursuing
															(1st Semester)
														</div>
														<div className="flex items-center gap-2 text-foreground">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
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
														<div className="flex items-center gap-2 text-foreground">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
																className="lucide lucide-trending-up w-4 h-4"
																aria-hidden="true"
															>
																<path d="M16 7h6v6"></path>
																<path d="m22 7-8.5 8.5-5-5L2 17"></path>
															</svg>
															Expected 2027
														</div>
													</div>
												</div>
												<p className="text-foreground leading-relaxed">
													Advanced studies in computer
													applications focusing on
													modern software development,
													system design, and emerging
													technologies.
												</p>
												<div className="flex flex-col gap-2 sm:gap-3">
													<h4
														className="font-medium  flex items-center gap-2"
														style={{
															color: "var(--color-foreground)",
														}}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															stroke-width="2"
															stroke-linecap="round"
															stroke-linejoin="round"
															className="lucide lucide-book-open w-4 h-4"
															aria-hidden="true"
														>
															<path d="M12 7v14"></path>
															<path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
														</svg>
														Key Focus Areas:
													</h4>
													<div className="flex flex-wrap gap-1 sm:gap-2">
														<span
															data-slot="badge"
															className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-[var(--color-ring)] focus-visible:ring-[var(--color-ring)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--color-destructive)]/20 dark:aria-invalid:ring-[var(--color-destructive)]/40 aria-invalid:border-[var(--color-destructive)] overflow-hidden text-[var(--color-secondary-foreground)] [a&]:hover:bg-[var(--color-secondary)]/90 px-2 sm:px-3 py-1 sm:py-1 bg-gradient-to-r from-[var(--color-muted)]/80 to-[var(--color-muted)]/60 hover:from-[var(--color-primary)]/20 hover:to-[var(--color-accent)]/20 border border-[var(--color-border)]/20 hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/10"
															style={{
																animationDelay:
																	"0ms",
																backgroundColor:
																	"var(--color-bgc-bgSelect)",
																color: "var(--color-primary)",
															}}
														>
															Advanced Programming
														</span>
														<span
															data-slot="badge"
															className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-[var(--color-ring)] focus-visible:ring-[var(--color-ring)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--color-destructive)]/20 dark:aria-invalid:ring-[var(--color-destructive)]/40 aria-invalid:border-[var(--color-destructive)] overflow-hidden text-[var(--color-secondary-foreground)] [a&]:hover:bg-[var(--color-secondary)]/90 px-2 sm:px-3 py-1 sm:py-1 bg-gradient-to-r from-[var(--color-muted)]/80 to-[var(--color-muted)]/60 hover:from-[var(--color-primary)]/20 hover:to-[var(--color-accent)]/20 border border-[var(--color-border)]/20 hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/10"
															style={{
																animationDelay:
																	"0ms",
																backgroundColor:
																	"var(--color-bgc-bgSelect)",
																color: "var(--color-primary)",
															}}
														>
															System Design
														</span>
														<span
															data-slot="badge"
															className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-[var(--color-ring)] focus-visible:ring-[var(--color-ring)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--color-destructive)]/20 dark:aria-invalid:ring-[var(--color-destructive)]/40 aria-invalid:border-[var(--color-destructive)] overflow-hidden text-[var(--color-secondary-foreground)] [a&]:hover:bg-[var(--color-secondary)]/90 px-2 sm:px-3 py-1 sm:py-1 bg-gradient-to-r from-[var(--color-muted)]/80 to-[var(--color-muted)]/60 hover:from-[var(--color-primary)]/20 hover:to-[var(--color-accent)]/20 border border-[var(--color-border)]/20 hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/10"
															style={{
																animationDelay:
																	"0ms",
																backgroundColor:
																	"var(--color-bgc-bgSelect)",
																color: "var(--color-primary)",
															}}
														>
															Modern Development
															Practices
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className="relative transition-all duration-700 ease-out opacity-100 translate-x-0"
								data-aos="fade-right"
								data-aos-delay="200"
								style={{ willChange: "auto" }}
							>
								<div className="absolute left-[9px] sm:left-[25px] top-7 sm:top-10 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-lg hidden sm:block"></div>
								<div className="sm:ml-16">
									<div
										data-slot="card"
										className="text-card-foreground flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1"
									>
										<div
											data-slot="card-content"
											className="[&amp;:last-child]:pb-6 p-5 sm:p-8"
										>
											<div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg opacity-30 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
											<div className="relative z-10 flex flex-col gap-4 sm:gap-6">
												<div className="flex flex-col gap-2 sm:gap-4">
													<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 sm:gap-4">
														<div className="flex flex-col gap-1 sm:gap-2">
															<h3
																className="text-xl font-semibold text-foreground"
																style={{
																	color: "var(--color-foreground)",
																}}
															>
																Bachelor of
																Computer
																Applications
															</h3>
															<p
																className="text-lg  font-medium"
																style={{
																	color: "var(--color-primary)",
																}}
															>
																Asia Pacific BCA
																College
															</p>
															<p className="text-sm text-foreground">
																Gujarat
																University
															</p>
														</div>
														<div className="flex flex-col lg:items-end gap-1.5 sm:gap-3">
															<span
																data-slot="badge"
																className="inline-flex items-center justify-center rounded-md border text-xs font-medium w-fit whitespace-nowrap shrink-0 px-3 py-1 transition-[color,box-shadow] overflow-hidden border-transparent"
																style={{
																	backgroundColor:
																		"var(--color-bgc-select)", // lighter color variable
																	color: "var(--color-primary-foreground)",
																}}
															>
																Completed
															</span>
														</div>
													</div>
													<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 text-sm">
														<div className="flex items-center gap-2 text-foreground">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
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
															Completed April 2025
														</div>
														<div className="flex items-center gap-2 text-foreground">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
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
														<div className="flex items-center gap-2 text-foreground">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
																className="lucide lucide-award w-4 h-4"
																aria-hidden="true"
															>
																<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
																<circle
																	cx="12"
																	cy="8"
																	r="6"
																></circle>
															</svg>
															CGPA: 7.6/10.0
														</div>
													</div>
												</div>
												<p className="text-foreground leading-relaxed">
													Comprehensive study of
													computer applications,
													programming languages,
													database systems, and
													software engineering
													principles.
												</p>
												<div className="flex flex-col gap-2 sm:gap-3">
													<h4
														className="font-medium  flex items-center gap-2"
														style={{
															color: "var(--color-foreground)",
														}}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															stroke-width="2"
															stroke-linecap="round"
															stroke-linejoin="round"
															className="lucide lucide-book-open w-4 h-4"
															aria-hidden="true"
														>
															<path d="M12 7v14"></path>
															<path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
														</svg>
														Key Focus Areas:
													</h4>
													<div className="flex flex-wrap gap-1 sm:gap-2">
														<span
															data-slot="badge"
															className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-secondary-foreground [a&amp;]:hover:bg-secondary/90 px-3 py-1 bg-gradient-to-r from-muted/80 to-muted/60 hover:from-primary/20 hover:to-accent/20 border border-border/20 hover:border-primary/30 transition-all duration-300"
															style={{
																color: "var(--color-bgc-select)",
															}}
														>
															Software Engineering
														</span>
														<span
															data-slot="badge"
															className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-secondary-foreground [a&amp;]:hover:bg-secondary/90 px-3 py-1 bg-gradient-to-r from-muted/80 to-muted/60 hover:from-primary/20 hover:to-accent/20 border border-border/20 hover:border-primary/30 transition-all duration-300"
															style={{
																color: "var(--color-bgc-select)",
															}}
														>
															Database Management
														</span>
														<span
															data-slot="badge"
															className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-secondary-foreground [a&amp;]:hover:bg-secondary/90 px-3 py-1 bg-gradient-to-r from-muted/80 to-muted/60 hover:from-primary/20 hover:to-accent/20 border border-border/20 hover:border-primary/30 transition-all duration-300"
															style={{
																color: "var(--color-bgc-select)",
															}}
														>
															Web Development
														</span>
														<span
															data-slot="badge"
															className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-secondary-foreground [a&amp;]:hover:bg-secondary/90 px-3 py-1 bg-gradient-to-r from-muted/80 to-muted/60 hover:from-primary/20 hover:to-accent/20 border border-border/20 hover:border-primary/30 transition-all duration-300"
															style={{
																color: "var(--color-bgc-select)",
															}}
														>
															Data Structures
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className="relative transition-all duration-700 ease-out opacity-100 translate-x-0"
								data-aos="fade-right"
								data-aos-delay="400"
								style={{ willChange: "auto" }}
							>
								<div className="absolute left-[9px] sm:left-[25px] top-7 sm:top-10 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-lg hidden sm:block"></div>
								<div className="sm:ml-16">
									<div
										data-slot="card"
										className="text-card-foreground flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1"
									>
										<div
											data-slot="card-content"
											className="[&amp;:last-child]:pb-6 p-5 sm:p-8"
										>
											<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-30 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
											<div className="relative z-10 flex flex-col gap-4 sm:gap-6">
												<div className="flex flex-col gap-2 sm:gap-4">
													<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 sm:gap-4">
														<div className="flex flex-col gap-1 sm:gap-2">
															<h3
																className="text-xl font-semibold "
																style={{
																	color: "var(--color-foreground)",
																}}
															>
																Higher Secondary
																Certificate
																(H.S.C.)
															</h3>
															<p className="text-sm text-foreground">
																Stream: Commerce
															</p>
															<p
																className="text-lg  font-medium"
																style={{
																	color: "var(--color-primary)",
																}}
															>
																New Best English
																School
															</p>
															<p className="text-sm text-foreground">
																Gujarat
																Secondary and
																Higher Secondary
																Education Board
																(G.S.&amp;H.S.E.B.)
															</p>
														</div>
														<div className="flex flex-col lg:items-end gap-1.5 sm:gap-3">
															<span
																data-slot="badge"
																className="inline-flex items-center justify-center rounded-md border text-xs font-medium w-fit whitespace-nowrap shrink-0 px-3 py-1 transition-[color,box-shadow] overflow-hidden border-transparent"
																style={{
																	backgroundColor:
																		"var(--color-bgc-select)", // lighter color variable
																	color: "var(--color-primary-foreground)",
																}}
															>
																Completed
															</span>
														</div>
													</div>
													<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 text-sm">
														<div className="flex items-center gap-2 text-foreground">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
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
															Completed May 2021
														</div>
														<div className="flex items-center gap-2 text-foreground">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
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
															Dhoraji
														</div>
														<div className="flex items-center gap-2 text-foreground">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
																className="lucide lucide-award w-4 h-4"
																aria-hidden="true"
															>
																<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
																<circle
																	cx="12"
																	cy="8"
																	r="6"
																></circle>
															</svg>
															76.57%
														</div>
													</div>
												</div>
												<p className="text-foreground leading-relaxed">
													Higher secondary education
													with commerce stream,
													building foundation in
													business studies and
													analytical thinking.
												</p>
												<div className="flex flex-col gap-2 sm:gap-3">
													<h4
														className="font-medium  flex items-center gap-2"
														style={{
															color: "var(--color-foreground)",
														}}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															stroke-width="2"
															stroke-linecap="round"
															stroke-linejoin="round"
															className="lucide lucide-book-open w-4 h-4"
															aria-hidden="true"
														>
															<path d="M12 7v14"></path>
															<path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
														</svg>
														Key Focus Areas:
													</h4>
													<div className="flex flex-wrap gap-1 sm:gap-2">
														<span
															data-slot="badge"
															className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-secondary-foreground [a&amp;]:hover:bg-secondary/90 px-3 py-1 bg-gradient-to-r from-muted/80 to-muted/60 hover:from-primary/20 hover:to-accent/20 border border-border/20 hover:border-primary/30 transition-all duration-300"
															style={{
																color: "var(--color-bgc-select)",
															}}
														>
															Business Studies
														</span>
														<span
															data-slot="badge"
															className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-secondary-foreground [a&amp;]:hover:bg-secondary/90 px-3 py-1 bg-gradient-to-r from-muted/80 to-muted/60 hover:from-primary/20 hover:to-accent/20 border border-border/20 hover:border-primary/30 transition-all duration-300"
															style={{
																color: "var(--color-bgc-select)",
															}}
														>
															Economics
														</span>
														<span
															data-slot="badge"
															className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-secondary-foreground [a&amp;]:hover:bg-secondary/90 px-3 py-1 bg-gradient-to-r from-muted/80 to-muted/60 hover:from-primary/20 hover:to-accent/20 border border-border/20 hover:border-primary/30 transition-all duration-300"
															style={{
																color: "var(--color-bgc-select)",
															}}
														>
															Mathematics
														</span>
														<span
															data-slot="badge"
															className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-secondary-foreground [a&amp;]:hover:bg-secondary/90 px-3 py-1 bg-gradient-to-r from-muted/80 to-muted/60 hover:from-primary/20 hover:to-accent/20 border border-border/20 hover:border-primary/30 transition-all duration-300"
															style={{
																color: "var(--color-bgc-select)",
															}}
														>
															Analytical Thinking
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className="relative transition-all duration-700 ease-out opacity-100 translate-x-0"
								data-aos="fade-right"
								data-aos-delay="600"
								style={{ willChange: "auto" }}
							>
								<div className="absolute left-[9px] sm:left-[25px] top-7 sm:top-10 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-lg hidden sm:block"></div>
								<div className="sm:ml-16">
									<div
										data-slot="card"
										className="text-card-foreground flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1"
									>
										<div
											data-slot="card-content"
											className="[&amp;:last-child]:pb-6 p-5 sm:p-8"
										>
											<div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg opacity-30 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
											<div className="relative z-10 flex flex-col gap-4 sm:gap-6">
												<div className="flex flex-col gap-2 sm:gap-4">
													<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 sm:gap-4">
														<div className="flex flex-col gap-1 sm:gap-2">
															<h3
																className="text-xl font-semibold"
																style={{
																	color: "var(--color-foreground)",
																}}
															>
																Secondary School
																Certificate
																(S.S.C.)
															</h3>
															<p
																className="text-lg  font-medium"
																style={{
																	color: "var(--color-primary)",
																}}
															>
																New Best English
																School
															</p>
															<p className="text-sm text-foreground">
																Gujarat
																Secondary and
																Higher Secondary
																Education Board
																(G.S.&amp;H.S.E.B.)
															</p>
														</div>
														<div className="flex flex-col lg:items-end gap-1.5 sm:gap-3">
															<span
																data-slot="badge"
																className="inline-flex items-center justify-center rounded-md border text-xs font-medium w-fit whitespace-nowrap shrink-0 px-3 py-1 transition-[color,box-shadow] overflow-hidden border-transparent"
																style={{
																	backgroundColor:
																		"var(--color-bgc-select)", // lighter color variable
																	color: "var(--color-primary-foreground)",
																}}
															>
																Completed
															</span>
														</div>
													</div>
													<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 text-sm">
														<div className="flex items-center gap-2 text-foreground">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
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
															Completed March 2019
														</div>
														<div className="flex items-center gap-2 text-foreground">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
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
															Dhoraji
														</div>
														<div className="flex items-center gap-2 text-foreground">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
																className="lucide lucide-award w-4 h-4"
																aria-hidden="true"
															>
																<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
																<circle
																	cx="12"
																	cy="8"
																	r="6"
																></circle>
															</svg>
															73.57%
														</div>
													</div>
												</div>
												<p className="text-foreground leading-relaxed">
													Strong foundation in core
													subjects with excellent
													academic performance and
													leadership skills
													development.
												</p>
												<div className="flex flex-col gap-2 sm:gap-3">
													<h4
														className="font-medium  flex items-center gap-2"
														style={{
															color: "var(--color-foreground)",
														}}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															stroke-width="2"
															stroke-linecap="round"
															stroke-linejoin="round"
															className="lucide lucide-book-open w-4 h-4"
															aria-hidden="true"
														>
															<path d="M12 7v14"></path>
															<path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
														</svg>
														Key Focus Areas:
													</h4>
													<div className="flex flex-wrap gap-1 sm:gap-2">
														<span
															data-slot="badge"
															className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-secondary-foreground [a&amp;]:hover:bg-secondary/90 px-3 py-1 bg-gradient-to-r from-muted/80 to-muted/60 hover:from-primary/20 hover:to-accent/20 border border-border/20 hover:border-primary/30 transition-all duration-300"
															style={{
																color: "var(--color-foreground)",
															}}
														>
															Academic Excellence
														</span>
														<span
															data-slot="badge"
															className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-secondary-foreground [a&amp;]:hover:bg-secondary/90 px-3 py-1 bg-gradient-to-r from-muted/80 to-muted/60 hover:from-primary/20 hover:to-accent/20 border border-border/20 hover:border-primary/30 transition-all duration-300"
															style={{
																color: "var(--color-bgc-select)",
															}}
														>
															Leadership Skills
														</span>
														<span
															data-slot="badge"
															className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-secondary-foreground [a&amp;]:hover:bg-secondary/90 px-3 py-1 bg-gradient-to-r from-muted/80 to-muted/60 hover:from-primary/20 hover:to-accent/20 border border-border/20 hover:border-primary/30 transition-all duration-300"
															style={{
																color: "var(--color-bgc-select)",
															}}
														>
															Foundation Building
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center">
						<div
							data-aos="fade-up"
							data-aos-delay="500"
							data-aos-duration="700"
							data-slot="card"
							className="text-card-foreground flex-col gap-6 rounded-lg inline-block border-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm max-w-2xl"
						>
							<div
								data-slot="card-content"
								className="[&amp;:last-child]:pb-6 p-4 sm:p-8 !pb-4 sm:!pb-8"
								// style={{
								// 	backgroundColor:
								// 		"var(--color-primary-tabbg)",
								// }}
							>
								<div className="flex flex-col gap-3 sm:gap-4">
									<div className="size-10 sm:size-16 mx-auto bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] hover:from-[var(--color-primary)]/90 hover:to-[var(--color-accent)]/90  shadow-lg shadow-[var(--color-accent)]/25 transition-all hover:shadow-xl hover:shadow-[var(--color-accent)]/35 rounded-2xl flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-graduation-cap size-5 sm:size-8 text-primary-foreground"
											aria-hidden="true"
										>
											<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
											<path d="M22 10v6"></path>
											<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
										</svg>
									</div>
									<h4
										className="text-base sm:text-lg font-semibold"
										style={{
											color: "var(--color-foreground)",
										}}
									>
										Academic Excellence
									</h4>
									<p className="text-foreground leading-relaxed">
										Consistent academic performance with
										strong foundation in computer science
										fundamentals, currently advancing
										knowledge through Master's program while
										gaining practical industry experience.
									</p>
									<div className="flex justify-center items-center gap-3 sm:gap-6 sm:pt-4">
										<div className="text-center">
											<div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
												7.6
											</div>
											<div
												className="text-[10px] sm:text-xs text-foreground uppercase tracking-wider"
												style={{
													color: "var(--color-primary)",
												}}
											>
												BCA CGPA
											</div>
										</div>
										<div className="w-px h-8 bg-border"></div>
										<div className="text-center">
											<div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
												85%+
											</div>
											<div
												className="text-[10px] sm:text-xs text-foreground uppercase tracking-wider"
												style={{
													color: "var(--color-primary)",
												}}
											>
												School Performance
											</div>
										</div>
										<div className="w-px h-8 bg-border"></div>
										<div className="text-center">
											<div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
												MCA
											</div>
											<div
												className="text-[10px] sm:text-xs text-foreground uppercase tracking-wider"
												style={{
													color: "var(--color-primary)",
												}}
											>
												In Progress
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
