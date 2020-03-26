/*// pl-scraper.js

    const axios = require('axios');
    const cheerio = require('cheerio');

    const url = 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1';

    axios(url)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        $('script').each((i, e) => {
            if (typeof $('script')[i].children[0] !== 'undefined') {
                // the variable is defined
                console.log("result :",$('script')[i].children[0].data);

            }
        });  
      })
      .catch(console.error);*/


// reddit-scraper.js

    const cheerio = require('cheerio');
    const puppeteer = require('puppeteer');

    const url = 'https://www.lazada.com.my/catalog/?from=input&q=asdf&price=100-';

    puppeteer
      .launch()
      .then(browser => browser.newPage())
      .then(page => {
        return page.goto(url).then(function() {
          return page.content();
        });
      })
      .then(html => {
        const $ = cheerio.load(html);
        console.log("result :", $('a[href*="//www.lazada.com.my/products/"]')[0]);
      })
      .catch(console.error);