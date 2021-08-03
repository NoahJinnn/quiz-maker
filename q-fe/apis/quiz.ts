import { BaseConfig } from '@configs/base';
import axios from 'axios';

/**
 * Get all current quizs from server
 * @returns List of quiz
 */
const getQuiz = async (): Promise<IQuiz[] | false> => {
  const data = await axios.get<IQuiz[]>(`${BaseConfig.endPoint}/quizs`);
  if (data.data) {
    return data.data;
  }
  return false;
};

/**
 * Create an quiz
 * @param info Quiz info
 * @param mediaFile File include with quiz
 * @returns Quiz info
 */
const createQuiz = async (info: Omit<IQuiz, 'id'>, mediaFile?: File): Promise<IQuiz> => {
  const formData = new FormData();
  formData.append('quiz', new Blob([JSON.stringify(info)], { type: 'application/json' }));
  if (mediaFile) {
    formData.append('file', mediaFile);
  }
  const headers = {
    'Content-Type': 'multipart/form-data',
  };
  const result = await axios.post<IQuiz>(`${BaseConfig.endPoint}/quiz`, formData, {
    headers,
  });
  return result.data;
};

/**
 * Update current quiz
 * @param info New info of quiz, include id
 * @param mediaFile New file if needed
 * @returns New quiz info
 */
const updateQuiz = async (info: IQuiz, mediaFile?: File): Promise<IQuiz> => {
  const formData = new FormData();
  formData.append('quiz', new Blob([JSON.stringify(info)], { type: 'application/json' }));
  if (mediaFile) {
    formData.append('file', mediaFile);
  }
  const headers = {
    'Content-Type': 'multipart/form-data',
  };
  const result = await axios.put<IQuiz>(`${BaseConfig.endPoint}/quiz`, formData, {
    headers,
  });
  return result.data;
};

/**
 * Delete an quiz
 * @param quizId ID of quiz need to be delete
 * @returns string
 */
const deleteQuiz = async (quizId: string): Promise<string> => {
  const res = await axios.delete<string>(`${BaseConfig.endPoint}/quiz/${quizId}`);
  return res.data;
};

export { createQuiz, deleteQuiz, getQuiz, updateQuiz };
