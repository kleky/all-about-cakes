module.exports = {
  name: 'all-about-cakes',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/all-about-cakes',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
