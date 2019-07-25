function changeImage(event) {
	var random=Math.floor((Math.random()* 6) + 0);
	var bigSize = [('https://i.ytimg.com/vi/1yuM_WDV25M/maxresdefault.jpg'),
	('https://www.wheretraveler.com/sites/default/files/styles/wt17_promoted/public/Orlando-Songquan%20Deng_shutterstock_146393459.jpg?itok=HEhRJULF'),
	('https://cbsnews3.cbsistatic.com/hub/i/r/2018/05/24/ab8853cd-7721-44de-8e05-73c7db9f9e14/thumbnail/1240x698/f30056dccda6c05ba7bd42eb781d34e8/ctm-0524-space-needhttps://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Mi82NzMvb3JpZ2luYWwvZ29sZGVuLWdhdGUtYnJpZGdlLmpwZw==https://imgpile.com/images/1ed6f7c25ae6fd7759cd6b4482cbffe9.jpg'),
	('https://cdn.theatlantic.com/assets/media/img/mt/2015/11/CB053713/lead_720_405.jpg?mod=1533691784'),
	('https://sgcweb.s3.wasabisys.com/wqp/s3fs-public/10.11lahore.jpg'),
	('https://www.youlinmagazine.com/images/yd-islamabad.jpg'),
	('https://www.dailyevents.pk/wp-content/uploads/2016/12/facebook_event_1690023827993698.jpg')
	];
	var body = document.getElementById("mainBody");
	body.setAttribute("style", "background-image: url(" + bigSize[random] + ");")
}
changeImage();