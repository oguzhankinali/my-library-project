const cardBody1 = document.querySelectorAll(".card-body")[0];
const cardBody2 = document.querySelectorAll(".card-body")[1];
const bookNameInput = document.querySelector("#bookName")
const authorNameInput = document.querySelector("#authorName")
const filterBook = document.querySelector("#bookSearch")
const books = document.querySelector("#book-list");
const clearAllBooks = document.querySelector("#clearAllBooks");
const form = document.querySelector("#book-form")


form.addEventListener("submit", addBook);
cardBody2.addEventListener("click", deleteBook)
clearAllBooks.addEventListener("click", clearAll)
filterBook.addEventListener("input", filter)




function filter(e) {
    const currentBooks = document.querySelectorAll(".list-group-item");
    const searchValue = e.target.value.toLowerCase().trim();

    currentBooks.forEach(function (book) {

        const bookTitle = book.textContent.toLowerCase().trim();

        if (bookTitle.includes(searchValue)) {
            book.style.setProperty("display", "flex");
        } else {
            book.style.setProperty("display", "none", "important");
        }

    })


}


function clearAll(e) {
    e.preventDefault();
    books.innerHTML = "";
    /*
    HTML dünyasında bir elemanın innerHTML özelliği, o kutunun iki kapısı arasındaki tüm içeriği (yani içindeki tüm yazıları ve alt etiketleri) temsil eder. yani burada innerHTML yi boş yapınca li'ler siliniyor.
    */
}
function deleteBook(e) {
    e.preventDefault();
    console.log(e.target)
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove()
    }
}
function addBook(e) {
    e.preventDefault();
    if (bookNameInput.value.trim() === "") {
        showAlert("danger", "Kitap adı boş olamaz.");

    }
    else if (authorNameInput.value.trim() === "") {
        showAlert("warning", "Yazar ismi eklemeyi unuttunuz.")
    }
    else {
        const book = document.createElement("li");
        books.appendChild(book);
        book.className = `list-group-item d-flex justify-content-between mb-2 border rounded`
        book.innerHTML = `${bookNameInput.value + " - " + authorNameInput.value} <a href="#"><i class="fa fa-remove"></i></a>`
        authorNameInput.value = "";
        bookNameInput.value = "";
        showAlert("success", "Kitap başarıyla eklendi.")

    }
}
function showAlert(type, message) {
    const div = document.createElement("div");
    div.className = `alert alert-${type} mt-3`;
    div.textContent = message;
    cardBody1.appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 2500);
}