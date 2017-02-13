(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/core/src/metadata/directives'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/core/src/metadata/directives', '@angular/forms'], factory) :
    (factory((global['ng-tinymce'] = global['ng-tinymce'] || {}),global.ng.core,global._angular_common,global._angular_core_src_metadata_directives,global._angular_forms));
}(this, (function (exports,_angular_core,_angular_common,_angular_core_src_metadata_directives,_angular_forms) { 'use strict';

var TinymceEditorSettingsService = (function () {
    function TinymceEditorSettingsService() {
        this.skin_url = '/assets/tinymce/skins/lightgray';
        this.toolbar = 'undo redo | styleselect | bold italic | link image';
        this.plugins = 'link paste';
        this.schema = 'html5';
    }
    TinymceEditorSettingsService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    TinymceEditorSettingsService.ctorParameters = function () { return []; };
    return TinymceEditorSettingsService;
}());

var TinymceEditorDirective = (function () {
    function TinymceEditorDirective(_elementRef, _changeDetectorRef, _providedSettings) {
        var _this = this;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._providedSettings = _providedSettings;
        this._tinymceEditorSettings = {};
        this._onInitialized = new _angular_core.EventEmitter();
        this._tinymceOnChange = function () {
            _this._value = _this._tinymceEditor.getContent();
            _this._onChange(_this._value);
            _this._changeDetectorRef.detectChanges();
        };
        this._tinymceInitInstanceCallback = function (editor) {
            _this._tinymceEditor = editor;
            _this._tinymceEditor.on('KeyUp', _this._tinymceOnChange);
            _this._tinymceEditor.on('PastePostProcess', _this._tinymceOnChange);
            _this._tinymceEditor.on('Change', _this._tinymceOnChange);
            _this.writeValue(_this._value);
            _this._onInitialized.emit(_this._tinymceEditor);
        };
    }
    Object.defineProperty(TinymceEditorDirective.prototype, "editor", {
        get: function () {
            return this._tinymceEditor;
        },
        enumerable: true,
        configurable: true
    });
    TinymceEditorDirective.prototype.ngOnInit = function () {
        var settings = {
            init_instance_callback: this._tinymceInitInstanceCallback,
            target: this._elementRef.nativeElement
        };
        settings = Object.assign({}, this._providedSettings, this._tinymceEditorSettings, settings);
        tinymce.init(settings);
    };
    TinymceEditorDirective.prototype.ngOnDestroy = function () {
        tinymce.remove(this._tinymceEditor);
    };
    TinymceEditorDirective.prototype.writeValue = function (value) {
        if (value) {
            this._value = value;
            if (this._tinymceEditor) {
                this._tinymceEditor.setContent(this._value, { format: 'raw' });
            }
        }
    };
    TinymceEditorDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    TinymceEditorDirective.prototype.registerOnTouched = function (fn) { };
    TinymceEditorDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: 'p[tinymce], div[tinymce], textarea[tinymce]',
                    exportAs: 'tinymce',
                    providers: [
                        {
                            provide: _angular_forms.NG_VALUE_ACCESSOR,
                            useExisting: _angular_core.forwardRef(function () { return TinymceEditorDirective; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    TinymceEditorDirective.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
        { type: _angular_core.ChangeDetectorRef, },
        { type: TinymceEditorSettingsService, },
    ]; };
    TinymceEditorDirective.propDecorators = {
        '_tinymceEditorId': [{ type: _angular_core_src_metadata_directives.Input, args: ['tinymce',] },],
        '_tinymceEditorSettings': [{ type: _angular_core_src_metadata_directives.Input, args: ['settings',] },],
        '_onInitialized': [{ type: _angular_core.Output, args: ['onInitialized',] },],
    };
    return TinymceEditorDirective;
}());

var NgTinymceModule = (function () {
    function NgTinymceModule() {
    }
    NgTinymceModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule
                    ],
                    declarations: [
                        TinymceEditorDirective
                    ],
                    providers: [
                        TinymceEditorSettingsService
                    ],
                    exports: [
                        TinymceEditorDirective
                    ]
                },] },
    ];
    /** @nocollapse */
    NgTinymceModule.ctorParameters = function () { return []; };
    return NgTinymceModule;
}());

exports.NgTinymceModule = NgTinymceModule;
exports.TinymceEditorSettingsService = TinymceEditorSettingsService;
exports.TinymceEditorDirective = TinymceEditorDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
