import { PipePruebaPipe } from './pipe-prueba.pipe';

describe('PipePruebaPipe', () => {
  
  it('crear una instancia de tubería', () => {
    const pipe = new PipePruebaPipe();
    expect(pipe).toBeTruthy();
  });


  it('Verificar pipe con Mayus/minus', () => {
    const pipe = new PipePruebaPipe();

    expect(pipe.transform(['abC','ABcd','aB','gfFDd','sdfABCacb'], 'abc')).toEqual( ['abC','ABcd','sdfABCacb'] );
  });
  

  it('Verificar pipe con Minusculas y array desordenado', () => {
    const pipe = new PipePruebaPipe();

    expect(pipe.transform(['abc','abcd','ab','gfdg','dfgs'], 'ab')).toEqual( ['abc','abcd', 'ab'] );
  });


});
