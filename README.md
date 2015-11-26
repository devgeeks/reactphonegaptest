A simple phonegap/cordova app using a particular react/redux stack

### Set up

* `npm install`
* `npm start`

App will be served from [http://localhost:3000/](http://localhost:3000/) in
dev mode complete with hot module reloading and the redux dev tools.

or

* `npm run build`

App will be built in production mode

### PhoneGap

Once the app has been built in production mode (the redux dev tools are a bit
annoying on Mobile for now):

* `phonegap platforms add ios android`
* `phonegap serve` || `phonegap run ios` || `phonegap run android`

etc
