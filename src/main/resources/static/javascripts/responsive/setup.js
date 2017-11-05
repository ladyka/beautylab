//Scripts to help with the set up of the page

//cache number variables
var windowSize,
  windowPortrait,
  windowLandscape,
  windowWidth,
  windowWidthScroll,
  windowWidthEm,
  windowWidthRem,
  windowHeight,
  headerHeight,
  viewportWidth,
  headerHeight,
  headerIsSticky,
  scrolledFromTop = 0;
var device = "";



//check if old android
var ua = navigator.userAgent;
var isAndroid2 = false;
if (ua.indexOf("Android") >= 0)
//alert('android! ' + ua )
{
  var androidversion = parseFloat(ua.slice(ua.indexOf("Android") + 8));
  if (androidversion <= 3) {
    // add class to body for old Android
    //document.getElementsByTagName('body')[0].className+=' android2';
    isAndroid2 = true;
  }
}
//convert rem values to pixels
// This Function will always return the initial font-size of the html element 
var rem = function rem() {
  var html = document.getElementsByTagName('html')[0];

  return function() {
    return parseInt(window.getComputedStyle(html).fontSize);
  };
}();

// This function will convert pixel to rem
function toRem(length) {
    return (parseInt(length) / rem());
  }
  //make things equal heights    
function equalise() {
  $('[data-equalise]').each(function(i) {
    el = $(this).data('equalise');
    if ($.type(el) === "undefined" || el === "") {
      el = $('> *', this);
    }
    var $children = $(el, this);
    $children.css('min-height', 0);
    if (windowWidthRem > 48.063) {
      $children.css('min-height', 0);
      $children.equalHeights();
    }
  });
}

function matchRowHeights() {

    $('[data-match-heights]').each(function(i) {
      el = $(this).data('match-heights');
      if ($.type(el) === "undefined" || el === "") {
        el = $('> *', this);
      }
      var $children = $(el, this);

      $children.matchHeight();

    });
  }
  //screen setup function to make things line up

function screenSetup() {

    windowWidth = $(window).width();
    windowWidthScroll = $(window).innerWidth(); //window width including scrollbar (if it's there)
    windowWidthEm = windowWidth / parseFloat($("body").css("font-size"));
    windowWidthRem = toRem(windowWidthScroll);
    windowHeight = $(window).outerHeight(true);
    headerHeight = $('#header').outerHeight(true);
    if ($('body').hasClass('log')) {
      console.log('width:' + windowWidth + 'px or ' + windowWidthRem + 'rem, height:' + windowHeight + 'px ');
    }
    equalise();

    //for device orientation styles, add a class to body
    if (windowWidth >= windowHeight) {
      $('body').addClass('landscape').removeClass('portrait');
    } else {
      $('body').addClass('portrait').removeClass('landscape');
    }
    //to make things easier to style, apply the classes of the media-queries to the body tag
    if (windowWidthEm < 42.063) {
      $('body').addClass('small');
      $('body').removeClass('medium').removeClass('large').removeClass('x-large');

    }
    if (windowWidthEm >= 42.063 && windowWidthEm < 62.063) {
      $('body').addClass('medium');

      $('body').removeClass('small').removeClass('large').removeClass('x-large');
    }
    if (windowWidthEm >= 64.063 && windowWidthEm < 90.063) {
      $('body').addClass('large');

      $('body').removeClass('small').removeClass('medium').removeClass('x-large');
    }
    if (windowWidthEm >= 90.063) {
      $('body').addClass('x-large');
      $('body').removeClass('small').removeClass('medium').removeClass('large');
    }

    if (headerIsSticky && windowWidthEm < 42.0625) {
      $('#content').css('margin-top', headerHeight);
    } else {
      $('#content').css('margin-top', 0);
    }


  }
  //scripts for set up of the horizontal navigation
