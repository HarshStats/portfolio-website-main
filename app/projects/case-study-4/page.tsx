import Link from "next/link";

export default function ProjectDetailPage() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-2">
        Case Study 2: Berlin Marathon Performance Analysis
      </h1>
      <p className="mb-4">
        <strong>Repository:</strong>{" "}
        <Link
          href="https://github.com/HarshStats/Case-Study-2-Berlin-Marathon-Performance-Analysis"
          className="text-blue-600 underline"
          target="_blank"
        >
          View on GitHub
        </Link>
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Project Overview</h2>
        <p>
          Investigated age-related differences in finish times for female
          participants in the Berlin Marathon. This analysis covers six distinct
          age groups, utilizing a combination of exploratory data analysis,
          advanced visualization, and statistical hypothesis testing.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Data Science Approach</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Data Processing:</strong> Imported and cleaned real-world
            marathon data using Python and Jupyter Notebook. Grouped participants
            into six defined age brackets for comparative analysis.
          </li>
          <li>
            <strong>Exploratory Data Analysis (EDA):</strong> Visualized finish
            time distributions per age group using boxplots, histograms, and
            density plots. Identified trends and outliers in race performance.
          </li>
          <li>
            <strong>Statistical Analysis:</strong> Applied ANOVA to test for
            overall differences in finish times across age groups. Conducted
            post-hoc pairwise comparisons (Tukey’s HSD) to pinpoint significant
            group differences. Calculated descriptive statistics (mean, median,
            IQR) for each age bracket.
          </li>
          <li>
            <strong>Visualization:</strong> Created clear, publication-quality
            plots directly within Jupyter Notebooks (matplotlib, seaborn). Exported
            summary tables and visuals for reporting.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Sample Visualizations</h2>
        <p>Preview all figures and analysis in the full report PDF:</p>
        <div className="flex gap-4 mt-4">
          <a
            href="/pdfs/Berlin_Marathon_Age_Performance_Analysis.pdf"
            className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Download the Full Report (PDF)
          </a>
          <a
            href="/pdfs/Berlin_Marathon_Age_Performance_Analysis.pdf"
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
            src="/images/finish_times_by_age_group.png"
            alt="Finish Times by Age Group"
            className="rounded w-full mb-2"
          />
          <p className="text-sm italic">
            Boxplot: Berlin Marathon finish times by age group.
          </p>
        </div>
        */}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Tools & Technologies</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Python (pandas, matplotlib, seaborn, scipy, statsmodels):</strong>{" "}
            Data wrangling, visualization, and statistical testing.
          </li>
          <li>
            <strong>Jupyter Notebook:</strong> Reproducible analysis and reporting.
          </li>
          <li>
            <strong>LaTeX/PDF Export:</strong> For high-quality final report
            (optional if you exported notebook to PDF).
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Key Insights</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Statistically significant differences in average finish times across
            female age groups.
          </li>
          <li>
            Older and younger groups exhibited distinct performance patterns,
            with clear trends highlighted in visualizations.
          </li>
          <li>
            Provided evidence-based recommendations for athletes and race
            organizers.
          </li>
        </ul>
      </section>

      <div className="mt-8">
        <p>
          <strong>See the full analysis and visualizations:</strong>
        </p>
        <div className="flex flex-col gap-2">
          <a
            href="/pdfs/Berlin_Marathon_Age_Performance_Analysis.pdf"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 View the PDF Report
          </a>
          <a
            href="https://github.com/HarshStats/Case-Study-2-Berlin-Marathon-Performance-Analysis"
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