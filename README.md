# Stanford Angular.js Workshop

Let’s write a Yahtzee game ... or at least let's get started!
If you have never played Yahtzee, read the rules at https://en.wikipedia.org/wiki/Yahtzee or learn by playing it here: http://www.yahtzee-game.com/ 

## Pre-setup:

Install Node Version Manager (`nvm` - https://github.com/creationix/nvm ) with:

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash

This let you work with different version of node. 

Now for simplicity sake...
CLOSE YOUR SHELL and open a new one. 
`nvm` will not work i nthe shell you installed from.

Install node 4.2.1:

    nvm install 4.2.1

Select node 4.2.1:

    nvm use 4.2.1

Install the Angular Yeoman Generator: https://github.com/yeoman/generator-angular

    npm install git -g grunt-cli bower yo generator-karma generator-angular

## Get Ready

    mkdir stanfordAngularJs
    cd stanfordAngularJs
    yo angular yahtzee

This will take a little bit. 
To make things easier, make sure you answer in this way:    

    ? Would you like to use Gulp (experimental) instead of Grunt? No
    ? Would you like to use Sass (with Compass)? No
    ? Would you like to include Bootstrap? Yes
    ? Which modules would you like to include? angular-animate.js, angular-cookies.js, angular-resource.js, angular-messages.js, create app/styles/main.cssnitize.js, angular-touch.js
    
In practice, keep the default except: 
  * Says NO to compass 
  * Add angular-messages

### In a hurry? 
  You can skip the "Get Ready". Just clone this repo and run `npm install` and `bower install`.

## Questions?
  Send me an email [here](mailto:chris@allestelle.com).


