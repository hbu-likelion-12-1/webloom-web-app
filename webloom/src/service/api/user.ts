import { User } from "@/types/object";
import { apiClient } from "./client";

interface GetUserResponse extends User {
}


export interface UserApi {
  get: () => Promise<GetUserResponse>;
}

const ENDPOINT = '/users/';

export const userApi: UserApi = {
  get() {
    return apiClient.get(ENDPOINT);
  },
};
