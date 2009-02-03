jQuery Sharehelper
==================

*David Zhou

usage
-----

<code>$('a#reddit').sharehelper('reddit');</code>

options
-------

* title (string): custom title
* url (string): custom url
* callback (function): custom callback function
* new_window (boolean): if true, opens share link in new window


global options
--------------

You can also set global options::

    $.fn.sharehelper.defaults.title = "Custom Title";
    $('a#reddit').sharehelper('reddit') //uses "Custom Title" for title
    
    //It's also possible to override defaults:
    $('a#reddit').sharehelper('reddit', {title: "New Custom Title"});
