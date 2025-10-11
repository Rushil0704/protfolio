import React, { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import {
	Mail,
	Phone,
	MapPin,
	Send,
	Github,
	Linkedin,
	Twitter,
	MessageCircle,
} from "lucide-react";
import { toast } from "./ui/toast";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_51jktt7";
const TEMPLATE_ID = "template_oq4f4au";
const PUBLIC_KEY = "nuJz2CrYo7A2pzRf-";

export function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		const templateParams = {
			name: formData.name,
			email: formData.email,
			title: formData.subject,
			message: formData.message,
		};

		try {
			await emailjs.send(
				SERVICE_ID,
				TEMPLATE_ID,
				templateParams,
				PUBLIC_KEY
			);
			toast.success(
				"Message sent successfully! I'll get back to you soon."
			);
			setFormData({ name: "", email: "", subject: "", message: "" });
		} catch (error) {
			toast.error("Failed to send message. Please try again.");
		}
		setIsSubmitting(false);
	};

	return (
		// <section
		// 	id="contact"
		// 	className="sm:py-16 py-8 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
		// 	style={{ backgroundColor: "var(--color-bgText)" }}
		// >
		<section
			id="contact"
			className="sm:py-16 py-8 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
			style={{ backgroundColor: "var(--color-bgc-bgSelect)" }}
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,theme(colors.primary/0.05),transparent_50%)]"></div>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,theme(colors.accent/0.05),transparent_50%)]"></div>
			<div className="container relative z-10 flex flex-col gap-6 sm:gap-12">
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
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-zap w-4 h-4 text-primary"
							aria-hidden="true"
						>
							<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
						</svg>
						<span className="text-xs sm:text-sm font-medium text-foreground/80">
							Get In Touch
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<h2
							className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[var(--color-foreground)] via-[var(--color-primary)] to-[var(--color-foreground)] bg-clip-text text-transparent pb-2 sm:text-center text-start transition-all duration-700 ease-out opacity-100 translate-y-0"
							data-aos="fade-up"
							data-aos-delay="200"
							style={{ willChange: "auto" }}
						>
							Let's Build Something Amazing
						</h2>
						<p
							className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed sm:text-center text-start transition-all duration-700 ease-out opacity-100 translate-y-0"
							data-aos="fade-up"
							data-aos-delay="400"
							style={{ willChange: "auto" }}
						>
							Ready to turn your ideas into reality? I'm available
							for freelance projects, full-time opportunities, and
							collaborative development work.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-start">
					<div className="lg:col-span-5 flex flex-col gap-4 sm:gap-8">
						<div className="flex flex-col gap-6">
							<div
								data-slot="card"
								className="text-card-foreground flex-col gap-6 rounded-lg inline-block border-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm max-w-2xl"
								data-aos="fade-right"
								style={{ willChange: "auto" }}
							>
								<div
									data-slot="card-content"
									className="[&amp;:last-child]:pb-6 p-4 sm:p-6 sm:!pb-6 !pb-4 flex flex-col gap-4"
									// style={{
									// 	backgroundColor:
									// 		"var(--color-primary-tabbg)",
									// }}
								>
									<div className="flex items-center gap-1.5 sm:gap-3">
										<div className="size-8 sm:size-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] hover:from-[var(--color-primary)]/90 hover:to-[var(--color-accent)]/90  shadow-lg shadow-[var(--color-accent)]/25 transition-all hover:shadow-xl hover:shadow-[var(--color-accent)]/35 rounded-2xl flex items-center justify-center">
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
												className="lucide lucide-user size-4 sm:size-6 text-primary-foreground"
												aria-hidden="true"
											>
												<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
												<circle
													cx="12"
													cy="7"
													r="4"
												></circle>
											</svg>
										</div>
										<div>
											<h3
												className="font-semibold "
												style={{
													color: "var(--color-foreground)",
												}}
											>
												Rushil Vagadiya
											</h3>
											<p className="text-xs sm:text-sm text-muted-foreground">
												MERN Stack Developer
											</p>
										</div>
									</div>
									<div className="grid grid-cols-2 gap-2 sm:gap-4 text-sm">
										<div className="flex flex-col sm:gap-1">
											<p className="text-foreground">
												Experience
											</p>
											<p
												className="font-medium"
												style={{
													color: "var(--color-foreground)",
												}}
											>
												6+ Months
											</p>
										</div>
										<div className="flex flex-col sm:gap-1">
											<p className="text-foreground">
												Location
											</p>
											<p
												className="font-medium"
												style={{
													color: "var(--color-foreground)",
												}}
											>
												Ahmedabad, Gujarat
											</p>
										</div>
										<div className="flex flex-col sm:gap-1">
											<p className="text-foreground">
												Availability
											</p>
											<div className="flex items-center gap-2">
												<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
												<span className="font-medium text-green-600">
													Available
												</span>
											</div>
										</div>
										<div className="flex flex-col sm:gap-1">
											<p className="text-foreground">
												Response Time
											</p>
											<p
												className="font-medium"
												style={{
													color: "var(--color-foreground)",
												}}
											>
												&lt; 24 Hours
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							data-slot="card"
							className="text-card-foreground flex-col gap-6 rounded-lg inline-block border-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm max-w-2xl"
							data-aos="fade-right"
							data-aos-delay="500"
							style={{ willChange: "auto" }}
						>
							<div
								data-slot="card-content"
								className="[&amp;:last-child]:pb-6 p-4 sm:p-6 sm:!pb-6 !pb-4 flex flex-col gap-4"
								// style={{
								// 	backgroundColor:
								// 		"var(--color-primary-tabbg)",
								// }}
							>
								<div className="flex items-center gap-3">
									<div className="size-8 sm:size-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
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
											className="lucide lucide-globe size-4 sm:size-6 text-white"
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
									<h4
										className="font-semibold "
										style={{
											color: "var(--color-foreground)",
										}}
									>
										Work Preferences
									</h4>
								</div>
								<div className="flex flex-col gap-3 text-xs sm:text-sm">
									<div className="flex items-center justify-between">
										<span className="text-foreground">
											Remote Work
										</span>
										<span className="font-medium text-green-600">
											Available
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-foreground">
											Full-time
										</span>
										<span className="font-medium text-green-600">
											Open
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-foreground">
											Freelance
										</span>
										<span className="font-medium text-green-600">
											Available
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-foreground">
											Contract
										</span>
										<span className="font-medium text-green-600">
											Open
										</span>
									</div>
								</div>
							</div>
						</div>

						<div
							className="flex flex-wrap gap-4 justify-center transition-all duration-700 ease-out opacity-100 translate-y-0"
							data-aos="fade-up"
							data-aos-delay="700"
							style={{ willChange: "auto" }}
						>
							{/* Call */}
							<a
								href="tel:+919016924404"
								className="group flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-lg bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white"
								aria-label="Call"
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
									className="lucide lucide-phone size-3 sm:size-5 transition-transform duration-300 group-hover:scale-110"
									aria-hidden="true"
								>
									<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
								</svg>
								<span className="font-medium">Call</span>
							</a>

							{/* WhatsApp */}
							<a
								href="https://wa.me/919016924404?text=Hi%20Khush,%20I'm%20interested%20in%20discussing%20a%20project%20with%20you.%20Could%20we%20schedule%20a%20call?"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-lg bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white"
								aria-label="WhatsApp"
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
									className="lucide lucide-message-circle size-3 sm:size-5 transition-transform duration-300 group-hover:scale-110"
									aria-hidden="true"
								>
									<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
								</svg>
								<span className="font-medium">WhatsApp</span>
							</a>

							{/* Email */}
							<a
								href="mailto:vagadiyakhush@gmail.com?subject=Project Inquiry&body=Hi Khush, I'm interested in discussing a project with you."
								className="group flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-lg bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white"
								aria-label="Email"
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
									className="lucide lucide-mail size-3 sm:size-5 transition-transform duration-300 group-hover:scale-110"
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
								<span className="font-medium">Email</span>
							</a>

							{/* GitHub */}
							<a
								href="https://github.com/khush4404"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-lg bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white"
								aria-label="GitHub"
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
									className="lucide lucide-github size-3 sm:size-5 transition-transform duration-300 group-hover:scale-110"
									aria-hidden="true"
								>
									<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
									<path d="M9 18c-4.51 2-5-2-7-2"></path>
								</svg>
								<span className="font-medium">GitHub</span>
							</a>

							{/* LinkedIn */}
							<a
								href="http://www.linkedin.com/in/khush-vagadiya"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-lg bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white"
								aria-label="LinkedIn"
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
									className="lucide lucide-linkedin size-3 sm:size-5 transition-transform duration-300 group-hover:scale-110"
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
								<span className="font-medium">LinkedIn</span>
							</a>
						</div>
					</div>
					<div
						className="lg:col-span-7 transition-all duration-700 ease-out opacity-100 translate-x-0"
						data-aos="fade-left"
						data-aos-delay="400"
						style={{ willChange: "auto" }}
					>
						<div
							data-sloat="card"
							className=" flex flex-col gap-6 rounded-lg border-0 bg-gradient-to-br from-[var(--color-primary)]/15 to-[var(--color-accent)]/15 backdrop-blur-sm shadow-xl shadow-primary/5"
							// style={{
							// 	backgroundColor: "var(--color-primary-tabbg)",
							// }}
						>
							<div
								data-sloat="card-content"
								className="[&:last-child]:pb-6 sm:p-8 p-4 sm:!pb-8 !pb-4"
								// style={{
								// 	backgroundColor:
								// 		"var(--color-primary-tabbg)",
								// }}
							>
								<form
									className="flex flex-col gap-4 sm:gap-6"
									onSubmit={handleSubmit}
								>
									<div className="flex flex-col gap-2.5 sm:gap-4">
										<h3
											className="text-xl sm:text-2xl font-semibold  "
											style={{
												color: "var(--color-foreground)",
											}}
										>
											Start a Project Discussion
										</h3>
										<p className="text-muted-foreground">
											Tell me about your project
											requirements, timeline, and budget.
											I'll provide a detailed proposal and
											timeline.
										</p>
									</div>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
										{/* Full Name */}
										<div className="flex flex-col gap-1 sm:gap-2">
											<label
												data-slot="label"
												className="flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-sm font-medium"
												style={{
													color: "var(--color-foreground)",
												}}
												htmlFor="name"
											>
												Full Name *
											</label>
											<div className="relative">
												<input
													data-slot="input"
													className="file:text-muted-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex w-full min-w-0 rounded-md border px-3 py-1 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-sm sm:text-base h-8 sm:h-12 bg-background/50 transition-colors border-border/20 focus:border-[var(--color-primary)] focus-visible:border-[var(--color-primary)] focus-visible:ring-[3px] focus-visible:ring-[var(--color-primary)]/25"
													id="name"
													placeholder="Your full name"
													name="name"
													value={formData.name}
													onChange={handleInputChange}
													required
												/>
											</div>
										</div>

										{/* Email */}
										<div className="flex flex-col gap-1 sm:gap-2">
											<label
												data-slot="label"
												className="flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-sm font-medium"
												style={{
													color: "var(--color-foreground)",
												}}
												htmlFor="email"
											>
												Email Address *
											</label>
											<div className="relative">
												<input
													data-slot="input"
													className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex w-full min-w-0 rounded-md border px-3 py-1 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-sm sm:text-base h-8 sm:h-12 bg-background/50 transition-colors border-border/20 focus:border-[var(--color-primary)] focus-visible:border-[var(--color-primary)] focus-visible:ring-[3px] focus-visible:ring-[var(--color-primary)]/25"
													id="email"
													placeholder="your.email@example.com"
													type="email"
													name="email"
													value={formData.email}
													onChange={handleInputChange}
													required
												/>
											</div>
										</div>
									</div>
									<div className="flex flex-col gap-1 sm:gap-2">
										<label
											data-slot="label"
											className="flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-sm font-medium"
											style={{
												color: "var(--color-foreground)",
											}}
											htmlFor="subject"
										>
											Project Type *
										</label>
										<div className="relative">
											<select
												id="subject"
												name="subject"
												value={formData.subject}
												onChange={handleInputChange}
												required
												className={`dark:bg-input/30 flex h-12 w-full items-center justify-between rounded-md border px-3 py-2 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-sm sm:text-base bg-background/50 transition-colors border-border/20 focus:border-[var(--color-primary)] focus-visible:border-[var(--color-primary)] focus-visible:ring-[3px] focus-visible:ring-[var(--color-primary)]/25 ${
													formData.subject === ""
														? "text-muted-foreground"
														: ""
												}`}
											>
												<option value="" disabled>
													Select project type
												</option>
												<option value="Full Stack Web Application">
													Full Stack Web Application
												</option>
												<option value="Frontend Development">
													Frontend Development
												</option>
												<option value="Backend API Development">
													Backend API Development
												</option>
												<option value="E-commerce Website">
													E-commerce Website
												</option>
												<option value="Portfolio Website">
													Portfolio Website
												</option>
												<option value="Custom Web Solution">
													Custom Web Solution
												</option>
												<option value="Other">
													Other
												</option>
											</select>
										</div>
									</div>
									<div className="flex flex-col gap-1 sm:gap-2">
										<label
											data-slot="label"
											className="flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-sm font-medium"
											htmlFor="message"
											style={{
												color: "var(--color-foreground)",
											}}
										>
											Project Details *
										</label>

										<div className="relative">
											<textarea
												data-slot="textarea"
												className="placeholder:text-muted-foreground aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border px-3 py-2 outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background/50 transition-colors resize-none text-sm sm:text-base border-border/20 focus:border-[var(--color-primary)] focus-visible:border-[var(--color-primary)] focus-visible:ring-[3px] focus-visible:ring-[var(--color-primary)]/25"
												id="message"
												name="message"
												placeholder={`Please describe your project requirements, including:
• Project scope and objectives
• Timeline and deadline
• Budget range
• Specific technologies or features needed
• Any design preferences or references`}
												rows={6}
												value={formData.message}
												onChange={handleInputChange}
												required
											/>
										</div>
									</div>

									<button
										data-slot="button"
										className="inline-flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap text-xs sm:text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 h-10 rounded-md px-6 has-[>svg]:px-4 w-full"
										type="submit"
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
											className="lucide lucide-send h-4 w-4 mr-2"
											aria-hidden="true"
										>
											<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
											<path d="m21.854 2.147-10.94 10.939"></path>
										</svg>
										Send Project Inquiry
									</button>
									<div className="text-center">
										<p className="text-xs text-foreground">
											By sending this message, you agree
											to discuss project terms and
											pricing. All inquiries are treated
											confidentially.
										</p>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
