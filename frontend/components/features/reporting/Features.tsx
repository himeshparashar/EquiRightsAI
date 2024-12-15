import { Shield, UserCheck, Megaphone } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Confidential Reporting",
    description:
      "Your privacy is our priority. All reports are handled with the utmost confidentiality.",
  },
  {
    icon: UserCheck,
    title: "Anonymous Option",
    description:
      "Choose to remain anonymous if you prefer. Your identity is protected.",
  },
  {
    icon: Megaphone,
    title: "Make Your Voice Heard",
    description:
      "Every report contributes to creating a more inclusive and respectful environment.",
  },
];

export default function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Report Discrimination?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
