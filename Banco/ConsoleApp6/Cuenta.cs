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
        static string url = "";
        string _ncuenta;
        double _monto;
        char _moneda;
        int validador = 0;

        public string Ncuenta { get => _ncuenta; set => _ncuenta = value; }
        public double Monto { get => _monto; set => _monto = value; }
        public char Moneda { get => _moneda; set => _moneda = value; }

        public Cuenta(string Ncuenta, double Monto, char Moneda, string url1)
        {
            _ncuenta = Ncuenta;
            _monto = Monto;
            _moneda = Moneda;
            url = url1;
        }

        public void Retirar()
        {
            do
            {
                Console.WriteLine("ingrese una cantidad inferior a {0}", _monto);
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

        public void Retirar(double montito)
        {
            do
            {
                //Console.ReadKey();
                if (montito <= _monto && montito > 0)
                {
                    _monto = _monto - montito;
                    Console.WriteLine($"el monto actual es {_monto}");
                    validador = 1;
                }
                else
                {
                    Console.WriteLine("su saldo total disponible es inferior a  {0}", montito);
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
                    _monto = _monto + cantidad;
                    Console.WriteLine($"Su saldo Actualizado es de : {_monto} con el tipo de moneda: {_moneda}");
                    validador = 1;
                }
                else
                {
                    Console.WriteLine("la cantidad ingresada es invalida");
                }
            } while (validador == 0);
        }
        public void Depositar(double montito)
        {
            do
            {
                if (montito > 0)
                {
                    _monto = _monto + montito;
                    Console.WriteLine($"Su saldo Actualizado es de : {_monto} con el tipo de moneda: {_moneda}");
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



        public double transferencia()
        {
            int cont = 0;
            string[] strLineas = File.ReadAllLines(url);
            //File.Delete(url);
            string[] campos;
            int x = 1;
            Console.WriteLine($"Hola usted a seleccionado la Opcion de Transferencia");
           
            do
            {
                Console.WriteLine($"ingrese el numero de la cuenta a la que va a hacer la transferencia");
                var cuenta2 = (Console.ReadLine());
                int i = 0;
                foreach (string linea in strLineas)
                {
                    campos = linea.Split(",".ToCharArray());
                    if (campos[3] == cuenta2)
                    {
                        do
                        {
                            if (campos[5] == _moneda.ToString())
                            {
                                Console.WriteLine($"La cuenta de destino es una cuenta que pertenece a {campos[1]+" "+campos[2]}");
                                //Console.WriteLine($"ingrese el tipo de  moneda S(soles) o D(dolares)");
                                //var tipod = char.Parse(Console.ReadLine());
                                Console.WriteLine($"ingrese el monto de transferencia");
                                var monto2 = double.Parse(Console.ReadLine());
                                if (monto2 < 1 || monto2>_monto)
                                {
                                    Console.WriteLine("monto ingresado no valido");
                                }
                                else
                                {
                                    campos[4] = (double.Parse(campos[4]) + monto2).ToString(); //nuevo monto cuenta destino
                                    Console.WriteLine("el monto de la cuenta destino es "+campos[4]); 
                                    Retirar(monto2);

                                    Console.WriteLine($"Usted realizo una transferencia a la cuenta {cuenta2}");
                                    Console.WriteLine($"con el monto de {monto2}");
                                    //Console.WriteLine($"con el tipo {tipod}");
                                    validador = 1;
                                    //Guardar(strLineas);
                                }
                                cont++;
                                x = 0;
                                return monto2;
                            }
                            else
                            {
                                Console.WriteLine("Tipos de monedas no coinciden");
                                validador = 1;
                                break;
                            }
                        } while (validador == 0);
                    }
                    i++;
                }
                if (cont == 0)
                {
                    Console.WriteLine("-----------------------------");
                    Console.WriteLine("-   Tarjeta no encontrada   -");
                    Console.WriteLine("-----------------------------");
                }
            } while (x == 1);
            return 0;

        }

        static void Guardar(string[] arreglo)
        {


            try
            {
                StreamWriter sw = new StreamWriter(url, false, Encoding.ASCII);
                
                for (int i = 0; i < arreglo.Length; i++)
                {
                    sw.WriteLine(arreglo[i]);

                }
                sw.Close();

            }
            catch (Exception e)
            {
                Console.WriteLine("Error");

            }
        }
    }
}
