tinymce.PluginManager.add('KeyLegend', function(editor) {

	function showDialog() {
		var win = editor.windowManager.open({
			title: "Insert Subject Guide Legend",
			body: [],
            
			onSubmit: function(e) {
				editor.focus();
				editor.undoManager.transact(function() {
                
                    var base = $('body', window.parent.document).data('portal-url');
                    var content = '<p>' +
                        '<div>Good for Disciplines</div>' +
                        '<ul id="subject-legend">' +
                            '<li data-discipline="0">' +
                                '<img class="subject-key-icon" src="++resource++polklibrary.type.rdb/blue.jpg" alt="1" />' +
                                '<div>Discipline</div>' +
                            '</li>' +
                            '<li data-discipline="0">' +
                                '<img class="subject-key-icon" src="++resource++polklibrary.type.rdb/red.jpg" alt="2" />' +
                                '<div>Discipline</div>' +
                            '</li>' +
                            '<li data-discipline="0">' +
                                '<img class="subject-key-icon" src="++resource++polklibrary.type.rdb/orange.jpg" alt="3" />' +
                                '<div>Discipline</div>' +
                            '</li>' +
                            '<li data-discipline="0">' +
                                '<img class="subject-key-icon" src="++resource++polklibrary.type.rdb/green.jpg" alt="4" />' +
                                '<div>Discipline</div>' +
                            '</li>' +
                            '<li data-discipline="0">' +
                                '<img class="subject-key-icon" src="++resource++polklibrary.type.rdb/purple.jpg" alt="5" />' +
                                '<div>Discipline</div>' +
                            '</li>' +
                            '<li data-discipline="0">' +
                                '<img class="subject-key-icon" src="++resource++polklibrary.type.rdb/teal.jpg" alt="6" />' +
                                '<div>Discipline</div>' +
                            '</li>' +
                            '<li data-discipline="0">' +
                                '<img class="subject-key-icon" src="++resource++polklibrary.type.rdb/yellow.jpg" alt="7" />' +
                                '<div>Discipline</div>' +
                            '</li>' +
                            '<li data-discipline="0">' +
                                '<img class="subject-key-icon" src="++resource++polklibrary.type.rdb/pink.jpg" alt="8" />' +
                                '<div>Discipline</div>' +
                            '</li>' +
                        '</ul>'+
                    '</p>';
                
					editor.insertContent(content);
				});

				editor.selection.setCursorLocation();
				editor.nodeChanged();
			}
		});

	}
    
	editor.addCommand("mceKeyLegend", showDialog);

	editor.addButton('KeyLegend', {
        image : $('body').attr('data-portal-url') + '/++resource++polklibrary.type.rdb/key-icon.png',
		tooltip: 'Add a database to discipline key legend',
		onclick: showDialog
	});

});