
    initWidget : function () {
        this.Super("initWidget", arguments);

        var ds = this.getDataSource(),
            _this = this;

        this.addAutoChild("filterBuilder", 