$(function() {

  //cache hNav navs
  var hNav = $(".h-nav");

  //hNav sub menus show on hover
  hNav.find("li").each(function() {

    if ($("> ul", this).length > 0) {
      var $thisLink = $('> a', this);
      var $thisSubNav = $("ul:first", this);
      $(this).addClass('has-sub');

      if ($thisLink.parents('ul').length === 1) {
        $thisLink.after(' <span class="fa fa-caret-down"> </span>');
      } else {
        $thisLink.after(' <span class="fa fa-caret-right"> </span>');
      }
      $('> a + span', this).on('click', function() {
        //console.log(Modernizr.touchEvents);
        if (Modernizr.touchEvents) {
          $('html').one('click', function(event) {
            $('#main-nav ul ul').slideUp();
            event.stopPropagation();
          });
        }
        if ($thisSubNav.is(':visible')) {
          $thisSubNav.stop(true, true).slideUp();
        } else {
          $thisSubNav.stop(true, true).slideDown();
        }
      });
      //show subnav on hover
      $(this).hoverIntent(function() {
        $thisSubNav.stop(true, true).slideDown();
        $(this).closest('li').addClass('hovered');
      }, function() {
        $thisSubNav.stop(true, true).slideUp();
        $(this).closest('li').removeClass('hovered');
      });
    }
  });
});

//scripts for the set up of the vertical navigation
$(function() {
  //cache vNav navs
  var vNav = $(".v-nav");
  //vNav sub menus
  vNav.find("li").each(function() {
    if ($("ul", this).length > 0) {
      var $thisLink = $('> a', this);
      var $thisSubNav = $('ul:first', this);
      if ($thisLink.parents('ul').length > 1 || $(this).closest('.v-nav').hasClass('collapsible') || $(this).closest('.v-nav').hasClass('accordion')) {
        $thisLink.append(' <span class="fa fa-caret-down"> </span>');
      } else {
        $thisLink.append(' <span class="fa fa-caret-right"> </span>');
      }

      var thisWidth = $(this).outerWidth();
      if ($(this).closest('.v-nav').hasClass('collapsible') || $(this).closest(".v-nav").hasClass('accordion')) {

        if ($('a:first', this).attr('href') === '#' || $(this).hasClass('ignore-link')) {
          $('a:first', this).bind('click', function(e) {
            e.preventDefault();
            if ($(this).closest(".v-nav").hasClass('accordion')) {
              var thisParent = $(this).closest('li');
              if (thisParent.hasClass('hovered')) {
                $thisSubNav.stop(true, true).slideUp();
                $(this).closest('li').removeClass('hovered');
              } else {
                $thisSubNav.stop(true, true).slideDown();
                $(this).closest(".v-nav").find('ul ul').not($thisSubNav).slideUp(function() {

                });
                $(this).closest(".v-nav").find('ul li').not($(this).closest("li")).removeClass('hovered');
                $(this).closest('li').addClass('hovered');
              }
            } else {
              $thisSubNav.stop(true, true).slideToggle(function() {

              });
              $(this).closest('li').toggleClass('hovered');

            }
          });
        } else {
          $('> a > span', this).bind('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('nav-open');
            if ($(this).closest(".v-nav").hasClass('accordion')) {
              var thisParent = $(this).closest('li');
              if (thisParent.hasClass('hovered')) {
                $thisSubNav.stop(true, true).slideUp();
                $(this).closest('li').removeClass('hovered');
              } else {
                $thisSubNav.stop(true, true).slideDown();
                $(this).closest(".v-nav").find('ul ul').not($thisSubNav).slideUp(function() {

                });
                $(this).closest(".v-nav").find('ul li').not($(this).closest("li")).removeClass('hovered');
                $(this).closest('li').addClass('hovered');
              }
            } else {
              $thisSubNav.stop(true, true).slideToggle(function() {

              });
              $(this).closest('li').toggleClass('hovered');

            }

          });
        }
      } else {
        //show subnav on hover
        $thisSubNav.css({
          left: thisWidth,
          width: thisWidth
        });
        $(this).hoverIntent(function() {
          $thisSubNav.stop(true, true).slideDown();
          $(this).closest('li').addClass('hovered');
        }, function() {
          $thisSubNav.stop(true, true).slideUp();
          $(this).closest('li').removeClass('hovered');
        });
        //show sub nav on click
        $('> a > span', this).on('click', function(e) {
          e.preventDefault();

          if ($thisSubNav.is(':visible')) {
            $thisSubNav.stop(true, true).slideUp();
            return false;
          } else {
            $thisSubNav.stop(true, true).slideDown();
            return false;
          }
        });
      }

    }
  });
});


