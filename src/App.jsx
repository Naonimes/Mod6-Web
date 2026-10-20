

function App() {
  var N = 61
  var jam = 9

  const styleObject = {
    color: "black",
    fontSize: "30px"
  }

  return (
    <>
        <h1 className='judul' style={styleObject}> Kantin Rani </h1>
        <p> {jam < 12 ? "Selamat Pagi" : "Selamat Siang"} </p>
        <p> Saldo awal kartu kantin : Rp {N*1000} </p>
        <button disabled>Bayar</button>
    </>
  )
}

export default App
