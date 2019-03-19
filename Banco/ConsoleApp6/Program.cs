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
        public static string url = "C:/Users/Tecsup/Downloads/bd.txt";
        static Cuenta cuenta;
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese su DNI");
            string dni = Console.ReadLine();
            Program p = new Program();
            p.Ingresar(dni,0);
        }
        static void Guardar(string[] arreglo)
        {
            File.Delete(url);
            if (arreglo.Length > 1)
            {
                using (StreamWriter writer = File.CreateText(url))
                {
                    for (int i = 0; i < arreglo.Length; i++)
                    {
                        writer.WriteLine(arreglo[i]);

                    }
                }
            }
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

        public void Ingresar(string dni,int bandera)
        {
            int cont = 0;
            string[] strLineas = File.ReadAllLines(url);
            
            string[] campos;
            int x = 1;
            do
            {
                
                int i = 0;
                foreach (string linea in strLineas)
                {
                    campos = linea.Split(",".ToCharArray());
                    Cliente cliente;
                    if (campos[0] == dni)
                    {

                        cliente = new Cliente(campos[0], campos[1], campos[2]);
                        cuenta = new Cuenta(campos[3], double.Parse(campos[4]), char.Parse(campos[5]),url);
                        if (bandera == 0)
                        {
                            Menu();

                        }
                        else
                        {
                            double a = cuenta.transferencia();
                            cuenta.Depositar(a);

                            //Guardar(strLineas);
                        }
                        strLineas[i] = campos[0] + "," + campos[1] + "," + campos[2] + "," + campos[3] + "," + cuenta.Monto + "," + campos[5];
                        cont++;
                        x = 0;
                        
                    }
                    i++;

                }
                if (cont == 0)
                {
                    Console.WriteLine("-----------------------------");
                    Console.WriteLine("-   USUARIO NO REGISTRADO   -");
                    Console.WriteLine("-----------------------------");
                }
            } while (x == 1);

            Guardar(strLineas);

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
            } while (opc != 0);

        }
    }
    
}
