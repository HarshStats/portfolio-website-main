"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

// Import images directly (adjust if needed)
import corpcomment from "@/public/corpcomment.gif";
import NN from "@/public/NN.gif";
import NLP from "@/public/NLP.png";
import Prediction from "@/public/Prediction.png";

// Define only the four projects you want to show
const homepageProjects = [
	{
		title: "5+ University Projects",
		description:
			"Check out my University projects, that include various regression, classification, and Bayesian models case studies.",
		tags: ["Python", "R", "SQL", "Machine Learning", "Bayesian Data Analysis"],
		imageUrl: corpcomment,
		githubUrl: "https://github.com/HarshStats",
		projectUrl: "https://github.com/HarshStats",
		filter: "university",
	},
	{
		title: "5+ Deep Learning Projects",
		description:
			"A collection of deep learning projects, including image classification, object detection, and generative models.",
		tags: ["TensorFlow", "PyTorch", "Neural Networks", "Computer Vision"],
		imageUrl: NN,
		githubUrl: "https://github.com/HarshStats",
		projectUrl: "https://github.com/HarshStats",
		filter: "deep",
	},
	{
		title: "5+ NLP Projects",
		description:
			"A collection of NLP projects, including text classification, sentiment analysis, and named entity recognition.",
		tags: ["Text Classification", "Sentiment Analysis", "Transformer Models", "BERT"],
		imageUrl: NLP,
		githubUrl: "https://github.com/HarshStats",
		projectUrl: "https://github.com/HarshStats",
		filter: "nlp",
	},
	{
		title: "5+ Prediction Models Projects",
		description:
			"A collection of prediction models projects, including time series forecasting and regression analysis.",
		tags: [
			"Time Series Forecasting",
			"Regression Analysis",
			"Customer Churn Prediction",
		],
		imageUrl: Prediction,
		githubUrl: "https://github.com/HarshStats",
		projectUrl: "https://github.com/HarshStats",
		filter: "prediction",
	},
];

export default function Projects() {
	const { ref } = useSectionInView("Projects", 0.5);

	return (
		<section ref={ref} id="projects" className="scroll-mt-28 mb-28">
			<SectionHeading>My 20+ End to End Projects</SectionHeading>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{homepageProjects.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
			<div className="flex justify-center mt-8">
				<Link
					href="/projects"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition font-semibold"
				>
					View All
				</Link>
			</div>
		</section>
	);
}
