import type { NitroFetchOptions, NitroFetchRequest } from 'nitropack'

type APIOptions = Omit<NitroFetchOptions<NitroFetchRequest>, 'headers'> & {
  headers?: Record<string, string>
}

// Auth is handled by Cloudflare Access, no token needed at API level
export function useAPI<T = unknown>(api: string, options?: APIOptions): Promise<T> {
  return $fetch<T>(api, options) as Promise<T>
}
