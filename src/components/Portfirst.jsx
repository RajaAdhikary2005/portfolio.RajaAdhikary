import React from "react";

const Portfirst = () => {
    return (
        <div className="flex h-screen w-screen bg-gray-900 justify-center">
        <div className="fixed w-screen h-16 z-1">
          <nav class="bg-gray-800">
            <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
              <div class="relative flex h-16 items-center justify-between">
                <div class="flex flex-wrap items-center justify-center sm:justify-start">
                  <div class="flex md:space-x-4">
                    <a href="#" aria-current="page" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Home</a>
                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Skills</a>
                  </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div class="relative ml-3">
                    <div>
                      <img src="./src/assets/Photo.jpg" alt="" className="size-8 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="bg-gray-800 sm:flex sm:w-5xl sm:h-7/12 sm:my-45 sm:justify-start grid grid-rows-2 w-90 h-8/12 my-40  justify-center shadow-2xl rounded-4xl">
          <div className="sm:flex sm:w-sm sm:h-full sm:m-0 sm:rounded-tl-4xl sm:rounded-bl-4xl justify-items-center">
            <div className="sm:flex sm:w-sm sm:h-full sm:m-0 sm:rounded-none flex w-50 h-50 my-10 rounded-full overflow-hidden">
              <img src="src\assets\Photo.jpg" className="w-full h-full object-cover sm:rounded-tl-4xl sm:rounded-bl-4xl" />
            </div>
          </div>
          <div className="sm:flex sm:flex-col sm:w-lg sm:h-9/12 sm:m-17 sm:justify-center sm:text-start">
            <div class="sm:flex sm:items-center sm:justify-center sm:min-h-screen sm:px-4 ">
              <div class=" text-white sm:max-w-xl">
                <h1 class="text-3xl sm:text-4xl sm:text-start font-bold mb-4 text-center">
                  Hi, I'm Mriganka
                </h1>
                <p class="text-lg sm:text-xl sm:text-start italic font-medium mb-2 text-center">
                  Frontend Developer & Gamer, blending creativity with code.
                </p>
                <p class="text-lg sm:text-xl sm:block font-medium  text-gray-400 hidden">
                  Building modern web experiences — and winning battles after hours.
                </p>
                <div className="mt-6 sm:text-start text-center">
                  <a href="#projects" class="inline-block px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition ">
                    View My Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Portfirst;