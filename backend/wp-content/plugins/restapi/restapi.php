<?php
/**
 * Plugin Name: Rest API
 * Plugin URI: http://localhost:8000
 * Description: REST API
 * Version: 1.0
 * Author: Yuryjin
 * Author URI: http://localhost:8000
 */

 $priorityIndex = 2;

class Route {
    public string $namespace;
    public array $routes;
    public array $middlewares = [];

    
    function __construct($namespace, $routes, $middlewares) {
        $this->namespace = $namespace;
        $this->routes = $routes;
        $this->middlewares = $middlewares;
        $this->middlewareKeys = array_keys($this->middlewares);
        global $priorityIndex;

        add_action('rest_api_init', function() {
            register_rest_route($this->namespace, array_key_first($this->routes), reset($this->routes));
        });

        for ($i=0; $i < count($this->middlewareKeys); $i++) { 
            add_filter( $this->middlewareKeys[$i], $this->middlewares[$this->middlewareKeys[$i]], $priorityIndex, 5 );
            $priorityIndex = $priorityIndex + 1;
        }
    }
}

$route1 = new Route(
    'foobar',
    ['posts/(?P<text>[a-zA-Z0-9-]+)/(?P<num1>\d+)/(?P<num2>\d+)' => [
        'methods' => 'GET',
        'callback' => function ($text) {
            // var_dump($text); 
            return $text['text'] . ' ' . strval($text['num1']) . ' ' . strval($text['num2']); 
        }
    ]],
    [
        'bb' => function ($result, $rest_server, $request) {
            $queryParams = $request->get_query_params();
            $content = $queryParams['rest_route'];
            $arrayOfVars = preg_split("#/#", $content);
            $namespaceAndAction = $arrayOfVars[1].'/'.$arrayOfVars[2];
            if ($namespaceAndAction == 'foobar/posts') {
                $text = $arrayOfVars[3];
                $num1 = intval($arrayOfVars[4]);
                $num2 = intval($arrayOfVars[5]);
                if ($num1 === 5) {
                    return strval($num1+2).'sadf '.$text.' '.strval($num2);
                }
            }
        },
        'aa' => function ($result, $rest_server, $request) {
            $queryParams = $request->get_query_params();
            $content = $queryParams['rest_route'];
            $arrayOfVars = preg_split("#/#", $content);
            $namespaceAndAction = $arrayOfVars[1].'/'.$arrayOfVars[2];
            if ($namespaceAndAction == 'foobar/posts') {
                $text = $arrayOfVars[3];
                $num1 = intval($arrayOfVars[4]);
                $num2 = intval($arrayOfVars[5]);
                if ($num1 === 3) {
                    return strval($num1-1).'sadf '.$text.' '.strval($num2);
                }
            }
        },
        'rest_pre_dispatch' => function ($result, $rest_server, $request) {
            $queryParams = $request->get_query_params();
            $content = $queryParams['rest_route'];
            $arrayOfVars = preg_split("#/#", $content);
            $namespaceAndAction = $arrayOfVars[1].'/'.$arrayOfVars[2];
            if ($namespaceAndAction == 'foobar/posts') {
                $text = $arrayOfVars[3];
                $num1 = intval($arrayOfVars[4]);
                $num2 = intval($arrayOfVars[5]);
                if ($num1 === 7) {
                    return strval($num1+55).'sadfsadfasdf '.$text.' '.strval($num2);
                }
            }
        }
    ]

);

