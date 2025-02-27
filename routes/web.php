<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
});


Route::get('/', function () {
    return Inertia::render('Main/Dashboard');
});

require __DIR__ . '/api.php';
