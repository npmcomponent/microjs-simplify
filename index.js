try {
  exports['2D'] = require('microjs-simplify-2D');
  exports['3D'] = require('microjs-simplify-3D');
} catch (ex) {
  exports['2D'] = require('simplify-2d');
  exports['3D'] = require('simplify-3d');
}