pkg=snocommit

cd /code/snomiao/js/main
git subtree split --prefix=packages/$pkg -b $pkg
git push --all origin

open https://snomiao.dev/snomiao/$pkg/tree/main
sleep 60
cd /code/snomiao/$pkg/-/main
git pull git@github.com:snomiao/js $pkg --allow-unrelated-histories

cd /code/snomiao/js/main
git rm -rf packages/$pkg
