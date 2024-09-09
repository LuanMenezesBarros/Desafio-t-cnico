namespace App\Http\Controllers;

use App\Models\Transacao;
use Illuminate\Http\Request;

class TransacaoController extends Controller
{
    public function index()
    {
        return Transacao::with('tipoTransacao')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'descricao' => 'required|string',
            'valor' => 'required|numeric',
            'tipo_transacao_id' => 'required|exists:tipo_transacao,id',
            'data' => 'required|date',
        ]);

        return Transacao::create($validated);
    }

    public function update(Request $request, Transacao $transacao)
    {
        $validated = $request->validate([
            'descricao' => 'required|string',
            'valor' => 'required|numeric',
            'tipo_transacao_id' => 'required|exists:tipo_transacao,id',
            'data' => 'required|date',
        ]);

        $transacao->update($validated);

        return $transacao;
    }

    public function destroy(Transacao $transacao)
    {
        $transacao->delete();

        return response()->noContent();
    }
}
