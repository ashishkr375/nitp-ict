import React from "react";

const Matlab = () => {
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
              Advanced Optimization Techniques and Hands-on with MATLAB/SCILAB
            </h1>
            <div className="absolute top-0 right-2 sm:right-4 flex flex-col sm:flex-row gap-2 sm:gap-4 text-right">
              <a
                href=""
                className="text-xs sm:text-sm font-bold hover:underline"
              >
                Brochure
              </a>
              <a
                href="https://forms.gle/L3EQ2PKx1dkTWFPL8"
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
                <li className="ml-4">Dr. S J Nanda</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base">
                Joint- Principal Coordinators :
              </p>
              <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                <li className="ml-4">Dr. J. P. Singh, NIT Patna</li>
                <li className="ml-4">Dr. Rakesh Ranjan, NIT Patna</li>
                <li className="ml-4">Dr. Prashant K. Jain, IIITDM Jabalpur</li>
                <li className="ml-4">Dr. Ila Sharma, MNIT Jaipur</li>
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
              Speakers:
            </h2>
            <p className="text-sm sm:text-base">
              1) Prof. Ganapati Panda, Fellow INAE, Fellow NASI, Former Dy.
              Director and Prof. Emeritus, IIT Bhubaneswar, 2) Dr. Nithin V.
              George, Associate Professor, Dept. of Electrical Engineering, IIT
              Gandhinagar, 3) Dr. Pyari M. Pradhan, Assistant Professor, Dept.
              of Electronics and Communication Engg., IIT Roorkee 4) Dr.
              Sitanshu Sekhar Sahu, Assistant Professor, Dept. of Electronics
              and Communication Engg., Birla Institute of Technology Mesra 5)
              Dr. Jagdish Chand Bansal, Associate Professor, Dept. of
              Mathematics, South Asian University, New Delhi 6) Dr. Sriparna
              Saha, Associate Professor, Dept. of Computer Science and
              Engineering, IIT Patna 7) Dr Prashant K. Jain, IIITDMJ 8) Prof.
              Rajesh Kumar, MNIT Jaipur 9) Dr. Satyasai Jagannath Nanda, MNIT
              Jaipur
            </p>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Course Contents - Improved mobile layout */}
          <div className="mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] text-center mb-3 sm:mb-4">
              Course contents:
            </h2>
            <div className="border-2 border-black">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-4 text-left font-['Quicksand'] w-16">
                        S.No.
                      </th>
                      <th className="p-4 text-left font-['Quicksand']">
                        MODULES TOPICS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#FFE81C] text-base">
                    {[
                      "<strong>Fundamental of Optimization-</strong> Unconstrained and Constrained Optimization, Linear Programming, Graphical Method, Symmetric Dual Problems, Simplex Method, Derivative based Optimization, Newton’s Method, Least Mean Square Method.",

                      "<strong>	Nature Inspired Optimization-</strong>  Multi-modal function Optimization, Evolutionary Computation (Genetic algorithm, Genetic Programming, Differential Evolution, Social Spider Optimization)<br>Swarm Intelligence (Particle Swarm Optimization, Ant Colony Optimization, Cat Swarm Optimization, Cuckoo-search, Grey Wolf Optimization, Whale Optimization), Bio-Inspired Optimization (Artificial Immune System, Bacterial Foraging Optimization), Physical Algorithms (Simulated Annealing, Colliding Bodies Optimization, Gravitational Search Optimization).",

                      "<strong>Multi-objective Optimization</strong> Non-dominated Solutions, Non-dominated Sorted Genetic Algorithm (NSGA-II), Multi objective Particle Swarm Optimization, Many-objective Optimization, NSGA-III.",

                      "<strong>Applications-</strong> Benchmark mathematical function optimization, Linear and Nonlinear System Identification, Dynamic System Identification, Communication Channel Equalization, Device Modeling, Forecasting/Prediction of time series, Data Classification and Clustering, Hybridization of optimization techniques with Neural Networks and Deep Neural Networks, genomic signal processing.",
                    ].map((topic, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0 ? "bg-[#FFE81C]" : "bg-[#FFF067]"
                        }
                      >
                        <td className="p-4 align-top">{index + 1}</td>
                        <td
                          className="p-4"
                          dangerouslySetInnerHTML={{ __html: topic }}
                        ></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                  Dr. M.P Singh (CI E & ICT Academy, NIT Patna)
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

export default Matlab;
