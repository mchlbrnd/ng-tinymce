import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinymceEditorDirective } from './tinymce-editor.directive';
import { TinymceEditorSettingsService } from './tinymce-editor-settings.service';
export var NgTinymceModule = (function () {
    function NgTinymceModule() {
    }
    NgTinymceModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
//# sourceMappingURL=ng-tinymce.module.js.map