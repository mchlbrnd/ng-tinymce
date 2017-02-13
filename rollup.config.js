export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ng-tinymce.umd.js',
  sourceMap: true,
  format: 'umd',
  moduleName: 'ng-tinymce',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/forms': 'ng.forms'
  }
}
