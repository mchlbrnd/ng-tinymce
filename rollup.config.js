export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ng-tinymce.umd.js',
  sourceMap: true,
  format: 'umd',
  moduleName: 'ng-tinymce',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.core',
    '@angular/forms': 'ng.forms'
  },
  paths: [
    'node_modules/tinymce/tinymce.js',
    'node_modules/tinymce/themes/modern/theme.js',
    'node_modules/tinymce/themes/inlite/theme.js',
    'node_modules/tinymce/plugins/link/plugin.js',
    'node_modules/tinymce/plugins/paste/plugin.js'
  ]
}
