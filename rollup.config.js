export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ng-tinymce.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng-tinymce',
  globals: {
    '@angular/core': 'ng.core',
  }
}
