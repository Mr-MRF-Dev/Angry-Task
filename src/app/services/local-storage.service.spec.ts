import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  afterAll(() => {
    localStorage.clear();
  });

  it('SHOULD be created WHEN the service is instantiated', () => {
    expect(service).toBeTruthy();
  });

  it('SHOULD save the Array in the local storage WHEN saveArray is called', () => {
    const key = 'key';
    const value = [{ name: 'qwqw' }, { name: 'wqwq' }];

    service.saveArray(key, value);

    expect(localStorage.getItem(key)).toBe(JSON.stringify(value));
  });

  it("SHOULD return an empty array WHEN loadArray is called and the key doesn't exist", () => {
    const key = 'key2';

    expect(service.loadArray(key)).toEqual([]);
  });

  it('SHOULD return the array from the local storage WHEN loadArray is called and the key exists', () => {
    const key = 'key3';
    const value = [{ name: 'qwqw' }, { name: 'wqwq' }];

    localStorage.setItem(key, JSON.stringify(value));
    expect(service.loadArray(key)).toEqual(value);
  });

  it('SHOULD remove the item from the local storage WHEN remove is called', () => {
    const key = 'key4';
    const value = [{ name: 'qwqw' }, { name: 'wqwq' }];

    localStorage.setItem(key, JSON.stringify(value));
    service.remove(key);

    expect(localStorage.getItem(key)).toBeNull();
  });
});
