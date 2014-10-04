//---------------------------------------------------------------------------------------------------------------------------------------//
//
//														IOS PDF reader Module
//			Provide Valid PDF  Path to the Module and it will open PDF with options or it will alert no PDF found
//
//---------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------------------//
//
//														Android PDF reader Module
//			listing All PDF from Device in TableView and on click of it open PDF with ZoomIn/ZoomOut/Go to page Number Options
//
//---------------------------------------------------------------------------------------------------------------------------------------//
var win = Ti.UI.createWindow();
var data = [];
var module = require('com.pdfreader');
var button1 = Titanium.UI.createButton({
	top : 10,
	left : 10,
	title : 'click me'
});
win.add(button1);

button1.addEventListener('click', function(e) {

	var appFilePath = Ti.Filesystem.resourcesDirectory + '/typo_tips.pdf';
	var appFile = Ti.Filesystem.getFile(appFilePath);
	Ti.API.info('.nativePathL ' + appFile.nativePath);
	Ti.API.info('======appFile:' + appFile.exists());
	if (appFile.exists()) {
		Ti.API.info('appFile.nativePathL ' + appFile.nativePath);
		module.openPDF('/typo_tips.pdf');
	} else {
		alert('No PDF Found !!!!!');

	}

});

win.open();
