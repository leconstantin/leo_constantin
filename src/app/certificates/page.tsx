import { Button } from "@/components/ui/button";
import { certificates } from "@/config/certificates";
import Image from "next/image";

export default function CertificateList() {
  return (
    <div className="max-w-2xl lg:max-w-6xl mx-5 sm:mx-0">
      {certificates.map((certificate, index) => (
        <div className="mb-7 mt-20" key={index}>
          <h2 className="text-xl lg:text-2xl font-bold mb-12 tracking-tight">
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
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.organization}</p>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border border-teal-300"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    className="mt-4 sm:mt-0 sm:ml-4"
                  >
                    View Certificate
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
