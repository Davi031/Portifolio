"use client";

import { Project } from "../types/project";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggleExpand: (id: number) => void;
}

export default function ProjectCard({
  project,
  isExpanded,
  onToggleExpand,
}: ProjectCardProps) {
  if (!project) {
    return (
      <div className="bg-[#042a4b] rounded-lg p-4 h-full">
        <div className="text-center text-gray-400">Projeto não disponível</div>
      </div>
    );
  }

  const hasGif = project.gif && project.gif.trim() !== "";

  return (
    <div className="relative bg-[#042a4b] rounded-lg p-4 h-full flex flex-col transition-transform hover:scale-105 hover:shadow-2xl">
      {/* Imagem / GIF (altura fixa para evitar "pulos") */}
      <div className="h-48 bg-gray-700 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
        {hasGif ? (
          <img
            src={project.gif}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.nextSibling &&
                ((target.nextSibling as HTMLElement).style.display = "flex");
            }}
          />
        ) : (
          <div className="text-gray-400 text-center p-4 flex items-center justify-center">
            <span>Imagem não disponível</span>
          </div>
        )}

        {hasGif && (
          <div className="text-gray-400 text-center p-4 flex items-center justify-center hidden">
            <span>Imagem não disponível</span>
          </div>
        )}
      </div>

      {/* Título + botão de expandir (fica clicável mesmo com overlay graças ao z-index do overlay) */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <button
          onClick={() => onToggleExpand(project.id)}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Recolher descrição" : "Expandir descrição"}
          className="transform transition-transform"
          style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <img src="/images/arrow.png" alt="Expandir" className="w-8 h-8" />
        </button>
      </div>

      {/* (Opcional) tags/tecnologias resumidas fora do overlay */}
      {project.shortTech && (
        <div className="flex flex-wrap gap-2 mt-1">
          {project.shortTech.map((t: string, i: number) => (
            <span
              key={i}
              className="bg-blue-700/40 text-blue-100 text-[10px] px-2 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* OVERLAY ABSOLUTO: não altera a altura do card/linha */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="overlay"
            className="absolute inset-0 z-20 rounded-lg bg-[#052e56]/95 backdrop-blur-sm p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Conteúdo do overlay com leve slide */}
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              {/* Header do overlay: título + botão fechar */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <button
                  onClick={() => onToggleExpand(project.id)}
                  aria-label="Fechar"
                  className="rounded-full p-1 hover:bg-white/10"
                >
                  {/* pode manter a mesma seta ou usar um X */}
                  <img
                    src="/images/arrow.png"
                    alt="Fechar"
                    className="w-8 h-8 rotate-180"
                  />
                </button>
              </div>

              <p className="mb-3 text-gray-200">{project.description}</p>

              {project.technologies && project.technologies.length > 0 && (
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-100">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ver projeto →
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
