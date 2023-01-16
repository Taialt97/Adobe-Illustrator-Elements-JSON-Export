# Illustrator JSX Script for Exporting JSON Data

This script is used for exporting JSON data of prefixed objects within an Adobe Illustrator document. The prefixes and reference points for each object can be defined and modified through a dialog box that appears when the script is run.

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

## Usage
1. Open the desired Illustrator document.
2. Run the script by going to `File > Scripts > Other Scripts` and selecting the JSX file.
3. Update the prefixes and reference points in the dialog box that appears.
4. The JSON data for the prefixed objects will be exported.

Note: This script was last tested with Illustrator CC 2020, and its compatibility with other versions is not guaranteed.
