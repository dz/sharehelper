// David Zhou
// jQuery Sharehelper
//
// usage:
// $('#reddit').sharehelper('reddit');
//
// options:
// $('#reddit').sharehelper('reddit', {title: "custom title", url: "custom url", callback: callback_function});
//
// title (string): custom title
// url (string): custom url
// callback (function): custom callback function
// new_window (boolean): if true, opens share link in new window
//
// You can also set global options:
// $.fn.sharehelper.defaults.title = "Custom Title";
// $('#reddit').sharehelper('reddit') //uses "Custom Title" for title
//
// It's also possible to override defaults:
// $('#reddit').sharehelper('reddit', {title: "New Custom Title"});

(function($) {
    $.fn.sharehelper = function(service, options) {
        var options = $.extend({}, $.fn.sharehelper.defaults, options);
        return this.each(function() {
            if (SERVICES[service]===undefined)
                throw "Unrecognized service: " + service;
            $(this).attr('href', SERVICES[service].replace('{{url}}', options['url']).replace('{{title}}', options['title']));
            if (!!options['callback'])
                $(this).bind('click', function(){ options['callback'].call(this);});
            if (options['new_window'])
                $(this).bind('click', function(e){ e.preventDefault(); window.open(this.href);});
        });
    };
    
    var SERVICES = {
      reddit:     "http://reddit.com/submit?url={{url}}&title={{title}}",
      digg:       "http://digg.com/submit?url={{url}}&title={{title}}",
      facebook:   "http://www.facebook.com/sharer.php?u={{url}}&title={{title}}",
      delicious:  "http://del.icio.us/post?v=2&url={{url}}&title={{title}}",
      myspace:    "http://www.myspace.com/Modules/PostTo/Pages/?l=3&u={{url}}&t={{title}}&c=",
      google:     "http://www.google.com/bookmarks/mark?op=edit&bkmk={{url}}&title={{title}}"
    };

    //default settings
    $.fn.sharehelper.defaults = {
        new_window: true,
        title: encodeURIComponent(document.title),
        url: encodeURIComponent(window.location.href),
        callback: null
    };
})(jQuery);