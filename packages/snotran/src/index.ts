import {translate, setCORS} from "@snomiao/google-translate-api-browser"
const url = 'https://google-translate-cors-snomiao.vercel.app/api?url='
setCORS(url,{encode: true})
export default translate