// src/types/project.ts
export interface PROJECT_DATA {
  ID: number;
  TITLE: string;
  DESCRIPTION: string;
  TECH_STACK: string[];
  LINK?: string;
  GITHUB?: string;
  IMAGE_URL: string;
}