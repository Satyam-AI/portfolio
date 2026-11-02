import Hero from "@/components/Hero";
import SkillTree from "@/components/SkillTree";
import { skills } from "@/content/skills";
import { buildSkillTree } from "@/lib/skillTree";

export default function Home() {
  const skillRoot = buildSkillTree(skills);

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
    </>
  );
}
