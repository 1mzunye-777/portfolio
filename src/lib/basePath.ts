export function withBasePath(path: string) {
  if (!path) return path;

  const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (typeof window !== "undefined") {
    const pathname = window.location.pathname || "/";
    const firstSegment = pathname.split("/").filter(Boolean)[0];

    if (firstSegment && firstSegment !== "portfolio") {
      return path;
    }

    const inferredBasePath = firstSegment === "portfolio" ? "/portfolio" : "";
    const basePath = inferredBasePath || configuredBasePath;

    if (!basePath) return path;
    if (path.startsWith(basePath)) return path;
    return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
  }

  if (!configuredBasePath) return path;
  if (path.startsWith(configuredBasePath)) return path;
  return `${configuredBasePath}${path.startsWith("/") ? path : `/${path}`}`;
}
