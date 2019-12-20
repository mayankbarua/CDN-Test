## Service Now Map Library
This folder shows how to draw a stand-alone map on any web page, particularly
for the use case in the Service Now application.

[serviceNow.html](./serviceNow.html) shows how to use the Go.JS map in an
isolated environment. The `dist` folder will be populated with minimum
dependencies to run a stand-alone map during a build. Those generated files are
not highly optimized for the use case in Service Now, so this is just a
temporary solution.

### Dependencies
The map relies on three major external libraries, which can be found in
`dist/lib`:
- Go.JS
- Angular
- Jquery

Go.JS is the core library for drawing a map. Jquery and Angular are
used in the map module to run functions that may not be used in the Service Now
app. However, they need to be present for the map module to function correctly
for now.

### Use the Library
A simple demo web page that can draw a map from map JSON data can be found in
[serviceNow.html](./serviceNow.html). Follow the steps below set the demo up
correctly:
 1. Run `gulp` to generate dependencies. The job is defined in
    [serviceNow.js](../build/gulp/serviceNow.js).
 2. Run `live-server` or any other local http server and open `serviceNow.html`.

 If everything goes well, you should see a web page with two empty Go.JS
 canvases. Click the 'draw' button at the bottom of the page to draw a map in a
 canvas. The data in the text area is the map JSON data, which you can find from
 `updateMapByKey` API under the `pageList` field.

To use the library programmatically, follow the set-up in the `serviceNow.html`, i.e.,
include the required JavaScript files and Go.JS license key:
```html
<!-- go.js license setup -->
<script type="text/javascript" src="dist/lib/goJS/go.js"></script>
<script type="text/javascript" src="dist/lib/goJS/Figures.js"></script>
<script type="text/javascript">
go.licenseKey =
  '73f047e0b11c28c702d90776423d6bf919a17564cf841ba30b0414f3ed086006329fe82804d2dc9382a81bfe137dc389d8c03c20c349563de730d4db4ae083aab73221e5120b1089f45626969eff2bf1ae6a61f497e571a288288de0fbabc29c54f7f3d557c80e';
</script>
<style>
.gshHeader {
  border-color: #8bdcf6;
  font-size: 10;
  margin-bottom: 11;
}
</style>
```
```html
<!-- deps -->
<script type="text/javascript" src="dist/lib/jquery/jquery.min.js"></script>
<script
  type="text/javascript"
  src="dist/lib/angular/angular.min.js"
></script>
<script
  type="text/javascript"
  src="dist/js/lib-angular-plugins.min.js"
></script>
<script type="text/javascript" src="dist/js/lib-tools.min.js"></script>
<script type="text/javascript" src="dist/js/configSettings.js"></script>
<script type="text/javascript" src="dist/js/nb.framework.min.js"></script>
<script type="text/javascript" src="dist/js/nb.ng.min.js"></script>
<script type="text/javascript" src="dist/js/nb.common.min.js"></script>
<script type="text/javascript" src="dist/js/nb.uiframework.min.js"></script>
<script type="text/javascript" src="dist/js/nb.datamodel.min.js"></script>
<script
  type="text/javascript"
  src="dist/js/nb.qmap.layouttools.min.js"
></script>
<script type="text/javascript" src="dist/js/nb.minitask.min.js"></script>
<script type="text/javascript" src="dist/js/nb.dataview.min.js"></script>
<script type="text/javascript" src="dist/js/nb.qmap.min.js"></script>
<script type="text/javascript" src="dist/js/nb.servicenow.min.js"></script>
```

Finally, use the wrapper class `ServiceNowMapBuilder` to set the `ServicesAPI` and
`tenantId` and build the image URI for retrieving device icons:
```html
<script type="text/javascript">
  // use the wrapper class to set up the diagram
  // you can have multiple ServiceNowMap instances attached to different anchors
  const snmb = new ServiceNowMapBuilder();
  snmb
    .setApiRoot('http://localhost:8080/ServicesAPI')
    .setTenantId('27a60d01-bd53-d200-0a42-cd8c64cd60f3')
    .buildImgUri();
  const snm1 = snmb.setMapAnchorId('container').build();
  snm1.initGojsDiagram();
  const snm2 = snmb.setMapAnchorId('container2').build();
  snm2.initGojsDiagram();
  $('#doOpenBtn').on('click', function() {
    var data = $('#pageDataInput').val();
    if (data) {
      try {
        snm1.openMap(JSON.parse(data));
        $(this).attr('disable', 'disable');
      } catch (e) {
        console.error('page data invalid');
      }
    }
  });
  $('#doOpenBtn2').on('click', function() {
    var data = $('#pageDataInput2').val();
    if (data) {
      try {
        snm2.openMap(JSON.parse(data));
        $(this).attr('disable', 'disable');
      } catch (e) {
        console.error('page data invalid');
      }
    }
  });
</script>
```

Please note this stand-alone map library relies on two global namespaces
`NetBrain` and `Utility` to work properly, so please do not touch this
namespace.
