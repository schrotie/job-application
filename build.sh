#!/bin/sh

OUT=build/drThorstenRoggendorf.html

WEBCOMPONENTS=node_modules/@webcomponents/custom-elements/src
CSSVARS=node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js

rm -rf build

# babel
./node_modules/.bin/babel src --out-dir build/src
cp -r $WEBCOMPONENTS build/wc
./node_modules/.bin/babel build/wc --out-dir build/$WEBCOMPONENTS

# copy css vars ponyfill and index.html
mkdir build/node_modules/css-vars-ponyfill
mkdir build/node_modules/css-vars-ponyfill/dist
cp $CSSVARS build/$CSSVARS
cp index.html build/

# rollup
./node_modules/.bin/rollup -c

# uglify
sed -i -e "s/'use strict';//" build/src/bundle.js
./node_modules/.bin/uglifyjs --compress --mangle -- build/src/bundle.js > build/src/ugly.js

# insert built results into HTML
sed -i -e 's/<script type="module" src="src\/appl-app.js">/<script>\n/' build/index.html
sed -i -e '/<script>/ r build/src/ugly.js' build/index.html

cp build/index.html build/drThorstenRoggendorf.html
