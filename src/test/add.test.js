
const add = (a, b) => a + b;
const generateGreeeting = (name = "Anonymous") => `Hello ${name}`

test('should add two number', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should name mike', () => {
    const result = generateGreeeting("mike");
    expect(result).toBe("Hello mike");
})

test('should be anonymous', () => {
    const result = generateGreeeting();
    expect(result).toBe("Hello Anonymous");
});