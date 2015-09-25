git checkout -f;
git fetch;
git checkout --orphan gh-pages origin/gh-pages
git pull origin gh-pages
git merge gh-pages
npm run i
npm run dev-static
git mv staic/dist ./
rm -rf server static tools .editorconfig .gitignore .package.json
mv dist ./
git add *
git commit -am Dist
git push origin gh-pages
git checkout master
#git branch -D gh-pages
