Pandect (0.0.1)
============

http://pandect.io/

Name: From Latin pandectēs (“book that contains everything”)

## Description:

Powerful, simple and elegant dashboard framework. With a beautiful design and very extensible nature, 
the Pandect dashboard framework allows system administrators and developers to create great looking
and functional dashboards.

## Features:

- Add as many elements to your dashboard as you want.
- Create multiple dashboards to organize different systems and customers.
- Use the framework to build custom solutions, such as Home Automation Dashboards.
- Simple search to filter what you need to find.

## Screenshots:

Early prototypes:

![Home Screen](/img/pandect-prototype-1.png?raw=true "Prototype 1")

## Run Pandect:

Navigate to the source code, then run the following commands:

```shell
npm install
npm install -g gulp
npm install -g jspm
jspm install -y
gulp watch
```
  
Browse to [http://localhost:9000](http://localhost:9000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files.

Note: Due to limits on GitHub, you might have to register your GitHub account in the command promt.

```shell
jspm registry config github
```

Then generate a personal access token on this URL:
[https://github.com/settings/applications](https://github.com/settings/applications)


## Running The Unit Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

```shell
npm install -g karma-cli
```

2. Install Aurelia libs for test visibility:

```shell
jspm install aurelia-framework
jspm install aurelia-http-client
jspm install aurelia-router
```

3. You can now run the tests with this command:

```shell
karma start
```

## Running The E2E Tests
Integration tests are performed with [Protractor](http://angular.github.io/protractor/#/).

1. Place your E2E-Tests into the folder ```test/e2e/src```
2. Install the necessary webdriver

  ```shell
  gulp webdriver_update
  ```

3. Configure the path to the webdriver by opening the file ```protractor.conf.js``` and adjusting the ```seleniumServerJar``` property. Typically its only needed to adjust the version number.

4. Run the E2E-Tests

  ```shell
  gulp e2e
  ```

## Credits:
- Developed by Deepmind AS: http://www.deepmind.no/
- Components: https://angularjs.org/, https://jquery.org/, http://nodejs.org/, http://expressjs.com/

## License (MIT):

Copyright (C) 2015 Deepmind AS - http://www.deepmind.no/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
