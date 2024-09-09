namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transacao extends Model
{
    use HasFactory;

    protected $fillable = ['descricao', 'valor', 'tipo_transacao_id', 'data'];

    public function tipoTransacao()
    {
        return $this->belongsTo(TipoTransacao::class);
    }
}
