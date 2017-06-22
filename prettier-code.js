if( false ){ foo() }

const f = function fn(a,b,c) { let g = 5, f = 6; return a + b + c }

const array = ['first', 'second', 'third', 'fourth']; const object = {}

const arrow = ()=>({})

const veryVeryVeryLongVariableName = [{ array, object, f, fn, foo, hello, arrow}, { array, object, f, fn, foo, hello, arrow }];

    function a(){
        if ( true == false ) {
                return;
        } else {
              'a';
        }
    };


// JSX stuff
    function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <div><Welcome name="Sara" /><Welcome name="Cahal" /><Welcome name="Edite" /><Welcome name="Marta" /></div>;
}