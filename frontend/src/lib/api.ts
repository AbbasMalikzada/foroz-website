const baseUrl = import.meta.env.VITE_API_URL ?? "http://localhost:4000/api"

export class ApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
  })

  if (!res.ok) {
    const body = await res.json().catch(() => null)
    throw new ApiError(body?.error ?? `Request failed (${res.status})`, res.status)
  }

  return res.json() as Promise<T>
}

export const api = {
  post: <T>(path: string, body: unknown) =>
    request<T>(path, { method: "POST", body: JSON.stringify(body) }),
}
