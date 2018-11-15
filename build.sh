#!/bin/sh

OUT=build/drThorstenRoggendorf.html

WEBCOMPONENTS=node_modules/@webcomponents/custom-elements/src
CSSVARS=node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js

rm -rf build

./node_modules/.bin/babel src --out-dir build/src
cp -r $WEBCOMPONENTS build/wc
./node_modules/.bin/babel build/wc --out-dir build/$WEBCOMPONENTS

mkdir build/node_modules/css-vars-ponyfill
mkdir build/node_modules/css-vars-ponyfill/dist
cp $CSSVARS build/$CSSVARS

./node_modules/.bin/rollup -c

cp index.html build/

sed -i -e 's/<script type="module" src="src\/appl-app.js">/<script>\n/' build/index.html
sed -i -e '/<script>/ r build/src/bundle.js' build/index.html
