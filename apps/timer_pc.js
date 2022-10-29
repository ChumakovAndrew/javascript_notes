const { spawn } = require('child_process');
const ls = spawn("shutdown -s -t 100");

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

//как будешь делать посмотри getTime