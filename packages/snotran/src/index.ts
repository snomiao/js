import { translate, setCORS } from "@snomiao/google-translate-api-browser";
const url = "https://google-translate-cors-snomiao.vercel.app/api?url=";
export { translate };
export default setCORS(url, { encode: true });
