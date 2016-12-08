var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
	new Product({
		imagePath: 'http://pcgamingsite.com/wp-content/uploads/2015/10/rocket-ico.png',
		title: 'Rocket Leauge',
		description: 'Rocket League® is a futuristic Sports-Action game, in which players are equipped with booster-rigged vehicles for a high-octane re-imagining of football.',
		price: '20'
	}),
	new Product({
		imagePath: 'https://pbs.twimg.com/profile_images/725126186972667904/h3U8XNLl.jpg',
		title: 'NHL 17',
		description: 'All-new game modes, new and deeper experiences in fan-favorite modes, and the best on-ice gameplay ever make NHL 17 the most exciting EA SPORTS NHL game to date.',
		price: '25'
	}),
	new Product({
		imagePath: 'http://clubconflict.com/images/csgo_256.jpg',
		title: 'Counter Strike GO',
		description: 'CS: GO features new maps, characters, and weapons and delivers updated versions of the classic CS content (de_dust, etc.).',
		price: '30'
	}),
	new Product({
		imagePath: 'http://fifa17free.online/wp-content/uploads/2016/10/Fifa-Mobile-Soccer-Cheats-And-Hack-Free-Coins-Unlimited-Apk-Ios.jpg',
		title: 'Fifa 17',
		description: 'Powered by Frostbite, FIFA 17 transforms the way you play, compete and emotionally connect with the game.',
		price: '15'
	}),
	new Product({
		imagePath: 'http://orig00.deviantart.net/e30a/f/2013/109/3/e/portal_2___icon_by_blagoicons-d628iub.png',
		title: 'Portal 2',
		description: 'Portal 2 is a 2011 first-person puzzle-platform video game developed and published by Valve Corporation.',
		price: '25'
	}),
	new Product({
		imagePath: 'http://orig00.deviantart.net/fb6e/f/2013/310/d/3/battlefield_4_icon_dock_by_jasaisdeath-d6t92im.png',
		title: 'Battlefield 4',
		description: 'Battlefield 4 is a first-person shooter video game developed by video game developer EA DICE and published by Electronic Arts.',
		price: '20'
	}),
	new Product({
		imagePath: 'https://tpucdn.com/reviews/Performance_Analysis/Watch_Dogs_2/images/small.png',
		title: 'Watch Dogs 2',
		description: 'Watch Dogs 2 (stylized as WATCH_DOGS2) is an open world action-adventure video game developed and published by Ubisoft.',
		price: '30'
	}),
	new Product({
		imagePath: 'http://pcgamingsite.com/wp-content/uploads/2015/12/Far-Cry-4-ico.png',
		title: 'Far Cry 4',
		description: 'Far Cry 4 is an open world action-adventure first-person shooter video game developed by Ubisoft Montreal and published by Ubisoft.',
		price: '25'
	}),
]

var done = 0;

for(var i = 0; i < products.length; i++) {
	products[i].save(function(err, result) {
		done++;
		if(done === products.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}

