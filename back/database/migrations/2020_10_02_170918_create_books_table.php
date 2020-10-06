<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Books;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique;
            $table->string('author');
            $table->foreignId('category_id')->nullable()->constrained();
            $table->unsignedBigInteger('borrowed_id')->nullable();
            $table->foreign('borrowed_id')->nullable()->references('id')->on('users');
            $table->unsignedBigInteger('created_by');
            $table->foreign('created_by')->references('id')->on('users');
            $table->unsignedBigInteger('updated_by');
            $table->foreign('updated_by')->references('id')->on('users');
            $table->boolean('active');
            $table->timestamps();
        });

        $book = new Books;
        $book->name = 'El Psicoanalista';
        $book->author = 'John Katzenbach';
        $book->category_id = 1;
        $book->borrowed_id = 0;
        $book->active = false;
        $book->created_by = 1;
        $book->updated_by = 1;
        $book->save();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
