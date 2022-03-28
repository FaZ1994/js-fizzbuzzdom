// creo container nel DOM

const cardCont = document.getElementById("cardCont");
const row = document.createElement("div");
row.setAttribute("class", "row g-3");
cardCont.append(row);

const title = document.createElement('h1');
title.setAttribute('class', 'title text-center text-white  my-5');
title.innerHTML = 'FizzBuzzDOM';
row.append(title);


// stampo i numeri da 1 a 100

const maxNum = 100;

for (let n = 1; n <= maxNum; n++) {
  const col = document.createElement("div");
  col.setAttribute("class", " col-2");
  const boxCard = document.createElement("div");
  boxCard.setAttribute("class", "boxCard");

  // Per i numeri che sono sia multipli di 3 che di 5 stampo "FizzBuzz"
  if (n % 3 === 0 && n % 5 === 0) {
    boxCard.innerHTML = "FizzBuzz";
    boxCard.setAttribute("class", "boxCard FizzBuzzColor");
  } // Per i multipli di 3 stampo "Fizz”
  else if (n % 3 === 0) {
    boxCard.innerHTML = "Fizz";
    boxCard.setAttribute("class", "boxCard FizzColor");
  } // Per i multipli di 5 stampo "Buzz"
  else if (n % 5 === 0) {
    boxCard.innerHTML = "Buzz";
    boxCard.setAttribute("class", "boxCard BuzzColor");
  } else {
    boxCard.innerHTML = n;
  }

  col.append(boxCard);
  row.append(col);
}
