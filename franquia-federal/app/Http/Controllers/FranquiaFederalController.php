<?php

namespace App\Http\Controllers;

use App\Http\Controllers\FranquiaFederalController;

class FranquiaFederalController extends Controller
{

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $title = "Franquia Federal";
        return view("franquiafederal.main.index", compact("title"));
    }

}


