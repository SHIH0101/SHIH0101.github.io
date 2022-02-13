//aos效果

AOS.init();


//翻頁效果
var Page = (function() {

    var config = {
            $bookBlock: $('#bb-bookblock'),
            $navNext: $('#bb-nav-next'),
            $navPrev: $('#bb-nav-prev'),

        },
        init = function() {

            // 翻頁速度
            config.$bookBlock.bookblock({
                speed: 800,
                shadowSides: 0.8,
                shadowFlip: 0.7
            });
            initEvents();
        },
        initEvents = function() {

            var $slides = config.$bookBlock.children();

            // btn左右翻頁
            config.$navNext.on('click touchstart', function() {
                config.$bookBlock.bookblock('next');
                return false;
            });

            config.$navPrev.on('click touchstart', function() {
                config.$bookBlock.bookblock('prev');
                return false;
            });

            // 手指滑動翻頁
            $slides.on({
                'swipeleft': function(event) {
                    config.$bookBlock.bookblock('next');
                    return false;
                },
                'swiperight': function(event) {
                    config.$bookBlock.bookblock('prev');
                    return false;
                }
            });

            // 鍵盤左右鍵翻頁
            $(document).keydown(function(e) {
                var keyCode = e.keyCode || e.which,
                    arrow = {
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40
                    };

                switch (keyCode) {
                    case arrow.left:
                        config.$bookBlock.bookblock('prev');
                        break;
                    case arrow.right:
                        config.$bookBlock.bookblock('next');
                        break;
                }
            });
        };

    return {
        init: init
    };

})();

Page.init();