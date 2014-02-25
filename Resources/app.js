var TiToDo = require("titodo");
var titodo = new TiToDo();
var tabGroup = Ti.UI.createTabGroup();

var win1 = titodo.createWindow('Tab 1',"#f9f9f9");
var win2 = titodo.createWindow('This is a Tab 2','#f9f9f9');
var win3 = titodo.createWindow('TaskList','#ff99cc');

var label2 = titodo.createLabel('this is a window 2 Label');
var inputArea = titodo.createInputArea();
var label1 = titodo.createLabel('I amd window 1 Label');

titodo.getTaskData(function(taskData) {
	titodo.setTaskList(taskData);	

}); 

win1.add(inputArea);
win2.add(label2);
win3.add(titodo.taskList);
var tab1 = titodo.createTab('KS_nav_views.png','Tab 1',win1);
var tab2 = titodo.createTab('KS_nav_ui.png','Tab 2',win2);
var tab3 = titodo.createTab('KS_nav_views.png','Tab 3',win3);
tabGroup.addTab(tab3);  
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

tabGroup.open();

