using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp6
{
    class Cuenta
    {
        public static string url = "C:/Users/user/Documents/github/BD.txt";
        string _ncuenta;
        double _monto;
        char _moneda;
        int validador = 0;

        public string Ncuenta { get => _ncuenta; set => _ncuenta = value; }
        public double Monto { get => _monto; set => _monto = value; }
        public char Moneda { get => _moneda; set => _moneda = value; }

        public Cuenta(string Ncuenta, double Monto, char Moneda)
        {
            _ncuenta = Ncuenta;
            _monto = Monto;
            _moneda = Moneda;
        }

        public void Retirar()
        {
            do
            {
                Console.WriteLine("ingrese el monto que desea retirar");
                double reti = double.Parse(Console.ReadLine());
                //Console.ReadKey();
                if (reti <= _monto && reti > 0)
                {
                    _monto = _monto - reti;
                    Console.WriteLine($"el monto actual es {_monto}");
                    validador = 1;
                }
                else
                {
                    Console.WriteLine("su saldo total disponible es inferior a  {0}", reti);
                    Console.WriteLine("por favor ingrese una cantidad inferior a {0}", _monto);
                }
            } while (validador == 0);
        }
        public void Depositar()
        {
            do
            {
                Console.WriteLine("Ingrese la cantidad que depositara a su cuenta");
                Console.WriteLine($">>>>>>>>>{_ncuenta}<<<<<<<<<<<<");
                Console.WriteLine($"que cuenta con {_monto} {_moneda}");
                var cantidad = double.Parse(Console.ReadLine());
                if (cantidad > 0)
                {
                    var ultmove = cantidad + _monto;
                    Console.WriteLine($"Su saldo Actualizado es de : {ultmove} con el tipo de moneda: {_moneda}");
                    validador = 1;
                }
                else
                {
                    Console.WriteLine("la cantidad ingresada es invalida");
                }
            } while (validador == 0);
        }

        public void Consultar()
        {
            Console.WriteLine($"El numero de cuenta : {_ncuenta } ");

            Console.WriteLine($"Su saldo Actual es de  : {_monto} ");

            Console.WriteLine($"Su tipo de moneda es {_moneda} ");

        }
        public void transferencia()
        {
            int cont = 0;
            string[] strLineas = File.ReadAllLines(url);
            string[] campos;
            int x = 1;
            Console.WriteLine($"Hola usted a seleccionado la Opcion de Transferencia ingrese");
            Console.WriteLine($"1. si desea una transferencia a otra cuenta de nuestro banco");
            Console.WriteLine($"0. si desea una transferencia a otra cuenta de otro banco");
            var op = int.Parse(Console.ReadLine());
            if (op == 1)
            {
                do
                {
                    Console.WriteLine($"ingrese el numero de la cuenta a la que va a hacer la transferencia");
                    var cuenta2 = (Console.ReadLine());
                    foreach (string linea in strLineas)
                    {
                        campos = linea.Split(",".ToCharArray());
                        if (campos[0] == cuenta2)
                        {
                            do
                            {
                                Console.WriteLine($"ingrese el tipo de  moneda S(soles) o D(dolares)");
                                var tipod = char.Parse(Console.ReadLine());
                                Console.WriteLine($"ingrese el monto de transferencia");
                                var monto2 = double.Parse(Console.ReadLine());
                                if (monto2 < 1)
                                {
                                    Console.WriteLine("monto ingresado no valido");
                                }
                                else
                                {
                                    Console.WriteLine($"Usted realizo una transferencia a la cuenta {cuenta2}");
                                    Console.WriteLine($"con el monto de {monto2}");
                                    Console.WriteLine($"con el tipo {tipod}");
                                    validador = 1;
                                }
                                cont++;
                                x = 0;
                            } while (validador==0);
                        }
                    }
                    if (cont == 0)
                    {
                        Console.WriteLine("-----------------------------");
                        Console.WriteLine("-   Tarjeta no encontrada   -");
                        Console.WriteLine("-----------------------------");
                    }
                } while (x == 1);
            }
            else
            {
                Console.WriteLine("su opcion no esta dentro del rango");
            }

        }
    }
}
