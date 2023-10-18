import { getContent, getSiteConfig } from "/lib/xp/portal";
import { DateTimeFormatter, ZonedDateTime } from "/lib/time";
import type { Request, Response } from "@item-enonic-types/global/controller";

const STATUS_304_NOT_MODIFIED = 304;

export function responseProcessor(req: Request, res: Response): Response {
  const siteConfig = getSiteConfig<XP.SiteConfig>();
  const content = getContent();

  if (siteConfig?.enableCacheControlHeader) {
    res.headers = {
      ...(res.headers ?? {}),
      "Cache-Control": siteConfig.cacheControlHeader,
    };

    if (siteConfig.includeLastModified && content) {
      const modifiedTime = content.modifiedTime ?? content.createdTime;
      const lastModified = ZonedDateTime.parse(modifiedTime).format(DateTimeFormatter.RFC_1123_DATE_TIME);

      if (req.headers["If-Modified-Since"] === lastModified && req.method === "GET") {
        return {
          ...res,
          status: STATUS_304_NOT_MODIFIED,
          body: null,
        };
      } else {
        res.headers["Last-Modified"] = lastModified;
      }
    }
  }

  return res;
}
