import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {

    const Year = new Date().getFullYear();

    return (
        <footer className="relative bg-black text-quinary">
            <div className="absolute top-0 left-0 w-[100%] overflow-hidden border-t-2 border-quinary my-8">
                <div className="grid lg:grid-cols-4 gap-20 md:grid-cols-2 px-20 py-10">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-3xl text-quaternary">Footer</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deleniti dolores
                            vel ipsa reiciendis corporis similique dolor earum aut itaque.
                        </p>
                    </div>

                    <div>
                        <li className="text-[22px] list-none font-semibold text-tertiary py-2 uppercase">
                            Header
                        </li>
                        <li className="my-4 list-none">Title A</li>
                        <li className="my-4 list-none">Title B</li>
                        <li className="my-4 list-none">Title C</li>
                    </div>

                    <div>
                        <li className="text-[22px] list-none font-semibold text-tertiary py-2 uppercase">
                            Header</li>
                        <li className="my-4 list-none">Title A</li>
                        <li className="my-4 list-none">Title B</li>
                        <li className="my-4 list-none">Title C</li>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-[22px] font-semibold text-tertiary py-2 uppercase">Contact</h2>
                        <p className="text-[16px] my-4">Email: youremail.gmail.com</p>
                        <p className="text-[16px] my-4">Phone: +1 113-456-7890 </p>
                        <div className="flex space-x-4">
                            <a
                                className="text-quinary hover:text-tertiary transform hover:scale-150 
                            transition-all duration-150 ease-in-out" href="">
                                <FaGithub />
                            </a>
                            
                            
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;