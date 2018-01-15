import { expect } from 'chai';
import spotify from '../src/Spotify';

describe('Spotify.spec.js', () => {
  it('should be an object', () => {
    expect(spotify).to.been
  });

  it('should have search methods', () => {
    expect(spotify.search).to.exist;
  });

  it('should have search album methods', () => {
    expect(spotify.album).to.exist;
  });
});