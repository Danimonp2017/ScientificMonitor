class País extends Eloquent {};
class Ciudad extends Eloquent {
  protected $collection = 'ciudades';
}
class Institución extends Eloquent {
  protected $collection = 'instituciones';
};
class Facultad extends Eloquent {
  protected $collection = 'facultades';
};
class Revista extends Eloquent {};
class Autor extends Eloquent {
  protected $collection = 'autores';
};

Schema::create('países', function($collection) {
  $collection -> integer('id');
  $collection -> string('nombre');
  $collection -> string('moneda_local');
  $collection -> double('tc_dólar');
  $collection -> json('población');
  $collection -> json('PIB');
  $collection -> json('Gasto_C_T');
  $collection -> json('Gasto_I_D');
  $collection -> json('patentes');
  $collection -> json('publicaciones');
});

Schema::create('ciudades', function($collection) {
  $collection -> integer('id');
  $collection -> integer('id_país');
  $collection -> string('nombre');
  $collection -> json('población');
  $collection -> json('PIB');
});

Schema::create('instituciones', function($collection) {
  $collection -> integer('id');
  $collection -> integer('id_país');
  $collection -> integer('id_ciudad');
  $collection -> string('nombre');
  $collection -> integer('estudiantes');
  $collection -> string('tipo');
  $collection -> double('tasa_empleabilidad');
  $collection -> boolean('ISO_9001');
  $collection -> json('patentes');
  $collection -> json('publicaciones');
});

Schema::create('facultades', function($collection){
  $collection -> integer('id');
  $collection -> integer('id_país');
  $collection -> integer('id_ciudad');
  $collection -> integer('id_IE');
  $collection -> string('nombre');
  $collection -> integer('estudiantes');
  $collection -> json('docentes');
  $collection -> double('docentes_planta');
  $collection -> json('programas');
  $collection -> json('programas_acreditados');
  $collection -> json('grupos_investigación');
});

Schema::create('revistas', function($collection){
  $collection -> integer('id');
  $collection -> integer('id_país');
  $collection -> integer('id_ciudad');
  $collection -> integer('id_IE');
  $collection -> integer('id_facultad');
  $collection -> string('nombre');
  $collection -> string('área');
  $collection -> json('publicaciones');
  $collection -> json('autores');
});

Schema::create('autores', function($collection){
  $collection -> integer('id');
  $collection -> integer('id_país');
  $collection -> integer('id_ciudad');
  $collection -> integer('id_IE');
  $collection -> integer('id_facultad');
  $collection -> string('nombre');
  $collection -> string('área');
  $collection -> json('publicaciones');
});
