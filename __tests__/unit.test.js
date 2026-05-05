// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('valid phone number XXX-XXX-XXXX', () => {
    expect(isPhoneNumber("818-877-6534")).toBe(true);
});

test('valid phone number (XXX) XXX-XXXX', () => {
    expect(isPhoneNumber("(818) 877-6534")).toBe(true);
});

test('invalid phone number XXXXXXXXXX', () => {
    expect(isPhoneNumber("8188776534")).toBe(false);
});

test('invalid phone number (nonnumbers)', () => {
    expect(isPhoneNumber("81s.e8765")).toBe(false);
});

test('valid email long', () => {
    expect(isEmail("whoisatthisschool@organization.edu")).toBe(true);
});

test('valid email short', () => {
    expect(isEmail("a@out.eu")).toBe(true);
});

test('invalid email (letters)', () => {
    expect(isEmail("8!something@67.u")).toBe(false);
});

test('invalid email (formatting)', () => {
    expect(isEmail("validemail.com")).toBe(false);
});

test('valid password (characters)', () => {
    expect(isStrongPassword("abcDE12_3")).toBe(true);
});

test('valid password (long)', () => {
    expect(isStrongPassword("abcde123456789")).toBe(true);
});

test('invalid password (characters)', () => {
    expect(isStrongPassword("ab?????edu$5")).toBe(false);
});

test('invalid password (short)', () => {
    expect(isStrongPassword("1a")).toBe(false);
});

test('valid date (short)', () => {
    expect(isDate("1/19/1996")).toBe(true);
});

test('valid date (long)', () => {
    expect(isDate("12/19/1996")).toBe(true);
});

test('invalid date (format)', () => {
    expect(isDate("12-19-1996")).toBe(false);
});

test('invalid date (length)', () => {
    expect(isDate("/129/199866")).toBe(false);
});

test('valid hex (long)', () => {
    expect(isHexColor("#1a2b3c")).toBe(true);
});

test('valid hex (short)', () => {
    expect(isHexColor("123")).toBe(true);
});

test('invalid hex (numbers)', () => {
    expect(isHexColor("#gggggg")).toBe(false);
});

test('invalid hex (length)', () => {
    expect(isHexColor("#12345")).toBe(false);
});

