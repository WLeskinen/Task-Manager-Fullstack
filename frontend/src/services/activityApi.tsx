import axios, { AxiosResponse } from "axios";
import { ActivityModel } from "../models/activityModels";

const API_URL = "http://localhost:3000/api/activities";

// Get activities list based on search query
export async function getActivitiesDB(query: string = "") {
  try {
    const response: AxiosResponse = await axios.get(`${API_URL}/?q=${query}`);
    console.log(response);
    if (!response.data) return [];
    const data: ActivityModel[] = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Get activity by id
export async function getActivityByIdDB(id: string) {
  const response: AxiosResponse = await axios.get(`${API_URL}/${id}`);
  console.log(response);
  if (!response.data) throw Error("No activity found");
  return response.data as ActivityModel;
}

// Create new activity
export async function createActivityDB(newActivity: ActivityModel) {
  const response: AxiosResponse = await axios.post(API_URL, newActivity);
  return response.data as ActivityModel;
}

// Update existing activity if found
export async function updateActivityDB(updateModel: ActivityModel) {
  const response: AxiosResponse = await axios.put(
    `${API_URL}/${updateModel.id}`,
    updateModel
  );
  console.log(response);
  if (!response.data) return [];
  return response.data as ActivityModel[];
}

// Delete existing activity
export async function deleteActivityDB(id: string) {
  const response: AxiosResponse = await axios.delete(`${API_URL}/${id}`);
  console.log(response);
  if (!response.data) return false;
  return true;
}
