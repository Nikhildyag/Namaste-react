React apps will work faster because react app uses the parcel dependency.

NPM is a standard repository for all the packages.NPM manages packages, but it not stand for the node package manager

To add NPM to your project => "npm init"  
 - It will add file named package.json.
 - package.json is configuration for NPM
 - It gives us permission to install packages(dependencies) into our project

Bundler is the most important package
 - bundler basically packages the app
 - create-react-app in the backend uses web-pack and babel to build things up

In this project I have used the parcel
 -It is also a web-pack

To install any dev dependency => "npm install -D dependency name"

To install any normal dependency => "npm install dependency name"
  -This will give package-lock.json
    -It will include all the current version of the node modules that have been installed
  -This will also install node-modules
    -It contains the parcel module

Infront of the version in the package.json we have a symbol, it can be of two types
   1) ^ => caret :- upgraded to latest minor versions like(1.1,1.2,1.3)
   2) ~ => tilde :- upgraded to latest major versions like(1,2,3,4)

Every dependency have its own dependencies,this is called as transitive dependency,hence their own package.json and package-lock.json.

.gitignore contains all the folders and files which can be reinstallable

To ignit our project, we have to run => "npx parcel index.html(source file)"
  -It will give the developement build of our app

To build a production build we have to run => "npx parcel build index.html(source file)"
  -It will give the production build of our app

Solve the module not found problem by installing the parcel-bundler => "npm install -D parcel-bundler"

parcel will create a server for us

Install react and react-dom

react => "npm install react"

react-dom => "npm install react-dom"

import the react and react-dom from the files

This will give an error saying that javascript files doesnt contain imports and exports
  - To overcome please add type="module" attribute in the script tag
  - // <script type="module" src="index.js">


Parcel makes our app faster
 1) Dev build
 2) Local server
 3) HMR-hot module replacement
 4) file watching algorithm
 5) caching - faster builds
 6) image optimization
 7) minification
 8) bundling
 9) compressing
 10) consistent hashing
 11) differential bundling- should be used in different types of older browsers
 12) diagonostics-better error suggestions
 13) HTTPS
 14) Tree shaking- removes unused codes(functions)



