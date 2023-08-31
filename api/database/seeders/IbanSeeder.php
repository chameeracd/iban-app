<?php

namespace Database\Seeders;

use App\Models\Iban;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class IbanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = new User();
//        $user->password = Hash::make('Hbwqej@65');
//        $user->email = 'demo@example.com';
//        $user->name = 'Demo';
//        $user->assignRole('user');
//        $user->save();
        $user->id = 1;

        $ibans = [
            ['number' => 'AL35202111090000000001234567', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'AD1400080001001234567890', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'AT483200000012345864', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'AZ77VTBA00000000001234567890', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'BH02CITI00001077181611', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'BY86AKBB10100000002966000000', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'BR1500000000000010932840814P2', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'BG18RZBB91550123456789', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'CR23015108410026012345', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'HR1723600001101234565', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'CY21002001950000357001234567', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'DJ2110002010010409943020008', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'DO22ACAU00000000000123456789', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'SV43ACAT00000000000000123123', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'EE471000001020145685', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'FK12SC987654321098', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'HU93116000060000000012345676', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'IQ20CBIQ861800101010500', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'IE64IRCE92050112345678', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'IL170108000000012612345', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'IT60X0542811101000000123456', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'KW81CBKU0000000000001234560101', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'LY38021001000000123456789', 'created_by' => $user->id, 'created_at' => Carbon::now()],
            ['number' => 'MU43BOMM0101123456789101000MUR', 'created_by' => $user->id, 'created_at' => Carbon::now()],
        ];

        Iban::insert($ibans);
    }
}
