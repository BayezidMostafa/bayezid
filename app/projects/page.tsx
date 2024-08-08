// app/projects/page.tsx

import { Project } from "@/lib/interface";
import path from "path";
import fs from "fs";
import ProjectsClient from "@/components/ProjectsClient/ProjectsClient";

const fetchProjects = async (): Promise<Project[]> => {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData) as Project[];
};

const ProjectsPage = async () => {
  const projects = await fetchProjects();

  return <ProjectsClient projects={projects} />;
};

export default ProjectsPage;
