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
* @return {Array} 
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

/**
* ACSに登録してあるタスク情報を取得する
* @method taskList
* @return {array} [{"taskName":"",taskStatus:""},{}...}]という構造の配列を返す
**/
TiToDo.prototype.getTaskData = function(callback){
	var Cloud = require('ti.cloud');
	Cloud.Users.login({
		login: "h5y1m141",
		password: "orih6254"
	}, function(result) {
		Cloud.Objects.query({
			classname: "tasks",
			page: 1,
			per_page: 20
		}, function(e) {
			if (e.success) {
				callback(e.tasks);
			}
		});
	});
	      
};

/**
* ACSに登録してあるタスク情報を取得する
* @method 
* @return {Ti.UI.View} テキスト入力できる要素を持ったViewを返す
**/
TiToDo.prototype.createInputArea = function(){
	var inputArea = Ti.UI.createView({
		width:Ti.UI.FULL,
		height:300
	});

	var textArea = Titanium.UI.createTextField({
		hintText:'ここにタスク名を入力してください',
		width:300,
		height:60,
		top:10,
		font:{fontSize:16},
		color:'#888',
		textAlign:'left',
		appearance:Titanium.UI.KEYBOARD_APPEARANCE_ALERT,       
		keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
		returnKeyType:Titanium.UI.RETURNKEY_EMERGENCY_CALL,
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5
	});
	inputArea.add(textArea);
	return inputArea;
};

module.exports = TiToDo;
