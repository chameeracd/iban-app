<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateAdmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-admin {password}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create Admin User';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $user = new User();
        $user->password = Hash::make($this->argument('password'));
        $user->email = 'admin@example.com';
        $user->name = 'Admin';
        $user->assignRole('admin');
        $user->save();
    }
}
