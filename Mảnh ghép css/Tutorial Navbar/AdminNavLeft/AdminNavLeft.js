(function($) {
    'use strict';
    var backdrop = '.dropdown-backdrop'
    var toggle = '[data-toggle="dropdown"]'
    var Dropdown = function(element) {
        $(element).on('click.bs.dropdown', this.toggle)
    }

    Dropdown.VERSION = '3.3.4'

    Dropdown.prototype.toggle = function(e) {
        var $this = $(this)

        if ($this.is('.disabled, :disabled')) return

        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')

        clearMenus()

        if (!isActive) {
            if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
                // if mobile we use a backdrop because click events don't delegate
                $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
            }

            var relatedTarget = {
                relatedTarget: this
            }
            $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

            if (e.isDefaultPrevented()) return

            $this
                .trigger('focus')
                .attr('aria-expanded', 'true')

            $parent
                .toggleClass('open')
                .trigger('shown.bs.dropdown', relatedTarget)
        }

        return false
    }

    Dropdown.prototype.keydown = function(e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

        var $this = $(this)

        e.preventDefault()
        e.stopPropagation()

        if ($this.is('.disabled, :disabled')) return

        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')

        if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
            if (e.which == 27) $parent.find(toggle).trigger('focus')
            return $this.trigger('click')
        }

        var desc = ' li:not(.disabled):visible a'
        var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

        if (!$items.length) return

        var index = $items.index(e.target)

        if (e.which == 38 && index > 0) index-- // up
            if (e.which == 40 && index < $items.length - 1) index++ // down
                if (!~index) index = 0

        $items.eq(index).trigger('focus')
    }

    function clearMenus(e) {
        if (e && e.which === 3) return
        $(backdrop).remove()
        $(toggle).each(function() {
            var $this = $(this)
            var $parent = getParent($this)
            var relatedTarget = {
                relatedTarget: this
            }

            if (!$parent.hasClass('open')) return

            $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

            if (e.isDefaultPrevented()) return

            $this.attr('aria-expanded', 'false')
            $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
        })
    }

    function getParent($this) {
        var selector = $this.attr('data-target')

        if (!selector) {
            selector = $this.attr('href')
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }

        var $parent = selector && $(selector)

        return $parent && $parent.length ? $parent : $this.parent()
    }


    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.dropdown')

            if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
            if (typeof option == 'string') data[option].call($this)
        })
    }

    var old = $.fn.dropdown

    $.fn.dropdown = Plugin
    $.fn.dropdown.Constructor = Dropdown

    $.fn.dropdown.noConflict = function() {
        $.fn.dropdown = old
        return this
    }

    $(document)
        .on('click.bs.dropdown.data-api', clearMenus)
        .on('click.bs.dropdown.data-api', '.dropdown form', function(e) {
            e.stopPropagation()
        })
        .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
        .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
        .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
        .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)

}(jQuery));
/************************************************************************************************ */
(function($) {

    $.fn.dcAccordion = function(options) {
        var defaults = {
            classParent: 'dcjq-parent',
            classActive: 'active',
            classArrow: 'dcjq-icon',
            classCount: 'dcjq-count',
            classExpand: 'dcjq-current-parent',
            eventType: 'click',
            hoverDelay: 300,
            menuClose: true,
            autoClose: true,
            autoExpand: false,
            speed: 'slow',
            saveState: true,
            disableLink: true,
            showCount: false,

        };
        var options = $.extend(defaults, options);
        this.each(function(options) {
            var obj = this;
            setUpAccordion();
            if (defaults.autoExpand == true) {
                $('li.' + defaults.classExpand + ' > a').addClass(defaults.classActive);
            }
            resetAccordion();
            if (defaults.eventType == 'hover') {

                var config = {
                    sensitivity: 2,
                    interval: defaults.hoverDelay,
                    over: linkOver,
                    timeout: defaults.hoverDelay,
                    out: linkOut
                };

                $('li a', obj).hoverIntent(config);
                var configMenu = {
                    sensitivity: 2,
                    interval: 1000,
                    over: menuOver,
                    timeout: 1000,
                    out: menuOut
                };

                $(obj).hoverIntent(configMenu);


                if (defaults.disableLink == true) {

                    $('li a', obj).click(function(e) {
                        if ($(this).siblings('ul').length > 0) {
                            e.preventDefault();
                        }
                    });
                }

            } else {

                $('li a', obj).click(function(e) {

                    $activeLi = $(this).parent('li');
                    $parentsLi = $activeLi.parents('li');
                    $parentsUl = $activeLi.parents('ul');


                    if (defaults.disableLink == true) {
                        if ($(this).siblings('ul').length > 0) {
                            e.preventDefault();
                        }
                    }


                    if (defaults.autoClose == true) {
                        autoCloseAccordion($parentsLi, $parentsUl);
                    }

                    if ($('> ul', $activeLi).is(':visible')) {
                        $('ul', $activeLi).slideUp(defaults.speed);
                        $('a', $activeLi).removeClass(defaults.classActive);
                    } else {
                        $(this).siblings('ul').slideToggle(defaults.speed);
                        $('> a', $activeLi).addClass(defaults.classActive);
                    }


                });
            }


            function setUpAccordion() {

                $arrow = '<span class="' + defaults.classArrow + '"></span>';
                var classParentLi = defaults.classParent + '-li';
                $('> ul', obj).show();
                $('li', obj).each(function() {
                    if ($('> ul', this).length > 0) {
                        $(this).addClass(classParentLi);
                        $('> a', this).addClass(defaults.classParent).append($arrow);
                    }
                });
                $('> ul', obj).hide();
                if (defaults.showCount == true) {
                    $('li.' + classParentLi, obj).each(function() {
                        if (defaults.disableLink == true) {
                            var getCount = parseInt($('ul a:not(.' + defaults.classParent + ')', this).length);
                        } else {
                            var getCount = parseInt($('ul a', this).length);
                        }
                        $('> a', this).append(' <span class="' + defaults.classCount + '">' + getCount + '</span>');
                    });
                }
            }

            function linkOver() {

                $activeLi = $(this).parent('li');
                $parentsLi = $activeLi.parents('li');
                $parentsUl = $activeLi.parents('ul');


                if (defaults.autoClose == true) {
                    autoCloseAccordion($parentsLi, $parentsUl);

                }

                if ($('> ul', $activeLi).is(':visible')) {
                    $('ul', $activeLi).slideUp(defaults.speed);
                    $('a', $activeLi).removeClass(defaults.classActive);
                } else {
                    $(this).siblings('ul').slideToggle(defaults.speed);
                    $('> a', $activeLi).addClass(defaults.classActive);
                }

                if (defaults.saveState == true) {
                    createCookie(defaults.cookie, obj);
                }
            }

            function linkOut() {}

            function menuOver() {}

            function menuOut() {
                if (defaults.menuClose == true) {
                    $('ul', obj).slideUp(defaults.speed);
                    $('a', obj).removeClass(defaults.classActive);
                    createCookie(defaults.cookie, obj);
                }
            }

            function autoCloseAccordion($parentsLi, $parentsUl) {
                $('ul', obj).not($parentsUl).slideUp(defaults.speed);
                $('a', obj).removeClass(defaults.classActive);
                $('> a', $parentsLi).addClass(defaults.classActive);
            }

            function resetAccordion() {
                $('ul', obj).hide();
                $allActiveLi = $('a.' + defaults.classActive, obj);
                $allActiveLi.siblings('ul').show();
            }
        });
    };
})(jQuery);
/*******************************************************************************************************/
(function($) {
    "use strict";
    $(document).ready(function() {
        if ($.fn.dcAccordion) {
            $('#nav-accordion').dcAccordion({
                eventType: 'click',
                autoClose: true,
                saveState: true,
                disableLink: true,
                speed: 'slow',
                showCount: false,
                autoExpand: true,
                classExpand: 'dcjq-current-parent'
            });
        }
        if ($.fn.slimScroll) {
            $('.event-list').slimscroll({
                height: '305px',
                wheelStep: 20
            });
            $('.conversation-list').slimscroll({
                height: '360px',
                wheelStep: 35
            });
            $('.to-do-list').slimscroll({
                height: '300px',
                wheelStep: 35
            });
        }
        if ($.fn.niceScroll) {


            $(".leftside-navigation").niceScroll({
                cursorcolor: "#8b5c7e",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

            $(".leftside-navigation").getNiceScroll().resize();
            if ($('#sidebar').hasClass('hide-left-bar')) {
                $(".leftside-navigation").getNiceScroll().hide();
            }
            $(".leftside-navigation").getNiceScroll().show();

            $(".right-stat-bar").niceScroll({
                cursorcolor: "#fa9770",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

        }

        if ($.fn.easyPieChart) {

            $('.notification-pie-chart').easyPieChart({
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                },
                barColor: "#39b6ac",
                lineWidth: 3,
                size: 50,
                trackColor: "#efefef",
                scaleColor: "#cccccc"

            });

            $('.pc-epie-chart').easyPieChart({
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                },
                barColor: "#5bc6f0",
                lineWidth: 3,
                size: 50,
                trackColor: "#32323a",
                scaleColor: "#cccccc"

            });

        }

        if ($.fn.sparkline) {

            $(".d-pending").sparkline([3, 1], {
                type: 'pie',
                width: '40',
                height: '40',
                sliceColors: ['#e1e1e1', '#8175c9']
            });



            var sparkLine = function() {
                $(".sparkline").each(function() {
                    var $data = $(this).data();
                    ($data.type == 'pie') && $data.sliceColors && ($data.sliceColors = eval($data.sliceColors));
                    ($data.type == 'bar') && $data.stackedBarColor && ($data.stackedBarColor = eval($data.stackedBarColor));

                    $data.valueSpots = {
                        '0:': $data.spotColor
                    };
                    $(this).sparkline($data.data || "html", $data);
                    if ($(this).data("compositeData")) {
                        $spdata.composite = true;
                        $spdata.minSpotColor = false;
                        $spdata.maxSpotColor = false;
                        $spdata.valueSpots = {
                            '0:': $spdata.spotColor
                        };
                        $(this).sparkline($(this).data("compositeData"), $spdata);
                    };
                });
            };
            var sparkResize;
            $(window).resize(function(e) {
                clearTimeout(sparkResize);
                sparkResize = setTimeout(function() {
                    sparkLine(true)
                }, 500);
            });
            sparkLine(false);
        }

        if ($.fn.plot) {
            var datatPie = [30, 50];
            $.plot($(".target-sell"), datatPie, {
                series: {
                    pie: {
                        innerRadius: 0.6,
                        show: true,
                        label: {
                            show: false

                        },
                        stroke: {
                            width: .01,
                            color: '#fff'

                        }
                    }
                },
                legend: {
                    show: true
                },
                grid: {
                    hoverable: true,
                    clickable: true
                },
                colors: ["#ff6d60", "#cbcdd9"]
            });
        }
        $('.widget-head').click(function(e) {
            var widgetElem = $(this).children('.widget-collapse').children('i');

            $(this)
                .next('.widget-container')
                .slideToggle('slow');
            if ($(widgetElem).hasClass('ico-minus')) {
                $(widgetElem).removeClass('ico-minus');
                $(widgetElem).addClass('ico-plus');
            } else {
                $(widgetElem).removeClass('ico-plus');
                $(widgetElem).addClass('ico-minus');
            }
            e.preventDefault();
        });

        $('.sidebar-toggle-box .fa-bars').click(function(e) {

            $(".leftside-navigation").niceScroll({
                cursorcolor: "#1FB5AD",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });
            $('#sidebar').toggleClass('hide-left-bar');
            if ($('#sidebar').hasClass('hide-left-bar')) {
                $(".leftside-navigation").getNiceScroll().hide();
            }
            $(".leftside-navigation").getNiceScroll().show();
            $('#main-content').toggleClass('merge-left');
            e.stopPropagation();
            if ($('#container').hasClass('open-right-panel')) {
                $('#container').removeClass('open-right-panel')
            }
            if ($('.right-sidebar').hasClass('open-right-bar')) {
                $('.right-sidebar').removeClass('open-right-bar')
            }
            if ($('.header').hasClass('merge-header')) {
                $('.header').removeClass('merge-header')
            }
        });
        $('.toggle-right-box .fa-bars').click(function(e) {
            $('#container').toggleClass('open-right-panel');
            $('.right-sidebar').toggleClass('open-right-bar');
            $('.header').toggleClass('merge-header');

            e.stopPropagation();
        });
        $('.header,#main-content,#sidebar').click(function() {
            if ($('#container').hasClass('open-right-panel')) {
                $('#container').removeClass('open-right-panel')
            }
            if ($('.right-sidebar').hasClass('open-right-bar')) {
                $('.right-sidebar').removeClass('open-right-bar')
            }

            if ($('.header').hasClass('merge-header')) {
                $('.header').removeClass('merge-header')
            }
        });
        $('.panel .tools .fa').click(function() {
            var el = $(this).parents(".panel").children(".panel-body");
            if ($(this).hasClass("fa-chevron-down")) {
                $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
                el.slideUp(200);
            } else {
                $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
                el.slideDown(200);
            }
        });
        $('.panel .tools .fa-times').click(function() {
            $(this).parents(".panel").parent().remove();
        });
    });
})(jQuery);