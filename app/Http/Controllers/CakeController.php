<?php

namespace App\Http\Controllers;

use App\Models\Cake;
use Illuminate\Http\Request;

class CakeController extends Controller
{
    public function index()
    {
        return response()->json(Cake::all());
    }
}
