interface MovieApiResponse<T = any> {
  data: T | null;
  error: MovieApiError | null;
}

interface FetchConfig extends RequestInit {
  timeout?: number;
}

interface MovieApiError {
  statusCode: number;
  message: string;
  errorCode: string;
  path: string;
  timestamp: string;
}

class MovieApi {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;
  private timeout: number;

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_MOVIE_API_BASE_URL || "";
    this.timeout = 10000;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      "x-api-key": process.env.MOVIE_API_KEY || "",
    };
  }

  private async makeRequest<T = any>(
    url: string,
    config?: FetchConfig
  ): Promise<T> {
    const fullUrl = url.startsWith("http") ? url : `${this.baseURL}${url}`;

    const fetchOptions: FetchConfig = {
      next: { revalidate: 3600 },
      cache: "force-cache",
      ...config,
      headers: {
        ...this.defaultHeaders,
        ...config?.headers,
      },
    };

    // Add timeout support
    const controller = new AbortController();
    const timeoutId = setTimeout(
      () => controller.abort(),
      config?.timeout || this.timeout
    );
    fetchOptions.signal = controller.signal;

    try {
      const response = await fetch(fullUrl, fetchOptions);
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw await this.handleHttpError(response);
      }

      const data: MovieApiResponse<T> = await response.json();

      if (data.error) {
        throw this.createApiError(data.error);
      }

      return data.data as T;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === "AbortError") {
        throw this.createApiError({
          message: "Request timeout",
          statusCode: 408,
          errorCode: "REQUEST_TIMEOUT",
        });
      }

      if (error && typeof error === "object" && "statusCode" in error) {
        throw this.createApiError(error as MovieApiError);
      }

      throw this.createApiError();
    }
  }

  async get<T = any>(url: string, config?: FetchConfig): Promise<T> {
    return this.makeRequest<T>(url, { method: "GET", ...config });
  }

  async post<T = any>(
    url: string,
    data?: any,
    config?: FetchConfig
  ): Promise<T> {
    return this.makeRequest<T>(url, {
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
      ...config,
    });
  }

  async put<T = any>(
    url: string,
    data?: any,
    config?: FetchConfig
  ): Promise<T> {
    return this.makeRequest<T>(url, {
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
      ...config,
    });
  }

  async delete<T = any>(url: string, config?: FetchConfig): Promise<T> {
    return this.makeRequest<T>(url, { method: "DELETE", ...config });
  }

  async patch<T = any>(
    url: string,
    data?: any,
    config?: FetchConfig
  ): Promise<T> {
    return this.makeRequest<T>(url, {
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
      ...config,
    });
  }

  setBaseURL(baseURL: string) {
    this.baseURL = baseURL;
  }

  setHeader(key: string, value: string) {
    this.defaultHeaders[key] = value;
  }

  removeHeader(key: string) {
    delete this.defaultHeaders[key];
  }

  private async handleHttpError(response: Response): Promise<MovieApiError> {
    let errorData: any;
    try {
      errorData = (await response.json()).error;
    } catch {
      errorData = { message: response.statusText };
    }

    return this.createApiError({
      statusCode: errorData.statusCode,
      message: errorData.message,
      errorCode: errorData.errorCode,
      path: errorData.path,
    });
  }

  private createApiError(errorData?: Partial<MovieApiError>): MovieApiError {
    return {
      message: errorData?.message || "Unknown error occurred",
      statusCode: errorData?.statusCode || 500,
      errorCode: errorData?.errorCode || "UNKNOWN_ERROR",
      timestamp: errorData?.timestamp || new Date().toISOString(),
      path: errorData?.path || "",
    };
  }
}

export type { MovieApiError, MovieApiResponse };

export const movieApi = new MovieApi();
export default movieApi;
