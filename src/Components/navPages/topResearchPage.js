import TopResearch from "../feedpage/topResearch"

function TopResearchPage() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-3'>
        <div className= "h-fit bg-slate-300 ">
            <section class="py-10 bg-white sm:py-16 lg:py-24">
                <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-2xl">Read below about on campus research!</h2>
                    <div class="flow-root mt-12 sm:mt-16">
                        <div class="divide-y divide-gray--200 -my-9">
                            <div class="py-9">
                                <p class="text-xl font-semibold text-black">How to apply?</p>
                                <p class="mt-3 text-base text-gray-600">Interested in joining an on-campus research project? We welcome students who are passionate about research and eager to contribute to ongoing studies. To apply, simply follow the link below. This will take you to a list of available research opportunities, where you can learn more about each project and submit your application.</p>
                                <p class="mt-3 text-base text-gray-600">You can find the application link <a href="" className="font-semibold text-blue-600">here</a></p>
                            </div>

                            <div class="py-9">
                                <p class="text-xl font-semibold text-black">What payment method do you support?</p>
                                <p class="mt-3 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam.</p>
                            </div>

                            <div class="py-9">
                                <p class="text-xl font-semibold text-black">Do you know NKU hosts more than 10 research each summer?</p>
                                <p class="mt-3 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <div class="py-9">
                                <p class="text-xl font-semibold text-black">How do you provide support?</p>
                                <p class="mt-3 text-base text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">support@Celebration.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className= "h-fit bg-slate-300 lg:col-span-2">
          <TopResearch inResearchPage = {true}/>
          <TopResearch inResearchPage={true}/>
        </div>
    </div>
  )
}

export default TopResearchPage
