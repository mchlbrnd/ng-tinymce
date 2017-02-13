import { Injectable } from '@angular/core';

@Injectable()
export class TinymceEditorSettingsService {
  skin_url = '/assets/tinymce/skins/lightgray';
  toolbar = 'undo redo | styleselect | bold italic | link image';
  plugins = 'link paste';
  schema = 'html5';
}