////////////////////////////////////////////////////////////////////////////    DOC READY                                             //
//////////////////////////////////////////////////////////////////////////

$(function() {
      if (isAndroid2) {
        //alert('uh oh - android2');
        $('html').addClass('android2');
      }
      //do the menus
      //make sure the nav has the elements to be set up correctly for mobile
      if (!$('body > #viewport').length) {
        $('body').wrapInner('<div id="viewport" />');
      }
      if (!$('#viewport > #screen').length) {
        $('#viewport').wrapInner('<div id="screen" />');
      }
      //check if header is of the sticky variety 
      headerIsSticky = $('#header').hasClass('sticky');
      //if there's a main nav, let's make a mobile nav
      if ($('#main-nav').length) {
        var $mainNavUL = $('#main-nav ul');
        $('#viewport').append('<div id="mobile-nav"><ul>' + $mainNavUL.html() + '</ul></div>');
        $('#viewport').append('<div id="open-nav-container" class="hide-for-medium-up" >' +
          // '<a id="open-nav" href="#mobile-nav">' +
          // '<i class="fa fa-bars"></i>' + 
          //'</a>' +
          '<a id="nav-toggle" href="#mobile-nav"><span></span></a>' +
          '</div>');
        $("#mobile-nav").mmenu({ //classes:"mm-zoom-page mm-zoom-menu mm-zoom-panels",
          searchfield: {
            add: true,
            search: false
          }
        });
 
        $(".mm-search input")
          .bind("change submit", function(e) {
            e.preventDefault();
            // do the search
            var searchTerm = $(this).val();

            $('#header-search input[type="text"]').val(searchTerm);
            $('#mobile-nav').trigger("close");
            $('#header-search form').submit();

          });
        $("#mobile-nav ul:first").append('<li id="mobile-cart"><a href="/OrderRetrievev2.aspx?CatalogueID=0"><span class="fa fa-shopping-cart"></span> View Cart</a></li>');
        $("#mobile-nav a").click(function(e) {
          var link = $(this).attr('href');
          if (link.indexOf('#') !== 0) {
            e.preventDefault();

            $('html').removeClass('mm-opening');
            setTimeout(function() {
              window.location = link;

            }, 550);
          }
        });
      }
      //html5 placeholder polyfill
      if (!Modernizr.input.placeholder) {
        $("input[placeholder]").each(function() {
          var thisPlaceholderText = $(this).attr('placeholder');
          var thisID = $(this).attr('id');
          var thisHeight = $(this).outerHeight();
          $(this).wrap('<div class="placeholderInput" style="position:relative;height:' + thisHeight + 'px;"/>');
          $(this).addClass('hasPlaceholder').before('<label style="height:' + thisHeight + 'px;position:absolute;top;3px;left:5px;" class="placeholderLabel" for="' + thisID + '">' + thisPlaceholderText + '</label>');
        });

        $(".hasPlaceholder").bind('focus click', function() {
          var thisVal = $(this).val();
          if (thisVal === "") {
            $(this).prev('.placeholderLabel').fadeOut();
          } else {

          }
        });
        //placeholder polyfill for old IE
        $(".placeholderLabel").bind('click', function() {
          var thisVal = $(this).next('.hasPlaceholder').val();
          $(this).next('.hasPlaceholder').focus();
          if (thisVal === "") {
            $(this).fadeOut();
          } else {

          }
        });
        $(".hasPlaceholder").bind('blur', function() {
          var thisVal = $(this).val();
          if (thisVal === "") {
            $(this).prev('.placeholderLabel').fadeIn();
          } else {

          }
        });
      }
      // items of the same class equalise heights
      $('.equal-heights').equalHeights();
      //items of the same class match heights according to row
      $('.match-heights').matchHeight();
      //items go fullscreen
      $('.fullscreen').css({
        'position': 'relative',
        'height': windowHeight,
        'width': windowWidth
      });
      //scroll functions
      var $scrolledViewport = $(window);
      headerHeight = $('#header').outerHeight();
      if (device === 'phone' || device === 'tablet' || windowWidthEm <= 40) {
        $scrolledViewport = $("#screen");

      }
      $scrolledViewport.on('scroll', function() {

        scrolledFromTop = $scrolledViewport.scrollTop();
        //console.log('scroll ' + scrolledFromTop);

        if (scrolledFromTop >= headerHeight) {
          $('body').addClass('past-header');
        } else {
          $('body').removeClass('past-header');
        }
      });
      //sticky elements
      $('.sticky').each(function() {
        var $this = $(this);
        var thisIsNotHeader = true;
        var stickyOffset = 0;

        if ($this.is('#header')) {
          thisIsNotHeader = false;
          $this.css('z-index', 1000);
        }
        if (headerIsSticky && thisIsNotHeader) {
          stickyOffset = $('#header').height();
        }
        $(window).load(function() {
          $this.stick_in_parent({
            offset_top: stickyOffset
          });
        });
        $(window).smartresize(function() {
          $(document.body).trigger("sticky_kit:recalc");
        });


      });


      //collapsible drawers
      $('.collapsible').not($('.v-nav.collapsible')).each(function() {
        var $collapsiblePanel = $(this);
        var $collapsiblePanelContent = $collapsiblePanel.find('*');
        var $title = $('.collapsible-title', this);
        var $panel = $('.collapsible-panel', this);

        $title.click(function(e) {
          $panel.slideToggle();
          $collapsiblePanel.toggleClass('open');
          $('.collapsible-panel').not($panel).slideUp();
          $('.collapsible').not($collapsiblePanel).removeClass('open');
          //let the animation finish
          setTimeout(function() {
            // Hide the open panels on click anywhere in doc
            $('html').on('click.closePanel', function(e) {
              if($panel.find('.v-nav').length < 1){
                $panel.slideToggle();
                $collapsiblePanel.toggleClass('open');
                $('html').off('click.closePanel');
              }
              else{
                 // console.log($(e.target));
                 // console.log($(e.target).is($collapsiblePanelContent));
                if(!$(e.target).is($collapsiblePanelContent))
                  {
                  $panel.slideToggle();
                  $collapsiblePanel.toggleClass('open');
                  $('html').off('click.closePanel');
                  }
              }
               e.stopPropagation();
              
            });
          }, 250);
         
        });



      });
      $('.accordion').not($('.v-nav.accordion')).each(function() {
        var $allTitles = $('.accordion-title', this);
        var $allPanels = $('.accordion-panel', this);
        $('.accordion-title *', this).click(function(e) {
          e.preventDefault();
        });
        $('.accordion-title', this).click(function(e) {
          e.preventDefault();
          var $nextPanel = $(this).next('.accordion-panel');


          if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $allPanels.slideUp().removeClass('open');
          } else {
            $allTitles.removeClass('open');
            $(this).addClass('open');

            $allPanels.slideUp(500).removeClass('open');
            $nextPanel.slideDown(250).addClass('open');
          }
          setTimeout(function() {
            // Hide the open panels on click anywhere in doc
            $('html').not($('.accordion *')).one('click', function(e) {

              // if ($(this).hasClass('open')) {
              //   $(this).removeClass('open');
              //   $allPanels.slideUp().removeClass('open');
              // } 
              // else {
                $allTitles.removeClass('open');
                // $(this).addClass('open');

                $allPanels.slideUp(500).removeClass('open');
                // $nextPanel.slideDown(250).addClass('open');
              // }

                e.stopPropagation();
            });
            }, 250);
          });
        });

        //backstretch images
        $('[data-backstretch]').each(function(i) {
          var dataImgSrc = $(this).data('backstretch');
          if (!dataImgSrc || typeof dataImgSrc == "undefined") {
            if ($('> img', this).length > 0) {
              dataImgSrc = $('> img', this).attr('src');
            }
          }
          $('> img', this).css('opacity', 0);
          $(this).backstretch(dataImgSrc);

        });
        //local links for local people
        $('a[href^="#"]').click(function(e) {
          if (!$(this).hasClass('default') &&
            !$(this).hasClass('normal') &&
            !$(this).hasClass('no-scroll') &&
            $(this).attr('href') !== '#mobile-nav' &&
            $(this).parents('#main-nav').length === 0 &&
            $(this).parents('#mobile-nav').length === 0) {
            e.preventDefault();
            var scrollTarget = $(this).attr('href');
            var scrollTop = 0;
            var $scrollElement = $('html, body');
            if (windowWidthEm < 42) {
              $scrollElement = $('#screen');
            }
            if (scrollTarget !== "#") {
              scrollTop = $(scrollTarget).offset().top;
            }

            $scrollElement.stop(true, true).animate({
              scrollTop: scrollTop
            }, 750);
          }

        });

        var flexAnim = "fade";
        var isTouch = Modernizr.touch;
        var isSmallScreen = $(window).width() < 768;
        var isTouchSmallScreen = false;
        //console.log(isSmallScreen);
        if (isTouch && isSmallScreen) {

          isTouchSmallScreen = true;
          console.log(isTouchSmallScreen);

        }
        if (isTouchSmallScreen || $('html').hasClass('ie')) {
          //make the slider slide for touch screens and crappy IE
          flexAnim = 'slide';
        }

        $('.flexslider').each(function() {
          var $this = $(this);
          $this.addClass('loading');
          $(window).load(function() {
            $this.flexslider({
              animation: flexAnim,
              smoothHeight: true,
              start: function(slider) {
                $this.removeClass('loading');
                //console.log(slider);
              }
            });
          });

        });

        $('.cyclePress').cycle({
          timeout: 6000,
          speed: 1000,
          prev: '#prev',
          next: '#next',
          fx: 'scrollHorz',
          debug: false
        });

        $('.cycleCatalog').cycle({
          timeout: 9000,
          speed: 1000,
          prev: '#prev',
          next: '#next',
          fx: 'fade',
          slides: ">li",
          debug: false
        });

        $('nav a').each(function() {
          if ($(this).attr('href') === window.location.pathname) {
            $(this).parents('li').addClass('selected');
          }
        });

        $('.feature-box').each(function() {
          if ($(this).hasClass('Text-Only')) {

          } else {
            if (Modernizr.backgroundsize) {
              var imgSrc = $('.image > img', this).attr('src');
              $('.image > img', this).css('opacity', 0);
              $('.image', this).css({
                'background': 'url(' + imgSrc + ') no-repeat center center',
                'background-size': 'cover'
              });
            } else {
              $('.image > img', this).css({
                'min-width': '100%',
                'height': 'auto'
              });
            }
          }
          if ($('.link a', this).length) {
            $('.link a:first', this).bigTarget({
              clickZone: '.feature-box'
            });
          }
        });

      });



      ////////////////////////////////////////////////////////////////////////////          WINDOW RESIZE                                           //
      //////////////////////////////////////////////////////////////////////////
      //fires on once AFTER resize event has occured
      $(window).smartresize(function() {
        //console.log("finished resizing"); 
        screenSetup();

      });

      $(window).load(function() {
        //loads when everything has finished loading - including iframe external pages and images 
        //scripts here for window load
        matchRowHeights();
        screenSetup();
        //scrollable bits
        $('.scroller').customScrollbar({
          updateOnWindowResize: true
        });


        //////////////////////////////////////////////////////////////////////
        //                                  INCONTEXT CHECK                                          //
        ///////////////////////////////////////////////////////////////////////////////////////////////     
        //check if inContext editing is on
        //inContext uses an iframe, so we check if site is in an iframe
        var isInContext = (window.location != window.parent.location) ? true : false;
        //console.log(isInContext)
        if (isInContext === true) {
          $("body").addClass('inContextOn');
          //if inContext is on, don't do these scripts
          //alert("inContext - scripts have been disabled for editing purposes")

        } else {
          //else inContext is off, so go nuts with these scripts in here

        }

      });
