/*-------------------------------------------------------------------
Prisjakt Högerklick
@urre 160320
-------------------------------------------------------------------*/

(function() {

	'use strict';

	var prisjaktHogerklick = {

		init: function() {

			chrome.contextMenus.onClicked.addListener(prisjaktHogerklick.selectText);

			chrome.runtime.onInstalled.addListener(function() {
				var context = "selection";
				var title = "Sök på Prisjakt";
				var id = chrome.contextMenus.create({
					"title": title, 
					"contexts": [context],
					"id": "context" + context
				});
			});

		},

		selectText: function(info) {
			var phrase = info.selectionText;
			prisjaktHogerklick.openPrisjakt(phrase);
		},

		openPrisjakt: function(phrase) {
			var encodedQuery = encodeURIComponent(phrase);
			var url = "http://www.prisjakt.nu/#rparams=ss=" + encodedQuery;
			window.open(url, '_blank');
		}

	};

	document.addEventListener('DOMContentLoaded', function() { 
		prisjaktHogerklick.init();
	});

}());