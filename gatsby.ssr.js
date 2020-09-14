import React from "react"
import {withPrefix} from 'gatsby'
export const onRenderBody = (
  {  setPostBodyComponents },
  pluginOptions
) => {
  console.log('OnRenderBody Called..')
  setPostBodyComponents([
    <script src={withPrefix("/js/vendor/modernizr.min.js")}></script>,
    <script src={withPrefix("/js/vendor/jquery.js")}></script>,
    <script src={withPrefix("/js/vendor/bootstrap.min.js")}></script>,
    <script src={withPrefix("/js/waypoints.min.js")}></script>,
    <script src={withPrefix("/js/wow.js")}></script>,
    <script src={withPrefix("/js/counterup.js")}></script>,
    <script src={withPrefix("/js/imagesloaded.js")}></script>,
    <script src={withPrefix("/js/isotope.js")}></script>,
    <script src={withPrefix("/js/tilt.js")}></script>,
    <script src={withPrefix("/js/anime.js")}></script>,
    <script src={withPrefix("/js/tweenmax.js")}></script>,
    <script src={withPrefix("/js/slipting.js")}></script>,
    <script src={withPrefix("/js/scrollmagic.js")}></script>,
    <script src={withPrefix("/js/addindicators.js")}></script>,
    <script src={withPrefix("/js/slick.js")}></script>,
    <script src={withPrefix("/js/youtube.js")}></script>,
    <script src={withPrefix("/js/countdown.js")}></script>,
    <script src={withPrefix("/js/scrollup.js")}></script>,
    <script src={withPrefix("/js/stickysidebar.js")}></script>,
    <script src={withPrefix("/js/contactform.js")}></script>,
    
    <script src={withPrefix("/js/plugins/plugins.min.js")}></script>,
    
    <script src={withPrefix("/js/main.js")}></script>
  ])
}