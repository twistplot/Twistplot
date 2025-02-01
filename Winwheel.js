/*
    Winwheel.js, by Douglas McKechie @ http://dougtesting.net/ 
    See website for examples and documentation: http://dougtesting.net/winwheel/docs
    Version: 2.8.0
    Date: 2nd January 2019
    GitHub: https://github.com/zarocknz/javascript-winwheel
    Released under the MIT license.
    Please do not remove this header as a courtesy to the developer.
*/

// ====================================================================================================================
// The constructor function for the WinWheel object, a JSON-like array of options can be passed in.
// ====================================================================================================================
function Winwheel(options)
{
    defaultOptions = {
        'canvasId'          : 'canvas',     // Id of the canvas which the wheel is to draw on to.
        'centerX'           : null,         // X position of the center of the wheel. The default of these are null which means will be placed in center of the canvas.
        'centerY'           : null,         // Y position of the wheel center. If left null at time of construct the center of the canvas is used.
        'outerRadius'       : null,         // The radius of the outside of the wheel. If left null it will set to the radius from the center of the canvas to its shortest side.
        'innerRadius'       : 0,            // Normally 0. Allows the creation of rings / doughnuts if set to value > 0. Should not exceed outer radius.
        'numSegments'       : 1,            // The number of segments. Need at least one to draw.
        'drawMode'          : 'code',       // The draw mode. Possible values are 'code', 'image', 'segmentImage'. Default is code which means segments are drawn with canvas text and fills.
        'rotationAngle'     : 0,            // The angle of rotation of the wheel - 0 is 12 o'clock position.
        'textFontFamily'    : 'Arial',      // Segment text font, you should use web safe fonts.
        'textFontSize'      : 20,           // Size of the segment text.
        'textFontWeight'    : 'bold',       // Font weight.
        'textOrientation'   : 'horizontal', // Either horizontal, vertical, or curved.
        'textAlignment'     : 'center',     // Either center, inner, or outer.
        'textDirection'     : 'normal',     // Either normal or reversed.
        'textMargin'        : null,         // Margin between the inner or outer of the wheel (depends on textAlignment).
        'textFillStyle'     : 'black',      // This is basically the text colour.
        'textStrokeStyle'   : null,         // Basically the line colour for segment text, only looks good for large text so off by default.
        'textLineWidth'     : 1,            // Width of lines if text stroke style is set.
        'fillStyle'         : 'silver',     // The segment background colour.
        'strokeStyle'       : 'black',      // Segment line colour. Again segment lines only look good for certain wheels, so off by default.
        'lineWidth'         : 1,            // Width of lines around segments.
        'clearTheCanvas'    : true,         // When set to true the canvas will be cleared before the wheel is drawn.
        'imageOverlay'      : false,        // If set to true in image drawing mode the outline of the segments will be displayed over the image. Does nothing in code drawMode.
        'drawText'          : true,         // By default the text of the segments is rendered in code drawMode and not in image drawMode.
        'pointerAngle'      : 0,            // Location of the pointer that indicates the prize when wheel has stopped. Default is 0 so the (corrected) 12 o'clock position.
        'wheelImage'        : null,         // Must be set to image data in order to use image to draw the wheel - drawMode must also be 'image'.
        'imageDirection'    : 'N',          // Used when drawMode is segmentImage. Default is north, can also be (E)ast, (S)outh, (W)est.
        'responsive'        : false,        // If set to true the wheel will resize when the window is resized.
        'scaleFactor'       : 1,            // Set by the responsive function. Used in calculations to scale the display.
        'animation'         : null,         // Holds the animation options for the wheel.
        'pins'              : null,         // Holds pin options.
        'segments'          : null,         // Holds details of the segments - text, fillStyle, strokeStyle, etc.
        'callbackBeforeDraw'    : null,     // Function to call before the wheel is drawn.
        'callbackAfterDraw'     : null,     // Function to call after the wheel is drawn.
        'callbackBeforeCreate'  : null,     // Function to call before the wheel is created.
        'callbackAfterCreate'   : null,     // Function to call after the wheel is created.
        'callbackBeforeInit'    : null,     // Function to call before the wheel is initialised.
        'callbackAfterInit'     : null      // Function to call after the wheel is initialised.
    };

    // Now loop through the default options and create properties of this class set to the value for
    // the option passed in if a value was, or if not then set to the default.
    for (let key in defaultOptions) {
        if ((options != null) && (typeof(options[key]) !== 'undefined')) {
            this[key] = options[key];
        } else {
            this[key] = defaultOptions[key];
        }
    }

    // ------------------------------------------
    // Callbacks
    // ------------------------------------------
    // Call the before create callback if there is one.
    if (typeof this.callbackBeforeCreate === 'function') {
        this.callbackBeforeCreate();
    }

    // ------------------------------------------
    // Create segments
    // ------------------------------------------
    // If segments have been specified then loop through and create them.
    if (this.segments) {
        // Loop through and create the segments. If a number of segments is specified then need to create the objects.
        for (let x = 1; x <= this.numSegments; x++) {
            if (typeof this.segments[x] !== 'undefined') {
                this.segments[x] = new Segment(this.segments[x]);
            } else {
                this.segments[x] = new Segment();
            }
        }
    } else {
        // If no segments specified then create a number of segments based on numSegments property.
        this.segments = new Array(null);
        for (let x = 1; x <= this.numSegments; x++) {
            this.segments.push(new Segment());
        }
    }

    // ------------------------------------------
    // Callbacks
    // ------------------------------------------
    // Call the after create callback if there
::contentReference[oaicite:0]{index=0}
 
