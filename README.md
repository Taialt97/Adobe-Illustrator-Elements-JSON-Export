# Export The Positions of Prefixed Elements (Layers) Reletive to the Arboards Ancor Point From Adobe Illustrator

This script is used for exporting JSON data of prefixed objects within an Adobe Illustrator document.
The prefixes and reference points for each object can be defined and modified through a dialog box that appears when the script is run.

## Usage
1. Open the desired Illustrator document.
2. Rename Desired Layers to `my-prefix_my-layer-name` (example: btn_start, btn_stop, ind_cover, move_down).
![Screenshot 2023-06-01 at 11 13 55](https://github.com/Taialt97/Adobe-Illustrator-Elements-JSON-Export/assets/45160819/450ac54c-dd8e-4d4d-8798-4bfa823948fc)
3. Run the script by going to `File > Scripts > Other Scripts` and selecting the JSX file.
4. Update the prefixes and reference points in the dialog box that appears.
![Screenshot 2023-06-01 at 11 14 41](https://github.com/Taialt97/Adobe-Illustrator-Elements-JSON-Export/assets/45160819/7aff5fe9-4373-4275-874d-d3a6a1a47269)
![Screenshot 2023-06-01 at 11 14 49](https://github.com/Taialt97/Adobe-Illustrator-Elements-JSON-Export/assets/45160819/17363881-ff50-44e3-b6b8-00d61761273e)
5. The JSON data for the prefixed objects will be exported.

[{
  "product": "Product Name",
  "version": 3.1,
  "demo": true,
  "ICON_live": {
    "X": "240.00px",
    "Y": "-767.00px",
    "Reference_point": "center",
    "Artboard_Name": "ICON_live",
    "Artboard_Position": "(151, -1888.84880580908)",
    "Width": "54.00px",
    "Height": "-28.00px"
  }
}
]

## Included File
- `json2.js`: A library for converting JavaScript objects to JSON.

## Variables
- `prefixes`: An object that defines the initial prefixes and reference points for each object. The default format is `{ prefix: reference_point }`.
- `getReferencePoint(prefix)`: A function that takes in a prefix as a parameter and returns the corresponding reference point defined in the `prefixes` object.

## Functions
- `exportJSON()`: The main function that exports the JSON data. It first displays a dialog box to update the prefixes and reference points. Then, it iterates through all the artboards and elements within the active Illustrator document and checks if they have a prefix defined in the `prefixes` object. If so, it extracts the data for that object and adds it to the `jsonData` object.

## Dialog Box
The dialog box that appears when the script is run allows the user to update the prefixes and reference points for each object. The format for entering prefixes and reference points is `prefix:reference_point` (e.g. `btn_:center`). The user can choose to either "OK" and update the prefixes and reference points, or "Cancel" and exit the script.

## JSON Data
The exported JSON data will include the following properties:

- object properties:
    - object name: {
        x: x position,
        y: y position,
        width: width,
        height: height
    }

Note: This script was last tested with Illustrator CC 2020, and its compatibility with other versions is not guaranteed.
