import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  const mockKey = 'key';
  const mockValue = [{ name: 'qwqw' }, { name: 'wqwq' }];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('SHOULD be created WHEN the service is instantiated', () => {
    expect(service).toBeTruthy();
  });

  it('SHOULD save the Array in the local storage WHEN saveArray is called', () => {
    service.saveArray(mockKey, mockValue);

    expect(localStorage.getItem(mockKey)).toBe(JSON.stringify(mockValue));
  });

  it("SHOULD return an empty array WHEN loadArray is called and the key doesn't exist", () => {
    expect(service.loadArray(mockKey)).toEqual([]);
  });

  it('SHOULD return the array from the local storage WHEN loadArray is called and the key exists', () => {
    localStorage.setItem(mockKey, JSON.stringify(mockValue));
    expect(service.loadArray(mockKey)).toEqual(mockValue);
  });

  it('SHOULD remove the item from the local storage WHEN remove is called', () => {
    localStorage.setItem(mockKey, JSON.stringify(mockValue));
    service.remove(mockKey);

    expect(localStorage.getItem(mockKey)).toBeNull();
  });
});
