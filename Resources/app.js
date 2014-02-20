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

var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var titodo = new TiToDo();

var label1 = titodo.createLabel('I amd window 1 Label');
var label2 = titodo.createLabel('this is a window 2 Label');
win1.add(label1);

var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});


win2.add(label2);


tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

tabGroup.open();

