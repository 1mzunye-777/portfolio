export function withBasePath(path: string) {
  if (!path) return path;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!basePath) return path;

  if (path.startsWith(basePath)) return path;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
