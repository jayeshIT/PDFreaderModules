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
	title : 'click me '
});
win.add(button1);
var tblView = Titanium.UI.createTableView({
	top : 70,
	left : 0,
	right : 0,
	backgroundColor : 'white'
});
if (Titanium.Platform.osname == "android") {
	win.add(tblView);
}
button1.addEventListener('click', function(e) {
	tblView.setData(null);
	if (Titanium.Platform.osname != "android") {

		var appFilePath = Ti.Filesystem.resourcesDirectory + '/typo_tips.pdf';

		var appFile = Ti.Filesystem.getFile(appFilePath);

		Ti.API.info('.nativePathL ' + appFile.nativePath);

		Ti.API.info('======appFile:' + appFile.exists());

		if (appFile.exists()) {

			Ti.API.info('appFile.nativePathL ' + appFile.nativePath);

			module.openPDF(appFile.nativePath);

		} else {

			alert('No PDF Found !!!!!');

		}
	} else {

		var pdfs = module.getPdfs();

		if (pdfs) {
			data = [];
			for (var key in pdfs) {
				var row = Titanium.UI.createTableViewRow({
					height : 50,
					backgroundColor : 'white'
				});
				row.key_number = key;
				row.path = pdfs[key];
				var split_array = pdfs[key].split('/');
				var split_array_name = split_array[split_array.length - 1];
				var lbl = Titanium.UI.createLabel({
					left : 10,
					color : 'black',
					font : {
						fontSize : 15
					},
					textAlign : 'left',
					text : split_array_name
				});
				row.add(lbl);
				data.push(row);
			}
			tblView.setData(data);

		} else {

			alert('No PDF founds...');

		}
	}

});

tblView.addEventListener('click', function(e) {
	module.openPdfIntent(e.row.path);
});
win.open();
