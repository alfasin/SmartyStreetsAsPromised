# smarty-streets-as-promised

https://github.com/alfasin/smarty-streets-as-promised

We all know what's the [callback hell](http://callbackhell.com/) and glad that since ES5 we don't have to deal with it, now we have Promises and functions like async await. Yet, some libraries still require using callbacks SmartyStreets API (described in: https://smartystreets.com/docs/cloud/us-street-api) is one of them. 

This package is a [promisification](http://bluebirdjs.com/docs/api/promise.promisify.html) of SmartyStreets API using bluebird.

Checkout [example.js](middleware_example.js) for usage and [.env](.env_example) as an example of how to set your environment. 

Kudus for [Hagai Hanan](https://github.com/hagaihanan) for his help!
