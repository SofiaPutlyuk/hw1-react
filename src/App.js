import './App.css';
const name = "Sophia"
const message = "Ласкаво просимо до сайту!"
const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYCBMLVmF_jTDejX3q5Ox6tbGGVjWAyk0E6g&s";
const alt = "cute hamster"
const favouriteSite = {
  name: "znanija",
  url: "https://znanija.com/"
}
const num1 = 50;
const num2 = 50;
const result = num1 + num2
const colors = ["Червоний", "Синій", "Зелений"]
function App() {
  return (
    <div >
      <h1>{name}</h1>
      <p>{message}</p>
      <img src={image} alt={alt} />
      <a href={favouriteSite.url}>{favouriteSite.name}</a>
      <p>Загалом:{result}</p>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