$route2 = new Route(
    'test',
    ['yards/(?P<text>[a-zA-Z0-9-]+)/(?P<num1>\d+)' => [
        'methods' => 'GET',
        'callback' => function ($text) { return strval($text['num1']) . ' yards in ' . strval($text['text']); }
    ]],
    [
        'aa' => function ($result, $rest_server, $request) {
            $queryParams = $request->get_query_params();
            $content = $queryParams['rest_route'];
            $arrayOfVars = preg_split("#/#", $content);
            $namespaceAndAction = $arrayOfVars[1].'/'.$arrayOfVars[2];
            if ($namespaceAndAction == 'test/yards') {
                $text = $arrayOfVars[3];
                $num1 = intval($arrayOfVars[4]);
                if ($num1 === 3) {
                    return strval($num1-1).'sadf '.$text;
                }
            }
        },
        'rest_pre_dispatch' => function ($result, $rest_server, $request) {
            $queryParams = $request->get_query_params();
            $content = $queryParams['rest_route'];
            $arrayOfVars = preg_split("#/#", $content);
            $text = $arrayOfVars[3];
            $namespaceAndAction = $arrayOfVars[1].'/'.$arrayOfVars[2];
            if ($namespaceAndAction == 'test/yards' and $text == 'metres') {
                $num1 = intval($arrayOfVars[4]);
                return strval($num1) . ' metres';
            }
        }
    ]
);

$route3 = new Route(
    'test1',
    ['tests/(?P<text>[a-zA-Z0-9-]+)/(?P<num1>\d+)' => [
        'methods' => 'GET',
        'callback' => function ($text) { return strval($text['num1']).$text['text']; }
    ]],
    [
        'aa' => function ($result, $rest_server, $request) {
            $queryParams = $request->get_query_params();
            $content = $queryParams['rest_route'];
            $arrayOfVars = preg_split("#/#", $content);
            $namespaceAndAction = $arrayOfVars[1].'/'.$arrayOfVars[2];
            if ($namespaceAndAction == 'test1/tests') {
                $text = $arrayOfVars[3];
                $num1 = intval($arrayOfVars[4]);
                if ($num1 === 3) {
                    return strval($num1-1).'sadfqqqqqqqqqqqqq '.$text;
                }
            }
        },
        'rest_pre_dispatch' => function ($result, $rest_server, $request) {
            $queryParams = $request->get_query_params();
            $content = $queryParams['rest_route'];
            $arrayOfVars = preg_split("#/#", $content);
            $text = $arrayOfVars[3];
            $namespaceAndAction = $arrayOfVars[1].'/'.$arrayOfVars[2];
            if ($namespaceAndAction == 'test1/tests' and $text == 'idddqd') {
                $num1 = intval($arrayOfVars[4]);
                return $text.strval($num1);
            }
        }
    ]
);

$route4 = new Route(
    'math',
    ['equation/(?P<num1>\d+)/(?P<num2>\d+)/(?P<text>[a-zA-Z0-9-]+)' => [
        'methods' => 'GET',
        'callback' => function ($text) { return strval($text['num1']+$text['num2']); }
    ]],
    [
        'aa' => function ($result, $rest_server, $request) {
            $queryParams = $request->get_query_params();
            $content = $queryParams['rest_route'];
            $arrayOfVars = preg_split("#/#", $content);
            $namespaceAndAction = $arrayOfVars[1].'/'.$arrayOfVars[2];
            if ($namespaceAndAction == 'math/equation') {
                $text = $arrayOfVars[3];
                $num1 = intval($arrayOfVars[4]);
                if ($num1 === 3) {
                    return strval($num1-1).'sadfqqqqqqqqqqqqq '.$text;
                }
            }
        },
        'rest_pre_dispatch' => function ($result, $rest_server, $request) {
            $queryParams = $request->get_query_params();
            $content = $queryParams['rest_route'];
            $arrayOfVars = preg_split("#/#", $content);
            $text = $arrayOfVars[5];
            $namespaceAndAction = $arrayOfVars[1].'/'.$arrayOfVars[2];
            if ($namespaceAndAction == 'math/equation' and $text == 'minus') {
                $num1 = intval($arrayOfVars[3]);
                $num2 = intval($arrayOfVars[4]);
                return strval($num1-$num2);
            }
        }
    ]
);
