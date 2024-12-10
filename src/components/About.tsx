import { Card } from "@/components/ui/card";

const skills = [
  "React", "TypeScript", "Node.js", "Next.js",
  "TailwindCSS", "PostgreSQL", "AWS", "Docker"
];

export const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-lg">
              I'm a full-stack developer with 5 years of experience building web applications.
              I specialize in creating responsive, user-friendly interfaces with modern technologies.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through technical blog posts.
            </p>
          </div>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};