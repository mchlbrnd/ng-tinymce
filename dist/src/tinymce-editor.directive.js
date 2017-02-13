import { Directive, ElementRef, forwardRef, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { TinymceEditorSettingsService } from './tinymce-editor-settings.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var TinymceEditorDirective = (function () {
    function TinymceEditorDirective(_elementRef, _changeDetectorRef, _providedSettings) {
        var _this = this;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._providedSettings = _providedSettings;
        this._tinymceEditorSettings = {};
        this._onInitialized = new EventEmitter();
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
        { type: Directive, args: [{
                    selector: 'p[tinymce], div[tinymce], textarea[tinymce]',
                    exportAs: 'tinymce',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TinymceEditorDirective; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    TinymceEditorDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: ChangeDetectorRef, },
        { type: TinymceEditorSettingsService, },
    ]; };
    TinymceEditorDirective.propDecorators = {
        '_tinymceEditorId': [{ type: Input, args: ['tinymce',] },],
        '_tinymceEditorSettings': [{ type: Input, args: ['settings',] },],
        '_onInitialized': [{ type: Output, args: ['onInitialized',] },],
    };
    return TinymceEditorDirective;
}());
//# sourceMappingURL=tinymce-editor.directive.js.map