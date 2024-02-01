tinymce.PluginManager.add('AZPicker', function(editor) {

    var databases = []; // Used for menu dropdown only
    var databases_hash = {}; // Store for fast look up of all information
    var databases_full = [];

    $.get($('body').attr('data-portal-url') + '/getResearchDatabase', function(data){
        for (var i in data) {
            databases.push({
                'text' : data[i].Title,
                'value' : i,
            });
            databases_full.push(data[i]);
        }
        
    });

    function compare(a,b) {
        if (a.text < b.text)
            return -1;
        else if (a.text > b.text)
            return 1;
        else 
            return 0;
    }
    
	function showDialog() {
		var win = editor.windowManager.open({
			title: "Insert Research Database Link",
			body: [
                {
					name: 'database',
					type: 'listbox',
					size: 40,
					label: 'Database',
                    values: databases.sort(compare),
                    
				},
                {
					name: 'use_description',
					type: 'checkbox',
					size: 40,
					label: 'Show Description?',
				},
            ],
            
			onSubmit: function(e) {

                var title = databases_full[e.data.database].Title;
                var description = databases_full[e.data.database].Description;
                var url = databases_full[e.data.database].getRemoteUrl;
                var id = databases_full[e.data.database].getId;

				editor.focus();

				editor.undoManager.transact(function() {
                    var content = '<p><a class="pat-db-info" href="' + url + '" data-id="' + id + '">' + title + '</a><p>';
                    if (e.data.use_description)
                        content += '<p class="pat-db-info-desc" data-desc-id="' + id + '">' + description + '</p>';
                    
					editor.insertContent(content);
				});

				editor.selection.setCursorLocation();
				editor.nodeChanged();
			}
		});

	}
    
	editor.addCommand("mceAZPicker", showDialog);

	editor.addButton('AZPicker', {
        image : $('body').attr('data-portal-url') + '/++resource++polklibrary.type.rdb/a-z.png',
		tooltip: 'Insert Research Database Link',
		onclick: showDialog
	});

});