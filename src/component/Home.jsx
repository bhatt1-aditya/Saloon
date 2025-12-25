import React, { useEffect, useState } from "react";
import heroImage from "../assets/home/home.webp";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [readMoreModalOpen, setReadMoreModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
useEffect(() => {
  if (isModalOpen || readMoreModalOpen) {
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  } else {
    document.body.style.position = "";
    document.body.style.width = "";
  }
}, [isModalOpen, readMoreModalOpen]);
  const steps = [
    "Category",
    "Service",
    "Service Add...",
    "Provider",
    "Time",
    "Client",
  ];

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentStep(0);
  };

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const handleReadMore = (service) => {
    setSelectedService(service);
    setReadMoreModalOpen(true);
  };

  const handleCloseReadMoreModal = () => {
    setReadMoreModalOpen(false);
    setSelectedService(null);
  };

  const services = [
    {
      title: "Quick Cut / Tips Cut",
      description: [
        "Maintenance service to cut no more than 2 cms. of hair.",
        "Please arrive with your hair clean and dry.",
        "Suitable for maintaining haircut shape."
      ],
      duration: "30 mins",
      price: "35,00 €"
    },
    {
      title: "Short Cut + Wash & Style",
      description: [
        "A short haircut combined with a professional wash and style.",
        "Includes hair care products application.",
        "Recommended for all hair types."
      ],
      duration: "45 mins",
      price: "50,00 €"
    },
    {
      title: "*Senior* Short Cut + Wash & Style",
      description: [
        "Special service for seniors: short cut plus wash and style.",
        "Gentle products used for sensitive scalp.",
        "Consultation included before service."
      ],
      duration: "45 mins",
      price: "50,00 €"
    },
    {
      title: "Medium/Long Cut + Wash & Style",
      description: [
        "Medium or long haircut along with wash and styling.",
        "Includes trimming and styling as desired.",
        "Suitable for all hair types."
      ],
      duration: "60 mins",
      price: "70,00 €"
    },
    {
      title: "*Senior* Medium/Long Cut + Wash & Style",
      description: [
        "Special service for seniors: medium/long cut plus wash and style.",
        "Gentle hair care included.",
        "Consultation with expert before service."
      ],
      duration: "60 mins",
      price: "70,00 €"
    },
  ];

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />

      <div
        className="fixed top-[20rem] right-6 transform -translate-y-1/2 z-50 bg-[#a92924] rounded-sm -rotate-90 origin-right cursor-pointer"
        onClick={handleButtonClick}
      >
        <h2 className="text-white text-xl px-4 py-3 pb-7 rounded-lg">
          Book now
        </h2>
      </div>

      {/* Main Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] px-4">

          <div className="bg-white rounded-sm shadow-lg max-w-3xl w-full h-full max-h-[85vh] relative overflow-hidden">

            <button
              className="absolute top-0 right-4 text-gray-600 hover:text-gray-800 text-2xl z-10"
              onClick={handleCloseModal}
            >
              ✕
            </button>

            <div className="bg-gray-100 px-4 py-2 text-xs text-gray-600 border-b">
              Powered by{" "}
              <span className="text-blue-600 font-semibold">Google</span>{" "}
              Translate
            </div>

            <div className="bg-gradient-to-r from-red-700 via-red-500 to-red-300">
              <div className="flex overflow-x-auto">
                {steps.map((step, index) => (
                  <React.Fragment key={index}>
                    <div
                      className={`flex-1 px-6 py-4 cursor-pointer transition-all duration-200 ${
                        index === currentStep
                          ? "bg-red-800 text-white"
                          : index < currentStep
                          ? "bg-red-600 text-white hover:bg-red-700"
                          : "bg-red-400 text-white hover:bg-red-500"
                      }`}
                      onClick={() => handleStepClick(index)}
                      style={{
                        clipPath:
                          index < steps.length - 1
                            ? "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%, 15px 50%)"
                            : "polygon(0 0, 100% 0, 100% 100%, 0 100%, 15px 50%)",
                      }}
                    >
                      <span className="block text-center font-medium text-sm lg:text-base">
                        {step}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="bg-[#e8e2da] max-h-[70vh] overflow-y-auto">
              <div className="p-4 sm:p-6">

                <div className="text-right text-gray-700 font-medium mb-6">
                  <span className="font-semibold">Our time:</span>{" "}
                  {new Date().toLocaleString("en-US", {
                    hour12: true,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  }).replaceAll("/", "-")}
                </div>

                {currentStep === 0 && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { title: "Hair Cut" },
                        { title: "Balayage" },
                        { title: "Highlights (Foils)" },
                        { title: "Bleach" },
                        { title: "Color" },
                        { title: "Styling & Olaplex" },
                        { title: "Consultations" },
                      ].map((option, index) => (
                        <div
                          key={index}
                          className="bg-white p-6 shadow-md text-center hover:shadow-lg transition-shadow"
                        >
                          <h3 className="text-xl font-semibold mb-4 text-gray-800">
                            {option.title}
                          </h3>
                          <button
                            className="bg-[#a92924] text-white px-6 py-4 w-full rounded hover:bg-red-700 transition-colors font-medium"
                            onClick={() => setCurrentStep(1)}
                          >
                            Select
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="pt-10 pb-5 text-center text-[#a92924] text-sm">
                      <h1>My Personal Data</h1>
                      <h2>Renasanz Salon terms and Conditions</h2>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {services.map((option, index) => (
                        <div
                          key={index}
                          className="bg-white p-6 shadow-md text-left hover:shadow-lg transition-shadow"
                        >
                          <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            {option.title}
                          </h3>

                          <li className="text-gray-600 mb-2 inset-0 list-inside">
                             {option.description[0]}{" "}
                            <span
                              className="text-red-600 cursor-pointer hover:underline"
                              onClick={() => handleReadMore(option)}
                            >
                              Read more
                            </span>
                          </li>

                          <div className="flex justify-between items-center text-gray-700 mb-4">
                            <span>⏱ {option.duration}</span>
                            <span className="font-semibold">{option.price}</span>
                          </div>

                          <button
                            className="bg-[#a92924] text-white px-6 py-4 w-full rounded hover:bg-red-700 transition-colors font-medium"
                             onClick={() => setCurrentStep(currentStep +1)}
                          >
                            Select
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="pt-10 pb-5 text-center text-[#a92924] text-sm">
                      <h1>My Personal Data</h1>
                      <h2>Renasanz Salon terms and Conditions</h2>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="text-center py-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Complementos
                    </h2>
                    <p className="text-gray-600">
                      Contenido del paso de complementos...
                    </p>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="text-center py-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Seleccione Proveedor
                    </h2>
                    <p className="text-gray-600">
                      Contenido del paso de proveedor...
                    </p>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="text-center py-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Seleccione Tiempo
                    </h2>
                    <p className="text-gray-600">
                      Contenido del paso de tiempo...
                    </p>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="text-center py-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Información del Cliente
                    </h2>
                    <p className="text-gray-600">
                      Contenido del paso de cliente...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Read More Modal */}
      {readMoreModalOpen && selectedService && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 max-w-xl w-full h-full max-h-[80vh] ">
            <h2 className="text-xl font-semibold mb-4 pt-8 text-center">{selectedService.title}</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {selectedService.description.map((desc, idx) => (
                <li key={idx} className="text-lg font-normal">{desc}</li>
              ))}
            </ul>
            <button
              className="bg-[#a92924] text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={handleCloseReadMoreModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
