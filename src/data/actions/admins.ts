import { APIResponse } from "@/lib/types";
import { CreateUserFormSchema, FormState } from "@/lib/validators";
import { apiService } from "@/services/ApiService";

interface OptionsSearch {
  search?: string;
  page?: number;
  limit?: number;
  role?: number;
}

export async function getUsersAction({ limit, page, search, role }: OptionsSearch) {
  try {
    const res = await apiService.get<APIResponse>("/users", {
      params: {
        search,
        page,
        limit,
        role,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getConfigs() {
  try {
    const [roles, status, counts] = await Promise.all([
      apiService.get<APIResponse>("/roles"),
      apiService.get<APIResponse>("/users/get-status"),
      apiService.get<APIResponse>("/users/counts"),
    ]);

    return {
      roles:roles.data,
      status:status.data,
      counts:counts.data
    };
  } catch (error) {
    return null;
  }
}

export async function createUserAction(data: any) {
  try {
    const response = await apiService.post<APIResponse>("/users", data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateUser(data:any, userId:string){
   try {
    const response = await apiService.patch<APIResponse>(`/users/${userId}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateUserStatus(userId: string, status: any) {
  try {
    const response = await apiService.put<APIResponse>("/users/update-status", {
      user_id: userId,
      status,
    });
    return response.data;
  } catch (error) {
    return null;
  }
}
