1 - Components
                /header
                /postCard -> botón que lleve a postView
                
2 - Rutas - Pages
                /home
                    /selectCategory -> filtrar por categoría ... como los jobs de usuarios
                    /postSearch -> búsqueda por título ... como los nombres de usuarios
                    Se muestran los posts ordenádos alfabéticamente por título ... igual que usuarios
                /postView (/post/:idPost) -> botón que lleve a postCard
                /postNew
                    /form -> campos tal y como son en el IPost, todos son obligatorios, meter validadores, botón submit

2 - Interfaces:
            - IPost
                - Id: string
                - Título: string
                - Texto: string
                - Autor: string
                - Imagen: string
                - Fecha: date
                - Categoría: string (Playa, Montaña, Ciudad, Rural, Festivales)
               
3 - Servicio - postsService
                - Array 1 [] -> entrada de posts ✅
                - Array 2 [] -> detalle de categorías (como el de jobs de usuarios) ✅
                - Métodos:
                    - getAll() ->  recupera los posts ✅
                    - getById(id) -> recupera por Id ✅
                    - getByCategory(cat) -> recupera por categoría✅
                    - getAllCategories() -> recupera todas las categorías✅
                    - insert(Post) -> agrega posts desde el formulario ✅



PASOS:

- Instalar Bootstrap y modificar archivos angular.json ✅
- Crear en Shell ✅
    - Componentes ✅
    - Interface ✅
    - Servicios ✅
- Implementar las rutas ✅
- Vigilar el config ✅
- Definir la interfaz ✅
- Crear los arrays del Servicio (DB) ✅
- Definir el servicio ✅
- Crear HTML/TS app principal ✅
- Crear HTML/TS header ✅
- Crear HTML/TS home (sin Selector ni Buscador)✅
- Crear HTML/TS postView ✅
- Crear HTML/TS postCard ✅
- Crear Selector en Hom ✅
- Crear Buscador en Home ✅
- Crear HTML/TS New ... Form ✅
- Crear validadores del Form ✅


FINETUNNING:

OTROS:

- Hacer que los 2 filtros funcionen a la vez

- Ordenar los posts que se muestran, de más cercano a más nuevo en el tiempo

- Que al añadir un post en la parte de categorías no se pueda escribir, que sea un desplegable

- QUe al añadir un post, no de error cuando clicko en ver el post, ya que no detecta el id de la parte dinámica de la URL




                   
        
