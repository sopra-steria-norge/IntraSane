// ==UserScript==
// @name         IntraSane
// @namespace    https://github.com/steria/NaviSane
// @version      1.0
// @description  Gui-tweaks for SopraSteria intranett
// @author       Joachim Lous
// @match        https://intranet.steria.no/*
// @require      http://cherne.net/brian/resources/jquery.hoverIntent.minified.js
// @grant        none
// ==/UserScript==

var roeNedMegamenyenLitt = function(){
    $("li.section").off( "mouseenter mouseleave" );
    $("li.section").hoverIntent(
        function () {
            $(this).addClass("megamenu-selected-item");
            $(this).children("div.submenupanel").addClass("submenupanel-show");
            $(this).find(".arrow").show();
        }, 
        function () {
            $(this).removeClass("megamenu-selected-item");
            $(this).children("div.submenupanel").removeClass("submenupanel-show");
            $(this).parent().find(".arrow").hide();
        });
    }
}

roeNedMegamenyenLitt();
