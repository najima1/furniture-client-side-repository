import { useState } from "react";
import { Tab } from "@headlessui/react";
import logo from "../../image/7.0.jpg";
import logo2 from "../../image/add-15.jpg";
import logo3 from "../../image/banner-3.jpg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tab_section() {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        testimonials: "Testimonials",
        name: "Scelerisque Pulvinar",
        location: "Dhaka",
        title: "What Clients Saying",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        image: `${logo}`,
        commentCount: 5,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 2,
        testimonials: "Testimonials",
        title: "What Clients Saying",
        name: "Cole Lounge Chair",
        location: "Monshigonj",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        image: `${logo2}`,
        commentCount: 5,
        shareCount: 2,
      },
    ],
    Trending: [
      {
        id: 2,
        testimonials: "Testimonials",
        title: "What Clients Saying",
        name: "Leighton Lounge Chair",
        location: "Sylhet",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        image: `${logo3}`,
        commentCount: 5,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="container w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <div key={post.id}>
                    <section className="bg-white dark:bg-[#c7ecee]">
                      <div className="max-w-6xl px-6 py-10 mx-auto">
                        <p className="text-xl font-medium text-blue-500 ">
                          {post.testimonials}
                        </p>

                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize">
                          {post.title}
                        </h1>

                        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                          <div className="absolute w-full bg-[#487eb0] -z-10 md:h-96 rounded-2xl"></div>

                          <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                            <img
                              className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[30rem] lg:w-[26rem] md:rounded-2xl"
                              src={post.image}
                              alt="client photo"
                            />

                            <div className="mt-2 md:mx-6">
                              <div>
                                <p className="text-xl font-medium tracking-tight text-white">
                                  {post.name}
                                </p>
                                <p className="text-blue-200 ">
                                  Marketing Manager at Stech
                                </p>
                              </div>

                              <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                                {post.text}
                              </p>

                              <div className="flex items-center justify-between mt-6 md:justify-start">
                                <button
                                  title="left arrow"
                                  className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15 19l-7-7 7-7"
                                    />
                                  </svg>
                                </button>

                                <button
                                  title="right arrow"
                                  className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </main>
                      </div>
                    </section>
                  </div>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
