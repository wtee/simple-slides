simple-slides.js
================

simple-slides.js is a small library I wrote after hacking 
together a basic slideshow for a project. To save myself
some hassle in future projects, I cleaned up the code and made
it reusable.

It's best suited for simple timelines, about us pages, and
illustated narratives that can be split into slides. It's not a good
Powerpoint replacement and it doesn't do automatic transitions.

Features:
---------
* Simple to use
* Vanilla javascript
* Navigable with arrow keys
* Supports using Tabltop.js, if that's you're thing
* Looks decent across various viewport sizes (I plan on tweaking
  the styling at some point to make it more fully responsive).
* Small. 

How to use it:
-------------
SimpleSlides was designed primarily for ease of use. With one line of
javascript you can create a slideshow. Either like this::
 SimpleSlides.initTabletop('http://url.to.your.google.spreadsheet', 200);
Or like this::
 SimpleSlides.init(array_with_slide_objects, 200);

In both examples the first argument provides SimpleSlides with the
data for the slides while the second argument is the height you want
the slideshow container to be in pixels.

Here's what a basic page would look like::

 <html>
   <head>
     <title>A simple slideshow</title>
     <link href="css/simple-slides.js"></script>
     <script src="js/tabletop.js"></script>
     <script src="js/simple-slides.js"></script>
   </head>
   <body>
     <div id="slider-container"></div>
     <script>
       SimpleSlides.initTabletop('https://docs.google.com/spreadsheets/d/1llicGfdX7YVNxmPsdu3QbR04pBfPxk1DIX9irC31Iaw/pubhtml', 400);
     </script>
   </body>
 </html>

Here's `a demo with Tabletop`_ and a `demo without it`_.

To use SimpleSlides include simple-slides.css and simple-slides.js in
your document. If you want to use Tabletop with SimpleSlides include Tabletop.
Create an empty div in the body of your document with the id "slider-container".
Initialize SimpleSlides and voila.

If you're using Tabletop, your Google spreadsheet will need to have these fields:
* title
* text
* img
* img_caption
* link

Here's `an example`_.

If you're not using Tabletop, you'll need to create an array full of objects
with the attribute names that match the spreadsheet fields above. For example::

  var myarray = [ {title: 'My first slide',
                   text: 'This text fills out the body of the slide',
                   img: 'http://img.url',
                   img_caption: 'A picture'
                   link: 'http://for.more.info'}, // And so on ...

License
-------
SimpleSlides is available under the terms of the `Unlicense`_, that is
it's free and unencumbered software in the public domain.

.. _a demo with Tabletop: http://www.sometimes-i.com/code/simple-slides/examples/with-tabletop.html
.. _demo without it: http://www.sometimes-i.com/code/simple-slides/examples/without-tabletop.html
.. _an example: https://docs.google.com/spreadsheets/d/1llicGfdX7YVNxmPsdu3QbR04pBfPxk1DIX9irC31Iaw/pubhtml
.. _Unlicense: http://unlicense.org
