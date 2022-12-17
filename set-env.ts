const { writeFile } = require('fs');
// Your environment.custom.ts file. Will be ignored by git.
const targetPath = './src/environments/environment.custom.ts';
// Load dotenv to work with process.env
require('dotenv').config();
// environment.ts file structure
const envConfigFile = `
export const environment = {
production: false,
  SPACE_ID: '${process.env.SPACE_ID,
}',
  ACCESS_TOKEN: '${process.env.ACCESS_TOKEN}',
};
`;
writeFile(targetPath, envConfigFile, function (err: any) {
  if (err) {
    throw console.error(err);
  } else {
    console.log('Using custom environment');
  }
});
