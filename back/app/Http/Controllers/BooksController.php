<?php

namespace App\Http\Controllers;

use App\Models\Books;
use Illuminate\Http\Request;

class BooksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->filtro != '') { 

            $books = Books::select('books.id', 'books.name', 'books.author', 'categories.id as categoryId', 'categories.name as categoryName', 'users.id as borrowedId', 'users.name as borrowedName', 'books.active')->
                join('categories', 'books.category_id', '=', 'categories.id')->
                join('users', 'books.borrowed_id', '=', 'users.id')->
                where('books.name', 'like', '%' . $request->input('filtro') . '%')->
                take(10)
                ->get();

            return response($books, 200); 
        }

        $books = Books::select('books.id', 'books.name', 'books.author', 'categories.id as categoryId', 'categories.name as categoryName', 'users.id as borrowedId', 'users.name as borrowedName', 'books.active')->
        join('categories', 'books.category_id', '=', 'categories.id')->
        join('users', 'books.borrowed_id', '=', 'users.id')->
        get();

        return response($books, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = $request->user()->id;
        $request->request->add(['created_by' => $user]);
        $request->request->add(['updated_by' => $user]);
        $category = Books::create($request->all());
        return response($category, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Categories  $books
     * @return \Illuminate\Http\Response
     */
    public function show(Categories $books)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Categories  $books
     * @return \Illuminate\Http\Response
     */
    public function edit(Categories $books)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Categories  $books
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user = $request->user()->id;
        $category = Books::where('id', $request->input('id'))
        ->update(['name' => $request->input('name'), 
        'author' => $request->input('author'), 
        'borrowed_id' => $request->input('borrowed_id'), 
        'category_id' => $request->input('category_id'), 
        'active' => $request->input('active'), 
        'updated_by' => $user]);

        return response($category, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        $category = Books::where('id',$request->input('id'))->delete();
        return response($category, 200);
    }
}
