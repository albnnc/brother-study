export const validateHttpResponse = (resp: Response) => {
  if (resp.status >= 400) {
    throw new HttpStatusCodeError(resp.status, resp.statusText);
  }
  return resp;
};

export class HttpStatusCodeError extends Error {
  constructor(public readonly statusCode: number, message?: string) {
    super(message ?? `HTTP request failed with status code ${statusCode}`);
  }
}
