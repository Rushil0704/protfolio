import React, { useState } from "react";
import { Footer } from "./Footer";

function Project() {
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
			tags: ["MVC", "RESTful", "Cloudinary"],
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
			tags: ["JWT", "RBAC", "Admin"],
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
			tags: ["PHP", "Bootstrap", "MySQL"],
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
			tags: ["Socket.IO", "JWT", "Realtime"],
		},
	];

	type Project = {
		title: string;
		description: string;
		image: string;
		technologies: string[];
		features: string[];
		githubUrl: string;
		liveUrl: string;
		category: string;
		tags: string[];
	};
	const [selectedProject, setSelectedProject] = useState<Project | null>(
		null
	);

	return (
		<section
			id="projects"
			className="sm:py-16 py-8 bg-gradient-to-b from-[var(--color-muted)]/30 to-[var(--color-background)] relative overflow-hidden"
			style={{ backgroundColor: "var(--color-bgc-bgSelect)" }}
		>
			<div className="container relative z-10 flex flex-col gap-12 sm:gap-16">
				<div className="text-center flex flex-col gap-4 sm:gap-6">
					<h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[var(--color-foreground)] via-[var(--color-primary)] to-[var(--color-foreground)] bg-clip-text text-transparent pb-2 sm:text-center text-start">
						Recent Projects
					</h2>
					<p className="text-lg sm:text-xl text-foreground max-w-3xl mx-auto leading-relaxed sm:text-center text-start">
						A showcase of my recent work in full-stack development,
						featuring modern web applications built with the MERN
						stack and other cutting-edge technologies.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className="bg-background rounded-xl shadow-lg p-6 flex flex-col items-center"
						>
							<img
								src={project.image}
								alt={project.title}
								className="rounded-lg w-full h-56 object-cover mb-4"
							/>
							<h3 className="text-2xl font-bold mb-2">
								{project.title}
							</h3>
							<button
								className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
								onClick={() => setSelectedProject(project)}
							>
								View Details
							</button>
						</div>
					))}
				</div>

				{/* Modal for Project Details */}
				{selectedProject && (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
						<div className="bg-background rounded-xl shadow-2xl w-full max-w-2xl mx-auto flex flex-col max-h-[90vh] overflow-y-auto">
							{/* Header */}
							<div className="sticky top-0 z-10 bg-background border-b px-6 py-4 flex items-center justify-between">
								<span className="text-xl font-bold">
									Project Details
								</span>
								<button
									onClick={() => setSelectedProject(null)}
									className="text-2xl font-bold hover:text-primary"
								>
									×
								</button>
							</div>
							{/* Main Content */}
							<div className="p-6 flex flex-col gap-4">
								<img
									src={selectedProject.image}
									alt={selectedProject.title}
									className="rounded-lg w-full h-56 object-cover mb-4"
								/>
								<h2 className="text-2xl font-bold mb-2">
									{selectedProject.title}
								</h2>
								<div className="flex flex-wrap gap-2 mb-2">
									{selectedProject.tags &&
										selectedProject.tags.map((tag) => (
											<span
												key={tag}
												className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold"
											>
												{tag}
											</span>
										))}
								</div>
								<p className="text-base text-foreground leading-relaxed mb-2">
									{selectedProject.description}
								</p>
								<div>
									<h4 className="text-sm font-semibold mb-1">
										Key Features:
									</h4>
									<ul className="list-disc ml-6">
										{selectedProject.features.map((f) => (
											<li key={f}>{f}</li>
										))}
									</ul>
								</div>
								<div>
									<h4 className="text-sm font-semibold mb-1">
										Tech Stack:
									</h4>
									<div className="flex flex-wrap gap-2 mt-2">
										{selectedProject.technologies.map(
											(tech) => (
												<span
													key={tech}
													className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold"
												>
													{tech}
												</span>
											)
										)}
									</div>
								</div>
								<div className="flex gap-4 mt-4">
									{selectedProject.githubUrl && (
										<a
											href={selectedProject.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 underline"
										>
											View Code
										</a>
									)}
									{selectedProject.liveUrl && (
										<a
											href={selectedProject.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="text-green-600 underline"
										>
											Live Demo
										</a>
									)}
								</div>
							</div>
							{/* Footer */}
							<div className="sticky bottom-0 z-10 bg-background border-t px-6 py-4 flex items-center justify-center">
								<Footer />
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default Project;
