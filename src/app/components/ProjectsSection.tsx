"use client";

import { useState, useEffect } from "react";
import { Project } from "../types/project";
import ProjectCard from "./ProjectCard";
import { getProjectsByFilter, getFilterLabel } from "../lib/projects";

export default function ProjectsSection() {
  const [expandedProjectIds, setExpandedProjectIds] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    setFilteredProjects(getProjectsByFilter(activeFilter));
  }, [activeFilter]);

  const handleToggleExpand = (id: number) => {
    setExpandedProjectIds((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const filters = [
    { key: "all", label: "Todos" },
    { key: "empresas", label: "Empresas" },
    { key: "jogos", label: "Jogos" },
    { key: "pessoais", label: "Pessoais" },
  ];

  return (
    <section id="projetos" className="min-h-screen relative py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          {getFilterLabel(activeFilter)}
        </h2>

        {/* Filtros */}
        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter.key
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedProjectIds.includes(project.id)}
              onToggleExpand={handleToggleExpand}
            />
          ))}
        </div>

        {/* Mensagem se não houver projetos */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-400 mt-12">
            <p>Nenhum projeto encontrado para esta categoria.</p>
          </div>
        )}
      </div>
    </section>
  );
}