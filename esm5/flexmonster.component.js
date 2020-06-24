/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as Flexmonster from 'flexmonster';
var FlexmonsterPivot = /** @class */ (function () {
    function FlexmonsterPivot(el) {
        // events
        this.cellclick = new EventEmitter();
        this.celldoubleclick = new EventEmitter();
        this.chartclick = new EventEmitter();
        this.dataerror = new EventEmitter();
        this.datafilecancelled = new EventEmitter();
        this.dataloaded = new EventEmitter();
        this.datachanged = new EventEmitter();
        this.fieldslistclose = new EventEmitter();
        this.fieldslistopen = new EventEmitter();
        this.filterclose = new EventEmitter();
        this.filteropen = new EventEmitter();
        this.drillthroughopen = new EventEmitter();
        this.drillthroughclose = new EventEmitter();
        this.fullscreen = new EventEmitter();
        this.loadingdata = new EventEmitter();
        this.loadinglocalization = new EventEmitter();
        this.loadingolapstructure = new EventEmitter();
        this.loadingreportfile = new EventEmitter();
        this.localizationerror = new EventEmitter();
        this.localizationloaded = new EventEmitter();
        this.olapstructureerror = new EventEmitter();
        this.olapstructureloaded = new EventEmitter();
        this.openingreportfile = new EventEmitter();
        this.querycomplete = new EventEmitter();
        this.queryerror = new EventEmitter();
        this.ready = new EventEmitter();
        this.reportchange = new EventEmitter();
        this.reportcomplete = new EventEmitter();
        this.reportfilecancelled = new EventEmitter();
        this.reportfileerror = new EventEmitter();
        this.reportfileloaded = new EventEmitter();
        this.runningquery = new EventEmitter();
        this.update = new EventEmitter();
        this.beforetoolbarcreated = new EventEmitter();
        this.beforegriddraw = new EventEmitter();
        this.aftergriddraw = new EventEmitter();
        this.afterchartdraw = new EventEmitter();
        this.root = (/** @type {?} */ (el.nativeElement));
    }
    /**
     * @return {?}
     */
    FlexmonsterPivot.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.flexmonster = window['Flexmonster']({
            container: this.root.getElementsByClassName('fm-ng-wrapper')[0],
            componentFolder: this.componentFolder,
            width: this.width,
            height: this.height,
            toolbar: this.toolbar,
            licenseKey: this.licenseKey,
            report: this.report,
            global: this.global,
            customizeAPIRequest: this.customizeAPIRequest,
            customizeCell: this.customizeCell,
            customizeContextMenu: this.customizeContextMenu,
            cellclick: function (cell) { return _this.cellclick.next(cell); },
            celldoubleclick: function (cell) { return _this.celldoubleclick.next(cell); },
            chartclick: function (event) { return _this.chartclick.next(event); },
            datachanged: function (event) { return _this.datachanged.next(event); },
            dataerror: function (event) { return _this.dataerror.next(event); },
            datafilecancelled: function () { return _this.datafilecancelled.next(); },
            dataloaded: function () { return _this.dataloaded.next(); },
            fieldslistclose: function () { return _this.fieldslistclose.next(); },
            fieldslistopen: function () { return _this.fieldslistopen.next(); },
            filterclose: function () { return _this.filterclose.next(); },
            filteropen: function () { return _this.filteropen.next(); },
            drillthroughopen: function (cell) { return _this.drillthroughopen.next(cell); },
            drillthroughclose: function () { return _this.drillthroughclose.next(); },
            loadingdata: function () { return _this.loadingdata.next(); },
            loadinglocalization: function () { return _this.loadinglocalization.next(); },
            loadingolapstructure: function () { return _this.loadingolapstructure.next(); },
            loadingreportfile: function () { return _this.loadingreportfile.next(); },
            localizationerror: function () { return _this.localizationerror.next(); },
            localizationloaded: function () { return _this.localizationloaded.next(); },
            olapstructureerror: function () { return _this.olapstructureerror.next(); },
            olapstructureloaded: function () { return _this.olapstructureloaded.next(); },
            openingreportfile: function () { return _this.openingreportfile.next(); },
            querycomplete: function () { return _this.querycomplete.next(); },
            queryerror: function () { return _this.queryerror.next(); },
            ready: function () { return _this.ready.next(_this.flexmonster); },
            reportchange: function () { return _this.reportchange.next(); },
            reportcomplete: function () { return _this.reportcomplete.next(); },
            reportfileloaded: function () { return _this.reportfileloaded.next(); },
            reportfilecancelled: function () { return _this.reportfilecancelled.next(); },
            reportfileerror: function () { return _this.reportfileerror.next(); },
            runningquery: function () { return _this.runningquery.next(); },
            update: function () { return _this.update.next(); },
            beforetoolbarcreated: function (toolbar) { return _this.beforetoolbarcreated.next(toolbar); },
            beforegriddraw: function (event) { return _this.beforegriddraw.next(event); },
            aftergriddraw: function (event) { return _this.aftergriddraw.next(event); },
            afterchartdraw: function () { return _this.afterchartdraw.next(); }
        });
    };
    FlexmonsterPivot.decorators = [
        { type: Component, args: [{
                    selector: 'fm-pivot',
                    template: '<div><div class="fm-ng-wrapper"></div></div>'
                },] },
    ];
    FlexmonsterPivot.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FlexmonsterPivot.propDecorators = {
        toolbar: [{ type: Input }],
        licenseKey: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        componentFolder: [{ type: Input }],
        report: [{ type: Input }],
        global: [{ type: Input }],
        customizeAPIRequest: [{ type: Input }],
        customizeCell: [{ type: Input }],
        customizeContextMenu: [{ type: Input }],
        cellclick: [{ type: Output }],
        celldoubleclick: [{ type: Output }],
        chartclick: [{ type: Output }],
        dataerror: [{ type: Output }],
        datafilecancelled: [{ type: Output }],
        dataloaded: [{ type: Output }],
        datachanged: [{ type: Output }],
        fieldslistclose: [{ type: Output }],
        fieldslistopen: [{ type: Output }],
        filterclose: [{ type: Output }],
        filteropen: [{ type: Output }],
        drillthroughopen: [{ type: Output }],
        drillthroughclose: [{ type: Output }],
        fullscreen: [{ type: Output }],
        loadingdata: [{ type: Output }],
        loadinglocalization: [{ type: Output }],
        loadingolapstructure: [{ type: Output }],
        loadingreportfile: [{ type: Output }],
        localizationerror: [{ type: Output }],
        localizationloaded: [{ type: Output }],
        olapstructureerror: [{ type: Output }],
        olapstructureloaded: [{ type: Output }],
        openingreportfile: [{ type: Output }],
        querycomplete: [{ type: Output }],
        queryerror: [{ type: Output }],
        ready: [{ type: Output }],
        reportchange: [{ type: Output }],
        reportcomplete: [{ type: Output }],
        reportfilecancelled: [{ type: Output }],
        reportfileerror: [{ type: Output }],
        reportfileloaded: [{ type: Output }],
        runningquery: [{ type: Output }],
        update: [{ type: Output }],
        beforetoolbarcreated: [{ type: Output }],
        beforegriddraw: [{ type: Output }],
        aftergriddraw: [{ type: Output }],
        afterchartdraw: [{ type: Output }]
    };
    return FlexmonsterPivot;
}());
export { FlexmonsterPivot };
if (false) {
    /** @type {?} */
    FlexmonsterPivot.prototype.toolbar;
    /** @type {?} */
    FlexmonsterPivot.prototype.licenseKey;
    /** @type {?} */
    FlexmonsterPivot.prototype.width;
    /** @type {?} */
    FlexmonsterPivot.prototype.height;
    /** @type {?} */
    FlexmonsterPivot.prototype.componentFolder;
    /** @type {?} */
    FlexmonsterPivot.prototype.report;
    /** @type {?} */
    FlexmonsterPivot.prototype.global;
    /** @type {?} */
    FlexmonsterPivot.prototype.customizeAPIRequest;
    /** @type {?} */
    FlexmonsterPivot.prototype.customizeCell;
    /** @type {?} */
    FlexmonsterPivot.prototype.customizeContextMenu;
    /** @type {?} */
    FlexmonsterPivot.prototype.cellclick;
    /** @type {?} */
    FlexmonsterPivot.prototype.celldoubleclick;
    /** @type {?} */
    FlexmonsterPivot.prototype.chartclick;
    /** @type {?} */
    FlexmonsterPivot.prototype.dataerror;
    /** @type {?} */
    FlexmonsterPivot.prototype.datafilecancelled;
    /** @type {?} */
    FlexmonsterPivot.prototype.dataloaded;
    /** @type {?} */
    FlexmonsterPivot.prototype.datachanged;
    /** @type {?} */
    FlexmonsterPivot.prototype.fieldslistclose;
    /** @type {?} */
    FlexmonsterPivot.prototype.fieldslistopen;
    /** @type {?} */
    FlexmonsterPivot.prototype.filterclose;
    /** @type {?} */
    FlexmonsterPivot.prototype.filteropen;
    /** @type {?} */
    FlexmonsterPivot.prototype.drillthroughopen;
    /** @type {?} */
    FlexmonsterPivot.prototype.drillthroughclose;
    /** @type {?} */
    FlexmonsterPivot.prototype.fullscreen;
    /** @type {?} */
    FlexmonsterPivot.prototype.loadingdata;
    /** @type {?} */
    FlexmonsterPivot.prototype.loadinglocalization;
    /** @type {?} */
    FlexmonsterPivot.prototype.loadingolapstructure;
    /** @type {?} */
    FlexmonsterPivot.prototype.loadingreportfile;
    /** @type {?} */
    FlexmonsterPivot.prototype.localizationerror;
    /** @type {?} */
    FlexmonsterPivot.prototype.localizationloaded;
    /** @type {?} */
    FlexmonsterPivot.prototype.olapstructureerror;
    /** @type {?} */
    FlexmonsterPivot.prototype.olapstructureloaded;
    /** @type {?} */
    FlexmonsterPivot.prototype.openingreportfile;
    /** @type {?} */
    FlexmonsterPivot.prototype.querycomplete;
    /** @type {?} */
    FlexmonsterPivot.prototype.queryerror;
    /** @type {?} */
    FlexmonsterPivot.prototype.ready;
    /** @type {?} */
    FlexmonsterPivot.prototype.reportchange;
    /** @type {?} */
    FlexmonsterPivot.prototype.reportcomplete;
    /** @type {?} */
    FlexmonsterPivot.prototype.reportfilecancelled;
    /** @type {?} */
    FlexmonsterPivot.prototype.reportfileerror;
    /** @type {?} */
    FlexmonsterPivot.prototype.reportfileloaded;
    /** @type {?} */
    FlexmonsterPivot.prototype.runningquery;
    /** @type {?} */
    FlexmonsterPivot.prototype.update;
    /** @type {?} */
    FlexmonsterPivot.prototype.beforetoolbarcreated;
    /** @type {?} */
    FlexmonsterPivot.prototype.beforegriddraw;
    /** @type {?} */
    FlexmonsterPivot.prototype.aftergriddraw;
    /** @type {?} */
    FlexmonsterPivot.prototype.afterchartdraw;
    /** @type {?} */
    FlexmonsterPivot.prototype.flexmonster;
    /** @type {?} */
    FlexmonsterPivot.prototype.root;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleG1vbnN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZmxleG1vbnN0ZXIvIiwic291cmNlcyI6WyJmbGV4bW9uc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sS0FBSyxXQUFXLE1BQU0sYUFBYSxDQUFDO0FBRTNDO0lBMkRFLDBCQUFZLEVBQWM7UUEzQzFCLFNBQVM7UUFDQyxjQUFTLEdBQXVDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkUsb0JBQWUsR0FBdUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RSxlQUFVLEdBQXdDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckUsY0FBUyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JELHNCQUFpQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdELGVBQVUsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0RCxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0QsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxRCxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZELGVBQVUsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0RCxxQkFBZ0IsR0FBK0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsRyxzQkFBaUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3RCxlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RCx3QkFBbUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvRCx5QkFBb0IsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRSxzQkFBaUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3RCxzQkFBaUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3RCx1QkFBa0IsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5RCx1QkFBa0IsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5RCx3QkFBbUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvRCxzQkFBaUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3RCxrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pELGVBQVUsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0RCxVQUFLLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUQsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4RCxtQkFBYyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFELHdCQUFtQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9ELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0QscUJBQWdCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUQsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4RCxXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEQseUJBQW9CLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEUsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxRCxrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pELG1CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFPbEUsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBYSxFQUFFLENBQUMsYUFBYSxFQUFBLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELG1DQUFROzs7SUFBUjtRQUFBLGlCQWtEQztRQWpEQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN2QyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0QsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUI7WUFDN0MsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0I7WUFDL0MsU0FBUyxFQUFFLFVBQUMsSUFBMEIsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUF6QixDQUF5QjtZQUNwRSxlQUFlLEVBQUUsVUFBQyxJQUEwQixJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQS9CLENBQStCO1lBQ2hGLFVBQVUsRUFBRSxVQUFDLEtBQTRCLElBQUssT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBM0IsQ0FBMkI7WUFDekUsV0FBVyxFQUFFLFVBQUMsS0FBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCO1lBQzVELFNBQVMsRUFBRSxVQUFDLEtBQWEsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUExQixDQUEwQjtZQUN4RCxpQkFBaUIsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxFQUE3QixDQUE2QjtZQUN0RCxVQUFVLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQXRCLENBQXNCO1lBQ3hDLGVBQWUsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBM0IsQ0FBMkI7WUFDbEQsY0FBYyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxFQUExQixDQUEwQjtZQUNoRCxXQUFXLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQXZCLENBQXVCO1lBQzFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBdEIsQ0FBc0I7WUFDeEMsZ0JBQWdCLEVBQUUsVUFBQyxJQUFrRCxJQUFLLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBaEMsQ0FBZ0M7WUFDMUcsaUJBQWlCLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsRUFBN0IsQ0FBNkI7WUFDdEQsV0FBVyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUF2QixDQUF1QjtZQUMxQyxtQkFBbUIsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxFQUEvQixDQUErQjtZQUMxRCxvQkFBb0IsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxFQUFoQyxDQUFnQztZQUM1RCxpQkFBaUIsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxFQUE3QixDQUE2QjtZQUN0RCxpQkFBaUIsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxFQUE3QixDQUE2QjtZQUN0RCxrQkFBa0IsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxFQUE5QixDQUE4QjtZQUN4RCxrQkFBa0IsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxFQUE5QixDQUE4QjtZQUN4RCxtQkFBbUIsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxFQUEvQixDQUErQjtZQUMxRCxpQkFBaUIsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxFQUE3QixDQUE2QjtZQUN0RCxhQUFhLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQXpCLENBQXlCO1lBQzlDLFVBQVUsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBdEIsQ0FBc0I7WUFDeEMsS0FBSyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQWpDLENBQWlDO1lBQzlDLFlBQVksRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBeEIsQ0FBd0I7WUFDNUMsY0FBYyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxFQUExQixDQUEwQjtZQUNoRCxnQkFBZ0IsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUE1QixDQUE0QjtZQUNwRCxtQkFBbUIsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxFQUEvQixDQUErQjtZQUMxRCxlQUFlLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEVBQTNCLENBQTJCO1lBQ2xELFlBQVksRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBeEIsQ0FBd0I7WUFDNUMsTUFBTSxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFsQixDQUFrQjtZQUNoQyxvQkFBb0IsRUFBRSxVQUFDLE9BQWUsSUFBSyxPQUFBLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQXZDLENBQXVDO1lBQ2xGLGNBQWMsRUFBRSxVQUFDLEtBQWEsSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUEvQixDQUErQjtZQUNsRSxhQUFhLEVBQUUsVUFBQyxLQUFhLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBOUIsQ0FBOEI7WUFDaEUsY0FBYyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxFQUExQixDQUEwQjtTQUNqRCxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFqSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsOENBQThDO2lCQUN6RDs7O2dCQU5tQixVQUFVOzs7MEJBUzNCLEtBQUs7NkJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7a0NBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7c0NBQ0wsS0FBSztnQ0FDTCxLQUFLO3VDQUNMLEtBQUs7NEJBRUwsTUFBTTtrQ0FDTixNQUFNOzZCQUNOLE1BQU07NEJBQ04sTUFBTTtvQ0FDTixNQUFNOzZCQUNOLE1BQU07OEJBQ04sTUFBTTtrQ0FDTixNQUFNO2lDQUNOLE1BQU07OEJBQ04sTUFBTTs2QkFDTixNQUFNO21DQUNOLE1BQU07b0NBQ04sTUFBTTs2QkFDTixNQUFNOzhCQUNOLE1BQU07c0NBQ04sTUFBTTt1Q0FDTixNQUFNO29DQUNOLE1BQU07b0NBQ04sTUFBTTtxQ0FDTixNQUFNO3FDQUNOLE1BQU07c0NBQ04sTUFBTTtvQ0FDTixNQUFNO2dDQUNOLE1BQU07NkJBQ04sTUFBTTt3QkFDTixNQUFNOytCQUNOLE1BQU07aUNBQ04sTUFBTTtzQ0FDTixNQUFNO2tDQUNOLE1BQU07bUNBQ04sTUFBTTsrQkFDTixNQUFNO3lCQUNOLE1BQU07dUNBQ04sTUFBTTtpQ0FDTixNQUFNO2dDQUNOLE1BQU07aUNBQ04sTUFBTTs7SUE2RFQsdUJBQUM7Q0FBQSxBQWxIRCxJQWtIQztTQTlHWSxnQkFBZ0I7OztJQUUzQixtQ0FBMEI7O0lBQzFCLHNDQUE0Qjs7SUFDNUIsaUNBQWdDOztJQUNoQyxrQ0FBaUM7O0lBQ2pDLDJDQUFpQzs7SUFDakMsa0NBQTZDOztJQUM3QyxrQ0FBb0M7O0lBQ3BDLCtDQUEwRDs7SUFDMUQseUNBQTRGOztJQUM1RixnREFBNEs7O0lBRTVLLHFDQUE2RTs7SUFDN0UsMkNBQW1GOztJQUNuRixzQ0FBK0U7O0lBQy9FLHFDQUErRDs7SUFDL0QsNkNBQXVFOztJQUN2RSxzQ0FBZ0U7O0lBQ2hFLHVDQUFpRTs7SUFDakUsMkNBQXFFOztJQUNyRSwwQ0FBb0U7O0lBQ3BFLHVDQUFpRTs7SUFDakUsc0NBQWdFOztJQUNoRSw0Q0FBNEc7O0lBQzVHLDZDQUF1RTs7SUFDdkUsc0NBQWdFOztJQUNoRSx1Q0FBaUU7O0lBQ2pFLCtDQUF5RTs7SUFDekUsZ0RBQTBFOztJQUMxRSw2Q0FBdUU7O0lBQ3ZFLDZDQUF1RTs7SUFDdkUsOENBQXdFOztJQUN4RSw4Q0FBd0U7O0lBQ3hFLCtDQUF5RTs7SUFDekUsNkNBQXVFOztJQUN2RSx5Q0FBbUU7O0lBQ25FLHNDQUFnRTs7SUFDaEUsaUNBQXNFOztJQUN0RSx3Q0FBa0U7O0lBQ2xFLDBDQUFvRTs7SUFDcEUsK0NBQXlFOztJQUN6RSwyQ0FBcUU7O0lBQ3JFLDRDQUFzRTs7SUFDdEUsd0NBQWtFOztJQUNsRSxrQ0FBNEQ7O0lBQzVELGdEQUEwRTs7SUFDMUUsMENBQW9FOztJQUNwRSx5Q0FBbUU7O0lBQ25FLDBDQUFvRTs7SUFFcEUsdUNBQXNDOztJQUV0QyxnQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBGbGV4bW9uc3RlciBmcm9tICdmbGV4bW9uc3Rlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZtLXBpdm90JyxcclxuICB0ZW1wbGF0ZTogJzxkaXY+PGRpdiBjbGFzcz1cImZtLW5nLXdyYXBwZXJcIj48L2Rpdj48L2Rpdj4nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbGV4bW9uc3RlclBpdm90IHtcclxuICAvLyBwYXJhbXNcclxuICBASW5wdXQoKSB0b29sYmFyOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGxpY2Vuc2VLZXk6IHN0cmluZztcclxuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNvbXBvbmVudEZvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJlcG9ydDogRmxleG1vbnN0ZXIuUmVwb3J0IHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGdsb2JhbDogRmxleG1vbnN0ZXIuUmVwb3J0O1xyXG4gIEBJbnB1dCgpIGN1c3RvbWl6ZUFQSVJlcXVlc3Q6IChyZXF1ZXN0OiBPYmplY3QpID0+IE9iamVjdDtcclxuICBASW5wdXQoKSBjdXN0b21pemVDZWxsOiAoY2VsbDogRmxleG1vbnN0ZXIuQ2VsbEJ1aWxkZXIsIGRhdGE6IEZsZXhtb25zdGVyLkNlbGxEYXRhKSA9PiB2b2lkO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWl6ZUNvbnRleHRNZW51OiAoY2VsbDogRmxleG1vbnN0ZXIuQ29udGV4dE1lbnVJdGVtW10sIGRhdGE6IEZsZXhtb25zdGVyLkNlbGxEYXRhIHwgRmxleG1vbnN0ZXIuQ2hhcnREYXRhLCB2aWV3VHlwZTogc3RyaW5nKSA9PiBGbGV4bW9uc3Rlci5Db250ZXh0TWVudUl0ZW1bXTtcclxuICAvLyBldmVudHNcclxuICBAT3V0cHV0KCkgY2VsbGNsaWNrOiBFdmVudEVtaXR0ZXI8RmxleG1vbnN0ZXIuQ2VsbERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBjZWxsZG91YmxlY2xpY2s6IEV2ZW50RW1pdHRlcjxGbGV4bW9uc3Rlci5DZWxsRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNoYXJ0Y2xpY2s6IEV2ZW50RW1pdHRlcjxGbGV4bW9uc3Rlci5DaGFydERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkYXRhZXJyb3I6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkYXRhZmlsZWNhbmNlbGxlZDogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRhdGFsb2FkZWQ6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkYXRhY2hhbmdlZDogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGZpZWxkc2xpc3RjbG9zZTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGZpZWxkc2xpc3RvcGVuOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZmlsdGVyY2xvc2U6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBmaWx0ZXJvcGVuOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZHJpbGx0aHJvdWdob3BlbjogRXZlbnRFbWl0dGVyPEZsZXhtb25zdGVyLkNlbGxEYXRhIHwgRmxleG1vbnN0ZXIuQ2hhcnREYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZHJpbGx0aHJvdWdoY2xvc2U6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBmdWxsc2NyZWVuOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbG9hZGluZ2RhdGE6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBsb2FkaW5nbG9jYWxpemF0aW9uOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbG9hZGluZ29sYXBzdHJ1Y3R1cmU6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBsb2FkaW5ncmVwb3J0ZmlsZTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGxvY2FsaXphdGlvbmVycm9yOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbG9jYWxpemF0aW9ubG9hZGVkOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb2xhcHN0cnVjdHVyZWVycm9yOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb2xhcHN0cnVjdHVyZWxvYWRlZDogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9wZW5pbmdyZXBvcnRmaWxlOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcXVlcnljb21wbGV0ZTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHF1ZXJ5ZXJyb3I6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPEZsZXhtb25zdGVyLlBpdm90PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVwb3J0Y2hhbmdlOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVwb3J0Y29tcGxldGU6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZXBvcnRmaWxlY2FuY2VsbGVkOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVwb3J0ZmlsZWVycm9yOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVwb3J0ZmlsZWxvYWRlZDogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJ1bm5pbmdxdWVyeTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHVwZGF0ZTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGJlZm9yZXRvb2xiYXJjcmVhdGVkOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYmVmb3JlZ3JpZGRyYXc6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBhZnRlcmdyaWRkcmF3OiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYWZ0ZXJjaGFydGRyYXc6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8vIGFwaVxyXG4gIHB1YmxpYyBmbGV4bW9uc3RlcjogRmxleG1vbnN0ZXIuUGl2b3Q7XHJcbiAgLy8gcHJpdmF0ZVxyXG4gIHByaXZhdGUgcm9vdDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLnJvb3QgPSA8SFRNTEVsZW1lbnQ+ZWwubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5mbGV4bW9uc3RlciA9IHdpbmRvd1snRmxleG1vbnN0ZXInXSh7XHJcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5yb290LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZtLW5nLXdyYXBwZXInKVswXSxcclxuICAgICAgY29tcG9uZW50Rm9sZGVyOiB0aGlzLmNvbXBvbmVudEZvbGRlcixcclxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhcixcclxuICAgICAgbGljZW5zZUtleTogdGhpcy5saWNlbnNlS2V5LFxyXG4gICAgICByZXBvcnQ6IHRoaXMucmVwb3J0LFxyXG4gICAgICBnbG9iYWw6IHRoaXMuZ2xvYmFsLFxyXG4gICAgICBjdXN0b21pemVBUElSZXF1ZXN0OiB0aGlzLmN1c3RvbWl6ZUFQSVJlcXVlc3QsXHJcbiAgICAgIGN1c3RvbWl6ZUNlbGw6IHRoaXMuY3VzdG9taXplQ2VsbCxcclxuICAgICAgY3VzdG9taXplQ29udGV4dE1lbnU6IHRoaXMuY3VzdG9taXplQ29udGV4dE1lbnUsXHJcbiAgICAgIGNlbGxjbGljazogKGNlbGw6IEZsZXhtb25zdGVyLkNlbGxEYXRhKSA9PiB0aGlzLmNlbGxjbGljay5uZXh0KGNlbGwpLFxyXG4gICAgICBjZWxsZG91YmxlY2xpY2s6IChjZWxsOiBGbGV4bW9uc3Rlci5DZWxsRGF0YSkgPT4gdGhpcy5jZWxsZG91YmxlY2xpY2submV4dChjZWxsKSxcclxuICAgICAgY2hhcnRjbGljazogKGV2ZW50OiBGbGV4bW9uc3Rlci5DaGFydERhdGEpID0+IHRoaXMuY2hhcnRjbGljay5uZXh0KGV2ZW50KSxcclxuICAgICAgZGF0YWNoYW5nZWQ6IChldmVudDogT2JqZWN0KSA9PiB0aGlzLmRhdGFjaGFuZ2VkLm5leHQoZXZlbnQpLFxyXG4gICAgICBkYXRhZXJyb3I6IChldmVudDogT2JqZWN0KSA9PiB0aGlzLmRhdGFlcnJvci5uZXh0KGV2ZW50KSxcclxuICAgICAgZGF0YWZpbGVjYW5jZWxsZWQ6ICgpID0+IHRoaXMuZGF0YWZpbGVjYW5jZWxsZWQubmV4dCgpLFxyXG4gICAgICBkYXRhbG9hZGVkOiAoKSA9PiB0aGlzLmRhdGFsb2FkZWQubmV4dCgpLFxyXG4gICAgICBmaWVsZHNsaXN0Y2xvc2U6ICgpID0+IHRoaXMuZmllbGRzbGlzdGNsb3NlLm5leHQoKSxcclxuICAgICAgZmllbGRzbGlzdG9wZW46ICgpID0+IHRoaXMuZmllbGRzbGlzdG9wZW4ubmV4dCgpLFxyXG4gICAgICBmaWx0ZXJjbG9zZTogKCkgPT4gdGhpcy5maWx0ZXJjbG9zZS5uZXh0KCksXHJcbiAgICAgIGZpbHRlcm9wZW46ICgpID0+IHRoaXMuZmlsdGVyb3Blbi5uZXh0KCksXHJcbiAgICAgIGRyaWxsdGhyb3VnaG9wZW46IChjZWxsOiBGbGV4bW9uc3Rlci5DZWxsRGF0YSB8IEZsZXhtb25zdGVyLkNoYXJ0RGF0YSkgPT4gdGhpcy5kcmlsbHRocm91Z2hvcGVuLm5leHQoY2VsbCksXHJcbiAgICAgIGRyaWxsdGhyb3VnaGNsb3NlOiAoKSA9PiB0aGlzLmRyaWxsdGhyb3VnaGNsb3NlLm5leHQoKSxcclxuICAgICAgbG9hZGluZ2RhdGE6ICgpID0+IHRoaXMubG9hZGluZ2RhdGEubmV4dCgpLFxyXG4gICAgICBsb2FkaW5nbG9jYWxpemF0aW9uOiAoKSA9PiB0aGlzLmxvYWRpbmdsb2NhbGl6YXRpb24ubmV4dCgpLFxyXG4gICAgICBsb2FkaW5nb2xhcHN0cnVjdHVyZTogKCkgPT4gdGhpcy5sb2FkaW5nb2xhcHN0cnVjdHVyZS5uZXh0KCksXHJcbiAgICAgIGxvYWRpbmdyZXBvcnRmaWxlOiAoKSA9PiB0aGlzLmxvYWRpbmdyZXBvcnRmaWxlLm5leHQoKSxcclxuICAgICAgbG9jYWxpemF0aW9uZXJyb3I6ICgpID0+IHRoaXMubG9jYWxpemF0aW9uZXJyb3IubmV4dCgpLFxyXG4gICAgICBsb2NhbGl6YXRpb25sb2FkZWQ6ICgpID0+IHRoaXMubG9jYWxpemF0aW9ubG9hZGVkLm5leHQoKSxcclxuICAgICAgb2xhcHN0cnVjdHVyZWVycm9yOiAoKSA9PiB0aGlzLm9sYXBzdHJ1Y3R1cmVlcnJvci5uZXh0KCksXHJcbiAgICAgIG9sYXBzdHJ1Y3R1cmVsb2FkZWQ6ICgpID0+IHRoaXMub2xhcHN0cnVjdHVyZWxvYWRlZC5uZXh0KCksXHJcbiAgICAgIG9wZW5pbmdyZXBvcnRmaWxlOiAoKSA9PiB0aGlzLm9wZW5pbmdyZXBvcnRmaWxlLm5leHQoKSxcclxuICAgICAgcXVlcnljb21wbGV0ZTogKCkgPT4gdGhpcy5xdWVyeWNvbXBsZXRlLm5leHQoKSxcclxuICAgICAgcXVlcnllcnJvcjogKCkgPT4gdGhpcy5xdWVyeWVycm9yLm5leHQoKSxcclxuICAgICAgcmVhZHk6ICgpID0+IHRoaXMucmVhZHkubmV4dCh0aGlzLmZsZXhtb25zdGVyKSxcclxuICAgICAgcmVwb3J0Y2hhbmdlOiAoKSA9PiB0aGlzLnJlcG9ydGNoYW5nZS5uZXh0KCksXHJcbiAgICAgIHJlcG9ydGNvbXBsZXRlOiAoKSA9PiB0aGlzLnJlcG9ydGNvbXBsZXRlLm5leHQoKSxcclxuICAgICAgcmVwb3J0ZmlsZWxvYWRlZDogKCkgPT4gdGhpcy5yZXBvcnRmaWxlbG9hZGVkLm5leHQoKSxcclxuICAgICAgcmVwb3J0ZmlsZWNhbmNlbGxlZDogKCkgPT4gdGhpcy5yZXBvcnRmaWxlY2FuY2VsbGVkLm5leHQoKSxcclxuICAgICAgcmVwb3J0ZmlsZWVycm9yOiAoKSA9PiB0aGlzLnJlcG9ydGZpbGVlcnJvci5uZXh0KCksXHJcbiAgICAgIHJ1bm5pbmdxdWVyeTogKCkgPT4gdGhpcy5ydW5uaW5ncXVlcnkubmV4dCgpLFxyXG4gICAgICB1cGRhdGU6ICgpID0+IHRoaXMudXBkYXRlLm5leHQoKSxcclxuICAgICAgYmVmb3JldG9vbGJhcmNyZWF0ZWQ6ICh0b29sYmFyOiBPYmplY3QpID0+IHRoaXMuYmVmb3JldG9vbGJhcmNyZWF0ZWQubmV4dCh0b29sYmFyKSxcclxuICAgICAgYmVmb3JlZ3JpZGRyYXc6IChldmVudDogT2JqZWN0KSA9PiB0aGlzLmJlZm9yZWdyaWRkcmF3Lm5leHQoZXZlbnQpLFxyXG4gICAgICBhZnRlcmdyaWRkcmF3OiAoZXZlbnQ6IE9iamVjdCkgPT4gdGhpcy5hZnRlcmdyaWRkcmF3Lm5leHQoZXZlbnQpLFxyXG4gICAgICBhZnRlcmNoYXJ0ZHJhdzogKCkgPT4gdGhpcy5hZnRlcmNoYXJ0ZHJhdy5uZXh0KClcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=