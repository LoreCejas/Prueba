// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: window["env"]["production"] || false,
  api_url: window["env"]["api_url"] || "https://localhost:5001/",
  copyright: window["env"]["copyright"] || "Al2 Sync ©2021-2022",
  version: window["env"]["version"] || "1.0.7",
  tyc_url: window["env"]["tyc_url"] || "https://www.al2.com.ar/AL2%20-%20Terminos%20y%20Condiciones%20Al2Sync.pdf"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
