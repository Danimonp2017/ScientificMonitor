use Eloquent\Model as Eloquent;

class País extends Eloquent {}

Schema::create('países', function($collection))
{
  $collection -> string('nombre');
  $collection -> obj('población');
  $collection -> obj('PIB');
  $collection -> obj('Gasto_C_T');
  $collection -> obj('Gasto_I_D');
}
