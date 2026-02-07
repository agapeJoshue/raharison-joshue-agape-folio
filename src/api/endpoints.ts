const BASE_API = 'http://localhost:8000';

export const download_file = (filename: string) => `${BASE_API}/download/${filename}`;
export const contact = `${BASE_API}/contact`;
