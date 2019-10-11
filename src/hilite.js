saveHilites : function (callback) {
        var hilites = this.getHilites();
        if ((!hilites || hilites.length == 0) && 
                (!this._loadedHilites || this._loadedHilites.length == 0)) return;
        this.completeEditing(hilites);
    },
