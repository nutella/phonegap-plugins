function onDeviceReady() {
	window.plugins.AdMob.createBannerView(
		{
		'publisherId': 'xxx',
		'adSize': AdMob.AD_SIZE.BANNER,
		positionAtTop: true
		},
		successBanner,
		failureBanner
	);
}

function successBanner() {
	window.plugins.AdMob.requestAd(
		{ 'isTesting': true },
		successBannerView,
		failureBannerView
	);
}

function failureBanner() {
	console.log('fail to create banner');
}

function successBannerView() {
	console.log('banner loaded');
}

function failureBannerView() {
	console.log('error requesting banner');
}
