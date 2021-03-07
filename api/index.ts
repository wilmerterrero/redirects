import { NowRequest, NowResponse } from '@vercel/node'

import redirections from "../redirections.json"

export default async (req: NowRequest, res: NowResponse) => {
  const [subdomain] = (req.headers['x-forwarded-host'] as string).split(`.`);
  const redirection = redirections[subdomain] || process.env.FALLBACK;

  return res.writeHead(302, {Location: redirection}).end();
};
