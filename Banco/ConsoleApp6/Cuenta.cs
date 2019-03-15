using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp6
{
    class Cuenta
    {
        string _ncuenta;
        double _monto;
        char _moneda;

        public string Ncuenta { get => _ncuenta; set => _ncuenta = value; }
        public double Monto { get => _monto; set => _monto = value; }
        public char Moneda { get => _moneda; set => _moneda = value; }

        public Cuenta(string Ncuenta, double Monto , char Moneda )
        {
            _ncuenta = Ncuenta;
            _monto = Monto;
            _moneda = Moneda;
        }

        public void Retirar()
        {
            Console.WriteLine("ingrese el monto que desea retirar");
            double reti = double.Parse(Console.ReadLine());
            //Console.ReadKey();
            if (reti <= _monto)
            {
                _monto = _monto - reti;
                Console.WriteLine($"el monto alctual es {_monto}");
            }
            else
            {
                Console.WriteLine("su saldo total disponible es inferior a  {0}", reti);
                Console.WriteLine("porfabor ingrese una cantidad inferior a {0}", _monto);
            }


        }
        public void Depositar()
        {
            Console.WriteLine("Ingrese la cantidad que depositara a su cuenta");

            Console.WriteLine($">>>>>>>>>{_ncuenta}<<<<<<<<<<<<");
            Console.WriteLine($"que cuenta con {_monto} {_moneda}");

            var cantidad = double.Parse(Console.ReadLine());
            var ultmove = cantidad + _monto;
            Console.WriteLine($"Su saldo Actualizado es de : {ultmove} con el tipo de moneda: {_moneda}");

        }

        public void Consultar()
        {
            Console.WriteLine($"El numero de cuenta : {_ncuenta } ");

            Console.WriteLine($"Su saldo Actual es de  : {_monto} ");

            Console.WriteLine($"Su tipo de moneda es {_moneda} ");

        }
        public void transferencia()
        {
            Console.WriteLine($"Hola usted a seleccionado la Opcion de Transferencia ingrese");
            Console.WriteLine($"1. si desea una transferencia a otra cuenta de nuestro banco");
            Console.WriteLine($"0. si desea una transferencia a otra cuenta de otro banco");
            var op = int.Parse(Console.ReadLine());
            if (op == 1)
            {
                Console.WriteLine($"ingrese el numero de la cuenta a la que va a hacer la transferencia");
                var cuenta2 = (Console.ReadLine());
                Console.WriteLine($"ingrese el monto de transferencia");
                var monto2 = double.Parse(Console.ReadLine());

                Console.WriteLine($"ingrese el tipo de  moneda S(soles) o D(dolares)");
                var tipod = char.Parse(Console.ReadLine());

                Console.WriteLine($"Usted realizo una transferencia a la cuenta{cuenta2}");
                Console.WriteLine($"con el monto de {cuenta2}");
                Console.WriteLine($"con el monto de {tipod}");

            }
            else
            {
                Console.WriteLine($"su opcion no esta dentro del rango");


            }

        }
    }
}
