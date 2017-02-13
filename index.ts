import 'tinymce/tinymce.js';
import 'tinymce/themes/modern/theme.js';
import 'tinymce/themes/inlite/theme.js';

import { NgTinymceModule } from './src/ng-tinymce.module';
import { TinymceEditorDirective } from './src/tinymce-editor.directive';
import { TinymceEditorSettingsService } from './src/tinymce-editor-settings.service';

export { NgTinymceModule, TinymceEditorSettingsService, TinymceEditorDirective };
