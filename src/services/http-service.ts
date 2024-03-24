import { AxiosResponse } from "axios";
import apiClient from "./api-client";

interface Entity {
  id: number;
}

class HttpService<T extends Entity> {
  constructor(private readonly endpoint: string) {}

  getAll(): {
    request: Promise<AxiosResponse<T[]>>;
    cancel: () => void;
  } {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  delete(id: number): Promise<AxiosResponse> {
    return apiClient.delete(`${this.endpoint}/${id}`);
  }

  create(entity: T): Promise<AxiosResponse<T>> {
    return apiClient.post(this.endpoint, entity);
  }

  update(entity: T): Promise<AxiosResponse<T>> {
    return apiClient.patch(`${this.endpoint}/${entity.id}`, entity);
  }
}

const create = <T extends Entity>(endpoint: string) =>
  new HttpService<T>(endpoint);
export default create;
