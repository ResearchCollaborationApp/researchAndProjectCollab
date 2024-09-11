import { Link } from "react-router-dom";

function TopResearch({ inResearchPage }) {
  const researchArray = [
    {
      nameOfResearch: "AI-Powered Education Tools",
      description: "This research explores the development and impact of artificial intelligence in creating personalized education tools that adapt to individual learning styles."
    },
    {
      nameOfResearch: "Sustainable Energy Solutions",
      description: "This study investigates innovative approaches to sustainable energy, focusing on solar and wind energy integration in urban environments."
    },
    {
      nameOfResearch: "Quantum Computing Applications",
      description: "An in-depth analysis of how quantum computing can revolutionize industries like cryptography, material science, and pharmaceutical development."
    },
    {
      nameOfResearch: "Climate Change Mitigation Strategies",
      description: "This research focuses on innovative strategies to mitigate the effects of climate change, including carbon capture and renewable energy adoption."
    },
    {
      nameOfResearch: "Advanced Robotics in Healthcare",
      description: "Exploring the use of advanced robotics in medical surgeries, rehabilitation, and elderly care to improve patient outcomes."
    },
    {
      nameOfResearch: "Neuroscience and Cognitive Development",
      description: "A study on how neuroscience contributes to our understanding of cognitive development and the potential for enhancing learning processes."
    },
    {
      nameOfResearch: "Blockchain Technology in Supply Chain Management",
      description: "This research examines the role of blockchain technology in improving transparency, security, and efficiency in supply chain management."
    },
    {
      nameOfResearch: "Genetic Engineering and CRISPR",
      description: "An exploration of the ethical and scientific implications of genetic engineering and CRISPR technology in modern medicine."
    },
    {
      nameOfResearch: "Cybersecurity Threats and Defense Mechanisms",
      description: "A comprehensive study on emerging cybersecurity threats and the development of advanced defense mechanisms to protect data integrity."
    },
    {
      nameOfResearch: "Autonomous Vehicles and Urban Planning",
      description: "Investigating the impact of autonomous vehicles on urban planning, traffic management, and future city infrastructure."
    }
  ];

  return (
    <div className="divide-y-2 divide-blue-500 h-screen overflow-y-auto">
      {researchArray.map((research, index) => (
        <div key={index} className="p-4 bg-white">
          <span className="inline-block rounded bg-blue-600 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </span>
          <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
            {research.nameOfResearch}
          </h3>
          <p
            className={`mt-2 ${
              inResearchPage ? "line-clamp-none" : "line-clamp-3"
            } text-md/relaxed text-gray-800`}
          >
            {research.description}
          </p>
          {inResearchPage ? (
            <div className="flex gap-8">
              <Link
                to="#"
                className="mt-4 inline-flex items-center gap-1 text-md font-bold text-indigo-600"
              >
                Talk to Professor
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  fill="currentColor"
                  className="size-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                to="#"
                className="mt-4 inline-flex items-center gap-1 text-md font-bold text-indigo-600"
              >
                Add to your readings
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                  />
                </svg>
              </Link>
            </div>
          ) : (
            <Link
              to="topresearchpage"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-semibold"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default TopResearch;
