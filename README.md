# Challenge:

## Build a simple API that I can use to check if a website is down.

* When I go to the URL /check?url=nomadcoders.co, check if the 'url' query contains http and if it does not, add it. 
* Using request make a GET request to the website and if the response.statusCode is    less or equals than 445 return a JSON {up:true}
* If the website is down, return a JSON {up:false} 

## Notes:

* To develop this challenge, do it in your computer, Codesandbox is not working with request, when you're done just copy paste the code into Codesanbox and submit it.

## Reference
- [x] request
- [x] HTTP Status Code