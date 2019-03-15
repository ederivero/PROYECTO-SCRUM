using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Collections;

namespace ConsoleApp6
{
    class Program
    {
        private static string url = "C:\\Users\\Tecsup\\Desktop\\BD.txt";
        static Cuenta cuenta;
        static void Main(string[] args)
        {
            Ingresar();
        }

        static void Ingresar()
        {
            int cont = 0;
            string[] strLineas = File.ReadAllLines(url);
            string[] campos;
            int x = 1;
            do
            {
                Console.WriteLine("Ingrese su DNI");
                string dni = Console.ReadLine();
                foreach (string linea in strLineas)
                {
                    campos = linea.Split(",".ToCharArray());
                    Cliente cliente;
                    if (campos[0] == dni)
                    {
                        cliente = new Cliente(campos[0], campos[1], campos[2]);
                        cuenta = new Cuenta(campos[3], double.Parse(campos[4]), char.Parse(campos[5]));
                        Menu();
                        cont++;
                        x = 0;
                        
                    }

                }
                if (cont == 0)
                {
                    Console.WriteLine("-----------------------------");
                    Console.WriteLine("-   USUARIO NO REGISTRADO   -");
                    Console.WriteLine("-----------------------------");
                }
            } while (x == 1);

        }
        static void Menu()
        {
            int opc;
            do
            {
                Console.WriteLine("-----------------------------");
                Console.WriteLine("-  CAJERO AUTOMATICO PANBIF -");
                Console.WriteLine("-----------------------------");
                Console.WriteLine("1. CONSULTAR SALDO");
                Console.WriteLine("2. DEPOSITAR");
                Console.WriteLine("3. RETIRAR");
                Console.WriteLine("4. TRANSFERENCIA");
                Console.WriteLine("0. TERMINAR");
                Console.WriteLine("INGRESE OPCION");
                opc = int.Parse(Console.ReadLine());

                switch (opc)
                {
                    case 1:
                        cuenta.Consultar();
                        break;
                    case 2:
                        cuenta.Depositar();
                        break;
                    case 3:
                        cuenta.Retirar();
                        break;
                    case 4:
                        cuenta.transferencia();
                        break;
                    case 0:

                        break;
                    default:
                        Console.WriteLine("-  OPCION INCORRECTA  -");
                        break;

                }
            } while (opc > 4 || opc <= 0);

        }
    }
    
}
