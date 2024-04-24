import axios, { AxiosResponse } from "axios";
import { TaskModel } from "../models/taskModels";

const API_URL = "http://localhost:3000/api/tasks";

// Get tasks list
export async function getTasksDB() {
  try {
    const response: AxiosResponse = await axios.get(API_URL);
    console.log(response);
    if (!response.data) return [];
    const data: TaskModel[] = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Get task by id
export async function getTaskByIdDB(id: string) {
  try {
    const response: AxiosResponse = await axios.get(`${API_URL}/${id}`);
    console.log(response);
    if (!response.data) throw Error("No task found");
    return response.data as TaskModel;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Create new task
export async function createTaskDB(newTask: TaskModel) {
  try {
    const response: AxiosResponse = await axios.post(API_URL, newTask);
    console.log(response);
    return response.data as TaskModel;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Update existing task
export async function updateTaskDB(updatedTask: TaskModel) {
  try {
    const response: AxiosResponse = await axios.put(
      `${API_URL}/${updatedTask.id}`,
      updatedTask
    );
    console.log(response);
    return response.data as TaskModel;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Delete existing task
export async function deleteTaskDB(id: string) {
  try {
    const response: AxiosResponse = await axios.delete(`${API_URL}/${id}`);
    console.log(response);
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
