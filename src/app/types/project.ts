export interface Project {
  shortTech: any;
  id: number;
  title: string;
  type: 'empresas' | 'jogos' | 'pessoais';
  gif: string;
  description: string;
  link?: string;
  technologies?: string[];
}

export type ProjectFilter = 'all' | 'empresas' | 'jogos' | 'pessoais';
