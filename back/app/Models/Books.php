<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
    use HasFactory;
    protected $fillable = ["name", "author", "borrowed_id", "category_id", "active", "created_by", "updated_by"];
}
