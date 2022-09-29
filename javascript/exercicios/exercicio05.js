/* Baseado no Array de Livros por categoria abaixo, faça os seguintes desafios

  * Contar o número de categorias e o número de livros em cada category
  * Contar o número de autores
  * Mostar livros do Augusto Cury
  * Transformar a função acima em uma função que ira rece o nme do autor
  e devolver os livros desse autor.

  */


const booksByCategory = [
    {

    category: "Riqueza",
    books: [
        {
            title: "Os segredos da mente milionária",
            author: "T. Harv Eker",
        },
        {
            title: "O homem mais rico da Babilônia",
            author: "George S. Clason",
        },
        {
            title: "Pai rico Pai Pobre",
            author: "Robert T. Kiyosaki",
        },
    ],
},

{

    category: "Inteligência Emocional",
    books: [
        {
            title: "Você é insubstituivel",
            author: "Augusto Cury",
        },
        {
            title: "Ansiedade - Como enfrentar o mal do século",
            author: "Augusto Cury",
        },
        {
            title: "Os 7 hábitos das pessoas altamente eficazes",
            author: "Stephen R. Covey",
        },

    ],
},

]

const totalCategories = booksByCategory.length
console.log(totalCategories);
for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)

}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
       for(let book of category.books) {
        if(authors.indexOf(book.author) == -1) {
            authors.push(book.author)
        }
    }
}

console.log("Total de autores: ", authors.length)

}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do author ${author}: ${books.join(", ")}`)
}

booksOfAuthor('George S. Clason');