import { ElementRef, ChangeDetectorRef } from '@angular/core';
import { TinymceEditorSettingsService } from './tinymce-editor-settings.service';
import { ControlValueAccessor } from '@angular/forms';
export declare class TinymceEditorDirective implements ControlValueAccessor {
    private _elementRef;
    private _changeDetectorRef;
    private _providedSettings;
    private _tinymceEditor;
    private _value;
    private _onChange;
    private _tinymceEditorId;
    private _tinymceEditorSettings;
    private _onInitialized;
    readonly editor: any;
    constructor(_elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef, _providedSettings: TinymceEditorSettingsService);
    private _tinymceOnChange;
    private _tinymceInitInstanceCallback;
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(value: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
