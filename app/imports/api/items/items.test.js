import { Meteor } from 'meteor/meteor';
import { expect } from 'chai';
import { Items } from './Items';

/* eslint prefer-arrow-callback: "off", no-unused-expressions: "off" */
/* eslint-env mocha */

if (Meteor.isServer) {
  describe('ItemsCollection', function testSuite() {
    it('Check that a new item can be defined and retrieved', function test() {
      const itemName = `test-itemName-${new Date().getTime()}`;
      const image = `test-image-${new Date().getTime()}`;
      const condition = `test-condition-${new Date().getTime()}`;
      const description = `test-description-${new Date().getTime()}`;
      const price = `test-price-${new Date().getTime()}`;
      const owner = `test-owner-${new Date().getTime()}`;
      Items.collection.insert({ itemName, image, condition, description, price, owner });
      expect(Items.collection.findOne({ itemName, image, condition, description, price, owner }).itemName).to.equal(itemName);
    });
  });
}
