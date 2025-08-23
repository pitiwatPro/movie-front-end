import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface MovieApiResponse<T = any> {
  data: T | null;
  error: MovieApiError | null;
}
interface MovieApiError {
  statusCode: number;
  message: string;
  errorCode: string;
  path: string;
  timestamp: string;
}

class MovieApi {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.client.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(this.handleError(error));
      }
    );

    this.client.interceptors.response.use(
      (response: AxiosResponse<MovieApiResponse>) => {
        if (response.data && response.data.error) {
          return Promise.reject(this.handleError(response.data.error));
        }
        return response;
      },
      (error) => {
        return Promise.reject(this.handleError(error));
      }
    );
  }

  async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.client.get<MovieApiResponse<T>>(url, config);
      return response.data.data as T;
    } catch (error) {
      throw error;
    }
  }

  async post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.client.post<MovieApiResponse<T>>(
        url,
        data,
        config
      );
      return response.data.data as T;
    } catch (error) {
      throw error;
    }
  }

  async put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.client.put<MovieApiResponse<T>>(
        url,
        data,
        config
      );
      return response.data.data as T;
    } catch (error) {
      throw error;
    }
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.client.delete<MovieApiResponse<T>>(
        url,
        config
      );
      return response.data.data as T;
    } catch (error) {
      throw error;
    }
  }

  async patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.client.patch<MovieApiResponse<T>>(
        url,
        data,
        config
      );
      return response.data.data as T;
    } catch (error) {
      throw error;
    }
  }

  setBaseURL(baseURL: string) {
    this.client.defaults.baseURL = baseURL;
  }

  setHeader(key: string, value: string) {
    this.client.defaults.headers.common[key] = value;
  }

  removeHeader(key: string) {
    delete this.client.defaults.headers.common[key];
  }

  private createApiError(
    errorData?: Partial<MovieApiResponse["error"]>
  ): MovieApiError {
    return {
      message: errorData?.message || "Server error occurred",
      statusCode: errorData?.statusCode || 500,
      errorCode: errorData?.errorCode || "SERVER_ERROR",
      timestamp: errorData?.timestamp || new Date().toISOString(),
      path: errorData?.path || "",
    };
  }

  private handleError(error: any): MovieApiError {
    if (error.response && error.response.data?.error) {
      return this.createApiError(error.response.data.error);
    }

    return this.createApiError({
      message: error.message,
      errorCode: "UNKNOWN_ERROR",
    });
  }
}

export type { MovieApiError, MovieApiResponse };

export const movieApi = new MovieApi();
export default movieApi;
