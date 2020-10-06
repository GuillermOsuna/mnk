<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Categories;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique;
            $table->string('description');
            $table->unsignedBigInteger('created_by');
            $table->foreign('created_by')->references('id')->on('users');
            $table->unsignedBigInteger('updated_by');
            $table->foreign('updated_by')->references('id')->on('users');

            $table->timestamps();
        });

        $category = new Categories;
        $category->id = 0;
        $category->name = 'Sin categoría';
        $category->description = 'Categoría sin asignar';
        $category->created_by = 1;
        $category->updated_by = 1;
        $category->save();

        $category2 = new Categories;
        $category2->name = 'Thriller';
        $category2->description = 'Categoría nueva';
        $category2->created_by = 1;
        $category2->updated_by = 1;
        $category2->save();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
}
