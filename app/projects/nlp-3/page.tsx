import Link from "next/link";

export default function ProjectDetailPage() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-2">
        Case Study 1: Demographic Data Analysis Project
      </h1>
      <p className="mb-4">
        <strong>Repository:</strong>{" "}
        <Link
          href="https://github.com/HarshStats/Case-Study-1-Demographic-Data-Analysis-Project"
          className="text-blue-600 underline"
          target="_blank"
        >
          View on GitHub
        </Link>
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Project Overview</h2>
        <p>
          Comprehensive analysis of global life expectancy and under-five mortality
          rates across 227 countries, using IDB (2024) data. Compared trends
          between 2004 and 2024 through rigorous statistical and visual analysis.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Data Science Approach</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Data Cleaning:</strong> Standardized and prepared IDB (2024)
            dataset for analysis.
          </li>
          <li>
            <strong>Exploratory & Inferential Analysis:</strong> Used descriptive
            statistics and hypothesis testing to compare country/regional changes.
          </li>
          <li>
            <strong>Visualization & Reporting:</strong> Generated all
            visualizations and final report in LaTeX, outputting a
            professional-quality PDF.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Sample Visualizations</h2>
        <p>
          You can view all analysis visuals and plots in the full PDF report:
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://github.com/HarshStats/Case-Study-1-Demographic-Data-Analysis-Project/raw/main/Report_1_Harsh_Rana_229989.pdf"
            className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Download the Full Report (PDF)
          </a>
          <a
            href="https://github.com/HarshStats/Case-Study-1-Demographic-Data-Analysis-Project/blob/main/Report_1_Harsh_Rana_229989.pdf"
            className="px-4 py-2 bg-gray-200 text-blue-800 rounded hover:bg-gray-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Preview PDF Online
          </a>
        </div>
        {/* 
        // Optional: Add screenshots if you want to show previews
        <div className="mt-6">
          <img
            src="/assets/life_expectancy_heatmap_preview.png"
            alt="Life Expectancy Heatmap Preview"
            className="rounded w-full mb-2"
          />
          <p className="text-sm italic">
            Preview: Global life expectancy heatmap featured in the report.
          </p>
        </div>
        */}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Tools & Technologies</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>TeX/LaTeX:</strong> For scientific reporting and
            publication-ready visualization.
          </li>
          <li>
            <strong>Python (Optional):</strong> For any data wrangling or
            plotting before LaTeX integration.
          </li>
          <li>
            <strong>Statistical Methods:</strong> Descriptive/inferential stats,
            paired testing.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Key Insights</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Significant global improvements in demographic health indicators over
            20 years.
          </li>
          <li>
            Persistent regional gaps highlighted for targeted policy action.
          </li>
          <li>Clear, reproducible workflow and presentation.</li>
        </ul>
      </section>

      <div className="mt-8">
        <p>
          <strong>See the full analysis and visualizations:</strong>
        </p>
        <div className="flex flex-col gap-2">
          <a
            href="https://github.com/HarshStats/Case-Study-1-Demographic-Data-Analysis-Project/blob/main/Report_1_Harsh_Rana_229989.pdf"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 View the PDF Report
          </a>
          <a
            href="https://github.com/HarshStats/Case-Study-1-Demographic-Data-Analysis-Project"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository & Source Code
          </a>
        </div>
      </div>
    </main>
  );
}