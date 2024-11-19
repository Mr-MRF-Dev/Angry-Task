import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  const mockKey = 'key';
  const mockValue = 'hello world!';
  const mockArray = [{ name: 'qwqw' }, { name: 'wqwq' }];

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
    service.saveArray(mockKey, mockArray);

    expect(localStorage.getItem(mockKey)).toBe(JSON.stringify(mockArray));
  });

  it("SHOULD return an empty array WHEN loadArray is called and the key doesn't exist", () => {
    expect(service.loadArray(mockKey)).toEqual([]);
  });

  it('SHOULD return the array from the local storage WHEN loadArray is called and the key exists', () => {
    localStorage.setItem(mockKey, JSON.stringify(mockArray));
    expect(service.loadArray(mockKey)).toEqual(mockArray);
  });

  it('SHOULD remove the item from the local storage WHEN remove is called', () => {
    localStorage.setItem(mockKey, JSON.stringify(mockArray));
    service.remove(mockKey);

    expect(localStorage.getItem(mockKey)).toBeNull();
  });

  it('SHOULD save a item in the local storage WHEN set is called', () => {
    service.set(mockKey, mockValue);
    expect(localStorage.getItem(mockKey)).toBe(mockValue);
  });

  it('SHOULD return the item from the local storage WHEN get is called', () => {
    localStorage.setItem(mockKey, mockValue);
    expect(service.get(mockKey)).toBe(mockValue);
  });
});
