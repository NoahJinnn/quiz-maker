import axios from 'axios';

import { BaseConfig } from '@configs/base';

/**
 * Update current quiz
 * @param info New info of quiz, include id
 * @param mediaFile New file if needed
 * @returns New quiz info
 */
const createUser = async (name: string, id: string): Promise<IUser> => {
  const data = await axios.post<IUser>(`${BaseConfig.endPoint}/user`, { name, officeId: id });
  return data.data;
};

/**
 * Update point into user
 * @param info Point info
 */
const addPoint = async (info: {
  userId: string;
  quizId: string;
  addPoint: number;
  quizListId: number;
}) => {
  const data = await axios.put<IUser>(`${BaseConfig.endPoint}/point`, info);
  return data.data;
};

/**
 * Get all current user with point
 * @returns List of user
 */
const getUserList = async () => {
  const data = await axios.get<IUser[]>(`${BaseConfig.endPoint}/users`);
  return data.data;
};

const deleteUserByOfficeId = async (officeId: string): Promise<IUser> => {
  const data = await axios.delete<IUser>(`${BaseConfig.endPoint}/user?=${officeId}`);
  return data.data;
};

export { addPoint, createUser, getUserList, deleteUserByOfficeId };
