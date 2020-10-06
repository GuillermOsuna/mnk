<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
// use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    /**
     * login users
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        // if ($request->has(['email', 'password'])) {
        // }
        $user = User::where('email', $request->input('email'))->where('password', $request->input('password'))->pluck('api_token')->first();
        return response($user, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->filtro != '') {
            $users = User::where('name', 'like', '%' . $request->input('filtro') . '%')->take(10)->get();   
            return response($users, 200); 
        }

        $users = User::all();
        return response($users, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = User::create($request->all());
        return response($user, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        if ($request->password != 'default') {
            $user = User::where('id', $request->input('id'))
            ->update(['name' => $request->input('name'), 'email' => $request->input('email'), 'password' => $request->input('password')]);

            return response($user, 200);
        }

        $user = User::where('id', $request->input('id'))
        ->update(['name' => $request->input('name'), 'email' => $request->input('email')]);

        return response($user, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        $user = User::where('id',$request->input('id'))->delete();
        return response($user, 200);
    }
}
