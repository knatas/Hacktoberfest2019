// output each record in turn
		for (var rowNum = startRow; rowNum < endRow; rowNum++) {
            //>Animation
            
            var isAnimationRow = (!fragment && this._animatedShowStartRow == rowNum);
            //<Animation
            
            if (cellIDSlot != null) {
                var physicalRowNum = rowNum - startRow;
                for (var i = 0; i < colNums.length; ++i) {
                    var colNum = colNums[i],
                        physicalColNum = colNum - startCol;
                    if (this.getCellElementId) {
                        cellIDs[physicalColNum] = this.getCellElementId(rowNum, physicalRowNum, colNum, physicalColNum);
                    } else {
                        
                        cellIDs[physicalColNum] = this.ID + "_"+"cell" + rowNum + "_" + colNum;
                    }
                }
            }

			// get a pointer to the record for this row.
            // NOTE: record can be null.  The various routines below (eg getCellValue) are
            // expected to handle this.
			var record = this.getCellRecord(rowNum);
	
			// If this row is a separator or is not loaded yet, we draw a single cell with
            // COLSPAN set to extend across the entire table.
			var drawRecordAsSingleCell = //>Animation
                                         isAnimationRow ||   //<Animation
                                         this._drawRecordAsSingleCell(rowNum, record);
			// start the table row
            output.append(rowStart);
