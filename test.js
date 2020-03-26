const cheerio = require('cheerio');
var Nightmare = require('nightmare');
var nightmare = Nightmare({
	show:true,
	 /*switches: {
        'proxy-server': 'socks5://127.0.0.1:9054'
    }*/
})

const url = 'https://www.lazada.com.my/dasher/?from=wangpu&langFlag=en&page=6&pageTypeId=2&q=All-Products';

//Request making using nightmare

nightmare
	.goto(url)
	.wait('body')
	.evaluate(() => document.querySelector('head').innerHTML)
	.end()
	.then(response => {
		//console.dir(response, {'maxArrayLength': null});
		const $ = cheerio.load(response);
		let data = [];
		let scriptLength = $('script').length;

		for (var i = 0; i < scriptLength; i++) {
			if(typeof $('script')[i].children[0] != "undefined" && 
				$('script')[i].children[0].data.toString().startsWith("window.pageData=")){
						//console.log("Data: ",i+1);	
						//console.log($('script')[i].children[0].data);
						let jsonStr = $('script')[i].children[0].data;
						jsonStr = jsonStr.split("window.pageData=")[1];    
						data = JSON.parse(jsonStr);
						let products = data['mods']['listItems'];
				  		console.log("Number of products found:",(products.length));
						for (var i = 0; i < products.length; i++) {
							console.log("Product Name: ", products[i].name);
							console.log("Product Price: ", products[i].priceShow);
							console.log("Seller: ",products[i].sellerName);
						}
				}
		}

		
	}).catch(err => {
		console.log(err);
	});
