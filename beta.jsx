#include "json2.js"
// Define initial prefixes and reference points
var prefixes = {
    "btn_": "center",
    "dlg_": "top_left"
};

// Function to get reference point from prefix
function getReferencePoint(prefix) {
    return prefixes[prefix];
}

// Function to export JSON data of prefixed objects
function exportJSON() {
    // Show dialog to update prefixes and reference points
var dialog = new Window("dialog", "Prefixes and Reference Points");

var group = dialog.add("group", undefined, {orientation: "column"});
group.add("statictext", undefined, "Enter prefixes and reference points in the format: prefix:reference_point (e.g. btn_:center)");

var prefixString = "";
for(var prefix in prefixes) {
    prefixString += prefix + ":" + prefixes[prefix] + ",";
}
prefixString = prefixString.slice(0, -1);

var input = group.add("edittext", undefined, prefixString);
input.size = [300, 30];

var buttons = dialog.add("group", undefined, {orientation: "row"});
buttons.add("button", undefined, "OK", {name: "ok"});
buttons.add("button", undefined, "Cancel", {name: "cancel"});

    if (dialog.show() == 1) {
        // Update prefixes and reference points
        var prefixArr = input.text.split(',');
        prefixes = {};
        for (var i = 0; i < prefixArr.length; i++) {
            var p = prefixArr[i].split(':');
            prefixes[p[0]] = p[1];
        }
    } else {
        return;
    }

    var jsonData = {};
    jsonData.product = "Product Name";
    jsonData.version = 3.1;
    jsonData.demo = true;

var doc = app.activeDocument;
var artboards = doc.artboards;
var artboard;

// Iterate through all artboards
for (var i = 0; i < artboards.length; i++) {
    var artboard = artboards[i];
    var artboardName = artboard.name;
    var artboardOriginX = artboard.rulerOrigin[0];
    var artboardOriginY = artboard.rulerOrigin[1];
    var artboardRect = artboard.artboardRect;
    var artboardX = artboardRect[0];
    var artboardY = artboardRect[1];
    var artboardPosition;
    if (artboardX == 0 && artboardY == 0) {
        artboardPosition = "default origin";
    } else {
        artboardPosition = "(" + artboardX + ", " + artboardY + ")";
    }

    var elements = doc.pageItems;
    // Iterate through all elements within artboard
    for (var j = 0; j < elements.length; j++) {
        var item = elements[j];
        var itemName = item.name;
        var itemBounds = item.visibleBounds;

        // Check if item has a prefix
        for (var prefix in prefixes) {
            if (itemName.indexOf(prefix) == 0) {
                var objectName = itemName.substring(prefix.length);
                var bounds = item.geometricBounds;
                var width = bounds[2] - bounds[0];
                var height = bounds[3] - bounds[1];
                var x, y;
                if (getReferencePoint(prefix) == "center") {
                    x = bounds[0] + width/2;
                    y = bounds[3] - height/2;
                } else {
                    x = bounds[0];
                    y = bounds[3];
                }
                x = x.toFixed(2) + "px";
                y = y.toFixed(2) + "px";
                width = width.toFixed(2) + "px";
                height = height.toFixed(2) + "px";
                
                
                   jsonData[prefix + objectName] = {
                "X": x,
                "Y": y,
                "Reference_point": getReferencePoint(prefix),
                "Artboard_Name": artboardName,
                "Artboard_Position": artboardPosition,
                "Width": width,
                "Height": height
            };
        }
    }
}

}
    // Create and save JSON file
    var scriptFile = File($.fileName);
    var scriptFolder = scriptFile.parent;
    var jsonFile = new File(scriptFolder.fsName + '/file.json');
    jsonFile.open("w");
    jsonFile.write(JSON.stringify(jsonData, null, 2));
    jsonFile.close();
}

exportJSON();
alert("JSON data exported!");


