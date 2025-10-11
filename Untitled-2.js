import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, ExternalLink, Database, Server, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
	const projects = [
		{
			title: "Wanderlust",
			description:
				"A full-stack campground management application using Node.js, Express.js, EJS, and MongoDB, built on MVC architecture and RESTful routing principles.",
			image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop",
			technologies: ["Node.js", "Express.js", "EJS", "MongoDB"],
			features: [
				"User Authentication",
				"Campground Listing Management",
				"Image Uploads",
				"Review and Rating System",
				"Responsive Design",
			],
			githubUrl: "#",
			liveUrl: "#",
			category: "Full Stack",
		},
		{
			title: "MERN Authentication System",
			description:
				"Built a secure authentication and role-based authorization system using the MERN stack, supporting both regular users and admin accounts.",
			image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
			technologies: [
				"React.js",
				"Node.js",
				"Express.js",
				"TypeScript",
				"MongoDB",
				"JWT",
				"Tailwind CSS",
			],
			features: [
				"JWT Authentication",
				"Role-based Authorization",
				"User Management",
				"Admin Dashboard",
				"Event Logging",
				"Responsive Interface",
			],
			githubUrl: "#",
			liveUrl: "#",
			category: "Full Stack",
		},
		{
			title: "Ecommerce Footwear Store",
			description:
				"Responsive ecommerce footwear store built with PHP, MySQL, HTML, CSS, JavaScript, and Bootstrap featuring product catalog and dynamic pages.",
			image: "https://images.unsplash.com/photo-1639409392969-71b5b1943cee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdHdhcmUlMjBzaG9wJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
			technologies: [
				"HTML",
				"CSS",
				"JavaScript",
				"PHP",
				"MySQL",
				"Bootstrap",
			],
			features: [
				"Product Listings",
				"Product Detail Pages",
				"Responsive Design",
				"MySQL Integration",
				"PHP Backend Logic",
				"Search & Filter",
			],
			githubUrl: "#",
			liveUrl: "#",
			category: "Full Stack",
		},
		{
			title: "Real-time Chat Application",
			description:
				"Built a secure one-to-one real-time chat app using React.js, Node.js, Express.js, and Socket.IO with MongoDB, featuring JWT authentication and message persistence.",
			image: "https://media.istockphoto.com/id/1474963602/photo/digital-chatbot-a-i-robot-application-conversation-assistant-ai-artificial-intelligence.webp?a=1&b=1&s=612x612&w=0&k=20&c=vE-NxLyhRhZIrMJiAE9HvJUOKLr4PY44fRdz6oskVVI=",
			technologies: [
				"React.js",
				"Node.js",
				"Express.js",
				"Socket.IO",
				"MongoDB",
				"Tailwind CSS",
				"JWT",
			],
			features: [
				"Real-time Messaging",
				"JWT Authentication",
				"Message Persistence",
				"Typing Indicators",
				"Online/Offline Status",
				"Responsive Design",
			],
			githubUrl: "#",
			liveUrl: "#",
			category: "Full Stack",
		},
	];

	const getIconForTech = (tech: string) => {
		if (tech.includes("MongoDB") || tech.includes("MySQL")) return Database;
		if (tech.includes("Node.js") || tech.includes("Express")) return Server;
		return Globe;
	};

	return (
		// <section
		// 	id="projects"
		// 	className="sm:py-16 py-8 bg-gradient-to-b from-[var(--color-muted)]/30 to-[var(--color-background)] relative overflow-hidden"
		// 	style={{ backgroundColor: "var(--color-bgText)" }}
		// >
		<section
			id="projects"
			className="sm:py-16 py-8 bg-gradient-to-b from-[var(--color-muted)]/30 to-[var(--color-background)] relative overflow-hidden"
			style={{ backgroundColor: "var(--color-bgc-bgSelect)" }}
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,theme(colors.primary/0.05),transparent_50%)]"></div>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,theme(colors.accent/0.05),transparent_50%)]"></div>
			<div className="container relative z-10 flex flex-col gap-12 sm:gap-16">
				<div className="text-center flex flex-col gap-4 sm:gap-6">
					<div
						className="inline-flex items-center gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 w-fit sm:mx-auto transition-all duration-700 ease-out opacity-100 translate-y-0"
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
							className="lucide lucide-zap w-4 h-4 text-primary"
							aria-hidden="true"
						>
							<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
						</svg>
						<span className="text-xs sm:text-sm font-medium text-foreground/80">
							{" "}
							Featured Work
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<h2
							className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[var(--color-foreground)] via-[var(--color-primary)] to-[var(--color-foreground)] bg-clip-text text-transparent pb-2 sm:text-center text-start transition-all duration-700 ease-out opacity-100 translate-y-0"
							data-aos="fade-up"
							data-aos-delay="200"
							style={{ willChange: "auto" }}
						>
							Recent Projects
						</h2>
						<p
							className="text-lg sm:text-xl text-foreground max-w-3xl mx-auto leading-relaxed sm:text-center text-start transition-all duration-700 ease-out opacity-100 translate-y-0"
							data-aos="fade-up"
							data-aos-delay="400"
							style={{ willChange: "auto" }}
						>
							A showcase of my recent work in full-stack
							development, featuring modern web applications built
							with the MERN stack and other cutting-edge
							technologies.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
					<div
						data-slot="card"
						className="text-card-foreground flex flex-col gap-6 rounded-lg border-0 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm text-center transition-all duration-700 ease-out opacity-100 scale-100"
						data-aos="zoom-in"
						data-aos-delay="0"
						style={{ willChange: "auto" }}
					>
						<div
							data-slot="card-content"
							className="[&amp;:last-child]:pb-6 p-4 sm:p-6 sm:!pb-6 !pb-4 flex flex-col gap-1.5 sm:gap-3"
						>
							<div className="size-8 sm:size-12 mx-auto bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
									className="lucide lucide-code size-4 sm:size-6 text-primary"
									aria-hidden="true"
								>
									<path d="m16 18 6-6-6-6"></path>
									<path d="m8 6-6 6 6 6"></path>
								</svg>
							</div>
							<div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
								15+
							</div>
							<div
								className="text-xs sm:text-sm text-primary"
								style={{ color: "var(--color-primary)" }}
							>
								Projects Completed
							</div>
						</div>
					</div>
					<div
						data-slot="card"
						className="text-card-foreground flex flex-col gap-6 rounded-lg border-0 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm text-center transition-all duration-700 ease-out opacity-100 scale-100"
						data-aos="zoom-in"
						data-aos-delay="100"
						style={{ willChange: "auto" }}
					>
						<div
							data-slot="card-content"
							className="[&amp;:last-child]:pb-6 p-4 sm:p-6 sm:!pb-6 !pb-4 flex flex-col gap-1.5 sm:gap-3"
						>
							<div className="size-8 sm:size-12 mx-auto bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
									className="lucide lucide-globe size-4 sm:size-6 text-primary"
									aria-hidden="true"
								>
									<circle cx="12" cy="12" r="10"></circle>
									<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
									<path d="M2 12h20"></path>
								</svg>
							</div>
							<div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
								8+
							</div>
							<div
								className="text-xs sm:text-sm text-primary"
								style={{ color: "var(--color-primary)" }}
							>
								Live Applications
							</div>
						</div>
					</div>
					<div
						data-slot="card"
						className="text-card-foreground flex flex-col gap-6 rounded-lg border-0 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm text-center transition-all duration-700 ease-out opacity-100 scale-100"
						data-aos="zoom-in"
						data-aos-delay="200"
						style={{ willChange: "auto" }}
					>
						<div
							data-slot="card-content"
							className="[&amp;:last-child]:pb-6 p-4 sm:p-6 sm:!pb-6 !pb-4 flex flex-col gap-1.5 sm:gap-3"
						>
							<div className="size-8 sm:size-12 mx-auto bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
									className="lucide lucide-star size-4 sm:size-6 text-primary"
									aria-hidden="true"
								>
									<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
								</svg>
							</div>
							<div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
								4.7
							</div>
							<div
								className="text-xs sm:text-sm text-primary"
								style={{ color: "var(--color-primary)" }}
							>
								Average Rating
							</div>
						</div>
					</div>
					<div
						data-slot="card"
						className="text-card-foreground flex flex-col gap-6 rounded-lg border-0 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm text-center transition-all duration-700 ease-out opacity-100 scale-100"
						data-aos="zoom-in"
						data-aos-delay="300"
						style={{ willChange: "auto" }}
					>
						<div
							data-slot="card-content"
							className="[&amp;:last-child]:pb-6 p-4 sm:p-6 sm:!pb-6 !pb-4 flex flex-col gap-1.5 sm:gap-3"
						>
							<div className="size-8 sm:size-12 mx-auto bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
									className="lucide lucide-database size-4 sm:size-6 text-primary"
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
							<div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
								20+
							</div>
							<div
								className="text-xs sm:text-sm text-primary"
								style={{ color: "var(--color-primary)" }}
							>
								Technologies Used
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-10">
					<div
						className="project-item grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center transition-all duration-700 ease-out opacity-100 translate-x-0"
						data-aos="fade-right"
						data-aos-delay="0"
						style={{ willChange: "auto" }}
					>
						<div className="lg:col-span-7">
							<div
								className="text-card-foreground flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
								data-slot="card"
							>
								<div
									className="px-6 [&:last-child]:pb-6 !p-0 relative"
									data-slot="card-content"
								>
									<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>

									<div className="absolute top-4 right-4 z-20">
										<span
											data-slot="badge"
											className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-primary/90 bg-green-500/20 text-green-300 border-green-500/30"
										>
											Live
										</span>
									</div>

									<img
										alt="Portfolio Website"
										className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-115 group-hover:rotate-5"
										src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDF8fHx8MTc1Nzg0Njk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
									></img>
								</div>
							</div>
						</div>
						<div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6 ">
							<div className="flex flex-col gap-2 sm:gap-4">
								<div className="flex items-center gap-3">
									<div
										className="text-xs sm:text-sm text-primary uppercase tracking-wider font-semibold"
										style={{
											color: "var(--color-primary)",
										}}
									>
										Frontend Development
									</div>
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									Portfolio Website
								</h3>
							</div>
							<p className="text-base sm:text-lg text-foreground leading-relaxed">
								A modern, responsive ecommerce footwear website
								built with PHP, MySQL, Bootstrap, and jQuery.
								Features include a dynamic product catalog,
								product detail pages, shopping cart, user
								authentication, and admin management. The site
								is fully responsive, supports advanced search
								and filtering, and provides a seamless shopping
								experience.
							</p>
							<div className="flex flex-col gap-2">
								<h4 className="text-sm font-semibold text-foreground">
									Key Features:
								</h4>
								<div className="flex flex-wrap gap-1.5 sm:gap-2">
									{[
										"Admin Dashboard",
										"Payment Integration",
										"Bill Generation",
										"Tracking system",
									].map((feature) => (
										<span
											key={feature}
											data-slot="badge"
											className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-base font-medium w-fit whitespace-nowrap shadow-sm"
											style={{
												background:
													"var(--color-bgc-bgSelect)",
												color: "var(--color-bgc-select)",
												border: "none",
											}}
										>
											{feature}
										</span>
									))}
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<h4 className="text-sm font-semibold text-foreground">
									Technologies:
								</h4>
								<div className="flex flex-wrap gap-1.5 sm:gap-2">
									<div className="flex flex-wrap gap-2 w-full">
										{[
											"PHP",
											"MySQL",
											"HTML5",
											"CSS3",
											"JavaScript",
											"Bootstrap",
											"jQuery",
										].map((tech) => (
											<span
												key={tech}
												data-slot="badge"
												className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-base font-medium w-fit whitespace-nowrap shadow-sm"
												style={{
													background:
														"var(--color-bgc-bgSelect)",
													color: "var(--color-bgc-select)",
													border: "none",
												}}
											>
												{tech}
											</span>
										))}
									</div>
									<div className="flex flex-wrap gap-2 w-full mt-2">
										{[
											// "Responsive Design",
											// "Animations",
											// "Theme System",
											// "Performance",
											// "Accessibility",
										].map((tech) => (
											<span
												key={tech}
												data-slot="badge"
												className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-base font-medium w-fit whitespace-nowrap shadow-sm"
												style={{
													background:
														"var(--color-bgc-bgSelect)",
													color: "var(--color-bgc-select)",
													border: "none",
												}}
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row gap-4">
								<a
									href="https://khush-portfolio.vercel.app"
									target="_blank"
									rel="noopener noreferrer"
									data-slot="button"
									className="inline-flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 group bg-gradient-to-r from-primary via-primary to-primary hover:from-primary/90 hover:via-primary/95 hover:to-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 relative overflow-hidden"
								>
									<span className="relative z-10 flex items-center gap-2">
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
											className="lucide lucide-external-link h-4 w-4"
											aria-hidden="true"
										>
											<path d="M15 3h6v6"></path>
											<path d="M10 14 21 3"></path>
											<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
										</svg>
										View Live Project
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
											className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
											aria-hidden="true"
										>
											<path d="M7 7h10v10"></path>
											<path d="M7 17 17 7"></path>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>

					<div
						className="project-item grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center lg:grid-flow-col-dense transition-all duration-700 ease-out opacity-100 translate-x-0"
						data-aos="fade-left"
						data-aos-delay="200"
						style={{ willChange: "auto" }}
					>
						<div className="lg:col-span-7 lg:col-start-6">
							<div
								className="text-card-foreground flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
								data-slot="card"
							>
								<div
									className="px-6 [&:last-child]:pb-6 !p-0 relative"
									data-slot="card-content"
								>
									<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>

									<div className="absolute top-4 right-4 z-20">
										<span
											data-slot="badge"
											className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-primary/90 bg-green-500/20 text-green-300 border-green-500/30"
										>
											Live
										</span>
									</div>

									<img
										alt="Portfolio Website"
										className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-115 group-hover:rotate-5"
										src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wZ3JvdW5kJTIwdHJhdmVsJTIwYXBwfGVufDF8fHx8MTc1Nzc4MDMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
									></img>
								</div>
							</div>
						</div>
						<div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6 lg:col-start-1 ">
							<div className="flex flex-col gap-2 sm:gap-4">
								<div className="flex items-center gap-3">
									<div
										className="text-xs sm:text-sm text-primary uppercase tracking-wider font-semibold"
										style={{
											color: "var(--color-primary)",
										}}
									>
										Full-Stack Web Application
									</div>
									<span
										data-slot="badge"
										className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-primary/90 bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30"
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
											className="lucide lucide-star size-2 sm:size-3 fill-current"
											aria-hidden="true"
										>
											<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
										</svg>
										Featured
									</span>
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									WanderLust Project
								</h3>
							</div>
							<p className="text-base sm:text-lg text-foreground leading-relaxed">
								A comprehensive campground listing platform
								built with Node.js, Express.js, EJS, and MongoDB
								following MVC architecture. Features user
								authentication, campground management, CRUD
								operations, image uploads with Cloudinary,
								review system, and responsive design. Implements
								RESTful API principles with proper error
								handling and data validation.
							</p>
							<div className="flex flex-col gap-2">
								<h4 className="text-sm font-semibold text-foreground">
									Key Features:
								</h4>
								<div className="flex flex-wrap gap-1.5 sm:gap-2">
									{[
										"Full Crud operations",
										"User Authentication",
										"File Uploads",
										"Responsive Design",
									].map((feature) => (
										<span
											key={feature}
											data-slot="badge"
											className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-base font-medium w-fit whitespace-nowrap shadow-sm"
											style={{
												background:
													"var(--color-bgc-bgSelect)",
												color: "var(--color-bgc-select)",
												border: "none",
											}}
										>
											{feature}
										</span>
									))}
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<h4 className="text-sm font-semibold text-foreground">
									Technologies:
								</h4>
								<div className="flex flex-wrap gap-1.5 sm:gap-2">
									<div className="flex flex-wrap gap-2 w-full">
										{[
											"Node.js",
											"Express.js",
											"TailwindCSS",
											"MongoDB",
											"EJS",
											"Cloudinary",
											"RESTful APIs",
											"MVC Architecture",
										].map((tech) => (
											<span
												key={tech}
												data-slot="badge"
												className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-base font-medium w-fit whitespace-nowrap shadow-sm"
												style={{
													background:
														"var(--color-bgc-bgSelect)",
													color: "var(--color-bgc-select)",
													border: "none",
												}}
											>
												{tech}
											</span>
										))}
									</div>
									<div className="flex flex-wrap gap-2 w-full mt-2">
										{[
											// "Responsive Design",
											// "Animations",
											// "Theme System",
											// "Performance",
											// "Accessibility",
										].map((tech) => (
											<span
												key={tech}
												data-slot="badge"
												className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-base font-medium w-fit whitespace-nowrap shadow-sm"
												style={{
													background:
														"var(--color-bgc-bgSelect)",
													color: "var(--color-bgc-select)",
													border: "none",
												}}
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row gap-4">
								<a
									href="https://github.com/Rushil0704/wanderlustEcommerce-"
									target="_blank"
									rel="noopener noreferrer"
									data-slot="button"
									className="inline-flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 group bg-gradient-to-r from-primary via-primary to-primary hover:from-primary/90 hover:via-primary/95 hover:to-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 relative overflow-hidden"
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
										className="lucide lucide-github h-4 w-4"
										aria-hidden="true"
									>
										<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
										<path d="M9 18c-4.51 2-5-2-7-2"></path>
									</svg>
									View Code
								</a>
							</div>
						</div>
					</div>

					<div
						className="project-item grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center transition-all duration-700 ease-out opacity-100 translate-x-0"
						data-aos="fade-right"
						data-aos-delay="0"
						style={{ willChange: "auto" }}
					>
						<div className="lg:col-span-7">
							<div
								className="text-card-foreground flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
								data-slot="card"
							>
								<div
									className="px-6 [&:last-child]:pb-6 !p-0 relative"
									data-slot="card-content"
								>
									<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>

									<div className="absolute top-4 right-4 z-20">
										<span
											data-slot="badge"
											className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-primary/90 bg-green-500/20 text-green-300 border-green-500/30"
										>
											Live
										</span>
									</div>

									<img
										alt="Portfolio Website"
										className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-115 group-hover:rotate-5"
										src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRoZW50aWNhdGlvbiUyMHNlY3VyaXR5fGVufDF8fHx8MTc1Nzc4MDMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
									></img>
								</div>
							</div>
						</div>
						<div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6 ">
							<div className="flex flex-col gap-2 sm:gap-4">
								<div className="flex items-center gap-3">
									<div
										className="text-xs sm:text-sm text-primary uppercase tracking-wider font-semibold flex gap-2"
										style={{
											color: "var(--color-primary)",
										}}
									>
										Full-Stack Authentication
										<span
											data-slot="badge"
											className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-primary/90 bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30"
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
												className="lucide lucide-star size-2 sm:size-3 fill-current"
												aria-hidden="true"
											>
												<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
											</svg>
											Featured
										</span>
									</div>
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									MERN Authentication System
								</h3>
							</div>
							<p className="text-base sm:text-lg text-foreground leading-relaxed">
								A robust authentication and authorization system
								with complete user and admin role management.
								Features secure JWT-based authentication,
								protected routes, user profile management,
								password reset functionality, activity tracking,
								and responsive UI with dark/light theme support.
								Built with React.js, Node.js, Express.js, and
								MongoDB.
							</p>
							<div className="flex flex-col gap-2">
								<h4 className="text-sm font-semibold text-foreground">
									Key Features:
								</h4>
								<div className="flex flex-wrap gap-1.5 sm:gap-2">
									{[
										"JWT Authentication",
										"Role-Based Access",
										"Password Reset",
										"Responsive Design",
									].map((feature) => (
										<span
											key={feature}
											data-slot="badge"
											className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-base font-medium w-fit whitespace-nowrap shadow-sm"
											style={{
												background:
													"var(--color-bgc-bgSelect)",
												color: "var(--color-bgc-select)",
												border: "none",
											}}
										>
											{feature}
										</span>
									))}
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<h4 className="text-sm font-semibold text-foreground">
									Technologies:
								</h4>
								<div className="flex flex-wrap gap-1.5 sm:gap-2">
									<div className="flex flex-wrap gap-2 w-full">
										{[
											"React.js",
											"Node.js",
											"Express.js",
											"MongoDB",
											"JWT",
											"TypeScript",
											"TailwindCSS",
										].map((tech) => (
											<span
												key={tech}
												data-slot="badge"
												className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-base font-medium w-fit whitespace-nowrap shadow-sm"
												style={{
													background:
														"var(--color-bgc-bgSelect)",
													color: "var(--color-bgc-select)",
													border: "none",
												}}
											>
												{tech}
											</span>
										))}
									</div>
									<div className="flex flex-wrap gap-2 w-full mt-2">
										{[
											// "Responsive Design",
											// "Animations",
											// "Theme System",
											// "Performance",
											// "Accessibility",
										].map((tech) => (
											<span
												key={tech}
												data-slot="badge"
												className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-base font-medium w-fit whitespace-nowrap shadow-sm"
												style={{
													background:
														"var(--color-bgc-bgSelect)",
													color: "var(--color-bgc-select)",
													border: "none",
												}}
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row gap-4">
								<a
									href="https://github.com/Rushil0704/mern_auth_system"
									target="_blank"
									rel="noopener noreferrer"
									data-slot="button"
									className="inline-flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 group bg-gradient-to-r from-primary via-primary to-primary hover:from-primary/90 hover:via-primary/95 hover:to-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 relative overflow-hidden"
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
										className="lucide lucide-github h-4 w-4"
										aria-hidden="true"
									>
										<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
										<path d="M9 18c-4.51 2-5-2-7-2"></path>
									</svg>
									View Code
								</a>
							</div>
						</div>
					</div>

					<div
						className="project-item grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center lg:grid-flow-col-dense transition-all duration-700 ease-out opacity-100 translate-x-0"
						data-aos="fade-left"
						data-aos-delay="600"
						style={{ willChange: "auto" }}
					>
						<div className="lg:col-span-7">
							<div
								className="text-card-foreground flex flex-col gap-6 rounded-lg group border-0 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
								data-slot="card"
							>
								<div
									className="px-6 [&:last-child]:pb-6 !p-0 relative"
									data-slot="card-content"
								>
									<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>

									<div className="absolute top-4 right-4 z-20">
										<span
											data-slot="badge"
											className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-primary/90 bg-green-500/20 text-green-300 border-green-500/30"
										>
											Live
										</span>
									</div>

									<img
										alt="Portfolio Website"
										className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-115 group-hover:rotate-5"
										src="https://images.unsplash.com/photo-1735527672954-e3114d889b0d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwc2hvcCUyMHBob3RvfGVufDB8fDB8fHww"
									></img>
								</div>
							</div>
						</div>
						<div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6 lg:col-start-1 ">
							<div className="flex flex-col gap-2 sm:gap-4">
								<div className="flex items-center gap-3">
									<div
										className="text-xs sm:text-sm text-primary uppercase tracking-wider font-semibold"
										style={{
											color: "var(--color-primary)",
										}}
									>
										Web Management Application
									</div>
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									Ecommerce Footware Website
								</h3>
							</div>
							<p className="text-base sm:text-lg text-foreground leading-relaxed">
								A modern, responsive portfolio website built
								with React.js, TypeScript, and TailwindCSS.
								Features smooth animations, theme switching,
								responsive design, contact forms, project
								showcase, and optimized performance. Implements
								modern web development best practices and
								accessibility standards.
							</p>
							<div className="flex flex-col gap-2">
								<h4 className="text-sm font-semibold text-foreground">
									Key Features:
								</h4>
								<div className="flex flex-wrap gap-1.5 sm:gap-2">
									{[
										"Theme System",
										"Smooth Animations",
										"Responsive Design",
										"SEO Optimized",
									].map((feature) => (
										<span
											key={feature}
											data-slot="badge"
											className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-base font-medium w-fit whitespace-nowrap shadow-sm"
											style={{
												background:
													"var(--color-bgc-bgSelect)",
												color: "var(--color-bgc-select)",
												border: "none",
											}}
										>
											{feature}
										</span>
									))}
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<h4 className="text-sm font-semibold text-foreground">
									Technologies:
								</h4>
								<div className="flex flex-wrap gap-1.5 sm:gap-2">
									<div className="flex flex-wrap gap-2 w-full">
										{[
											"React.js",
											"TypeScript",
											"TailwindCSS",
										].map((tech) => (
											<span
												key={tech}
												data-slot="badge"
												className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-base font-medium w-fit whitespace-nowrap shadow-sm"
												style={{
													background:
														"var(--color-bgc-bgSelect)",
													color: "var(--color-bgc-select)",
													border: "none",
												}}
											>
												{tech}
											</span>
										))}
									</div>
									<div className="flex flex-wrap gap-2 w-full mt-2">
										{[
											"Responsive Design",
											"Animations",
											"Theme System",
											"Performance",
											"Accessibility",
										].map((tech) => (
											<span
												key={tech}
												data-slot="badge"
												className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-base font-medium w-fit whitespace-nowrap shadow-sm"
												style={{
													background:
														"var(--color-bgc-bgSelect)",
													color: "var(--color-bgc-select)",
													border: "none",
												}}
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row gap-4">
								<a
									href="https://github.com/Rushil0704/Ecommerce-Footware"
									target="_blank"
									rel="noopener noreferrer"
									data-slot="button"
									className="inline-flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 group bg-gradient-to-r from-primary via-primary to-primary hover:from-primary/90 hover:via-primary/95 hover:to-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 relative overflow-hidden"
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
										className="lucide lucide-github h-4 w-4"
										aria-hidden="true"
									>
										<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
										<path d="M9 18c-4.51 2-5-2-7-2"></path>
									</svg>
									View Code
								</a>
							</div>
						</div>
					</div>
				</div>

				<div
					className="text-centerflex flex-col gap-4 sm:gap-6 w-fit mx-auto"
					style={{
						backgroundColor: "var(--color-primary-tabbg)",
					}}
				>
					<div
						data-slot="card"
						className="text-card-foreground flex-col gap-6 rounded-lg inline-block border-0 bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm transition-all duration-700 ease-out opacity-100 translate-y-0"
						data-aos="fade-up"
						data-aos-delay="200"
						style={{ willChange: "auto" }}
					>
						<div
							data-slot="card-content"
							className="[&amp;:last-child]:pb-6 p-6 sm:p-8 flex flex-col gap-4"
						>
							<h3
								className="text-lg sm:text-xl font-semibold text-center"
								style={{ color: "var(--color-primary)" }}
							>
								Like what you see?
							</h3>
							<p className="text-foreground max-w-md text-center">
								I'm always working on new projects and
								experimenting with the latest technologies.
								Let's discuss your next project!
							</p>
							<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center ">
								<button
									data-slot="button"
									className="inline-flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap text-xs sm:text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-10 rounded-md px-6 has-[&gt;svg]:px-4 bg-gradient-to-r from-primary via-primary to-primary hover:from-primary/90 hover:via-primary/95 hover:to-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 relative overflow-hidden"
								>
									<span className="relative z-10 flex items-center">
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
											className="lucide lucide-calendar w-4 h-4 mr-2"
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
										Start a Project
									</span>
								</button>
								<a
									href="https://github.com/Rushil0704"
									target="_blank"
									rel="noopener noreferrer"
									data-slot="button"
									className="inline-flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap text-xs sm:text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-background text-foreground hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&gt;svg]:px-4 border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
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
										className="lucide lucide-github w-4 h-4 mr-2"
										aria-hidden="true"
									>
										<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
										<path d="M9 18c-4.51 2-5-2-7-2"></path>
									</svg>
									View All Projects
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
