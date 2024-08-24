import TopResearch from "../feedpage/topResearch";
import Footer from "../footer/footer";
function TopResearchPage() {
  return (
    <div className="px-3">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="border rounded-md ">
          <h1 className=" bg-gray-300 px-6 py-4 font-bold text-lg">
            Read below about on campus research!
          </h1>
          <section className="py-10 h-screen bg-white sm:py-16 lg:py-24 overflow-y-auto">
            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="">
                <div className="divide-y-2 divide-blue-500 -my-9">
                  <div>
                    <p className="text-xl font-semibold text-black">
                      How to apply?
                    </p>
                    <p className="mt-3 text-base text-gray-600">
                      Interested in joining an on-campus research project? We
                      welcome students who are passionate about research and
                      eager to contribute to ongoing studies. To apply, simply
                      follow the link below. This will take you to a list of
                      available research opportunities, where you can learn more
                      about each project and submit your application.
                    </p>
                    <p className="mt-3 mb-3 text-base text-gray-600">
                      You can find the application link{" "}
                      <a href="" className="font-semibold text-indigo-600">
                        here
                      </a>
                    </p>
                  </div>

                  <div className="py-9">
                    <p className="text-xl font-semibold text-black">
                      What payment method do you support?
                    </p>
                    <p className="mt-3 text-base text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.Ut enim ad minim veniam.
                    </p>
                  </div>

                  <div className="py-9">
                    <p className="text-xl font-semibold text-black">
                      Do you know NKU hosts more than 10 research each summer?
                    </p>
                    <p className="mt-3 text-base text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  <div className="py-9">
                    <p className="text-xl font-semibold text-black">
                      How do you provide support?
                    </p>
                    <p className="mt-3 text-base text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt{" "}
                      <a
                        href="#"
                        title=""
                        className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                      >
                        support@getResearch.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="h-screen overflow-y-auto bg-slate-300 lg:col-span-2 border rounded-md right">
          <h1 className=" bg-gray-300 px-6 py-4 font-bold text-lg sticky top-0">
            Read below about on campus research!
          </h1>
          <TopResearch inResearchPage={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TopResearchPage;
