import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="py-8" id="contact">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div>
            <h2 className="md:text-7xl text-4xl font-bold mb-10 text-white/50">
              Get in <span className="text-gray-400">touch</span>
            </h2>
            <a
              className="md:text-4xl text-3xl font-semibold underline decoration-gray-400 decoration-2
                                    underline-offset-4 hover:decoration-gray-200 transition duration-300"
              href="mailto:shahzarahmadlive@gmail.com"
            >
              shahzarahmadlive@gmail.com
            </a>
          </div>

          <div className="text-white/50 mt-12">
            <div className="mb-8">
              <p className="text-lg mb-1">Phone</p>
              <a
                href="phoneto:+923042831999"
                className="text-2xl font-semibold underline decoration-gray-400 decoration-2
                                    underline-offset-4 hover:decoration-gray-400 transition duration-300"
              >
                +923042831999
              </a>
            </div>

            <div className="text-lg mb-8">
              <p className="font-bold">Location</p>
              <p>Lahore,</p>
              <p>Pakistan</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center mt-8 py-12">
          <h1 className="hidden uppercase md:block text-[6rem] md:text-[8rem] lg:text-[11rem] font-bold text-white opacity-10">
            Shahzar Ahmad
          </h1>

          <h1 className="md:hidden uppercase relative text-9xl md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10">
            Shahzar
            <br />
            Ahmad
          </h1>
        </div>

        <div className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <p className="text-gray-200 caption text-n-4 lg:block">
            © 2025. All rights reserved.
          </p>

          <ul className="flex gap-5 flex-wrap">
            <a
              href="https://github.com/codewithShahi"
              aria-label="GitHub"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/shahzar-ahmad-shahidev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              aria-label="GitHub"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <IoLogoLinkedin size={30} />
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};
