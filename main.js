function categorizeNumber(input) {
  /**
   * TODO:
   * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
   * Dengan ketentuan sebagai berikut:
   * 1. Jika input bukan number, bangkitkan (throw) error.
   * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
   * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
   * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
   * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
   * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
   */

  let category;
  function isprime(n) {
    if (n <= 1) {
      return false;
    } else if (n === 2) {
      return true;
    } else if (n % 2 === 0) {
      return false;
    } else {
      for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
          return false;
        }
      }
    }
    return true;
  }
  if (typeof input !== "number" && Number.isInteger(input) === false) {
    throw new Error("Pastikan inputnya adalah angka " + typeof input);
  } else if (isprime(input)) {
    category = "Prima";
  } else if (input < 0) {
    category = "Negatif";
  } else if (input % 2 === 0 && input !== 0) {
    category = "Genap";
  } else if (input % 2 !== 0 && input !== 0) {
    category = "Ganjil";
  } else if (input === 0) {
    category = "Nol";
  }

  document.getElementById("output").innerHTML = "Kategori: " + category;
}

try {
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = parseInt(document.getElementById('inputNumber').value, 10);
    categorizeNumber(number);
  });
} catch (error) {
  console.log(error.message, number);
} // Output: "Input harus berupa bilangan bulat"
