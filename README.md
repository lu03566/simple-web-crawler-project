# Simple Web Crawler
To learn and build a web crawler web application with Node

## Getting Started

Firstly, I searched for library that's popular for web scrapping such as **Cheerio.Js**. Then I look through tutorials and started to build one simple web crawler that target on 1 e-commerce store.

When trying on my project, I found that this e-commerce website rely on JavaScript to load their content, so using an HTTP request library like axios to request the HTML will not work because it will not wait for any JavaScript to execute like a browser would before returning a response. Thus, **Puppeteer/Nightmare** library that allows us to control a headless browser from a Node.js script. A perfect use case for this library is scraping pages that require JavaScript execution.


### Prerequisites

What things you need to install the software and how to install them
```
npm install cheerio nightmare puppeteer
```

## Built With

* [Cheerio](https://github.com/cheeriojs/cheerio) - Fast, flexible, and lean implementation of core jQuery designed specifically for the server.
* [Nightmare](https://github.com/segmentio/nightmare) - A high-level browser automation library.
* [Puppeteer](https://github.com/puppeteer/puppeteer) - Headless Chrome Node.js API


## Acknowledgments

* [Zetcode](http://zetcode.com/javascript/cheerio/) -  Cheerio tutorial
* [Pusher](https://pusher.com/tutorials/web-scraper-node) - BUILD A WEB SCRAPER WITH NODE - Ayooluwa Isaiah 
* [Bits and Pieces](https://blog.bitsrc.io/how-to-perform-web-scraping-using-node-js-part-2-7a365aeedb43) - How to Perform Web-Scraping using Node.js - Ankit Jain
