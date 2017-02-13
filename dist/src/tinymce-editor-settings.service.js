import { Injectable } from '@angular/core';
export var TinymceEditorSettingsService = (function () {
    function TinymceEditorSettingsService() {
        this.skin_url = '/assets/tinymce/skins/lightgray';
        this.toolbar = 'undo redo | styleselect | bold italic | link image';
        this.schema = 'html5';
    }
    TinymceEditorSettingsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TinymceEditorSettingsService.ctorParameters = function () { return []; };
    return TinymceEditorSettingsService;
}());
//# sourceMappingURL=tinymce-editor-settings.service.js.map