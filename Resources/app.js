/**
* クラスの説明文。
* @class TiToDo
* @constructor
**/

function TiToDo(){
	this.taskList = Ti.UI.createTableView({
		width:Ti.UI.FULL,
		height:'auto',
		backgroundColor:"#f9f9f9"
	});

	this.name = "TiToDo";
};

/**
* プロジェクト設定時に出来上がるひな形のアプリだとLabelの生成に関するロジックが重複してるのでそこを共通化
* @method createLabel
* @param text {text型} Ti.Ui.Labelに設定したい文字を引数に渡す
* @return {Ti.Ui.Label} 引数に渡された文字列でTi.Ui.Labelを返す
**/

TiToDo.prototype.createLabel = function(text){
	var label = Ti.UI.createLabel({
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
	var win = Ti.UI.createWindow({  
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
	var tab = Ti.UI.createTab({  
		icon:icon,
		title:title,
		window:window
	});
	return tab;

};

/**
* タスクリストにタスクを設定するためのメソッド
* @method setTaskList
* @param taskList {array型} タスク名、タスクの状態を持ったオブジェクトが1つ以上ある配列
* @return {} 戻り値としては何も返さない
**/
TiToDo.prototype.setTaskList = function(taskList){
	var task, _i, _len,row,taskName,taskStatus,rows = [];

	for (_i = 0, _len = taskList.length; _i < _len; _i++) {
		row = Ti.UI.createTableViewRow({
        backgroundColor: "#f9f9f9",
        height:60,
        hasChild:false
      });
		task = taskList[_i];
		taskName = Ti.UI.createLabel({
			top:5,
			left:10,
			color:'#222',
			width:200,
			height:'auto',
			text:task.taskName,
			font:{fontSize:14},
			textAlign:'left'

		});
		taskStatus = Ti.UI.createSwitch({
			titleOn:'Done',
			titleOff:'work in progress ',
			value:task.taskStatus,
			right:10
		});
 	  row.add(taskName);
		row.add(taskStatus);
		rows.push(row);
		
	}

	return this.taskList.setData(rows);
};
var titodo = new TiToDo();
var tabGroup = Ti.UI.createTabGroup();

var win1 = titodo.createWindow('Tab 1',"#f9f9f9");
var win2 = titodo.createWindow('This is a Tab 2','#f9f9f9');
var win3 = titodo.createWindow('TaskList','#ff99cc');
var label1 = titodo.createLabel('I amd window 1 Label');
var label2 = titodo.createLabel('this is a window 2 Label');

var taskData = [
	{"taskName":"TitaniumのClassicスタイルで既存のアプリのリファクタリングを実施する",taskStatus:true},
	{"taskName":"Alloy使ったToDoサンプルアプリを考えてみる",taskStatus:true},
	{"taskName":"Titaniumのmoduleプロジェクトの使い方について学ぶ",taskStatus:true},
	{"taskName":"TiShadowの使い方についてブログにまとめる",taskStatus:false}
];

titodo.setTaskList(taskData);
win1.add(label1);
win2.add(label2);
win3.add(titodo.taskList);
var tab1 = titodo.createTab('KS_nav_views.png','Tab 1',win1);
var tab2 = titodo.createTab('KS_nav_ui.png','Tab 2',win2);
var tab3 = titodo.createTab('KS_nav_views.png','Tab 3',win3);
tabGroup.addTab(tab3);  
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

tabGroup.open();

