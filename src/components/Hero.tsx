import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
	return (
		<section
			id="home"
			className=" sm:py-16 py-8 min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 relative"
			// style={{
			// 	backgroundColor: "var(--color-bgc-select)",
			// 	color: "var(--color-text)",
			// }}

			style={{ backgroundColor: "var(--color-bgc-bgSelect)" }}
		>
			<div className="absolute inset-0 overflow-hidden">
				<img
					alt="Developer workspace background"
					className="w-full h-full object-cover min-w-0"
					src="https://plus.unsplash.com/premium_photo-1663050681752-4c95effcca58?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				/>
				<div className="absolute inset-0 bg-background/90"></div>
				<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
			</div>
			<div className="container py-10 sm:py-20 relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center flex-1">
				<div className="flex flex-col gap-8 sm:gap-10 z-20">
					<div className="flex flex-col gap-4 sm:gap-6">
						<div className="flex flex-col gap-4">
							<h1
								data-aos="fade-up"
								data-aos-delay="100"
								data-aos-duration="700"
								data-aos-easing="ease-in-out"
								className="opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none"
							>
								<span
									style={{
										color: "var(--color-primary)",
										fontWeight: 700,
									}}
								>
									Hi, I'm{" "}
									<span
										data-aos="zoom-in"
										data-aos-delay="400"
										className="animated-gradient-text inline-block"
										style={{
											fontWeight: 700,
											background: `
                    linear-gradient(
                        90deg,
                        var(--color-primary) 0%,
                        var(--color-accent) 50%,
                        var(--color-primary) 100%
                    )
                `,
											backgroundSize: "300% auto",
											backgroundClip: "text",
											WebkitBackgroundClip: "text",
											color: "transparent",
											WebkitTextFillColor: "transparent",
											animation:
												"gradient-move 4.5s linear infinite",
										}}
									>
										Rushil
									</span>
								</span>
							</h1>

							<h2
								data-aos="fade-up"
								data-aos-delay="1000"
								data-aos-duration="700"
								data-aos-easing="ease-in-out"
								className="opacity-0 text-xl sm:text-2xl md:text-3xl font-medium"
								style={{
									color: "var(--color-muted-foreground)",
								}}
							>
								MERN Stack Developer & Computer Applications
								Student
							</h2>
						</div>
						<div
							data-aos="fade-right" // fade in from left
							data-aos-delay="1300" // delay after h1 & h2
							data-aos-duration="700" // animation duration
							data-aos-easing="ease-in-out"
							className="flex items-center gap-1 sm:gap-2 opacity-0" // start hidden
							style={{
								color: "var(--color-muted-foreground)",
							}}
						>
							{/* Lucide MapPin icon */}
							<span style={{ display: "flex" }}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="var(--color-primary)"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-map-pin"
									aria-hidden="true"
								>
									<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
									<circle cx="12" cy="10" r="3"></circle>
								</svg>
							</span>
							<span>Based in Ahmedabad, Gujarat</span>
						</div>
					</div>
					<p
						data-aos="fade-up" // fade-up from bottom
						data-aos-delay="1600" // delay after previous elements (h1, h2, location)
						data-aos-duration="700"
						data-aos-easing="ease-in-out"
						className="text-base sm:text-lg max-w-2xl leading-relaxed opacity-0"
						style={{
							color: "var(--color-muted-foreground)",
						}}
					>
						MERN Stack Developer with 6+ months of hands-on
						experience building full stack web applications.
						Passionate about writing clean, maintainable code and
						delivering scalable solutions in agile environments.
					</p>

					<div
						data-aos="fade-up" // fade-up from bottom
						data-aos-delay="1800" // slightly after paragraph
						data-aos-duration="700"
						data-aos-easing="ease-in-out"
						className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0"
						style={{ willChange: "auto" }}
					>
						<Button
							className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap text-xs sm:text-sm font-medium h-10 rounded-md px-6 has-[>svg]:px-4 group shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 relative overflow-hidden"
							style={{
								background: "var(--color-primary)",
								color: "var(--color-primary-foreground)",
								boxShadow: "0 4px 24px 0 var(--color-primary)",
							}}
						>
							<span className="relative z-10">View My Work</span>
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
								className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10"
								aria-hidden="true"
							>
								<path d="M5 12h14"></path>
								<path d="m12 5 7 7-7 7"></path>
							</svg>
						</Button>
						<Button
							className="inline-flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap text-xs sm:text-sm font-medium h-10 rounded-md px-6 border-2 transition-all duration-300 hover:-translate-y-0.5"
							style={{
								backgroundColor: "var(--color-bgc-bgSelect)",
								color: "var(--color-primary)",
								borderColor: "var(--color-primary)",
							}}
						>
							Let's Talk
						</Button>
					</div>
				</div>
				<div
					className="flex justify-center"
					data-aos="fade-left" // slide from right to left
					data-aos-delay="2000" // after all text animations
					data-aos-duration="700"
					data-aos-easing="ease-in-out"
				>
					<div className="relative w-full sm:w-[500px] h-[300px] sm:h-[500px] max-w-full overflow-hidden">
						{/* Top-right icon */}
						<div className="absolute top-0 right-0 sm:size-16 size-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] hover:from-[var(--color-primary)]/90 hover:to-[var(--color-accent)]/90 rounded-2xl flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/25 transition-all hover:shadow-xl hover:shadow-[var(--color-primary)]/35 duration-700 ease-out scale-100 z-10">
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
								className="lucide lucide-code sm:size-8 size-5"
								aria-hidden="true"
							>
								<path d="m16 18 6-6-6-6"></path>
								<path d="m8 6-6 6 6 6"></path>
							</svg>
						</div>

						{/* Profile photo */}
						<img
							alt="Profile"
							className="rounded-2xl shadow-2xl w-full h-full object-cover"
							src="https://plus.unsplash.com/premium_photo-1683736986835-6f5a253ca955?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							style={{ filter: "brightness(1.15)", opacity: 1 }}
						/>

						{/* Bottom-left zap icon */}
						<div className="absolute bottom-0 left-0 sm:size-16 size-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] hover:from-[var(--color-primary)]/90 hover:to-[var(--color-accent)]/90 rounded-lg flex items-center justify-center shadow-lg shadow-[var(--color-accent)]/25 transition-all hover:shadow-xl hover:shadow-[var(--color-accent)]/35 duration-700 ease-out scale-100 z-10 translate-x-0 sm:-translate-x-1/2 translate-y-1/2">
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
								className="lucide lucide-zap size-4 sm:size-6"
								aria-hidden="true"
							>
								<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
