$(document).ready(function(){$("#main-nav").NavAnchor(),$(".line").LineAnimate({animateTime:2e3}),$(".slider").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,zIndex:1,dots:!0}),$(".card").on("click",function(){$(this).find(".card__interactive").hasClass("is-open")?$(".card__interactive").removeClass("is-open"):($(".card__interactive").removeClass("is-open"),$(this).find(".card__interactive").addClass("is-open"))}),$(".navbar__toggle").on("click",function(i){i.preventDefault(),$(".navbar__list").slideToggle(300)})}),function(i){i.LineAnimate=function(n,t){var e=this;e.settings=i.extend({animateTime:2500,counterClass:".line__precent__number",lineClass:".line__filler",topOffset:100},t),e.init=function(){i(window).scroll(function(){e.animate()})},e.animate=function(t){i(n).each(function(n,t){if(!i(t).hasClass("is-animated")){var a=i(t).offset(),s=window.pageYOffset;if(a.top<s+window.innerHeight-e.settings.topOffset){var o=i(t).find(e.settings.counterClass),c=i(t).find(e.settings.lineClass),d=o.data("percent");o.prop("Counter",0).animate({Counter:d},{duration:e.settings.animateTime,step:function(i){o.text(Math.ceil(i))}}),c.animate({width:d+"%"},{duration:e.settings.animateTime}),i(t).addClass("is-animated")}}})},e.init(),e.animate()},i.fn.LineAnimate=function(n){return this.each(function(){new i.LineAnimate(this,n)})}}(jQuery),function(i){i.NavAnchor=function(n,t){var e=this;e.settings=i.extend({window:window.top,fixedMenuHeight:60,scrollTime:400},t),e.init=function(){i(n).find(">ul>li").each(function(n,t){i(t).click(function(n){n.preventDefault();var a=i("#"+i(t).data("id")).position();i(e.settings.window.document).find("html, body").animate({scrollTop:a.top-e.settings.fixedMenuHeight},e.settings.scrollTime,function(){e.setAnchor(i(t).data("id"))})})}),i(e.settings.window).scroll(function(){e.setAnchor()})},e.setAnchor=function(t){var a=-1,s="";i(n).find(">ul>li").each(function(n,t){i('[data-id="'+i(t).data("id")+'"]').hasClass("is-active")&&i('[data-id="'+i(t).data("id")+'"]').removeClass("is-active");var o=i("#"+i(t).data("id")).offset(),c=e.settings.window.pageYOffset,d=o.top-c;(d>=0&&a>=d||a<=0||""===s)&&(a=d,s=i(t).data("id"))}),t&&(s=t),""!==s&&i('[data-id="'+s+'"]').addClass("is-active")},e.init()},i.fn.NavAnchor=function(n){return this.each(function(){new i.NavAnchor(this,n)})}}(jQuery);