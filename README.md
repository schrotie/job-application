# Job Application

This is a self contained Polymer web app I use for job-/project-applications.
It runs from a single responsive HTML file from disk/mail-attachment/server.
It scales from phones to desktop and has an (A4!) print function, should
your HR contact want to waste dead trees on you.

If you want to use it, you'll have to base64-encode all the graphics you need,
swap out all the content with your stuff install bower and polymer-bundler
and finally call the build.sh (Linux shell script).

For development run the server (`npm start`) and work on Chrome with toplevel
index.html. To create the job application `npm run build`, the result will
be build/drThorstenRoggendorf.html (change the name in `build.sh`). Test the
file in various browsers, including IE11 - I found recruiters still use it
more often than I'd assumed. To create a PDF version I use the app's print
function.

[Demo](http://schrotie.de/applApp/demo.html)

Enjoy.
