<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('api_token', 60)->nullable()->unique();
            $table->rememberToken();
            $table->timestamps();
        });

        $user = new User;
        $user->id = 0;
        $user->password = 'Nadie';
        $user->email = 'no aplica';
        $user->name = 'Nadie';
        $user->api_token = 'VTQN4FmoYXoeM9gLznusqsOBFFXhzIcvC3iFIE5GCsVoBbabyEDY8rAM8y53';
        $user->save();

        $user = new User;
        $user->password = 'admin';
        $user->email = 'admin@admin.com';
        $user->name = 'admin';
        $user->api_token = 'VTQN4FmoYXoeM9gLznusqsOBFFXhzIcvC3iFIE5GCsVoBbabyEDY8rAM8y5H';
        $user->save();
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
