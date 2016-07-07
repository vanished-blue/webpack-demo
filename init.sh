rm -rf .git
git init
git remote add origin git@github.com:vanished-blue/webpack-demo.git
git config --global push.default simple
git config user.name vanished-blue
git config user.email jspnt@126.com
git config --list
git add .
git commit -am "a simple try"
git push -u origin master
