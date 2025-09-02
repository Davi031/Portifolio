import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Project } from "../types/project";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getAllProjects(): Project[] {
  const filenames = fs.readdirSync(projectsDirectory);
  return filenames.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      id: data.id,
      title: data.title,
      type: data.type,
      gif: data.gif,
      description: data.description,
      technologies: data.technologies,
      shortTech: data.shortTech,
      link: data.link,
    };
  });
}

export const getProjectsByFilter = (filter: string): Project[] => {
  const projects = getAllProjects();
  if (filter === "all") return projects;
  return projects.filter((project) => project.type === filter);
};

export const getFilterLabel = (filter: string): string => {
  const labels: Record<string, string> = {
    all: "TODOS OS PROJETOS",
    empresas: "PROJETOS PARA EMPRESAS/ORGANIZAÇÕES",
    jogos: "JOGOS INTERATIVOS",
    pessoais: "PROJETOS PESSOAIS",
  };
  return labels[filter] || "PROJETOS";
};