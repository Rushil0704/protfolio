import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
	Github,
	Linkedin,
	Mail,
	Heart,
	Code,
	Database,
	Server,
} from "lucide-react";

export function Footer() {
	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ label: "Home", href: "#home" },
		{ label: "About", href: "#about" },
		{ label: "Skills", href: "#skills" },
		{ label: "Projects", href: "#projects" },
		{ label: "Contact", href: "#contact" },
	];

	const technologies = [
		{ name: "React.js", icon: Code },
		{ name: "Node.js", icon: Server },
		{ name: "MongoDB", icon: Database },
		{ name: "MySQL", icon: Database },
		{ name: "TypeScript", icon: Code },
	];

	const socialLinks = [
		{ icon: Github, href: "https://github.com", label: "GitHub" },
		{ icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
		{
			icon: Mail,
			href: "mailto:rushilvagadiya67@gmail.com",
			label: "Email",
		},
	];

	const handleLinkClick = (href: string) => {
		if (href.startsWith("#")) {
			const element = document.getElementById(href.substring(1));
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	};

	return (
		<footer
			className="bg-secondary/20 border-t"
			style={{ backgroundColor: "var(--color-bgc-bgSelect)" }}
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,theme(colors.primary/0.03),transparent_50%)]"></div>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,theme(colors.accent/0.03),transparent_50%)]"></div>
			<div className="container py-8 sm:py-16 relative z-10 flex flex-col sm:gap-16 gap-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
					<div className="lg:col-span-5 flex flex-col gap-6">
						<button
							className="flex items-center gap-3 cursor-pointer transition-all duration-700 ease-out opacity-100 translate-x-0"
							data-aos="fade-right"
							style={{ willChange: "auto" }}
						>
							<div>
								<h3 className="text-xl sm:text-2xl font-bold gradient-text">
									Rushil Vagadiya
								</h3>
								{/* <p className="text-xs sm:text-sm text-muted-foreground">
									MERN Stack Developer
								</p> */}
							</div>
						</button>
						<div
							className="flex flex-col sm:gap-6 gap-4 transition-all duration-700 ease-out opacity-100 translate-x-0"
							data-aos="fade-right"
							data-aos-delay="200"
							style={{ willChange: "auto" }}
						>
							<p
								className="leading-relaxed max-w-md"
								style={{
									color: "var(--color-muted-foreground)",
								}}
							>
								Crafting exceptional digital experiences through
								innovative design and cutting-edge development.
								Let's build something extraordinary together.
							</p>
							<div className="flex flex-col gap-2 sm:gap-3">
								<div className="flex items-center gap-3">
									<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
									<span
										className="text-sm  font-medium"
										style={{
											color: "var(--color-muted-foreground)",
										}}
									>
										Available for new projects
									</span>
								</div>
								<div className="flex items-center gap-3">
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
										className="lucide lucide-map-pin w-4 h-4 "
										style={{
											color: "var(--color-primary)",
										}}
										aria-hidden="true"
									>
										<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
										<circle cx="12" cy="10" r="3"></circle>
									</svg>
									<span
										className="text-sm "
										style={{
											color: "var(--color-muted-foreground)",
										}}
									>
										India • Remote Worldwide
									</span>
								</div>
								<div className="flex items-center gap-3">
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
										className="lucide lucide-clock w-4 h-4"
										aria-hidden="true"
										style={{
											color: "var(--color-primary)",
										}}
									>
										<path d="M12 6v6l4 2"></path>
										<circle cx="12" cy="12" r="10"></circle>
									</svg>
									<span
										className="text-sm "
										style={{
											color: "var(--color-muted-foreground)",
										}}
									>
										Usually responds within 24 hours
									</span>
								</div>
							</div>
						</div>
					</div>
					<div
						className="lg:col-span-3 flex flex-col gap-2 sm:gap-6 transition-all duration-700 ease-out opacity-100 translate-y-0"
						data-aos="fade-up"
						data-aos-delay="300"
						style={{ willChange: "auto" }}
					>
						<h4
							className="text-lg font-semibold"
							style={{ color: "var(--color-primary)" }}
						>
							Quick Links
						</h4>
						<nav className="grid lg:grid-cols-1 grid-cols-2 justify-between gap-0">
							<button
								className="items-center justify-center gap-1 sm:gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium cursor-pointer underline-offset-4 hover:underline h-9 px-4 py-2 block text-left transition-colors duration-200"
								style={{
									color: "var(--color-muted-foreground)",
									transition: "color 0.2s",
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.color =
										"var(--color-primary)")
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.color =
										"var(--color-muted-foreground)")
								}
							>
								Home
							</button>
							<button
								className="items-center justify-center gap-1 sm:gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium cursor-pointer underline-offset-4 hover:underline h-9 px-4 py-2 block text-left transition-colors duration-200"
								style={{
									color: "var(--color-muted-foreground)",
									transition: "color 0.2s",
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.color =
										"var(--color-primary)")
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.color =
										"var(--color-muted-foreground)")
								}
							>
								About
							</button>
							<button
								className="items-center justify-center gap-1 sm:gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium cursor-pointer underline-offset-4 hover:underline h-9 px-4 py-2 block text-left transition-colors duration-200"
								style={{
									color: "var(--color-muted-foreground)",
									transition: "color 0.2s",
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.color =
										"var(--color-primary)")
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.color =
										"var(--color-muted-foreground)")
								}
							>
								Skills
							</button>
							<button
								className="items-center justify-center gap-1 sm:gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium cursor-pointer underline-offset-4 hover:underline h-9 px-4 py-2 block text-left transition-colors duration-200"
								style={{
									color: "var(--color-muted-foreground)",
									transition: "color 0.2s",
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.color =
										"var(--color-primary)")
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.color =
										"var(--color-muted-foreground)")
								}
							>
								Experience
							</button>
							<button
								className="items-center justify-center gap-1 sm:gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium cursor-pointer underline-offset-4 hover:underline h-9 px-4 py-2 block text-left transition-colors duration-200"
								style={{
									color: "var(--color-muted-foreground)",
									transition: "color 0.2s",
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.color =
										"var(--color-primary)")
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.color =
										"var(--color-muted-foreground)")
								}
							>
								Education
							</button>
							<button
								className="items-center justify-center gap-1 sm:gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium cursor-pointer underline-offset-4 hover:underline h-9 px-4 py-2 block text-left transition-colors duration-200"
								style={{
									color: "var(--color-muted-foreground)",
									transition: "color 0.2s",
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.color =
										"var(--color-primary)")
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.color =
										"var(--color-muted-foreground)")
								}
							>
								Projects
							</button>
							<button
								className="items-center justify-center gap-1 sm:gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium cursor-pointer underline-offset-4 hover:underline h-9 px-4 py-2 block text-left transition-colors duration-200"
								style={{
									color: "var(--color-muted-foreground)",
									transition: "color 0.2s",
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.color =
										"var(--color-primary)")
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.color =
										"var(--color-muted-foreground)")
								}
							>
								Contact
							</button>
						</nav>
					</div>
					<div
						className="lg:col-span-4 flex flex-col gap-6 transition-all duration-700 ease-out opacity-100 translate-x-0"
						data-aos="fade-left"
						data-aos-delay="400"
						style={{ willChange: "auto" }}
					>
						<h4
							className="text-base sm:text-lg font-semibold "
							style={{ color: "var(--color-primary)" }}
						>
							Let's Connect
						</h4>
						<div className="flex flex-wrap gap-2 sm:gap-3">
							<a
								href="tel:+919016924404"
								className="group relative size-8 sm:size-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ease-out opacity-100 scale-100"
								aria-label="Call"
								data-aos="zoom-in"
								data-aos-delay="450"
								style={{
									backgroundColor:
										"var(--color-bgc-bgSelect)",
									color: "var(--color-primary)",
									willChange: "auto",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.backgroundColor =
										"var(--color-primary)";
									e.currentTarget.style.color = "#fff";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.backgroundColor =
										"var(--color-bgc-bgSelect)";
									e.currentTarget.style.color =
										"var(--color-primary)";
								}}
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
									className="lucide lucide-phone transition-transform duration-300 group-hover:scale-110 size-4 sm:size-6"
									aria-hidden="true"
								>
									<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
								</svg>
								<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</a>
							<a
								href="https://wa.me/919016924404?text=Hi%20Khush,%20I'm%20interested%20in%20discussing%20a%20project%20with%20you.%20Could%20we%20schedule%20a%20call?"
								target="_blank"
								rel="noopener noreferrer"
								className="group relative size-8 sm:size-12 bg-muted/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-primary/80 hover:text-white  ease-out opacity-100 scale-100"
								aria-label="WhatsApp"
								data-aos="zoom-in"
								data-aos-delay="550"
								style={{
									backgroundColor:
										"var(--color-bgc-bgSelect)",
									color: "var(--color-primary)",
									willChange: "auto",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.backgroundColor =
										"var(--color-primary)";
									e.currentTarget.style.color = "#fff";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.backgroundColor =
										"var(--color-bgc-bgSelect)";
									e.currentTarget.style.color =
										"var(--color-primary)";
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
									className="lucide lucide-message-circle transition-transform duration-300 group-hover:scale-110 size-4 sm:size-6"
									aria-hidden="true"
								>
									<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
								</svg>
								<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</a>
							<a
								href="mailto:vagadiyakhush@gmail.com?subject=Project Inquiry&amp;body=Hi Khush, I'm interested in discussing a project with you."
								className="group relative size-8 sm:size-12 bg-muted/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-primary/80 hover:text-white ease-out opacity-100 scale-100"
								aria-label="Email"
								data-aos="zoom-in"
								data-aos-delay="650"
								style={{
									backgroundColor:
										"var(--color-bgc-bgSelect)",
									color: "var(--color-primary)",
									willChange: "auto",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.backgroundColor =
										"var(--color-primary)";
									e.currentTarget.style.color = "#fff";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.backgroundColor =
										"var(--color-bgc-bgSelect)";
									e.currentTarget.style.color =
										"var(--color-primary)";
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
									className="lucide lucide-mail transition-transform duration-300 group-hover:scale-110 size-4 sm:size-6"
									aria-hidden="true"
								>
									<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
									<rect
										x="2"
										y="4"
										width="20"
										height="16"
										rx="2"
									></rect>
								</svg>
								<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</a>
							<a
								href="https://github.com/khush4404"
								target="_blank"
								rel="noopener noreferrer"
								className="group relative size-8 sm:size-12 bg-muted/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-primary/80 hover:text-white  ease-out opacity-100 scale-100"
								aria-label="GitHub"
								data-aos="zoom-in"
								data-aos-delay="750"
								style={{
									backgroundColor:
										"var(--color-bgc-bgSelect)",
									color: "var(--color-primary)",
									willChange: "auto",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.backgroundColor =
										"var(--color-primary)";
									e.currentTarget.style.color = "#fff";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.backgroundColor =
										"var(--color-bgc-bgSelect)";
									e.currentTarget.style.color =
										"var(--color-primary)";
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
									className="lucide lucide-github transition-transform duration-300 group-hover:scale-110 size-4 sm:size-6"
									aria-hidden="true"
								>
									<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
									<path d="M9 18c-4.51 2-5-2-7-2"></path>
								</svg>
								<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</a>
							<a
								href="http://www.linkedin.com/in/khush-vagadiya"
								target="_blank"
								rel="noopener noreferrer"
								className="group relative size-8 sm:size-12 bg-muted/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-primary/80 hover:text-white  ease-out opacity-100 scale-100"
								aria-label="LinkedIn"
								data-aos="zoom-in"
								data-aos-delay="850"
								style={{
									backgroundColor:
										"var(--color-bgc-bgSelect)",
									color: "var(--color-primary)",
									willChange: "auto",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.backgroundColor =
										"var(--color-primary)";
									e.currentTarget.style.color = "#fff";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.backgroundColor =
										"var(--color-bgc-bgSelect)";
									e.currentTarget.style.color =
										"var(--color-primary)";
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
									className="lucide lucide-linkedin transition-transform duration-300 group-hover:scale-110 size-4 sm:size-6"
									aria-hidden="true"
								>
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
									<rect
										width="4"
										height="12"
										x="2"
										y="9"
									></rect>
									<circle cx="4" cy="4" r="2"></circle>
								</svg>
								<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</a>
						</div>
					</div>
				</div>
				<div className="border-t border-border/20 sm:pt-16 pt-8">
					<div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-center">
						<p className="text-sm text-muted-foreground">
							© 2025 Rushil Vagadiya. All rights reserved.
						</p>
						<div className="hidden sm:block w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<span>Made with</span>
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
								className="lucide lucide-heart w-4 h-4 text-red-500 fill-current animate-pulse"
								aria-hidden="true"
							>
								<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
							</svg>
							<span>in India</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
