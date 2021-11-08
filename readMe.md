# CD
cd C:\Users\john.andre.b.see\OneDrive - Accenture\Training\Reac JS\react-course-projects\expensify-app

# Git Commands

git init - create a new git repo
git status - view changes to your project
git add - add files to staging area
git commit - create a new commit with files from staging area
git log - view recent commits

# SSH Agent
start ssh-agent
ssh-agent -s
eval $(ssh-agent)
ssh-add /c/Users/john.andre.b.see/.ssh/id_rsa
cd OneDrive\ -\ Accenture/Training/Reac\ JS/react-course-projects/expensify-app/

# Git Push
git remote add origin git@github.com:andreeesee/andre-expensify-app.git
git remote
git remote -v
git branch -M main
git push -u origin main

# Commit only files with changes
git status
git commit -am "message" 
git push heroku main

# WebPack