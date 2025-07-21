const Portsecond = () => {
    return (
        <div className="flex h-screen w-screen bg-gray-900 justify-center items-center">
        <div className="sm:flex sm:flex-col sm:gap-0 sm:w-7xl sm:h-10/12 sm:m-0 flex flex-col gap-3 w-sm h-12/12 mb-0 ">
          <div className="sm:flex sm:px-4 sm:mb-15 sm:mt-0 sm:text-5xl sm:font-extrabold text-white flex text-4xl mt-6 mb-6 font-extrabold italic">
            Education
          </div>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="blue"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2019</time>
                <div className="text-lg">Secondary Examination</div>
                Passed Secondary Examination from Nava Nalanda High School with 82%.This result marks an important milestone in my academic journey, 
                and I am grateful to my teachers, 
                family, and friends who supported and guided me throughout. I look forward to continuing my studies with the 
                same dedication and hard work.
              </div>
              <hr className="bg-blue-600"/>
            </li>
            <li>
              <hr className="bg-blue-600"/>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="blue"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10">
                <time className="font-mono italic">2021</time>
                <div className="text-lg ">Higher Secondary Examination</div>
                I completed my Higher Secondary from Nava Nalanda High School with 79%. It was a valuable learning phase where I focused on building my 
                skills and knowledge, and I’m now looking forward to exploring new opportunities ahead.
                <div className="sm:py-0 py-4"></div>
              </div>
              <hr className="bg-blue-600"/>
            </li>
            
            <li>
              <hr className="bg-blue-600"/>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="blue"
                  className="h-5 w-5">
                
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2023-2027</time>
                <div className="text-lg">Graduation</div>
                Currently pursuing my BCA (Bachelor of Computer Applications) at Techno Main Salt Lake, started in 2023 and expected to complete in 2027. 
                Excited to keep learning and building my skills in the tech field.
              </div>
              <hr className="bg-blue-600"/>
            </li>
          </ul>
        </div>
      </div>
    )
};

export default Portsecond;