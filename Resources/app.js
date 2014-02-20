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

/**
* プロジェクト設定時に出来上がるひな形のアプリだとTabの生成に関するロジックが重複してるのでそこを共通化
* @method createTab
* @param icon {text型} Tabに表示したいアイコンの文字を渡す
* @param title {text型} Tabに表示したい文字を渡す
* @param window {Ti.UI.Window型} Tabに設置したいTi.Ui.Windowを渡す
* @return {Ti.Ui.Tab} 引数に渡された値でTi.Ui.Tabを生成する
**/

TiToDo.prototype.createTab = function(icon,title,window){
	var tab = Titanium.UI.createTab({  
		icon:icon,
		title:title,
		window:window
	});
	return tab;

};

var titodo = new TiToDo();
var tabGroup = Titanium.UI.createTabGroup();

var win1 = titodo.createWindow('Tab 1','#336699');
var win2 = titodo.createWindow('This is a Tab 2','#ff99cc');
var label1 = titodo.createLabel('I amd window 1 Label');
var label2 = titodo.createLabel('this is a window 2 Label');
win1.add(label1);
win2.add(label2);
var tab1 = titodo.createTab('KS_nav_views.png','Tab 1',win1);
var tab2 = titodo.createTab('KS_nav_ui.png','Tab 2',win2);


tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

tabGroup.open();

