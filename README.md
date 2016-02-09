# WebPlayer based on videojs

This WebPlayer is based on VideoJS (http://videojs.com/), open source javascript framework.
To add a player and configure, 2 ways are availables. It configurable in the Javascript code or in the HTML.
In the following example, configuration is done in the Javascript.


## HTML code

Use the html5 tag: `video` to add a video player on web page.
Some informations are required for configuration.

* ` class="video-js vjs-default-skin"` use to define the skin of the player, here the default skin.
* `poster="poster.png"` define the thumbnail of the video.
* ` data-setup="{}" ` is required but stay empty because the configuration is done in the javascript code.


## Javascript code

In the following example, the player is configure on the JS, when the document is ready.
Those following propreties are use to set the player.

* `techOrder` is use to set the preference order.
* `controls` display a control bar at the bottom of the player.
* `controlBar` :{ children:[...]} define all components present in the control bar and their positioning order in the bar.

## CSS code

It possible to change the skin of a player, is built with HTML and CSS. Official doc offer to use the Video.js Skin Designer http://codepen.io/heff/pen/EarCt (codepen project) to define new design for player.
