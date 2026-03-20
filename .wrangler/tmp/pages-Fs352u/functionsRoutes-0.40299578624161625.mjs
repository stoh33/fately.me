import { onRequestOptions as __api_saju_ts_onRequestOptions } from "C:\\OST\\fately.me\\functions\\api\\saju.ts"
import { onRequestPost as __api_saju_ts_onRequestPost } from "C:\\OST\\fately.me\\functions\\api\\saju.ts"
import { onRequestOptions as __api_saju_report_ts_onRequestOptions } from "C:\\OST\\fately.me\\functions\\api\\saju-report.ts"
import { onRequestPost as __api_saju_report_ts_onRequestPost } from "C:\\OST\\fately.me\\functions\\api\\saju-report.ts"

export const routes = [
    {
      routePath: "/api/saju",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_saju_ts_onRequestOptions],
    },
  {
      routePath: "/api/saju",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_saju_ts_onRequestPost],
    },
  {
      routePath: "/api/saju-report",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_saju_report_ts_onRequestOptions],
    },
  {
      routePath: "/api/saju-report",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_saju_report_ts_onRequestPost],
    },
  ]