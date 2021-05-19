let cajero = {
  balance: 0,
  retirar: function () {
    let monto = parseInt(document.getElementById("retiro_id").value);
    if (monto <= this.balance) {
      this.balance -= monto;
      this.paintBalance();
      document.getElementById("retiro_id").value = "";
    } else alert("No tienes fondos suficientes");
  },
  ingresar: function () {
    this.balance += parseInt(document.getElementById("ingresar_id").value);
    this.paintBalance();
    alert("Saldo agregado correctamente");
    document.getElementById("ingresar_id").value = "";
  },
  paintBalance: function () {
    let b = this.balance.toFixed(2);
    document.getElementById("balance_id").innerHTML = "$" + b;
  },
};

cajero.paintBalance();
