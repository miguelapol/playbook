const Ajolonauta=require('./../app/Ajolonauta');
//aqui haremos test de la clase ajolonauta
describe('Pruebasd de unidad', function() {
    test('Caso prueba 1 creacion de objeto', function() {
        const woopa=new Ajolonauta('Miguel');

        expect(woopa.name).toBe('Miguel');
    });
});



