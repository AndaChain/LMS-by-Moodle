<<<<<<< HEAD
tinyMCEPopup.requireLangPack();

var MergeCellsDialog = {
	init : function() {
		var f = document.forms[0];

		f.numcols.value = tinyMCEPopup.getWindowArg('cols', 1);
		f.numrows.value = tinyMCEPopup.getWindowArg('rows', 1);
	},

	merge : function() {
		var func, f = document.forms[0];

		tinyMCEPopup.restoreSelection();

		func = tinyMCEPopup.getWindowArg('onaction');

		func({
			cols : f.numcols.value,
			rows : f.numrows.value
		});

		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(MergeCellsDialog.init, MergeCellsDialog);
=======
tinyMCEPopup.requireLangPack();

var MergeCellsDialog = {
	init : function() {
		var f = document.forms[0];

		f.numcols.value = tinyMCEPopup.getWindowArg('cols', 1);
		f.numrows.value = tinyMCEPopup.getWindowArg('rows', 1);
	},

	merge : function() {
		var func, f = document.forms[0];

		tinyMCEPopup.restoreSelection();

		func = tinyMCEPopup.getWindowArg('onaction');

		func({
			cols : f.numcols.value,
			rows : f.numrows.value
		});

		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(MergeCellsDialog.init, MergeCellsDialog);
>>>>>>> 7d5343e0dc16dcd9d110b3f353cfd8fc8c7755b0
