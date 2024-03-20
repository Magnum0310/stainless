import React from "react";

const ContactPage = () => {
  return (
    <div
      className="h-full w-full flex flex-col items-center justify-center padding-x "
      style={{
        backgroundImage:
          "radial-gradient(125% 125% at 50% 0%, #232532 50%, #D9D9D9",
      }}
    >
      <div>
        <p className=" text-4xl font-Alfa text-orangeColor">Contact Us</p>
        <p className=" text-white text-xl">
          Ready to transform your space with our stainless steel solutions?
          Contact us today to discuss your project or request a consultation.
          Let Stainless Creations bring your vision to life!
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
