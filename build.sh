#!/bin/sh

OUT=build/drThorstenRoggendorf.html

WEBCOMPONENTS=node_modules/@webcomponents/custom-elements/src
CSSVARS=node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js
BUNDLE=build/src/bundle.js
UGLY=build/src/ugly.js

rm -rf build

# babel
./node_modules/.bin/babel src --out-dir build/src
cp -r $WEBCOMPONENTS build/wc
./node_modules/.bin/babel build/wc --out-dir build/$WEBCOMPONENTS

# copy css vars ponyfill and index.html
mkdir build/node_modules/css-vars-ponyfill
mkdir build/node_modules/css-vars-ponyfill/dist
cp $CSSVARS build/$CSSVARS
cp index.html $OUT

# rollup
./node_modules/.bin/rollup -c

# uglify
sed -i -e "s/'use strict';//" $BUNDLE
./node_modules/.bin/uglifyjs --compress --mangle -- $BUNDLE > $UGLY

# insert built results into HTML
sed -i -e 's/<script type="module" src="src\/appl-app.js">/<script>\n/' $OUT
sed -i -e "/<script>/ r $UGLY" $OUT
