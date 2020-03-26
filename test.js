const cheerio = require('cheerio');
var Nightmare = require('nightmare');
var nightmare = Nightmare({show:true})

const url = 'https://www.lazada.com.my/catalog/?q=SAMSUNG+82+Q900+8K+Smart+QLED+TV+QA82Q900RBKXXM+%282019%29&_keyori=ss&from=input&spm=a2o4k.searchlistcategory.search.go.bc026e9bCflvmz';

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
		let jsonStr = $('script')[14].children[0].data;
		jsonStr = jsonStr.split("window.pageData=")[1];
		data = JSON.parse(jsonStr);
		let products = data['mods']['listItems'];
  		console.log("Number of products found:",(products.length));
		for (var i = 0; i < products.length; i++) {
			console.log("Product Name: ", products[i].name);
			console.log("Product Price: ", products[i].priceShow);
			console.log("Seller: ",products[i].sellerName);
		}
	}).catch(err => {
		console.log(err);
	});
