(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-flexmonster', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['ng-flexmonster'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var FlexmonsterPivot = /** @class */ (function () {
        function FlexmonsterPivot(el) {
            // events
            this.cellclick = new core.EventEmitter();
            this.celldoubleclick = new core.EventEmitter();
            this.chartclick = new core.EventEmitter();
            this.dataerror = new core.EventEmitter();
            this.datafilecancelled = new core.EventEmitter();
            this.dataloaded = new core.EventEmitter();
            this.datachanged = new core.EventEmitter();
            this.fieldslistclose = new core.EventEmitter();
            this.fieldslistopen = new core.EventEmitter();
            this.filterclose = new core.EventEmitter();
            this.filteropen = new core.EventEmitter();
            this.drillthroughopen = new core.EventEmitter();
            this.drillthroughclose = new core.EventEmitter();
            this.fullscreen = new core.EventEmitter();
            this.loadingdata = new core.EventEmitter();
            this.loadinglocalization = new core.EventEmitter();
            this.loadingolapstructure = new core.EventEmitter();
            this.loadingreportfile = new core.EventEmitter();
            this.localizationerror = new core.EventEmitter();
            this.localizationloaded = new core.EventEmitter();
            this.olapstructureerror = new core.EventEmitter();
            this.olapstructureloaded = new core.EventEmitter();
            this.openingreportfile = new core.EventEmitter();
            this.querycomplete = new core.EventEmitter();
            this.queryerror = new core.EventEmitter();
            this.ready = new core.EventEmitter();
            this.reportchange = new core.EventEmitter();
            this.reportcomplete = new core.EventEmitter();
            this.reportfilecancelled = new core.EventEmitter();
            this.reportfileerror = new core.EventEmitter();
            this.reportfileloaded = new core.EventEmitter();
            this.runningquery = new core.EventEmitter();
            this.update = new core.EventEmitter();
            this.beforetoolbarcreated = new core.EventEmitter();
            this.beforegriddraw = new core.EventEmitter();
            this.aftergriddraw = new core.EventEmitter();
            this.afterchartdraw = new core.EventEmitter();
            this.root = ( /** @type {?} */(el.nativeElement));
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
            { type: core.Component, args: [{
                        selector: 'fm-pivot',
                        template: '<div><div class="fm-ng-wrapper"></div></div>'
                    },] },
        ];
        FlexmonsterPivot.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        FlexmonsterPivot.propDecorators = {
            toolbar: [{ type: core.Input }],
            licenseKey: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            componentFolder: [{ type: core.Input }],
            report: [{ type: core.Input }],
            global: [{ type: core.Input }],
            customizeAPIRequest: [{ type: core.Input }],
            customizeCell: [{ type: core.Input }],
            customizeContextMenu: [{ type: core.Input }],
            cellclick: [{ type: core.Output }],
            celldoubleclick: [{ type: core.Output }],
            chartclick: [{ type: core.Output }],
            dataerror: [{ type: core.Output }],
            datafilecancelled: [{ type: core.Output }],
            dataloaded: [{ type: core.Output }],
            datachanged: [{ type: core.Output }],
            fieldslistclose: [{ type: core.Output }],
            fieldslistopen: [{ type: core.Output }],
            filterclose: [{ type: core.Output }],
            filteropen: [{ type: core.Output }],
            drillthroughopen: [{ type: core.Output }],
            drillthroughclose: [{ type: core.Output }],
            fullscreen: [{ type: core.Output }],
            loadingdata: [{ type: core.Output }],
            loadinglocalization: [{ type: core.Output }],
            loadingolapstructure: [{ type: core.Output }],
            loadingreportfile: [{ type: core.Output }],
            localizationerror: [{ type: core.Output }],
            localizationloaded: [{ type: core.Output }],
            olapstructureerror: [{ type: core.Output }],
            olapstructureloaded: [{ type: core.Output }],
            openingreportfile: [{ type: core.Output }],
            querycomplete: [{ type: core.Output }],
            queryerror: [{ type: core.Output }],
            ready: [{ type: core.Output }],
            reportchange: [{ type: core.Output }],
            reportcomplete: [{ type: core.Output }],
            reportfilecancelled: [{ type: core.Output }],
            reportfileerror: [{ type: core.Output }],
            reportfileloaded: [{ type: core.Output }],
            runningquery: [{ type: core.Output }],
            update: [{ type: core.Output }],
            beforetoolbarcreated: [{ type: core.Output }],
            beforegriddraw: [{ type: core.Output }],
            aftergriddraw: [{ type: core.Output }],
            afterchartdraw: [{ type: core.Output }]
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.FlexmonsterPivotModule = FlexmonsterPivotModule;
    exports.FlexmonsterPivot = FlexmonsterPivot;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmxleG1vbnN0ZXIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1mbGV4bW9uc3Rlci9mbGV4bW9uc3Rlci5jb21wb25lbnQudHMiLCJuZzovL25nLWZsZXhtb25zdGVyL2ZsZXhtb25zdGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBGbGV4bW9uc3RlciBmcm9tICdmbGV4bW9uc3Rlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZtLXBpdm90JyxcclxuICB0ZW1wbGF0ZTogJzxkaXY+PGRpdiBjbGFzcz1cImZtLW5nLXdyYXBwZXJcIj48L2Rpdj48L2Rpdj4nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbGV4bW9uc3RlclBpdm90IHtcclxuICAvLyBwYXJhbXNcclxuICBASW5wdXQoKSB0b29sYmFyOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGxpY2Vuc2VLZXk6IHN0cmluZztcclxuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNvbXBvbmVudEZvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJlcG9ydDogRmxleG1vbnN0ZXIuUmVwb3J0IHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGdsb2JhbDogRmxleG1vbnN0ZXIuUmVwb3J0O1xyXG4gIEBJbnB1dCgpIGN1c3RvbWl6ZUFQSVJlcXVlc3Q6IChyZXF1ZXN0OiBPYmplY3QpID0+IE9iamVjdDtcclxuICBASW5wdXQoKSBjdXN0b21pemVDZWxsOiAoY2VsbDogRmxleG1vbnN0ZXIuQ2VsbEJ1aWxkZXIsIGRhdGE6IEZsZXhtb25zdGVyLkNlbGxEYXRhKSA9PiB2b2lkO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWl6ZUNvbnRleHRNZW51OiAoY2VsbDogRmxleG1vbnN0ZXIuQ29udGV4dE1lbnVJdGVtW10sIGRhdGE6IEZsZXhtb25zdGVyLkNlbGxEYXRhIHwgRmxleG1vbnN0ZXIuQ2hhcnREYXRhLCB2aWV3VHlwZTogc3RyaW5nKSA9PiBGbGV4bW9uc3Rlci5Db250ZXh0TWVudUl0ZW1bXTtcclxuICAvLyBldmVudHNcclxuICBAT3V0cHV0KCkgY2VsbGNsaWNrOiBFdmVudEVtaXR0ZXI8RmxleG1vbnN0ZXIuQ2VsbERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBjZWxsZG91YmxlY2xpY2s6IEV2ZW50RW1pdHRlcjxGbGV4bW9uc3Rlci5DZWxsRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNoYXJ0Y2xpY2s6IEV2ZW50RW1pdHRlcjxGbGV4bW9uc3Rlci5DaGFydERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkYXRhZXJyb3I6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkYXRhZmlsZWNhbmNlbGxlZDogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRhdGFsb2FkZWQ6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkYXRhY2hhbmdlZDogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGZpZWxkc2xpc3RjbG9zZTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGZpZWxkc2xpc3RvcGVuOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZmlsdGVyY2xvc2U6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBmaWx0ZXJvcGVuOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZHJpbGx0aHJvdWdob3BlbjogRXZlbnRFbWl0dGVyPEZsZXhtb25zdGVyLkNlbGxEYXRhIHwgRmxleG1vbnN0ZXIuQ2hhcnREYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZHJpbGx0aHJvdWdoY2xvc2U6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBmdWxsc2NyZWVuOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbG9hZGluZ2RhdGE6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBsb2FkaW5nbG9jYWxpemF0aW9uOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbG9hZGluZ29sYXBzdHJ1Y3R1cmU6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBsb2FkaW5ncmVwb3J0ZmlsZTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGxvY2FsaXphdGlvbmVycm9yOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbG9jYWxpemF0aW9ubG9hZGVkOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb2xhcHN0cnVjdHVyZWVycm9yOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb2xhcHN0cnVjdHVyZWxvYWRlZDogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9wZW5pbmdyZXBvcnRmaWxlOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcXVlcnljb21wbGV0ZTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHF1ZXJ5ZXJyb3I6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPEZsZXhtb25zdGVyLlBpdm90PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVwb3J0Y2hhbmdlOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVwb3J0Y29tcGxldGU6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZXBvcnRmaWxlY2FuY2VsbGVkOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVwb3J0ZmlsZWVycm9yOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVwb3J0ZmlsZWxvYWRlZDogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJ1bm5pbmdxdWVyeTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHVwZGF0ZTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGJlZm9yZXRvb2xiYXJjcmVhdGVkOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYmVmb3JlZ3JpZGRyYXc6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBhZnRlcmdyaWRkcmF3OiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYWZ0ZXJjaGFydGRyYXc6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8vIGFwaVxyXG4gIHB1YmxpYyBmbGV4bW9uc3RlcjogRmxleG1vbnN0ZXIuUGl2b3Q7XHJcbiAgLy8gcHJpdmF0ZVxyXG4gIHByaXZhdGUgcm9vdDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLnJvb3QgPSA8SFRNTEVsZW1lbnQ+ZWwubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5mbGV4bW9uc3RlciA9IHdpbmRvd1snRmxleG1vbnN0ZXInXSh7XHJcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5yb290LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZtLW5nLXdyYXBwZXInKVswXSxcclxuICAgICAgY29tcG9uZW50Rm9sZGVyOiB0aGlzLmNvbXBvbmVudEZvbGRlcixcclxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhcixcclxuICAgICAgbGljZW5zZUtleTogdGhpcy5saWNlbnNlS2V5LFxyXG4gICAgICByZXBvcnQ6IHRoaXMucmVwb3J0LFxyXG4gICAgICBnbG9iYWw6IHRoaXMuZ2xvYmFsLFxyXG4gICAgICBjdXN0b21pemVBUElSZXF1ZXN0OiB0aGlzLmN1c3RvbWl6ZUFQSVJlcXVlc3QsXHJcbiAgICAgIGN1c3RvbWl6ZUNlbGw6IHRoaXMuY3VzdG9taXplQ2VsbCxcclxuICAgICAgY3VzdG9taXplQ29udGV4dE1lbnU6IHRoaXMuY3VzdG9taXplQ29udGV4dE1lbnUsXHJcbiAgICAgIGNlbGxjbGljazogKGNlbGw6IEZsZXhtb25zdGVyLkNlbGxEYXRhKSA9PiB0aGlzLmNlbGxjbGljay5uZXh0KGNlbGwpLFxyXG4gICAgICBjZWxsZG91YmxlY2xpY2s6IChjZWxsOiBGbGV4bW9uc3Rlci5DZWxsRGF0YSkgPT4gdGhpcy5jZWxsZG91YmxlY2xpY2submV4dChjZWxsKSxcclxuICAgICAgY2hhcnRjbGljazogKGV2ZW50OiBGbGV4bW9uc3Rlci5DaGFydERhdGEpID0+IHRoaXMuY2hhcnRjbGljay5uZXh0KGV2ZW50KSxcclxuICAgICAgZGF0YWNoYW5nZWQ6IChldmVudDogT2JqZWN0KSA9PiB0aGlzLmRhdGFjaGFuZ2VkLm5leHQoZXZlbnQpLFxyXG4gICAgICBkYXRhZXJyb3I6IChldmVudDogT2JqZWN0KSA9PiB0aGlzLmRhdGFlcnJvci5uZXh0KGV2ZW50KSxcclxuICAgICAgZGF0YWZpbGVjYW5jZWxsZWQ6ICgpID0+IHRoaXMuZGF0YWZpbGVjYW5jZWxsZWQubmV4dCgpLFxyXG4gICAgICBkYXRhbG9hZGVkOiAoKSA9PiB0aGlzLmRhdGFsb2FkZWQubmV4dCgpLFxyXG4gICAgICBmaWVsZHNsaXN0Y2xvc2U6ICgpID0+IHRoaXMuZmllbGRzbGlzdGNsb3NlLm5leHQoKSxcclxuICAgICAgZmllbGRzbGlzdG9wZW46ICgpID0+IHRoaXMuZmllbGRzbGlzdG9wZW4ubmV4dCgpLFxyXG4gICAgICBmaWx0ZXJjbG9zZTogKCkgPT4gdGhpcy5maWx0ZXJjbG9zZS5uZXh0KCksXHJcbiAgICAgIGZpbHRlcm9wZW46ICgpID0+IHRoaXMuZmlsdGVyb3Blbi5uZXh0KCksXHJcbiAgICAgIGRyaWxsdGhyb3VnaG9wZW46IChjZWxsOiBGbGV4bW9uc3Rlci5DZWxsRGF0YSB8IEZsZXhtb25zdGVyLkNoYXJ0RGF0YSkgPT4gdGhpcy5kcmlsbHRocm91Z2hvcGVuLm5leHQoY2VsbCksXHJcbiAgICAgIGRyaWxsdGhyb3VnaGNsb3NlOiAoKSA9PiB0aGlzLmRyaWxsdGhyb3VnaGNsb3NlLm5leHQoKSxcclxuICAgICAgbG9hZGluZ2RhdGE6ICgpID0+IHRoaXMubG9hZGluZ2RhdGEubmV4dCgpLFxyXG4gICAgICBsb2FkaW5nbG9jYWxpemF0aW9uOiAoKSA9PiB0aGlzLmxvYWRpbmdsb2NhbGl6YXRpb24ubmV4dCgpLFxyXG4gICAgICBsb2FkaW5nb2xhcHN0cnVjdHVyZTogKCkgPT4gdGhpcy5sb2FkaW5nb2xhcHN0cnVjdHVyZS5uZXh0KCksXHJcbiAgICAgIGxvYWRpbmdyZXBvcnRmaWxlOiAoKSA9PiB0aGlzLmxvYWRpbmdyZXBvcnRmaWxlLm5leHQoKSxcclxuICAgICAgbG9jYWxpemF0aW9uZXJyb3I6ICgpID0+IHRoaXMubG9jYWxpemF0aW9uZXJyb3IubmV4dCgpLFxyXG4gICAgICBsb2NhbGl6YXRpb25sb2FkZWQ6ICgpID0+IHRoaXMubG9jYWxpemF0aW9ubG9hZGVkLm5leHQoKSxcclxuICAgICAgb2xhcHN0cnVjdHVyZWVycm9yOiAoKSA9PiB0aGlzLm9sYXBzdHJ1Y3R1cmVlcnJvci5uZXh0KCksXHJcbiAgICAgIG9sYXBzdHJ1Y3R1cmVsb2FkZWQ6ICgpID0+IHRoaXMub2xhcHN0cnVjdHVyZWxvYWRlZC5uZXh0KCksXHJcbiAgICAgIG9wZW5pbmdyZXBvcnRmaWxlOiAoKSA9PiB0aGlzLm9wZW5pbmdyZXBvcnRmaWxlLm5leHQoKSxcclxuICAgICAgcXVlcnljb21wbGV0ZTogKCkgPT4gdGhpcy5xdWVyeWNvbXBsZXRlLm5leHQoKSxcclxuICAgICAgcXVlcnllcnJvcjogKCkgPT4gdGhpcy5xdWVyeWVycm9yLm5leHQoKSxcclxuICAgICAgcmVhZHk6ICgpID0+IHRoaXMucmVhZHkubmV4dCh0aGlzLmZsZXhtb25zdGVyKSxcclxuICAgICAgcmVwb3J0Y2hhbmdlOiAoKSA9PiB0aGlzLnJlcG9ydGNoYW5nZS5uZXh0KCksXHJcbiAgICAgIHJlcG9ydGNvbXBsZXRlOiAoKSA9PiB0aGlzLnJlcG9ydGNvbXBsZXRlLm5leHQoKSxcclxuICAgICAgcmVwb3J0ZmlsZWxvYWRlZDogKCkgPT4gdGhpcy5yZXBvcnRmaWxlbG9hZGVkLm5leHQoKSxcclxuICAgICAgcmVwb3J0ZmlsZWNhbmNlbGxlZDogKCkgPT4gdGhpcy5yZXBvcnRmaWxlY2FuY2VsbGVkLm5leHQoKSxcclxuICAgICAgcmVwb3J0ZmlsZWVycm9yOiAoKSA9PiB0aGlzLnJlcG9ydGZpbGVlcnJvci5uZXh0KCksXHJcbiAgICAgIHJ1bm5pbmdxdWVyeTogKCkgPT4gdGhpcy5ydW5uaW5ncXVlcnkubmV4dCgpLFxyXG4gICAgICB1cGRhdGU6ICgpID0+IHRoaXMudXBkYXRlLm5leHQoKSxcclxuICAgICAgYmVmb3JldG9vbGJhcmNyZWF0ZWQ6ICh0b29sYmFyOiBPYmplY3QpID0+IHRoaXMuYmVmb3JldG9vbGJhcmNyZWF0ZWQubmV4dCh0b29sYmFyKSxcclxuICAgICAgYmVmb3JlZ3JpZGRyYXc6IChldmVudDogT2JqZWN0KSA9PiB0aGlzLmJlZm9yZWdyaWRkcmF3Lm5leHQoZXZlbnQpLFxyXG4gICAgICBhZnRlcmdyaWRkcmF3OiAoZXZlbnQ6IE9iamVjdCkgPT4gdGhpcy5hZnRlcmdyaWRkcmF3Lm5leHQoZXZlbnQpLFxyXG4gICAgICBhZnRlcmNoYXJ0ZHJhdzogKCkgPT4gdGhpcy5hZnRlcmNoYXJ0ZHJhdy5uZXh0KClcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGbGV4bW9uc3RlclBpdm90IH0gZnJvbSAnLi9mbGV4bW9uc3Rlci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0ZsZXhtb25zdGVyUGl2b3RdLFxyXG4gIGV4cG9ydHM6IFtGbGV4bW9uc3RlclBpdm90XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmxleG1vbnN0ZXJQaXZvdE1vZHVsZSB7IH1cclxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIkVsZW1lbnRSZWYiLCJJbnB1dCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUE4REUsMEJBQVksRUFBYzs7WUExQ2hCLGNBQVMsR0FBdUMsSUFBSUEsaUJBQVksRUFBRSxDQUFDO1lBQ25FLG9CQUFlLEdBQXVDLElBQUlBLGlCQUFZLEVBQUUsQ0FBQztZQUN6RSxlQUFVLEdBQXdDLElBQUlBLGlCQUFZLEVBQUUsQ0FBQztZQUNyRSxjQUFTLEdBQXlCLElBQUlBLGlCQUFZLEVBQUUsQ0FBQztZQUNyRCxzQkFBaUIsR0FBeUIsSUFBSUEsaUJBQVksRUFBRSxDQUFDO1lBQzdELGVBQVUsR0FBeUIsSUFBSUEsaUJBQVksRUFBRSxDQUFDO1lBQ3RELGdCQUFXLEdBQXlCLElBQUlBLGlCQUFZLEVBQUUsQ0FBQztZQUN2RCxvQkFBZSxHQUF5QixJQUFJQSxpQkFBWSxFQUFFLENBQUM7WUFDM0QsbUJBQWMsR0FBeUIsSUFBSUEsaUJBQVksRUFBRSxDQUFDO1lBQzFELGdCQUFXLEdBQXlCLElBQUlBLGlCQUFZLEVBQUUsQ0FBQztZQUN2RCxlQUFVLEdBQXlCLElBQUlBLGlCQUFZLEVBQUUsQ0FBQztZQUN0RCxxQkFBZ0IsR0FBK0QsSUFBSUEsaUJBQVksRUFBRSxDQUFDO1lBQ2xHLHNCQUFpQixHQUF5QixJQUFJQSxpQkFBWSxFQUFFLENBQUM7WUFDN0QsZUFBVSxHQUF5QixJQUFJQSxpQkFB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