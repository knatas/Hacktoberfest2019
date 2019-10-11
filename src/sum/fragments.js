if (fragment) {
        startSpacerHeight = 0;
    } else {
        if (startRow != rangeStart) {
            var undrawnRowHeight = ((startRow - rangeStart) * this.getAvgRowHeight());
            this._startRowSpacerHeight = undrawnRowHeight;
            startSpacerHeight += undrawnRowHeight;
        } else {
            this._startRowSpacerHeight = 0;
        }
    }
