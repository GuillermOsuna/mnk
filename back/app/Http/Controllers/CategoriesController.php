<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->filtro != '') {
            $categories = Categories::where('name', 'like', '%' . $request->input('filtro') . '%')->take(10)->get();   
            return response($categories, 200); 
        }

        $categories = Categories::all();
        return response($categories, 200);
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
        $category = Categories::create($request->all());
        return response($category, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function show(Categories $categories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function edit(Categories $categories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user = $request->user()->id;
        $category = Categories::where('id', $request->input('id'))
        ->update(['name' => $request->input('name'), 
        'description' => $request->input('description'), 
        'updated_by' => $user]);

        return response($category, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        $category = Categories::where('id',$request->input('id'))->delete();
        return response($category, 200);
    }
}
