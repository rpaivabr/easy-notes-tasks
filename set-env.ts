// Configure Angular `environment.ts` and `environment.prod.ts` file path
const targetPath = './src/environments/environment.ts'
const targetPathProd = './src/environments/environment.prod.ts'

// Load node modules
const fs = require('fs')
const colors = require('colors')
require('dotenv').config()

// `environment.ts` file structure
const envConfigFile = `export const environment = {
    production: false,
    firebaseConfig: {
      apiKey: '${process.env.FIREBASE_API_KEY}',
      authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
      projectId: '${process.env.FIREBASE_PROJECT_ID}',
      storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
      messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
      appId: '${process.env.FIREBASE_APP_ID}'
    }
};
`
console.log(
  colors.magenta(
    'The file `environment.ts` will be written with the following content: \n'
  )
)
console.log(colors.grey(envConfigFile))
fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    throw console.error(err)
  } else {
    console.log(
      colors.magenta(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      )
    )
  }
})

// `environment.prod.ts` file structure
const envConfigFileProd = `export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: '${process.env.FIREBASE_API_KEY}',
    authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
    projectId: '${process.env.FIREBASE_PROJECT_ID}',
    storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
    appId: '${process.env.FIREBASE_APP_ID}'
  }
};
`
console.log(
colors.magenta(
  'The file `environment.prod.ts` will be written with the following content: \n'
)
)
console.log(colors.grey(envConfigFileProd))
fs.writeFile(targetPathProd, envConfigFileProd, function (err) {
if (err) {
  throw console.error(err)
} else {
  console.log(
    colors.magenta(
      `Angular environment.prod.ts file generated correctly at ${targetPathProd} \n`
    )
  )
}
})

// https://medium.com/@ferie/how-to-pass-environment-variables-at-building-time-in-an-angular-application-using-env-files-4ae1a80383c
