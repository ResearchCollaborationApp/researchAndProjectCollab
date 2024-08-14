import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Navigation from './homeNavigation';
export default function Home() {
  const sections = [
    {
      title: "Add your ideas",
      description: "Submit your ideas now and take the first step toward meaningful collaborations and academic growth. Let your creativity and curiosity lead you to new opportunities and valuable connections within our university community!",
      animation: "https://lottie.host/embed/abff6c67-2510-4f1b-8713-9359c1578120/ZjEeTPcRiS.json",
      linkText: "Start today"
    },
    {
      title: "Collab with professors",
      description: "Collaborate with esteemed researchers and professors on campus to turn your ideas into reality. By partnering with experts in your field, you'll gain invaluable insights, mentorship, and the chance to contribute to significant academic advancements.",
      animation: "https://lottie.host/embed/c7ca3248-6d45-4967-8d13-7bc37f294379/51NdKrrdtq.json",
      linkText: "Meet up"
    },
    {
      title: "Find like-minded researchers!",
      description: "Connect with like-minded individuals on campus and explore exciting collaboration opportunities! By finding researchers whose work aligns with your ideas, you can engage in meaningful discussions, share insights, and embark on projects that spark your curiosity.",
      animation: "https://lottie.host/embed/70ff448e-2858-43b5-853f-437896380be6/oEuzQgyOt3.json",
      linkText: "Find now"
    },
    {
      title: "Delve into your research",
      description: "By delving into collaborative research projects, you’ll not only expand your knowledge but also build valuable relationships with peers who are equally enthusiastic about exploration and innovation.",
      animation: "https://lottie.host/embed/ed5e5a6a-487e-42f6-ad50-cde62d966532/Lapy98WmUB.json",
      linkText: "Begin research"
    }
  ];

  return (
    <>
      {sections.map((section, index) => (
          <section className="relative">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className={`relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full ${index % 2 === 1 ? '' : 'lg:order-last'}`}>
                  <iframe src={section.animation} className="w-full h-full"></iframe>
                </div>
                <div className="lg:py-24">
                  <h2 className="text-3xl font-bold sm:text-4xl">{section.title}</h2>
                  <p className="mt-4 text-gray-600">
                    {section.description}
                  </p>
                  <Link
                    to="/signin"
                    className="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition transform duration-500 ease-in-out hover:scale-110"
                  >
                    {section.linkText}
                  </Link>
                </div>
              </div>
            </div>
            {/* SVG line connecting to the next section */}
            {index < sections.length - 1 && (
              <svg
                className="absolute left-0 right-0 hidden lg:block md:block"
                style={{ top: 'calc(100% - 64px)', pointerEvents: 'none' }} // Adjust 64px to match the height of the iframe
                viewBox="0 0 800 100"
              >
                <path
                  d={`M ${index % 2 === 0 ? 600 : 175} 0 C ${index % 2 === 0 ? 700 : 100} 40, ${index % 2 === 0 ? 400 : 400} 60, ${index % 2 === 0 ? 350 : 400} 100`} // Control points adjusted for direction
                  stroke="#000" // Line color
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </section>
      ))}
      <Footer/>
    </>
  );
}

