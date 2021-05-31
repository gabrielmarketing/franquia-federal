<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FranquiaFederalController extends Controller
{

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('franquiafederal.home.index');
    }


}


