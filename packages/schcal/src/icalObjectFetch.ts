import ical from "ical";
import fetch from "node-fetch";
import tunnel from "tunnel";
export default async function icalObjectFetch(url: string) {
  const { hostname, port } = new URL(process.env.HTTP_PROXY);
  const proxy = { host: String(hostname), port: Number(port) };
  const agent = tunnel.httpsOverHttp({ proxy });
  const r = await fetch(url, { ...(agent && { agent }) }).catch((e) => {
    throw new Error(
      `Fetch on URL: ${url} \nError details: ${e}\n\n` +
        ` Maybe you should check your network or you need a proxy to connect to google. `,
    );
  });
  const s = await r.text();
  return ical.parseICS(s);
}
