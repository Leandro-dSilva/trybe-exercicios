const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

// const { name } = product;
// console.log(name); 
// Smart TV Crystal UHD

const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

// Atribuindo nomes às variáveis

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: firstName, b: classAssigned, c: subject } = student;

console.log(firstName); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática


// Passando valores para uma função

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product);
