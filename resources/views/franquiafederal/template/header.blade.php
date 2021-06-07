<!--Navbar Start-->
<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
        <!-- LOGO -->
        <a class="navbar-brand logo" href="{{ route('main.index') }}">
            <img src="{{asset("assets/images/logo/logofranquia.png")}}" alt="">
        </a>

        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
                <!--Nav Links-->
                <li class="nav-item">
                    <a href="{{ route('main.index') }}" class="nav-link" >Home</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" data-scroll-nav="1" >A Empresa</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" data-scroll-nav="2" >Franquia</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" data-scroll-nav="3">Ramos de atuação</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" data-scroll-nav="4">Downloads</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link active" data-scroll-nav="5">Valores</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" data-scroll-nav="6">Contato</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" data-scroll-nav="7">Perguntas Frequentes</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!--Navbar End-->
