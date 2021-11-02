```

function calculaPrecoTotal(quantidade) {
let custoTotalCompra = 0 

  if (quantidade < 12) {
    custoTotalCompra = quantidade * 1.30
  } else {
    custoTotalCompra = quantidade * 1.00
  }
  
  return custoTotalCompra
}

```