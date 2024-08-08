// app/projects.tsx
import fs from "fs";
import path from "path";
import About from "@/components/Home/About";
import Header from "@/components/Home/Header";
import Technologies from "@/components/Home/Technologies";
import { Project } from "@/lib/interface";
import Projects from "@/components/Home/Projects";
import Contact from "@/components/Home/Contact";

const fetchProjects = async (): Promise<Project[]> => {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData) as Project[];
};

const ProjectsPage = async () => {
  const projects = await fetchProjects();
  return (
    <main className="px-3 max-w-screen overflow-hidden">
      <Header />
      <About />
      <Technologies />
      <Projects projects={projects} />
      <Contact />
    </main>
  );
};

export default ProjectsPage;
