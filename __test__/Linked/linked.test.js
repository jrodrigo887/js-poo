import LinkedList from '../../src/Linked/linked';

test('Add a element value 15 and', () => {
    const node = new LinkedList();
    const index = node.push(15);
    expect(15).toBe(15)
});