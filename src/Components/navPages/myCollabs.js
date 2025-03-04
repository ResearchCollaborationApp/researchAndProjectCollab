import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Modal from "./modal";
import Board from "./board";
import Footer from "../footer/footer";

function MyCollabs() {
  const [open, setOpen] = useState(false);
  const boards = useLoaderData();

  //this is for the form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setOpen(false);
    console.log(data);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-5">
        <div className="h-screen overflow-y-auto lg:col-span-2  bg-white">
          <h1 className="bg-white border-b-2 px-6 h-20 mx-auto py-4 font-bold text-xl sticky top-0">
            Your collaboration board
          </h1>
          {boards.length > 0 ? (
            <Board boards={boards} />
          ) : (
            <div className="my-20 flex flex-col items-center justify-center gap-3">
              <iframe
                className="size-80"
                src="https://lottie.host/embed/edd414f7-b501-4106-b7f4-53875271a105/VN9nA7VwET.json"
              ></iframe>
              <span>You do not have any collaborations so far!</span>
            </div>
          )}
          <div className="flex justify-center p-3">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex bg-orange-500 text-white px-8 py-3 text-md font-semibold transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
            >
              Create New Board
            </button>
          </div>

          {/* <Board boards={boards} /> */}
          <Modal open={open}>
            <div className="p-6 rounded bg-gray-100 flex items-center justify-center ">
              <div className="container max-w-screen-lg mx-auto">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-xl text-gray-600">
                    New Collaboration Form
                  </h2>
                  <button onClick={() => setOpen(false)}>
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
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-500 mb-6">
                  Fill the following form to create a board
                </p>

                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="text-gray-600">
                      <p className="font-medium text-lg">Board Details</p>
                      <p>Please provide relevant descriptive information.</p>
                    </div>
                    <div className="lg:col-span-2">
                      <form
                        action=""
                        onSubmit={handleSubmit(onSubmit)}
                        className="grid gap-4 gap-y-7 text-sm grid-cols-1 md:grid-cols-5"
                      >
                        <div className="md:col-span-5">
                          <label for="boardname">Board Name</label>
                          <input
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="Name that defines a board"
                            {...register("boardname", {
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            })}
                            type="text"
                          />
                          {errors.boardname && (
                            <div>{errors.boardname.message}</div>
                          )}
                        </div>
                        <div className="md:col-span-5">
                          <label for="description">Description</label>
                          <input
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="Small description about the board"
                            {...register("description", {
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            })}
                            type="text"
                          />
                          {errors.description && (
                            <div>{errors.description.message}</div>
                          )}
                        </div>
                        <div className="md:col-span-3">
                          <label for="department">Department</label>
                          <select
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="This will be a selection"
                            {...register("department", {
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            })}
                            type="text"
                          >
                            <option value="Engineering">Engineering</option>
                            <option value="Health and Humann Services">
                              Health
                            </option>
                            <option value="Business">Business</option>
                            <option value="Law">Law</option>
                          </select>
                          {errors.department && (
                            <div>{errors.department.message}</div>
                          )}
                        </div>

                        <div className="md:col-span-2">
                          <label for="majors">Majors</label>
                          <select
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="This will be a selection"
                            {...register("majors", {
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            })}
                            type="text"
                          >
                            <option value="Computer Science">
                              Computer Science
                            </option>
                            <option value="Accounting">Accounting</option>
                            <option value="Business Informatics System">
                              Business Informatics System
                            </option>
                          </select>
                          {errors.majors && <div>{errors.majors.message}</div>}
                        </div>

                        <div className="md:col-span-3">
                          <label for="schoolyear">School year</label>
                          <select
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="This will be a selection"
                            {...register("schoolyear", {
                              required: {
                                value: false,
                              },
                            })}
                            type="text"
                          >
                            <option value="Freshman">Freshman</option>
                            <option value="Sophomore">Sophomore</option>
                            <option value="Junior">Junior</option>
                            <option value="Senior">Senior</option>
                          </select>
                          {errors.schoolyear && (
                            <div>{errors.schoolyear.message}</div>
                          )}
                        </div>

                        <div className="md:col-span-3">
                          <label for="skills">Skills</label>
                          <input
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="This will be a selection"
                            {...register("skills", {
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            })}
                            type="text"
                          />
                          {errors.skills && <div>{errors.skills.message}</div>}
                        </div>

                        <div className="md:col-span-5 text-right mt-3">
                          <div className="inline-flex items-end gap-5">
                            <button
                              onClick={() => setOpen(false)}
                              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                        {errors.myform && <div>{errors.myform.message}</div>}
                        {errors.blocked && <div>{errors.blocked.message}</div>}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
        <div className="rounded-md ">
          <h1 className="bg-white border-b-2 px-6 py-4 h-20 font-bold text-xl">
            Learn below what a collaboration is!
          </h1>
          <section className="py-10 h-screen bg-white overflow-y-auto">
            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="divide-y-2 divide-indigo-300">
                <div className="py-9">
                  <p className="text-xl font-semibold text-black">
                    What is a collaboration?
                  </p>
                  <p className="mt-3 text-base text-gray-600">
                    {" "}
                    A collaboration in getResearch is basically a mutual
                    agreement between two or more students who come up together
                    to work on a project that might be difficult for a single
                    person to do it on their own.
                  </p>
                </div>

                <div className="py-9">
                  <p className="text-xl font-semibold text-black">
                    How does it help?
                  </p>
                  <p className="mt-3 text-base text-gray-600">
                    There are many students around campus who are either working
                    on their personal or group projects. While developing
                    something they might need help from a different person. So
                    once you create a collaboration board you basically say
                    others that you are open to collaborate or are eagerly
                    looking for people who have similar interests and are open
                    to collaborate.
                  </p>
                </div>

                <div className="py-9">
                  <p className="text-xl font-semibold text-black">
                    How do I create a collaboration?
                  </p>
                  <p className="mt-3 text-base text-gray-600">
                    In the right under the "your collaboration board" you will
                    see the collaborations that you have been working on. If you
                    do not have any you have an option to create a
                    collaboration. Once you click that button you will be able
                    to fill a form which will create your collaboration board
                    and it will be public and shared as a notification to all
                    the people that have the similar skills and major that you
                    targeted.
                  </p>
                </div>

                <div className="py-9">
                  <p className="text-xl font-semibold text-black">
                    What after collaboration?
                  </p>
                  <p className="mt-3 text-base text-gray-600">
                    After you create a collaboration board, you and your team
                    members will be able to post the progress of your work and
                    you will have a separate online discussion room where you
                    can discuss about your project and also publish the project
                    as a post.
                  </p>
                </div>
                <div className="py-9">
                  <p className="text-xl font-semibold text-black">
                    Don't forget to give a shou out to getResearch team?
                  </p>
                  <p className="mt-3 text-base text-gray-600">
                    You do not have to give any special praise to give a shout
                    out to getResearch team just create and collaborate on many
                    projects that you can! Don't forget to Rock-on!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default MyCollabs;
