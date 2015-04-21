var SimpleSlides = {
    _currentSelection: 0,
    _previousSelection: 1,
    _max: 0,
    _height: 200,
    _arrow: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAsUlEQVRYw93XSwqDMBCA4byPItITSpGCiEhP6aqIJ+iyTiHdCJJuhj9tIMzGxceo8zCmcEIIQ+kZ1WOtfcq9owAJL+ccg/gAMmJGAQjiCMiICQW8r/d+RAE5E/oIASxngJwJ3ToRY2wkPH4BcdNGtBLWAqJXRaSUeIQ0p28Q1xoyoY64SNgKiO4/AegrQD9C9DdECxFaivFmhLfjGgaS+kYydChFx3J0MUFXM3Q51V7Pd5XzyZvlE+cnAAAAAElFTkSuQmCC',

    initTabletop: function (url, height) {
        // Requires Tabletop.js, https://github.com/jsoma/tabletop
        SimpleSlides._height = height;
        Tabletop.init( { key: url,
                         callback: getData,
                         simpleSheet: true,
                         parseNumbers: true } );
        function getData(data) {SimpleSlides.init(data, SimpleSlides._height);}
    },

    init: function (arr, height) {
        // All the heavy lifting: create the slides, add them to the DOM, add event listeners
        var  i = 0,
             slider = document.getElementById('slider-container'),
             frag = document.createDocumentFragment();
        slider.style.height = height;
        this._max = arr.length;
 
         slider.insertAdjacentHTML('afterbegin', '<div id="prev" class="prev-next"><img src="' 
                                   + this._arrow 
                                   + '" alt="previous" /></div><div id="slides"></div><div id="next" class="prev-next"><img src="' 
                                   + this._arrow 
                                   + '" alt="next" />');
        for (i; i < this._max; i++) {
            var slide = document.createElement('div');

            slide.className = 'slide';
            slide.id= i;
            slide.insertAdjacentHTML('afterbegin', '<img src="' 
                                     + arr[i].img 
                                     +'" title="' 
                                     + arr[i].img_caption 
                                     + '" /><div><h2>' 
                                     + arr[i].title 
                                     + '</h2><p class="details">' 
                                     + arr[i].text + '</p></div>');
            frag.appendChild(slide);  
        }
        console.log(frag);
        document.getElementById('slides').appendChild(frag);
        this.focusSlide(SimpleSlides._currentSelection, SimpleSlides._previousSelection);
        document.getElementById('prev').addEventListener('click', SimpleSlides.prevSlide);
        document.getElementById('next').addEventListener('click', SimpleSlides.nextSlide);
        window.addEventListener('keydown', SimpleSlides.handleArrowKey);
    },

    focusSlide: function (curr, prev) {
        // Bring a new slide in to view, move the previous one out of view
        var c = document.getElementById(curr),
            p = document.getElementById(prev),
            height = document.getElementById('slider-container').offsetHeight;
        c.style.left = 0;
        c.style.top = -(height + 10) * curr + 'px';
        p.style.left = '9000px';
    },

    prevSlide: function (e) {
        // Bring the previous slide into focus if we're not at the first one
        if (SimpleSlides._currentSelection > 0) {
            SimpleSlides._previousSelection = SimpleSlides._currentSelection;
            SimpleSlides._currentSelection -= 1;
            SimpleSlides.focusSlide(SimpleSlides._currentSelection, SimpleSlides._previousSelection);
        }
    },

    nextSlide: function (e) {
        // Bring the next slide into focus if we're not at the last one
        if (SimpleSlides._currentSelection < SimpleSlides._max - 1) {
            SimpleSlides._previousSelection = SimpleSlides._currentSelection;
            SimpleSlides._currentSelection += 1;
            SimpleSlides.focusSlide(SimpleSlides._currentSelection, SimpleSlides._previousSelection);
        }
    },

    handleArrowKey: function (e) {
        // Allow the user to navigate the slideshow using the left and right arrow keys
        if (e.keyCode === 39) {
            SimpleSlides.nextSlide(e);
        } 

        if (e.keyCode === 37) {
            SimpleSlides.prevSlide(e);
        } 
    }
}
