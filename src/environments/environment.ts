// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBUT-ip-3Hztd41MnQUpsWd3Kk0EK1ujIU",
    authDomain: "limin-gallery.firebaseapp.com",
    databaseURL: "https://limin-gallery.firebaseio.com",
    projectId: "limin-gallery",
    storageBucket: "limin-gallery.appspot.com",
    messagingSenderId: "162760782924"
  }
};
