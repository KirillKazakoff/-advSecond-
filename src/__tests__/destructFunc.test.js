import destruct from "../js/destructFunc";

const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 1,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 2,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
}

const expected1 = [2, 'Нокаутирующий удар', 'http://...', 'не указан'];

test('destruct without description', () => {
    const result = destruct(character.special[1]);
    expect(result).toEqual(expected1);
})

const expected2 = [1, 'Двойной выстрел', 'http://...', 'Двойной выстрел наносит двойной урон'];

test('destruct with description', () => {
    const result = destruct(character.special[0]);
    expect(result).toEqual(expected2);
})