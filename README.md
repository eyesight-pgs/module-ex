# module-ex
Using modules over microservice...
The module system has major drawback, and explained bellow:
That the module are usually consumed as an npm module. This is kept in a private registry.
In the CI CD pipeline the npm install usually takes more time when it involves a private registry.

Solution: we can bypass this extra time by chosing git sub modules instead of private npm package.
This repo is an example on how to use git submodules instead of a private npm package.

In this repo,
- module-ex - main service
- module-ex-auth - a module (a separate repo, earlier we used create private npm package for this. now its a git submodule)
- module-ex-logger - another module
