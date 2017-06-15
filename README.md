# jquery.simple.tabs
A very simple tabs plugin


### Code examples
```
$('#some-element').simpletabs();

// Some options
$('#some-element').simpletabs({
	tabs: '.tab',
    contents: '.contents',
    class_selected: 'selected',
    event: 'click',
    event_func: function() {
	    // todo something...
	}
});
```