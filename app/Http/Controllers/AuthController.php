<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller implements HasMiddleware
{

    public function __construct()
    {
        $this->middleware();
    }

    public static function middleware(): array
    {
        return [
            new Middleware(middleware: 'auth:api', except: ['login', 'register'])
        ];
    }
    public function login(LoginRequest $request)
    {
        $validatedData = $request->validated();
        if (!$token = Auth::attempt($validatedData)) {
            return response()->json([
                'status' => 'error',
                'message' => __('auth.not_found')
            ], 404);
        }

        $user = Auth::user();
        $cookie = cookie('jwt', $token, secure: true, httpOnly: true);
        return response()->json([
            'status' => 'success',
            'user' => $user
        ])->withCookie($cookie);
    }


    public function register(RegisterRequest $request)
    {
        $validatedData = $request->validated();

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
        ]);


        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => __('auth.registered'),
            'token' => $token,
        ]);
    }
}
