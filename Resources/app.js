/**
* クラスの説明文。
* @class TiToDo
* @constructor
**/

function TiToDo(){
	this.name = "TiToDo";
};

/**
* プロジェクト設定時に出来上がるひな形のアプリだとLabelの生成に関するロジックが重複してるのでそこを共通化
* @method createLabel
* @param text {text型} Ti.Ui.Labelに設定したい文字を引数に渡す
* @return {Ti.Ui.Label} 引数に渡された文字列でTi.Ui.Labelを返す
**/

TiToDo.prototype.createLabel = function(text){
	var label = Titanium.UI.createLabel({
		color:'#999',
		text:text,
		font:{fontSize:20,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		width:'auto'
	});
	return label;

};

/**
* プロジェクト設定時に出来上がるひな形のアプリだとWindowの生成に関するロジックが重複してるのでそこを共通化
* @method createWindow
* @param title {text型} Ti.Ui.Windowのタイトルにに設定したい文字を引数に渡す
* @param backgroundColor {text型} Ti.Ui.Windowの背景色に設定したい値を渡す
* @return {Ti.Ui.Window} 引数に渡された値でTi.Ui.Windowを生成する
**/

TiToDo.prototype.createWindow = function(title,backgroundColor){
	var win = Titanium.UI.createWindow({  
		title:title,
		backgroundColor:backgroundColor
	});
	return win;

};

var titodo = new TiToDo();
var tabGroup = Titanium.UI.createTabGroup();

var win1 = titodo.createWindow('Tab 1','#336699');
// var win1 = Titanium.UI.createWindow({  
//     title:
//     backgroundColor:
// });
var win2 = titodo.createWindow('This is a Tab 2','#ff99cc');
// var win2 = Titanium.UI.createWindow({  
//     title:'Tab 2',
//     backgroundColor:'#fff'
// });
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});



var label1 = titodo.createLabel('I amd window 1 Label');
var label2 = titodo.createLabel('this is a window 2 Label');
win1.add(label1);


var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});


win2.add(label2);


tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

tabGroup.open();

