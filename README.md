# classcharts-cors-proxy

A classcharts api proxy running on netlify to bypass CORS for when you are accessing classcharts from within a web app.
Is very much not stable, don't rely on it for anything important, send me a PR if you have any improvements.

This should be deployed to netlify, I have an instance running at https://classcharts-cors-proxy.netlify.app/ but don't overload it by using it for anything in production enviroments!

## Usage
Deploy to netlify, and then see below for reference (these URLs use the classcharts-cors-proxy.netlify.app instance, you should replace this with your own instance)

http://classcharts-cors-proxy.netlify.app/student-client?loginID={student classchart login}&dob={date of birth in dd/mm/yyyy}&command={command as it is called in the classcharts-api-js deno module}&args={any arguments that go into the function}

## Contribute