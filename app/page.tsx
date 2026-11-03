import ExperienceList from "@/components/ExperienceList";
import { experience } from "@/content/experience";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import SkillTree from "@/components/SkillTree";
import { projects } from "@/content/projects";
import { skills } from "@/content/skills";
import { buildSkillTree } from "@/lib/skillTree";

export default function Home() {
  const skillRoot = buildSkillTree(skills);
  const orderedProjects = [...projects].sort(
    (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false),
  );

  return (
    <>
      <Hero />
      <section id="skills" className="py-12">
        <h2 className="text-2xl font-bold text-text sm:text-3xl">Skills</h2>
        <p className="mt-2 mb-6 text-text-muted">
          Grouped by area. Select a group to open or close it.
        </p>
        <SkillTree root={skillRoot} />
      </section>
      <section id="projects" className="py-12">
        <h2 className="text-2xl font-bold text-text sm:text-3xl">Projects</h2>
        <p className="mt-2 mb-6 text-text-muted">
          Things I have built, with the code for each.
        </p>
        <ProjectList projects={orderedProjects} />
      </section>
      <section id="experience" className="py-12">
        <h2 className="text-2xl font-bold text-text sm:text-3xl">Experience</h2>
        <p className="mt-2 mb-6 text-text-muted">
          Where I have worked, newest first.
        </p>
        <ExperienceList entries={experience} />
      </section>
    </>
  );
}
