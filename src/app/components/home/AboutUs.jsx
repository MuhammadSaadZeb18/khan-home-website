import React from "react";
import Image from "next/image";

const AboutUs = () => {
    return (
        <section id="about" className="maincontainer py-10" >
            <div className="flex justify-between items-center gap-10">
                <div className="w-1/2">
                    <Image src="../aboutus.svg" className="h-full w-full" height={500} width={400} alt="About Us" />
                </div>
                <div className="w-1/2">
                    <h2 className="">About Us</h2>
                    <p className="text-gray-600">
                        We are a team of passionate individuals dedicated to providing the best services to our customers.
                    </p>
                </div>
            </div>

        </section >
    );
};

export default AboutUs;