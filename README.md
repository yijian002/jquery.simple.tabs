# jquery.simple.tabs
A very simple tabs plugin


### Code examples
``` javascript
$('#some-element').simpletabs();

// Some options
$('#some-element').simpletabs({
	tabs: '.tabs >',
	contents: '.contents >',
	class_selected: 'selected',
	event: 'click',
	event_func: function() {
		// todo something...
	}
});
```