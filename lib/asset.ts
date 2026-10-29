// next/image с unoptimized не добавляет basePath к src, поэтому префикс ставим сами
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
