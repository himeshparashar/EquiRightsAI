export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="This tool has been invaluable in ensuring our company policies are inclusive and non-discriminatory."
            author="Jane Doe"
            position="HR Director, Tech Co."
          />
          <TestimonialCard
            quote="The Policy Bias Detector helped us identify and correct subtle biases we hadn't even noticed in our documentation."
            author="John Smith"
            position="Legal Counsel, Finance Corp."
          />
          <TestimonialCard
            quote="Easy to use and incredibly insightful. It's now an essential part of our policy review process."
            author="Emily Johnson"
            position="Diversity & Inclusion Manager, Retail Inc."
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  author,
  position,
}: {
  quote: string;
  author: string;
  position: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <p className="text-gray-600 italic mb-4">&quot;{quote}&quot;</p>
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-gray-500">{position}</p>
    </div>
  );
}
