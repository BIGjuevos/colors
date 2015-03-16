/*global window*/
"use strict";

(function() {
  /**
   * Represents a single color
   *
   * @param {string} color - A representation of a color as RGB(A),HSL(A),Hexadecimal(with/without hash)
   *
   * @returns {void} Returns false on parsing error
   */
  var Color = function(color) {
    var red = null,
         green = null,
         blue = null,
         alpha = null,
         valid = false,
         convert = null;

    /**
     * Has the color been validated yet?
     *
     * @returns {bool}
     */
    this.isValid = function() {
      return valid;
    };

    /**
     * Gets the RGB(A) representation of this color
     *
     * @param {boolean} withAlpha - Whether or not to include alpha in the outputted string
     *
     * @returns {string} the RGB(A) representation of this color
     */
    this.getRGB = function(withAlpha) {
      if ( withAlpha === true ) {
        return "rgba(" + red + "," + green + "," + blue + "," + alpha.toFixed(2) + ")";
      } else {
        return "rgb(" + red + "," + green + "," + blue + ")";
      }
    };

    /**
     * Get the amount of red in this color in base 10
     *
     * @returns {int}
     */
    this.getRed = function() {
      return red;
    };

    /**
     * Get the amount of green in this color in base 10
     *
     * @returns {int}
     */
    this.getGreen = function() {
      return green;
    };

    /**
     * Get the amount of blue in this color in base 10
     *
     * @returns {int}
     */
    this.getBlue = function() {
      return blue;
    };

    /**
     * Get the amount of alpha in this color
     *
     * @returns {double}
     */
    this.getAlpha = function() {
      return alpha;
    };

    /**
     * Gets the HSL representation of this color
     *
     * @param {boolean} withAlpha - Whether or not to include alpha in the outputted string
     *
     * @returns {string} the HSL(A) representation of this color
     */
    this.getHSL = function(withAlpha) {
    };

    /**
     * Gets the Hexadecimal representation of this color
     *
     * @param {boolean} withHash - Whether or not to include the hash mark at the front of the code
     *
     * @returns {string} the Hexadecimal representation of this color
     */
    this.getHex = function(withHash) {
    };

    /**
     * Retuns a new Colors.Color object that is the complement color of this one
     *
     * @returns {Colors.Color} the complement of this color
     */
    this.getComplement = function() {
    };

    /**
     * Retuns a new Colors.Color object that is the greyscale of this one
     *
     * @returns {Colors.Color} the greyscale color of this one
     */
    this.getGreyscal = function() {
    };

    /**
     * mix another color into this one
     *
     * @param {Colors.Color} mixin - The color you want to mix in
     * @param {double} amount - Between 0 and 1, how much you want to mix it in (defaults to 0.5)
     *
     * @returns {void}
     */
    this.mix = function(mixin, amount) {
    };

    /**
     * lighten this color
     *
     * @param {double} amount - Between 0 and 1, how much lighter do you want this? (defaults to 0.05 or 1/20th of a step)
     *
     * @returns {void}
     */
    this.lighten = function(amount) {
    };

    /**
     * darken this color
     *
     * @param {double} amount - Between 0 and 1, how much darker do you want this? (defaults to 0.05 or 1/20th of a step)
     *
     * @returns {void}
     */
    this.darken = function(amount) {
    };

    /**
     * is this a "dark" color?
     *
     * @returns {boolean} Whether or not this is a "dark" color
     */
    this.isDark = function() {
    };

    /**
     * is this a "light" color?
     *
     * @returns {boolean} Whether or not this is a "light" color
     */
    this.isLight = function() {
    };

    /**
     * is this a "warm" color?
     *
     * @returns {boolean} Whether or not this is a "warm" color
     */
    this.isWarm = function() {
    };

    /**
     * is this a "cold" color?
     *
     * @returns {boolean} Whether or not this is a "cold" color
     */
    this.isCold = function() {
    };

    /**
     * randomizes the color
     *
     * @returns {void}
     */
    this.randomize = function() {
    };

    /**
     * Parse out what we've been given coming in
     */
    var parseColor = function(color) {
      var matches = [],
          hsl;

      if ( color.match(/^#?[0-9a-f]{6}$/i) ) {
        if ( color.length == 7 ) {
          color = color.substr(1);
        }
        red = parseInt(color.substr(0,2), 16);
        green = parseInt(color.substr(2,2), 16);
        blue = parseInt(color.substr(4,2), 16);
        alpha = 1;

        // successful parsing, continue
        valid = true;
        return true;
      } else if ( matches = color.match(/rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([0-9\.]+)\)/i) ) {
        red = matches[1];
        green = matches[2];
        blue = matches[3];
        alpha = matches[4];

        valid = true;
        return true;
      } else if ( matches = color.match(/rgb\((\d{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\)/i) ) {
        red = matches[1];
        green = matches[2];
        blue = matches[3];
        alpha = 1;

        valid = true;
        return true;
      } else if ( matches = color.match(/hsl\((\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\)/i) ) {
        alpha = 1;
        convert = new Convert();
        console.log(matches);
        hsl = convert.hslToRgb(parseInt(matches[1]), matches[2] / 100, matches[3] / 100);
        console.log(hsl);

        red = hsl[0];
        green = hsl[1];
        blue = hsl[2];

        valid = true;
        return true;
      } else if ( matches = color.match(/hsla\((\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([0-9\.]+)\)/i) ) {
        alpha = matches[4];

        valid = true;
        return true;
      } else {
        valid = false;
        return false;
      }
    };

    if ( !parseColor(color) ) {
      valid = false;
    }
  };

  var Convert = function() {
    this.hslToRgb = function(h, s, l) {

    };
  };

  var Colors = function() {
    // Assign our internal color class
    this.Color = Color;
    this.Convert = new Convert();

    return this;
  };

  if ( !window.Colors ) {
    window.Colors = new Colors();
  }
})();