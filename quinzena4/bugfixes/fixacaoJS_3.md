ˋˋˋ

function calculaNota(ex, p1, p2) {
  let mediaPond = (ex + (p1 * 2) + (p2 * 3)) / 6
  let nota = 0

  if (mediaPond >= 9) {
    nota = "A"
  } else if (mediaPond < 9 && mediaPond >= 7.5) {
    nota = "B"
  } else if (mediaPond < 7.5 && mediaPond >= 6) {
    nota = "C"
  } else {
    nota = "D"
  }
return nota
}

ˋˋˋ
