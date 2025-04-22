import { certificates } from "@/config/certificates";
import Image from "next/image";

export default function CertificateList() {
  return (
    <div className="max-w-2xl lg:max-w-6xl mx-5 sm:mx-0">
      {certificates.map((certificate, index) => (
        <div className="mb-7 mt-20" key={index}>
          <h2 className="text-xl font-bold mb-12 tracking-tight">
            {certificate.category}
          </h2>
          {certificate.certificates.map((item, i) => (
            <div
              className="border mb-4 p-4 text-sm leading-6 text-foreground rounded-md"
              key={i}
            >
              <div className="flex flex-col md:flex-row">
                <div className="flex items-center flex-1">
                  <div className="flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.subtitle}
                      width={95}
                      height={72}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 pl-4">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-muted-foreground">{item.organization}</p>
                  </div>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  className="mt-4 sm:mt-0 sm:ml-4"
                >
                  <button className="w-full sm:w-auto bg-teal-500 text-sm  text-white rounded-md shadow-lg  py-2 px-4 hover:bg-teal-600 active:bg-teal-700 visited:bg-teal-500 transition-colors duration-200">
                    View Certificate
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
