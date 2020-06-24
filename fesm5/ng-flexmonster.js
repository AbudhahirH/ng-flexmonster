import { Component, ElementRef, Input, Output, EventEmitter, NgModule } from '@angular/core';
import 'flexmonster';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var FlexmonsterPivotModule = /** @class */ (function () {
    function FlexmonsterPivotModule() {
    }
    FlexmonsterPivotModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [FlexmonsterPivot],
                    exports: [FlexmonsterPivot]
                },] },
    ];
    return FlexmonsterPivotModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { FlexmonsterPivotModule, FlexmonsterPivot };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmxleG1vbnN0ZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLWZsZXhtb25zdGVyL2ZsZXhtb25zdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmctZmxleG1vbnN0ZXIvZmxleG1vbnN0ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIEZsZXhtb25zdGVyIGZyb20gJ2ZsZXhtb25zdGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm0tcGl2b3QnLFxyXG4gIHRlbXBsYXRlOiAnPGRpdj48ZGl2IGNsYXNzPVwiZm0tbmctd3JhcHBlclwiPjwvZGl2PjwvZGl2PidcclxufSlcclxuZXhwb3J0IGNsYXNzIEZsZXhtb25zdGVyUGl2b3Qge1xyXG4gIC8vIHBhcmFtc1xyXG4gIEBJbnB1dCgpIHRvb2xiYXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbGljZW5zZUtleTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KCkgY29tcG9uZW50Rm9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmVwb3J0OiBGbGV4bW9uc3Rlci5SZXBvcnQgfCBzdHJpbmc7XHJcbiAgQElucHV0KCkgZ2xvYmFsOiBGbGV4bW9uc3Rlci5SZXBvcnQ7XHJcbiAgQElucHV0KCkgY3VzdG9taXplQVBJUmVxdWVzdDogKHJlcXVlc3Q6IE9iamVjdCkgPT4gT2JqZWN0O1xyXG4gIEBJbnB1dCgpIGN1c3RvbWl6ZUNlbGw6IChjZWxsOiBGbGV4bW9uc3Rlci5DZWxsQnVpbGRlciwgZGF0YTogRmxleG1vbnN0ZXIuQ2VsbERhdGEpID0+IHZvaWQ7XHJcbiAgQElucHV0KCkgY3VzdG9taXplQ29udGV4dE1lbnU6IChjZWxsOiBGbGV4bW9uc3Rlci5Db250ZXh0TWVudUl0ZW1bXSwgZGF0YTogRmxleG1vbnN0ZXIuQ2VsbERhdGEgfCBGbGV4bW9uc3Rlci5DaGFydERhdGEsIHZpZXdUeXBlOiBzdHJpbmcpID0+IEZsZXhtb25zdGVyLkNvbnRleHRNZW51SXRlbVtdO1xyXG4gIC8vIGV2ZW50c1xyXG4gIEBPdXRwdXQoKSBjZWxsY2xpY2s6IEV2ZW50RW1pdHRlcjxGbGV4bW9uc3Rlci5DZWxsRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNlbGxkb3VibGVjbGljazogRXZlbnRFbWl0dGVyPEZsZXhtb25zdGVyLkNlbGxEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgY2hhcnRjbGljazogRXZlbnRFbWl0dGVyPEZsZXhtb25zdGVyLkNoYXJ0RGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRhdGFlcnJvcjogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRhdGFmaWxlY2FuY2VsbGVkOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZGF0YWxvYWRlZDogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRhdGFjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZmllbGRzbGlzdGNsb3NlOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZmllbGRzbGlzdG9wZW46IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBmaWx0ZXJjbG9zZTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGZpbHRlcm9wZW46IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkcmlsbHRocm91Z2hvcGVuOiBFdmVudEVtaXR0ZXI8RmxleG1vbnN0ZXIuQ2VsbERhdGEgfCBGbGV4bW9uc3Rlci5DaGFydERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkcmlsbHRocm91Z2hjbG9zZTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGZ1bGxzY3JlZW46IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBsb2FkaW5nZGF0YTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGxvYWRpbmdsb2NhbGl6YXRpb246IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBsb2FkaW5nb2xhcHN0cnVjdHVyZTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGxvYWRpbmdyZXBvcnRmaWxlOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbG9jYWxpemF0aW9uZXJyb3I6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBsb2NhbGl6YXRpb25sb2FkZWQ6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbGFwc3RydWN0dXJlZXJyb3I6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbGFwc3RydWN0dXJlbG9hZGVkOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb3BlbmluZ3JlcG9ydGZpbGU6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBxdWVyeWNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcXVlcnllcnJvcjogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWR5OiBFdmVudEVtaXR0ZXI8RmxleG1vbnN0ZXIuUGl2b3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZXBvcnRjaGFuZ2U6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZXBvcnRjb21wbGV0ZTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlcG9ydGZpbGVjYW5jZWxsZWQ6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZXBvcnRmaWxlZXJyb3I6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZXBvcnRmaWxlbG9hZGVkOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcnVubmluZ3F1ZXJ5OiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdXBkYXRlOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYmVmb3JldG9vbGJhcmNyZWF0ZWQ6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBiZWZvcmVncmlkZHJhdzogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGFmdGVyZ3JpZGRyYXc6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBhZnRlcmNoYXJ0ZHJhdzogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLy8gYXBpXHJcbiAgcHVibGljIGZsZXhtb25zdGVyOiBGbGV4bW9uc3Rlci5QaXZvdDtcclxuICAvLyBwcml2YXRlXHJcbiAgcHJpdmF0ZSByb290OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMucm9vdCA9IDxIVE1MRWxlbWVudD5lbC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmZsZXhtb25zdGVyID0gd2luZG93WydGbGV4bW9uc3RlciddKHtcclxuICAgICAgY29udGFpbmVyOiB0aGlzLnJvb3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm0tbmctd3JhcHBlcicpWzBdLFxyXG4gICAgICBjb21wb25lbnRGb2xkZXI6IHRoaXMuY29tcG9uZW50Rm9sZGVyLFxyXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgdG9vbGJhcjogdGhpcy50b29sYmFyLFxyXG4gICAgICBsaWNlbnNlS2V5OiB0aGlzLmxpY2Vuc2VLZXksXHJcbiAgICAgIHJlcG9ydDogdGhpcy5yZXBvcnQsXHJcbiAgICAgIGdsb2JhbDogdGhpcy5nbG9iYWwsXHJcbiAgICAgIGN1c3RvbWl6ZUFQSVJlcXVlc3Q6IHRoaXMuY3VzdG9taXplQVBJUmVxdWVzdCxcclxuICAgICAgY3VzdG9taXplQ2VsbDogdGhpcy5jdXN0b21pemVDZWxsLFxyXG4gICAgICBjdXN0b21pemVDb250ZXh0TWVudTogdGhpcy5jdXN0b21pemVDb250ZXh0TWVudSxcclxuICAgICAgY2VsbGNsaWNrOiAoY2VsbDogRmxleG1vbnN0ZXIuQ2VsbERhdGEpID0+IHRoaXMuY2VsbGNsaWNrLm5leHQoY2VsbCksXHJcbiAgICAgIGNlbGxkb3VibGVjbGljazogKGNlbGw6IEZsZXhtb25zdGVyLkNlbGxEYXRhKSA9PiB0aGlzLmNlbGxkb3VibGVjbGljay5uZXh0KGNlbGwpLFxyXG4gICAgICBjaGFydGNsaWNrOiAoZXZlbnQ6IEZsZXhtb25zdGVyLkNoYXJ0RGF0YSkgPT4gdGhpcy5jaGFydGNsaWNrLm5leHQoZXZlbnQpLFxyXG4gICAgICBkYXRhY2hhbmdlZDogKGV2ZW50OiBPYmplY3QpID0+IHRoaXMuZGF0YWNoYW5nZWQubmV4dChldmVudCksXHJcbiAgICAgIGRhdGFlcnJvcjogKGV2ZW50OiBPYmplY3QpID0+IHRoaXMuZGF0YWVycm9yLm5leHQoZXZlbnQpLFxyXG4gICAgICBkYXRhZmlsZWNhbmNlbGxlZDogKCkgPT4gdGhpcy5kYXRhZmlsZWNhbmNlbGxlZC5uZXh0KCksXHJcbiAgICAgIGRhdGFsb2FkZWQ6ICgpID0+IHRoaXMuZGF0YWxvYWRlZC5uZXh0KCksXHJcbiAgICAgIGZpZWxkc2xpc3RjbG9zZTogKCkgPT4gdGhpcy5maWVsZHNsaXN0Y2xvc2UubmV4dCgpLFxyXG4gICAgICBmaWVsZHNsaXN0b3BlbjogKCkgPT4gdGhpcy5maWVsZHNsaXN0b3Blbi5uZXh0KCksXHJcbiAgICAgIGZpbHRlcmNsb3NlOiAoKSA9PiB0aGlzLmZpbHRlcmNsb3NlLm5leHQoKSxcclxuICAgICAgZmlsdGVyb3BlbjogKCkgPT4gdGhpcy5maWx0ZXJvcGVuLm5leHQoKSxcclxuICAgICAgZHJpbGx0aHJvdWdob3BlbjogKGNlbGw6IEZsZXhtb25zdGVyLkNlbGxEYXRhIHwgRmxleG1vbnN0ZXIuQ2hhcnREYXRhKSA9PiB0aGlzLmRyaWxsdGhyb3VnaG9wZW4ubmV4dChjZWxsKSxcclxuICAgICAgZHJpbGx0aHJvdWdoY2xvc2U6ICgpID0+IHRoaXMuZHJpbGx0aHJvdWdoY2xvc2UubmV4dCgpLFxyXG4gICAgICBsb2FkaW5nZGF0YTogKCkgPT4gdGhpcy5sb2FkaW5nZGF0YS5uZXh0KCksXHJcbiAgICAgIGxvYWRpbmdsb2NhbGl6YXRpb246ICgpID0+IHRoaXMubG9hZGluZ2xvY2FsaXphdGlvbi5uZXh0KCksXHJcbiAgICAgIGxvYWRpbmdvbGFwc3RydWN0dXJlOiAoKSA9PiB0aGlzLmxvYWRpbmdvbGFwc3RydWN0dXJlLm5leHQoKSxcclxuICAgICAgbG9hZGluZ3JlcG9ydGZpbGU6ICgpID0+IHRoaXMubG9hZGluZ3JlcG9ydGZpbGUubmV4dCgpLFxyXG4gICAgICBsb2NhbGl6YXRpb25lcnJvcjogKCkgPT4gdGhpcy5sb2NhbGl6YXRpb25lcnJvci5uZXh0KCksXHJcbiAgICAgIGxvY2FsaXphdGlvbmxvYWRlZDogKCkgPT4gdGhpcy5sb2NhbGl6YXRpb25sb2FkZWQubmV4dCgpLFxyXG4gICAgICBvbGFwc3RydWN0dXJlZXJyb3I6ICgpID0+IHRoaXMub2xhcHN0cnVjdHVyZWVycm9yLm5leHQoKSxcclxuICAgICAgb2xhcHN0cnVjdHVyZWxvYWRlZDogKCkgPT4gdGhpcy5vbGFwc3RydWN0dXJlbG9hZGVkLm5leHQoKSxcclxuICAgICAgb3BlbmluZ3JlcG9ydGZpbGU6ICgpID0+IHRoaXMub3BlbmluZ3JlcG9ydGZpbGUubmV4dCgpLFxyXG4gICAgICBxdWVyeWNvbXBsZXRlOiAoKSA9PiB0aGlzLnF1ZXJ5Y29tcGxldGUubmV4dCgpLFxyXG4gICAgICBxdWVyeWVycm9yOiAoKSA9PiB0aGlzLnF1ZXJ5ZXJyb3IubmV4dCgpLFxyXG4gICAgICByZWFkeTogKCkgPT4gdGhpcy5yZWFkeS5uZXh0KHRoaXMuZmxleG1vbnN0ZXIpLFxyXG4gICAgICByZXBvcnRjaGFuZ2U6ICgpID0+IHRoaXMucmVwb3J0Y2hhbmdlLm5leHQoKSxcclxuICAgICAgcmVwb3J0Y29tcGxldGU6ICgpID0+IHRoaXMucmVwb3J0Y29tcGxldGUubmV4dCgpLFxyXG4gICAgICByZXBvcnRmaWxlbG9hZGVkOiAoKSA9PiB0aGlzLnJlcG9ydGZpbGVsb2FkZWQubmV4dCgpLFxyXG4gICAgICByZXBvcnRmaWxlY2FuY2VsbGVkOiAoKSA9PiB0aGlzLnJlcG9ydGZpbGVjYW5jZWxsZWQubmV4dCgpLFxyXG4gICAgICByZXBvcnRmaWxlZXJyb3I6ICgpID0+IHRoaXMucmVwb3J0ZmlsZWVycm9yLm5leHQoKSxcclxuICAgICAgcnVubmluZ3F1ZXJ5OiAoKSA9PiB0aGlzLnJ1bm5pbmdxdWVyeS5uZXh0KCksXHJcbiAgICAgIHVwZGF0ZTogKCkgPT4gdGhpcy51cGRhdGUubmV4dCgpLFxyXG4gICAgICBiZWZvcmV0b29sYmFyY3JlYXRlZDogKHRvb2xiYXI6IE9iamVjdCkgPT4gdGhpcy5iZWZvcmV0b29sYmFyY3JlYXRlZC5uZXh0KHRvb2xiYXIpLFxyXG4gICAgICBiZWZvcmVncmlkZHJhdzogKGV2ZW50OiBPYmplY3QpID0+IHRoaXMuYmVmb3JlZ3JpZGRyYXcubmV4dChldmVudCksXHJcbiAgICAgIGFmdGVyZ3JpZGRyYXc6IChldmVudDogT2JqZWN0KSA9PiB0aGlzLmFmdGVyZ3JpZGRyYXcubmV4dChldmVudCksXHJcbiAgICAgIGFmdGVyY2hhcnRkcmF3OiAoKSA9PiB0aGlzLmFmdGVyY2hhcnRkcmF3Lm5leHQoKVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZsZXhtb25zdGVyUGl2b3QgfSBmcm9tICcuL2ZsZXhtb25zdGVyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbRmxleG1vbnN0ZXJQaXZvdF0sXHJcbiAgZXhwb3J0czogW0ZsZXhtb25zdGVyUGl2b3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbGV4bW9uc3RlclBpdm90TW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtJQThERSwwQkFBWSxFQUFjOztRQTFDaEIsY0FBUyxHQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25FLG9CQUFlLEdBQXVDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekUsZUFBVSxHQUF3QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JFLGNBQVMsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRCxzQkFBaUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3RCxlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RCxvQkFBZSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNELG1CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RCxlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEQscUJBQWdCLEdBQStELElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEcsc0JBQWlCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0QsZUFBVSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RELGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkQsd0JBQW1CLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0QseUJBQW9CLEdBQXlCLElBQUksWUFB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