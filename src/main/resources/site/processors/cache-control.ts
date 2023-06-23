import { getSiteConfig } from "/lib/xp/portal";
import type { Request, Response } from "@item-enonic-types/global/controller";

export function responseProcessor(req: Request, res: Response): Response {
  const siteConfig = getSiteConfig<XP.SiteConfig>();
  if (siteConfig?.enableCacheControlHeader && siteConfig.maxAge) {
    res.headers = res.headers ?? {};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res.headers["Cache-Control"] = `max-age=${siteConfig.maxAge}`;
  }

  return res;
}
