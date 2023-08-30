<?php

namespace App\Http\Controllers;

use App\Http\Requests\IbanRequest;
use App\Http\Resources\IbanResource;
use App\Models\Iban;

class IbanController extends Controller
{
    public function save(IbanRequest $request)
    {
        $data = $request->validated();

        $iban = Iban::create([
            'number' => $data['number'],
        ]);

        return response()->json([
            'iban' => new IbanResource($iban),
        ]);
    }

    /**
     * paginated list of saved ibans
     * @return mixed
     */
    public function index()
    {
        return Iban::paginate(2);
    }
}
