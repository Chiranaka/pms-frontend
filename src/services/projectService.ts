import api from './api';
import { Project } from '../types/Project';

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await api.get<Project[]>('/projects');
  return response.data;
};

export const createProject = async (data: Project): Promise<Project> => {
  const response = await api.post<Project>('/projects', data);
  return response.data;
};

export const fetchProjectById = async (id: string): Promise<Project> => {
  const response = await api.get<Project>(`/projects/${id}`);
  return response.data;
};

export const updateProject = async (id: string, data: Project): Promise<Project> => {
  const response = await api.put<Project>(`/projects/${id}`, data);
  return response.data;
};

export const deleteProject = async (id: string): Promise<void> => {
  await api.delete(`/projects/${id}`);
};
