use Eloquent\Model as Eloquent;

class País extends Eloquent {}
class IE extends Eloquent {
  protected $collection = 'IIEE';
}

Schema::create('países', function($collection) {
  $collection -> string('nombre');
  $collection -> string('moneda_local');
  $collection -> double('nombre');
  $collection -> json('población');
  $collection -> json('PIB');
  $collection -> json('Gasto_C_T');
  $collection -> json('Gasto_I_D');
});

Schema::create('IIEE', function($collection) {
  $collection -> string('nombre');
  $collection -> integer('estudiantes');
  $collection -> boolean('privada');
  $collection -> double('tasa_empleabilidad');
  $collection -> boolean('ISO_9001');
});

Schema::create('facultades', function($collection){
  $collection -> string('nombre');
  $collection -> integer('estudiantes');
  $collection -> json('docentes');
  $collection -> double('docentes_planta');
  $collection -> json('programas');
  $collection -> json('programas_acreditados');
  $collection -> json('grupos_investigación');
});
