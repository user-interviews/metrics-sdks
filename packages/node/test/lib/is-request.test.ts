import { expect } from 'chai';
import MockReq from 'mock-req';

import isRequest from '../../src/lib/is-request';

describe('isRequest', function () {
  it('should detect `text/plain', function () {
    const req = new MockReq({
      method: 'post',
      url: '/anything',
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'content-length': 1337,
      },
    });

    req.write('buster');
    req.end();

    expect(isRequest(req, 'text/*')).to.be.true;
  });

  it('should detect vendored json', function () {
    const req = new MockReq({
      method: 'post',
      url: '/anything',
      headers: {
        'content-type': 'application/vnd.api+json',
        'content-length': 1337,
      },
    });

    req.write(JSON.stringify(['buster']));
    req.end();

    expect(isRequest(req, 'json')).to.be.false; // `type-is` doesn't support identifying vendored JSON with this.
    expect(isRequest(req, '+json')).to.be.true;
  });

  it('should detect `application/x-www-form-urlencoded`', function () {
    const payload = new URLSearchParams();
    payload.append('user', 'buster');

    const req = new MockReq({
      method: 'post',
      url: '/anything',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'content-length': 1337,
      },
    });

    req.write(payload.toString());
    req.end();

    expect(isRequest(req, 'application/x-www-form-urlencoded')).to.be.true;
  });
});
