export function withBasePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "";

  if (!path) {
    return basePath || "/";
  }

  if (/^https?:\/\//.test(path)) {
    return path;
  }

  if (!path.startsWith("/")) {
    return `${basePath}/${path}`;
  }

  return `${basePath}${path}`;
}