$(document).ready(function(){
    $('.slider1').bxSlider({
        slideWidth: 380,
        minSlides: 3,
        maxSlides: 3,
        slideMargin: 10
    });
});

var show_more_skyscrapers = document.getElementById("blog-main-skyscrapers-read-more");
if (show_more_skyscrapers){
    show_more_skyscrapers.addEventListener("click", show_text_skyscrapers, false);
}

function show_text_skyscrapers() {
    var show_all_text = document.getElementById("blog-main-skyscrapers-show");
    show_all_text.style.display = "block";
    show_more_skyscrapers.style.display = "none";
}

var show_more_coast = document.getElementById("blog-main-coast-read-more");
if (show_more_coast){
    show_more_coast.addEventListener("click", show_text_coast, false);
}

function show_text_coast() {
    var show_all_text = document.getElementById("blog-main-coast-show");
    show_all_text.style.display = "block";
    show_more_coast.style.display = "none";
}

var show_more_pencils = document.getElementById("blog-main-pencils-read-more");
if (show_more_pencils){
    show_more_pencils.addEventListener("click", show_text_pencils, false);
}

function show_text_pencils() {
    var show_all_text = document.getElementById("blog-main-pencils-show");
    show_all_text.style.display = "block";
    show_more_pencils.style.display = "none";
}

var show_more_vinyl = document.getElementById("blog-main-vinyl-record-read-more");
if (show_more_vinyl){
    show_more_vinyl.addEventListener("click", show_text_vinyl, false);
}

function show_text_vinyl() {
    var show_all_text = document.getElementById("blog-main-vinyl-record-show");
    show_all_text.style.display = "block";
    show_more_vinyl.style.display = "none";
}


var colored = document.getElementById("circle");
colored.addEventListener('mouseenter',changeColor,false);

function changeColor() {
    var r = _.random(0, 255),
        g = _.random(0, 255),
        b = _.random(0, 255),
        random_color = 'rgb'+'('+r+','+g+ ','+b+')';
    circle.style.color = random_color;
}

$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
        window.location.hash = target;
    });
});

$(document).ready(function(){
    $('.overlay').click(function() {
        $(this).remove();
    });
});

var StickyElement = function(node){
    var doc = $(document),
        fixed = false,
        anchor = node.find('.sticky-anchor'),
        content = node.find('.flex-menu');

    var onScroll = function(e){
        var docTop = doc.scrollTop(),
            anchorTop = anchor.offset().top;

        console.log('scroll', docTop, anchorTop);
        if(docTop > anchorTop){
            if(!fixed){
                anchor.height(content.outerHeight());
                content.addClass('fixed');
                fixed = true;
            }
        }  else   {
            if(fixed){
                anchor.height(0);
                content.removeClass('fixed');
                fixed = false;
            }
        }
    };

    $(window).on('scroll', onScroll);
};

var demo = new StickyElement($('#sticky'));

var StickyElement = function(node){
    var doc = $(document),
        fixed = false,
        anchor = node.find('.sticky-anchor'),
        content = node.find('.flex-linea');

    var onScroll = function(e){
        var docTop = doc.scrollTop(),
            anchorTop = anchor.offset().top;

        console.log('scroll', docTop, anchorTop);
        if(docTop > anchorTop){
            if(!fixed){
                anchor.height(content.outerHeight());
                content.addClass('fixed');
                fixed = true;
            }
        }  else   {
            if(fixed){
                anchor.height(0);
                content.removeClass('fixed');
                fixed = false;
            }
        }
    };

    $(window).on('scroll', onScroll);
};

var demo = new StickyElement($('#sticky'));
