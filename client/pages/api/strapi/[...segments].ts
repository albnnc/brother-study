import { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return httpProxyMiddleware(req, res, {
    target: process.env.STRAPI_URL,
    changeOrigin: true,
    secure: false,
    pathRewrite: [
      {
        patternStr: "^/api/strapi",
        replaceStr: "",
      },
    ],
  });
};

export default handler;

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};
