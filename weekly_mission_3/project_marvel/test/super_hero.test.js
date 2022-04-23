//TDD
//escribe el programa
//agrega el codigo que falte
//factorizar el codigo
//se hacen en casos de flujos
const SuperHero=require('../app/SuperHero');
describe('SuperHero', function() {
   test('Prueba de test herore', function() {
        const superHero = new SuperHero('Superman', 'Kryptonite', 'Flying');
        expect(superHero.name).toBe('Superman');
        expect(superHero.planet).toBe('Kryptonite');
        expect(superHero.power).toBe('Flying');
         
   });
});