import React from "react";

const ResearchMethodology = () => {
  return (
    <>
      <style>
        {`
          @keyframes blinkingText {
            0% { color: #000; }
            49% { color: #000; }
            60% { color: transparent; }
            99% { color: transparent; }
            100% { color: #000; }
          }
          .blinking {
            animation: blinkingText 0.6s infinite;
          }
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
        `}
      </style>

      <div className="min-h-screen bg-white p-2 sm:p-4 md:p-6">
        <div className="w-[90%] mx-auto bg-[#FFF067] p-2 sm:p-4 md:p-6 text-sm">
          {/* Header - Improved mobile layout */}
          <div className="relative mb-6 md:mb-8 pt-8 sm:pt-4">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold font-['Quicksand']">
              Research Methodology
            </h1>
            <div className="absolute top-0 right-2 sm:right-4 flex flex-col sm:flex-row gap-2 sm:gap-4 text-right">
              <a
                href=""
                className="text-xs sm:text-sm font-bold hover:underline"
              >
                Brochure
              </a>
              <a
                href="https://forms.gle/jzY9GaNSaLdcwmSh6"
                target="_blank"
                rel="noopener noreferrer"
                className="blinking font-bold text-xs sm:text-sm"
              >
                Apply Online
              </a>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Coordinators - Improved mobile layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 px-2">
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base">
                Principal Coordinator :
              </p>
              <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                <li className="ml-4">Dr. Gaurav Trivedi, IIT Guwahati</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base">
                Co-Principal Coordinator :
              </p>
              <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                <li className="ml-4">Dr. Bharat Gupta, NIT Patna</li>
                <li className="ml-4">Dr. J. P. Singh, NIT Patna</li>
                <li className="ml-4">Dr. Ravi K. Maddila, MNIT Jaipur</li>
                <li className="ml-4">
                  Prof. Ratnajit Bhattacharjee, IIT Guwahati
                </li>
                <li className="ml-4">Prof. Sanjeev Manhas, IIT Roorkee</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Course Fee Details - More compact on mobile */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Course Fee Details:
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                Academic (student/faculty): <strong>500 INR</strong>
              </p>
              <p>
                Industry People/ Others: <strong>1000 INR</strong>
              </p>
              <p>
                Foreign Participants: <strong>4000 INR</strong>
              </p>
            </div>
          </div>

          {/* Payment Details - Improved spacing */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Payment Details:
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>Bank Name: Allahabad Bank (Merge to Indian Bank)</p>
              <p>Account Name: NIT Patna</p>
              <p>
                <strong>Account No.: 50380476798</strong>
              </p>
              <p>
                <strong>IFSC Code: IDIB000B810</strong>
              </p>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Resource Persons - Responsive text */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Resource Persons:
            </h2>
            <p className="text-sm sm:text-base">
              <strong>EXPERTS/SPEAKERS -</strong> From IITs/NITs/IIITs and
              industry, research organizations- TBA
            </p>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Course Contents - Improved mobile layout */}
          <div className="mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] text-center mb-3 sm:mb-4">
              Course contents:
            </h2>
            <div className="border-2 border-black">
              <p className="font-bold font-['Quicksand'] mb-3 p-2 sm:p-4 sm:mb-4 text-sm sm:text-base">
                MODULES TOPICS :
              </p>
              <div className="grid bg-[#FFE81C] sm:p-4 grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Column layout adjusted for better mobile viewing */}
                <div className="px-4">
                  <ul className="list-disc space-y-4 text-sm">
                    <li className="break-words">
                      <strong>Introduction to Research Methodology</strong>-
                      Methodology vs Methods; Qualitative vs Quantitative
                      Research; How to write a Literature Review; Synthesizing
                      the research; Strategies to organize and evaluate sources;
                      How to read a paper efficiently; Writing about Methods and
                      Design; Rationale for the proposed design; Methodology for
                      collecting data
                    </li>
                    <li className="break-words">
                      <strong>Presenting Data and Describing Analysis</strong>-
                      How to use tables and figures to present data; Statistical
                      Tools; Introduce, Conclude and write the Abstract; Write
                      an introduction for a study; Final discussion of all of
                      your data and analysis; Address all of the major points of
                      your research in a few lines
                    </li>
                  </ul>
                </div>
                <div className="px-4">
                  <ul className="list-disc space-y-4 text-sm">
                    <li className="break-words">
                      <strong>Managing and Sharing Research Data-</strong> How
                      your research data can best be shared; Available tools and
                      support to make this process as easy as possible;
                      Improving its reusability of shared data
                    </li>
                    <li className="break-words">
                      <strong>Journal Peer Review Process</strong>- Finding the
                      right journal to publish in; Knowing where your &#34;study&#34;
                      fits into the literature; Using quality measures to help
                      you pick a &#34;good&#34; journal; Representing your research so
                      that the journal sees your paper as a good &#34;fit&#34;; Hands-on
                      Practice
                    </li>
                  </ul>
                </div>
                <div className="px-4">
                  <ul className="list-disc space-y-4 text-sm">
                    <li className="break-words">
                      <strong>Engaging readers with visualizations</strong>-
                      Psychology of reading; How readers read and navigate texts
                    </li>
                    <li className="break-words">
                      <strong>Research ethics and integrity</strong>
                    </li>
                    <li className="break-words">
                      <strong>
                        Use of Language Support Tools – Grammarly and Draft
                      </strong>
                    </li>
                    <li className="break-words">
                      <strong>
                        Writing for Research Projects to secure research funding
                      </strong>
                    </li>
                    <li className="break-words">
                      <strong>Introduction to Online Teaching</strong>
                    </li>
                    <li className="break-words">
                      <strong>Google Classroom interface</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Core Team Members - Improved spacing */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Core Team Members, E&ICT Academy, NIT Patna:
            </h2>
            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <p className="font-bold">
                  Dr. Bharat Gupta (CI E & ICT Academy, NIT Patna)
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:bharat@nitp.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    bharat@nitp.ac.in
                  </a>
                </p>
              </div>
              <div>
                <p className="font-bold">
                  Dr. M.P Singh (CO-CI E & ICT Academy, NIT Patna)
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:mps@nitp.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    mps@nitp.ac.in
                  </a>
                </p>
              </div>
              <p>
                Website: <strong>http://old.nitp.ac.in/ict/index.php</strong>
              </p>
            </div>
          </div>

          {/* Contact Information - Responsive spacing */}
          <div className="text-center px-2">
            <p className="font-bold font-['Quicksand'] mb-2 text-sm sm:text-base">
              Contact us :
            </p>
            <div className="space-y-1 text-sm sm:text-base">
              <p>Electronics and ICT Academy</p>
              <p>National Institute of Technology, Patna</p>
              <p>AshokRajpath, Patna 800005</p>
              <p>
                <span className="font-bold font-['Quicksand']">Email:</span>{" "}
                eictapatna@nitp.ac.in
              </p>
              <p>
                <span className="font-bold font-['Quicksand']">Website:</span>{" "}
                http://old.nitp.ac.in/ict
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchMethodology;
