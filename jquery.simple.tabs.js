/*
    jquery.simple.tabs.js
    @author Vic 
    https://github.com/yijian002/jquery.simple.tabs
*/

(function($) {

    'use strict';

    $.fn.simpletabs = function(options) {
        var settings = {
            tabs: '.tabs >',
            contents: '.contents >',
            class_selected: 'selected',
            event: 'click.tabs',
            event_func: $.noop
        };

        var p = settings;

        var $container = null,
            $contents = null;

        if (options && typeof options === 'object') {
            $.extend(p, options);
        }

        function bind() {
            $container.find(p.tabs).off(p.event).on(p.event, function() {
                var $this = $(this),
                    idx = $this.index();

                $this.addClass(p.class_selected).siblings().removeClass(p.class_selected);
                $contents.eq(idx).show().siblings().hide();

                p.event_func();
            });
        }

        function init(opts) {
            $container = $(this);
            if (!$container.length) {
                console.error('Not found the container.');
                return;
            }

            $contents = $container.find(p.contents);
            if (!$contents.length) {
                console.error('Not found the contens.');
                return;
            }

            bind();
        }

        this.each(function() {
            init.call(this, options);
        });

        return this;
    };

}(jQuery));
