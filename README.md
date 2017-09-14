# jquery.simple.tabs
A simple tabs plugin


### Code examples
``` js
$('#some-element').simpletabs();

// Some options
$('#some-element').simpletabs({
    tabs: '.tabs >',
    contents: '.contents >',
    class_selected: 'selected',
    event: 'click',
    event_func: function(event, index) {
        // todo something...
    }
});
```