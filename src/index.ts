import bookStore from './models/bookStore';
import {book}from './models/book'

const Library=new bookStore();
const libro=new book (`Julio César`, `William Shakespeare`, `traedia`, `aleman`, `66.790`, `tapa blanda`, 9780133555387, `Recrea la conspiración en contra del dictador romano, su homicidio y sus secuelas, así como su lugar de desarrollo: la antigua Roma`, `nuevo`, `buscaLibre`, `1623` , `Penguin Random House`, 105, `12.5 x 19 cm`, `50 kg`, true);

Library.addbook(libro);
Library.Listbooks();


