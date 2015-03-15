Raphaël: Cross-browser vector graphics the easy way.
====================================================
Load [Raphaël](https://github.com/DmitryBaranovskiy/raphael/) from a CDN. 

To install:

> meteor add viacdn:raphael

## Browser policy
if you are using the `browser-policy` package, you'll need to add this line to a file in your `/server/` directory to allow the browser to load from the cdn 
``` 
BrowserPolicy.content.allowOriginForAll('*.cloudflare.com'); 
```
