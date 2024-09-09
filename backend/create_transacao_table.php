use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransacaoTable extends Migration
{
    public function up()
    {
        Schema::create('transacao', function (Blueprint $table) {
            $table->id();
            $table->string('descricao');
            $table->decimal('valor', 10, 2);
            $table->foreignId('tipo_transacao_id')->constrained('tipo_transacao');
            $table->date('data');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('transacao');
    }
}
