<!DOCTYPE html>
<html lang="pt-BR">
    @includeIf("franquiafederal.template.head")
    <body>
        @includeIf("franquiafederal.template.preloader")
        @includeIf("franquiafederal.template.header")
        @yield("content")
        {{--@includeIf("site.template.google-maps")--}}
        @includeIf("franquiafederal.template.footer")
        @includeIf("franquiafederal.template.javascript")
    </body>
</html>
