// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB_jxA3Iuwkre8KWG2vmX46kTbGUhllJVM",
    authDomain: "surveys-iclf.firebaseapp.com",
    databaseURL: "https://surveys-iclf.firebaseio.com",
    projectId: "surveys-iclf",
    storageBucket: "surveys-iclf.appspot.com",
    messagingSenderId: "761724484530"
  }
};
